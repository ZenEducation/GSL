<template>
    <div>
        <div class="overflow-hidden bg-white dark:bg-[#262950] mb-[30px]  rounded-[20px]"
            v-for="(blog, blogIndex) in allBlogs" :key=blog.id>
            <NuxtLink :to="'/PC/blog/' + blog.id" class="w-full">
                <div v-for="(image, imageIndex) in blogImages" :key="imageIndex">
                    <img v-if="imageIndex == blogIndex" :src="image" class="w-full" alt="" />
                </div>
            </NuxtLink>
            <div class="content flex pt-[30px] pb-[19px] px-[30px]">
                <div class="w-10 mr-[30px]">
                    <div class="mb-6">
                        <img src="@/assets/frontend/images/blog/author-avarat.png" alt="">
                    </div>
                    <ul class="text-center">
                        <li class="mb-3">
                            <NuxtLink to="#"
                                class="block w-[30px] h-[30px] bg-[#f8e9f7] text-center leading-[30px] text-base mx-auto my-0 rounded-[50%] no-underline">
                                <i
                                    class="far fa-comments bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)]"></i>
                            </NuxtLink>
                            <span class="font-semibold">30</span>
                        </li>
                        <li class="mb-0">
                            <NuxtLink to="#"
                                class="block w-[30px] h-[30px] bg-[#f8e9f7] text-center leading-[30px] text-base mx-auto my-0 rounded-[50%] no-underline">
                                <i
                                    class="fas fa-share-alt bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)]"></i>
                            </NuxtLink>
                            <span class="font-semibold">22</span>
                        </li>
                    </ul>
                </div>
                <div class="flex-[1]">
                    <p class="text-base leading-[26px]">
                        {{ blog.publishDate }}
                    </p>
                    <div>
                        <NuxtLink :to="'/PC/blog/' + blog.id">
                            <h4 class=" dark:text-[white] text-[28px] leading-[38px] font-bold mb-[13px] pt-3">
                                {{ blog.title }}
                            </h4>
                        </NuxtLink>

                        <div v-html="getFirstParagraph(blog)" v-if="!blog.isExpanded"></div>
                        <div v-html="blog.content" v-else></div>
                        <NuxtLink v-if="isContentTruncated(blog.content, 50) && !blog.isExpanded"
                            :to="'/PC/blog/' + blog.id"
                            class="inline-block bg-[#f8e9f7] text-[#333] px-4 py-2 rounded font-bold transition duration-300 ease-in-out border border-[#ccc] hover:bg-[#e6d4ea] hover:text-[#222] hover:border-[#aaa]">
                            Show More
                        </NuxtLink>
                    </div>
                    <div class="flex flex-wrap justify-between mt-[5px] border-t-[rgba(0,0,0,0.1)] border-t border-solid">
                        <div class="flex flex-wrap mt-[25px]">
                            <span class="text-lg font-semibold dark:text-[white] text-[#333]">
                                Tags :
                            </span>
                            <div v-for="(tag, index) in blog.tags" :key="index">
                                <NuxtLink to="#" class="text-[#333333] dark:text-[white] after:content-[',']">
                                    &nbsp;{{ tag }}
                                </NuxtLink>
                            </div>
                        </div>
                        <ul class="mt-[13.5px] mr-[-7.5px] mb-[-7.5px] ml-[-7.5px] flex ">
                            <li class="p-[7.5px]">
                                <NuxtLink to="#"
                                    class="w-9 h-9 leading-9 text-center border text-[#a3a5ac] text-sm rounded-[50%] border-solid border-[rgba(0,0,0,0.1)]">
                                    <i class="fab fa-facebook-f"></i>
                                </NuxtLink>
                            </li>
                            <li class="p-[7.5px]">
                                <NuxtLink to="#"
                                    class="w-9 h-9 leading-9 text-center border text-[#a3a5ac] text-sm rounded-[50%] border-solid border-[rgba(0,0,0,0.1)]">
                                    <i class="fab fa-instagram"></i>
                                </NuxtLink>
                            </li>
                            <li class="p-[7.5px]">
                                <NuxtLink to="#"
                                    class="w-9 h-9 leading-9 text-center border text-[#a3a5ac] text-sm rounded-[50%] border-solid border-[rgba(0,0,0,0.1)]">
                                    <i class="fab fa-pinterest"></i>
                                </NuxtLink>
                            </li>
                            <li class="p-[7.5px]">
                                <NuxtLink to="#"
                                    class="w-9 h-9 leading-9 text-center border text-[#a3a5ac] text-sm rounded-[50%] border-solid border-[rgba(0,0,0,0.1)]">
                                    <i class="fab fa-google"></i>
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { DataStore } from "@aws-amplify/datastore"
import { BlogYash } from "@/src/models/index.js"
import { onMounted, ref } from "vue"
import { Storage } from 'aws-amplify'

const allBlogs = ref([])
const profilePicPaths = ref([])
const blogImages = ref([])


onMounted(() => {
    handleGetData()
})

const handleGetData = async () => {
    try {
        const blogs = await DataStore.query(BlogYash);
        allBlogs.value = blogs

        profilePicPaths.value = blogs.map(blog => blog.profilePicPath)
        profilePicPaths.value.map(async (links) => {
            const getImages = await Storage.get(links);
            blogImages.value.push(getImages)
        })

    } catch (err) {
        console.error(err);
    }
}

const getFirstParagraph = (blog) => {
    if (!blog.isExpanded) {
        const paragraphs = blog.content.split('<br>'); // Split by <br><br> tags to get paragraphs
        return paragraphs[0];
    }
    return blog.content;
};

const isContentTruncated = (content, wordCount) => {
    const words = content.split(' ');
    return words.length > wordCount;
};


</script>

<style scoped>
i {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: -o-linear-gradient(284deg, rgb(242, 40, 118) 0%, rgb(148, 45, 217) 100%);
    background-image: linear-gradient(166deg, rgb(242, 40, 118) 0%, rgb(148, 45, 217) 100%);
}
</style>