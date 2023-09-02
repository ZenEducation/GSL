<template>
    <div>
        <NuxtLayout name="zen">
            <SectionMain>
                <SectionTitleLineWithButton :icon="mdiPencil" title="Edit Blog" main>
                    <div
                        class="ml-5 lg:flex flex-col resDis lg:order-1 lg:flex-row lg:items-end lg:justify-end items-center justify-center gap-3">
                        <div v-if="uploadingFile">
                            {{ status }}
                        </div>

                        <button class="bg-red-700 text-white w-24 h-10 rounded" @click="discardBtn">
                            Discard
                        </button>
                        <button class="bg-blue-600 text-white w-24 h-10 rounded" @click="publishBtn">
                            Publish
                        </button>
                        <button class="bg-blue-600 text-white w-24 h-10 rounded" @click="saveReview">
                            Save
                        </button>
                    </div>
                    <BaseButton label="Save" color="info" @click="saveReview" class="lg:hidden" />
                </SectionTitleLineWithButton>
                <CardBox class="mb-6 g:mb-0 lg:col-span-2 xl:col-span-3" if-from @submit.prevent="submit">
                    <PremFormField label="Title" horizontal>
                        <PremFormField horizontal>
                            <PremFormControl placeholder="Blog Title" v-model="titleText" />
                        </PremFormField>
                    </PremFormField>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
                        <div class="flex gap-3 items-center w-full">
                            <label class="block mb-2">Category</label>
                            <VueMultiselect v-model="value" :options="categorySelect" :close-on-select="true"
                                :clear-on-select="false" placeholder="Select one" label="name" track-by="name" />
                            <button v-on:click="handleCreateCategory" class="text-sm w-52">
                                Create Category
                            </button>
                        </div>
                        <div class="flex gap-3 items-center w-full">
                            <label class="block mb-2">Tag</label>
                            <VueMultiselect v-model="taggingSelected" :options="taggingOptions" :multiple="true"
                                :taggable="true" @tag="addTag" tag-placeholder="Add this as a new tag"
                                placeholder="Type to search or add tag" label="name" track-by="name" />
                        </div>
                    </div>
                    <div class="flex" v-if="showCreateCategory">
                        <input v-model="newType" placeholder="Enter Category" class="border border-gray-300 p-2 w-4/5"
                            type="text" />
                        <button @click="addNewType" class="bg-blue-500 text-white px-4 py-2 ml-2 w-1/6">
                            Add Category
                        </button>
                    </div>
                    <PremFormField label="Publish Date" horizontal>
                        <PremFormField horizontal>
                            <input type="date" name="publishDate" id="publishDate" v-model="publishDate" />
                        </PremFormField>
                    </PremFormField>
                    <PremFormField label="Add Image" horizontal>
                        <div class="flex border border-black rounded-md p-4 justify-center items-center gap-4">

                            <div v-if="uploadedFile">
                                <img v-if="uploadedFile.file" width="500" :src="uploadedFile.file.url" alt="Image" />
                                <img v-else width="500" :src="singleBlogImg" alt="Image" />
                            </div>

                            <img v-else src="../../../../assets/images/download.png" alt="Image" />
                            <form>
                                <input type="file" @change="handleFileChange" accept=".jpg, .jpeg, .png" />

                            </form>
                        </div>
                    </PremFormField>
                    <PremFormField label="Content" horizontal>
                        <div class="rounded-md flex flex-col">
                            <div class="">
                                <ClientOnly placeholder="Loading...">
                                    <QuillEditor style="min-height: 30vh" theme="snow" :toolbar="toolbarOptions"
                                        content-type="html" v-model:content="editorContent" ref="quillEditorRef"
                                        @contentChanged="handleContentChanged" />

                                </ClientOnly>


                            </div>

                        </div>
                    </PremFormField>
                </CardBox>
                <div class="order-2 lg:hidden flex flex-col lg:flex-row items-center w-full lg:w-44 gap-3">
                    <button class="bg-green-700 text-white w-full h-10 rounded" @click="approveBtn">Approve</button>
                    <button class="bg-blue-600 text-white w-full h-10 rounded" @click="publishBtn">Publish</button>
                </div>
            </SectionMain>
        </NuxtLayout>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import SectionMain from "@/components/AfterAuth/Sections/SectionMain.vue";
import SectionTitleLineWithButton from "@/components/AfterAuth/Sections/SectionTitleLineWithButton.vue";
import BaseButton from "@/components/AfterAuth/Buttons/BaseButton.vue";
import CardBox from "@/components/AfterAuth/Cards/CardBox.vue";
import { mdiPencil } from "@mdi/js";
import PremFormField from "~~/components/AfterAuth/Forms/FormField.vue";
import PremFormControl from "~~/components/AfterAuth/Forms/FormControl.vue";
import RichTextEditor from "@/components/AfterAuth/Blog/RichTextEditor.vue";
import { Storage } from "aws-amplify"
import awsconfig from "@/src/aws-exports.js"
import { DataStore } from "@aws-amplify/datastore"
import { BlogYash } from "@/src/models/index.js"
const { blogid } = useRoute().params
import { useRouter } from 'vue-router';
console.log(blogid)

const router = useRouter()

Storage.configure({
    region: awsconfig.aws_user_files_s3_bucket_region,
    bucket: awsconfig.aws_user_files_s3_bucket
})



const uploadedFile = ref(null);
const allowedExtensions = ["jpg", "jpeg", "png"];

const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        const fileExtension = file.name.split(".").pop().toLowerCase();
        if (allowedExtensions.includes(fileExtension)) {
            const fileKey = `images/${Date.now()}-${file.name}`;
            file.url = URL.createObjectURL(file);
            uploadedFile.value = { file, key: fileKey }; // Save the file and its key
            console.log(uploadedFile.value.file.url);
        } else {
            alert("Invalid file format. Please select an image file only");
            event.target.value = "";
        }
    }
};


const editorContent = ref(' ');
const quillEditorRef = ref(null);
const toolbarOptions = [
    [{ direction: "rtl" }],
    [{ size: ["small", false, "large", "huge"] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ header: 1 }, { header: 2 }],
    [{ color: [] }, { background: [] }],
    ["bold", "italic", "underline", "strike"],
    [{ script: "sub" }, { script: "super" }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
    [{ indent: "-1" }, { indent: "+1" }],
    ["blockquote"],
    ["image", "video", "link"],
    ["code-block"],
    ["clean"],
];

const handleContentChanged = () => {
    editorContent.value = quillEditorRef.value?.getText();
}

import VueMultiselect from "vue-multiselect";

const value = ref('');
const taggingSelected = ref([]);
const titleText = ref('');
const publishDate = ref('');
const showCreateCategory = ref(false);
const newType = ref('');
const uploadingFile = ref(false);
const status = ref("Uploading Data...")
const savedBlog = ref()
const singleBlog = ref()
const singleBlogImg = ref()
const fileKey = ref("")
const oldBlogID = ref("")


const taggingOptions = [
    { name: "Adventure", value: "adventure" },
    { name: "Explore", value: "explore" },
    { name: "Learning", value: "learning" },
    { name: "Education", value: "education" },
    { name: "Self Improvement", value: "self_improvement" },
    { name: "Success", value: "success" },
    { name: "Fashion", value: "fashion" }
];

const categorySelect = ref([
    { name: "Travel Blog", value: "travel_blog" },
    { name: "Educational Blog", value: "edu_blog" },
    { name: "Fashion Blog", value: "fashion_blog" },
    { name: "Food Blog", value: "food_blog" },
    { name: "Personal Development", value: "personal_development" },
    { name: "Technology Blog", value: "technology_blog" }

]);

const addTag = (newTags) => {
    const tagsToAdd = newTags.split(',').map(tag => tag.trim());
    tagsToAdd.forEach(newTag => {
        if (newTag) {
            const tag = {
                name: newTag,
                code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
            };
            taggingOptions.push(tag);
            taggingSelected.value.push(JSON.parse(JSON.stringify(tag)));
        }
    });
};

const addNewType = async () => {
    if (newType.value.trim()) {
        const newCategory = {
            name: newType.value,
            value: newType.value.trim().toLowerCase(),
        };

        categorySelect.value.push(newCategory);
        newType.value = '';
        showCreateCategory.value = false;
    }
};

const handleCreateCategory = () => {
    showCreateCategory.value = !showCreateCategory.value;
};


const publishBtn = async (e) => {
    e.preventDefault();
    if (confirm("Do You Want to Publish This Blog") == true) {
        if (titleText.value && value.value && taggingSelected.value.length > 0 && publishDate.value && editorContent.value && (uploadedFile.value || singleBlogImg.value)) {
            if (savedBlog.value) {

                const modelToDelete = await DataStore.query(BlogYash, savedBlog.value);
                DataStore.delete(modelToDelete);

            } else {

                const modelToDelete = await DataStore.query(BlogYash, singleBlog.value.id);
                DataStore.delete(modelToDelete);
            }


            try {
                uploadingFile.value = true;

                if (uploadedFile.value) {
                    fileKey.value = uploadedFile.value.key;
                    await Storage.put(fileKey.value, uploadedFile.value.file, {
                        contentType: "image/*",
                    });

                }

                const selectedTagNames = taggingSelected.value.map(tag => tag.name);

                await DataStore.save(
                    new BlogYash({
                        "blogNo": oldBlogID.value,
                        "title": titleText.value,
                        "category": JSON.parse(JSON.stringify(value.value)).name,
                        "tags": selectedTagNames,
                        "publishDate": publishDate.value,
                        "content": editorContent.value,
                        "profilePicPath": fileKey.value ?? singleBlog.value.profilePicPath,
                        "isPublished": true,
                    })
                );


                window.alert("success")


                titleText.value = "";
                value.value = "";
                taggingSelected.value = [];
                publishDate.value = "";
                editorContent.value = " ";
                uploadedFile.value = null;
                localStorage.removeItem('formData');
            } catch (error) {
                console.log(error);
            } finally {
                uploadingFile.value = false;
            }
            router.push("/AA/blog/allblog")
        } else {
            window.alert("Fill All Fields Properly")
        }

    }
};

onMounted(async () => {
    try {
        const blogs = await DataStore.query(BlogYash, blogid);
        console.clear()
        singleBlog.value = blogs
        console.log(singleBlog.value);

        singleBlogImg.value = await Storage.get(singleBlog.value.profilePicPath)
        console.log(singleBlogImg.value);
        const { title, category, tags, content, blogNo } = singleBlog.value
        titleText.value = title
        value.value = { name: category, value: category.toLowerCase() }
        taggingSelected.value = tags.map((tag) => {
            return (
                { name: tag, value: tag.toLowerCase() }
            )
        })
        publishDate.value = singleBlog.value.publishDate
        editorContent.value = content
        uploadedFile.value = singleBlogImg.value
        oldBlogID.value = blogNo
        console.log(uploadedFile.value);
    } catch (err) {
        console.error(err);
    }



});

const saveReview = async () => {
    if (confirm("Do You Want to Save This Blog") == true) {

        if (titleText.value && value.value && taggingSelected.value.length > 0 && publishDate.value && editorContent.value) {
            if (savedBlog.value) {
                const modelToDelete = await DataStore.query(BlogYash, savedBlog.value);
                DataStore.delete(modelToDelete);

            } else {

                const modelToDelete = await DataStore.query(BlogYash, singleBlog.value.id);
                DataStore.delete(modelToDelete);
            }


            status.value = "Saving Data..."
            uploadingFile.value = true;
            if (uploadedFile.value) {
                fileKey.value = uploadedFile.value.key;
                await Storage.put(fileKey.value, uploadedFile.value.file, {
                    contentType: "image/*",
                });

            }

            const selectedTagNames = taggingSelected.value.map(tag => tag.name);
            const newModel = await DataStore.save(
                new BlogYash({
                    "blogNo": oldBlogID.value,
                    "title": titleText.value,
                    "category": JSON.parse(JSON.stringify(value.value)).name,
                    "tags": selectedTagNames,
                    "publishDate": publishDate.value,
                    "content": editorContent.value,
                    "profilePicPath": fileKey.value ?? singleBlog.value.profilePicPath,
                    "isPublished": false,
                })
            );

            uploadingFile.value = false;
            savedBlog.value = newModel.id;
            console.log(savedBlog.value);
            router.push("/AA/blog/allblog")
        } else {
            window.alert("Fill All Fields Properly")
        }

    }
};


const discardBtn = () => {
    if (confirm("Do You Want to Discard This Blog") == true) {
        titleText.value = "";
        value.value = "";
        taggingSelected.value = [];
        publishDate.value = "";
        editorContent.value = " ";
        uploadedFile.value = null;
        localStorage.removeItem('formData');
    }

};


</script>
  
<style src="vue-multiselect/dist/vue-multiselect.css"></style>
  
<style>
@media screen and (max-width: 1024px) {
    .resDis {
        display: none;
    }
}
</style>
  