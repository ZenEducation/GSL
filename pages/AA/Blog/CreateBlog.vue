<template>
  <div>
    <NuxtLayout name="zen">
      <SectionMain>
        <SectionTitleLineWithButton :icon="mdiPencil" title="Create Blog" main>
          <div
            class="ml-5 lg:flex flex-col resDis lg:order-1 lg:flex-row lg:items-end lg:justify-end items-center justify-center gap-3">
            <button class="bg-green-700 text-white w-24 h-10 rounded" @click="approveBtn">
              Approve
            </button>
            <button class="bg-blue-600 text-white w-24 h-10 rounded" @click="publishBtn">
              Publish
            </button>
            <button class="bg-blue-600 text-white w-24 h-10 rounded" @click="saveReview">
              Save
            </button>
            <!-- <BaseButton label="Save" color="info" @click="saveReview" /> -->
          </div>
          <BaseButton label="Save" color="info" @click="saveReview" class="lg:hidden" />

          <!-- <BaseButton label="Save" color="info" @click="saveReview" /> -->
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

              <VueMultiselect v-model="value" :options="singleSelect" :close-on-select="true" :clear-on-select="false"
                placeholder="Select one" label="name" track-by="name" />
              <button v-on:click="handleCreateCategory" class="text-sm w-52">
                Create Category
              </button>
            </div>

            <div class="flex gap-3 items-center w-full">
              <label class="block mb-2">Tag</label>
              <VueMultiselect v-model="taggingSelected" :options="taggingOptions" :multiple="true" :taggable="true"
                @tag="addTag" tag-placeholder="Add this as a new tag" placeholder="Type to search or add tag" label="name"
                track-by="name" />
            </div>
          </div>

          <div class="flex" v-if="showCreateCategory">
            <input v-model="newType" placeholder="Enter Category" class="border border-gray-300 p-2 w-4/5" type="text" />
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
                <img v-if="uploadedFile.type.startsWith('image/')" width="500" :src="uploadedFile.url" alt="Image" />
              </div>
              <img v-else src="../../../assets/images/download.png" alt="Image" />
              <form @submit="uploadFile">
                <input type="file" @change="handleFileChange" accept=".jpg, .jpeg, .png" />
              </form>
            </div>
          </PremFormField>

          <PremFormField label="Content" horizontal>
            <div class="rounded-md flex flex-col">
              <RichTextEditor v-model:modelValue="editorContent" @update:text="onEditorTextChanged" />
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
import { ref, reactive, computed, watch } from "vue";
import SectionMain from "@/components/AfterAuth/Sections/SectionMain.vue";
import SectionTitleLineWithButton from "@/components/AfterAuth/Sections/SectionTitleLineWithButton.vue";
import BaseButton from "@/components/AfterAuth/Buttons/BaseButton.vue";
import CardBox from "@/components/AfterAuth/Cards/CardBox.vue";
import { mdiPencil } from "@mdi/js";
import PremFormField from "~~/components/AfterAuth/Forms/FormField.vue";
import PremFormControl from "~~/components/AfterAuth/Forms/FormControl.vue";
import RichTextEditor from "@/components/AfterAuth/Blog/RichTextEditor.vue";

const uploadedFile = ref(null);

const allowedExtensions = ["jpg", "jpeg", "png"];

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const fileExtension = file.name.split(".").pop().toLowerCase();

    if (allowedExtensions.includes(fileExtension)) {
      file.url = URL.createObjectURL(file);
      uploadedFile.value = file;
    } else {
      alert("Invalid file format. Please select an image file only");

      event.target.value = "";
    }
  }
};
const uploadFile = (event) => {
  event.preventDefault();
};
</script>

<script>
import VueMultiselect from "vue-multiselect";

export default {
  components: { VueMultiselect },
  data() {
    return {
      titleText: "",
      value: [],
      taggingSelected: [],
      publishDate: "",
      editorContent: "",
      showCreateCategory: false,
      newType: "",
      taggingOptions: [
        { name: "Vue.js", language: "JavaScript" },
        { name: "Adonis", language: "JavaScript" },
        { name: "Rails", language: "Ruby" },
        { name: "Sinatra", language: "Ruby" },
        { name: "Laravel", language: "PHP" },
        { name: "Phoenix", language: "Elixir" },
      ],
      singleSelect: [
        { name: "Vue.js", language: "JavaScript" },
        { name: "Adonis", language: "JavaScript" },
        { name: "Rails", language: "Ruby" },
        { name: "Sinatra", language: "Ruby" },
        { name: "Laravel", language: "PHP" },
        { name: "Phoenix", language: "Elixir" },
      ],
    };
  },
  methods: {
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.taggingOptions.push(tag);

      this.taggingSelected.push(JSON.parse(JSON.stringify(tag)));
    },
    addNewType() {
      if (this.newType.trim()) {
        this.singleSelect.push({
          name: this.newType.trim().toLowerCase(),
          language: this.newType,
        });

        this.newType = "";
        this.showCreateCategory = false;
      }
    },
    handleCreateCategory() {
      this.showCreateCategory = !this.showCreateCategory;
    },
    // onEditorTextChanged(text) {
    //   this.editorContent = text;
    // },
  },
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
