<template>
    <div>
        <section class="px-0 py-[120px]">
            <div
                class="w-full mx-auto px-[15px] sm:max-w-[540px] sm:px-4 md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1170px]">
                <div class="flex flex-wrap ">
                    <div class="lg:w-2/3">
                        <blogContent />

                    </div>
                    <div class="lg:w-1/3 pr-4 pl-4">
                        <div
                            class=" mb-8 pt-8 pb-[30px] px-[30px] bg-white dark:bg-[#262950] shadow-[0px_5px_20px_0px_rgba(78,64,128,0.1)] py-[30px] rounded-[20px]">

                            <h5 class=" dark:text-[white] title">search</h5>
                            <form class="search-form mt-5">
                                <input type="text" placeholder="Enter your Search Content"
                                    class="text-sm mb-[30px] bg-transparent dark:text-[white] pl-0 rounded-none dark:border-b-[rgba(256,256,256,0.15)] border-b-[rgba(0,0,0,0.15)] border-t-0 border-l-0 border-r-0 border-b border-b-solid focus:border-0 active:border-0 target:border-0 placeholder-[rgb(76,88,143)]"
                                    required>
                                <button type="submit"
                                    class="w-auto min-w-[130px] h-10 rounded-[20px] border-2 dark:text-[white] text-black outline-none"><i
                                        class="fa fa-search mr-[5px]"></i>Search</button>
                            </form>
                        </div>
                        <div
                            class=" mb-8 pt-8 pb-[30px] px-[30px] bg-white dark:bg-[#262950] shadow-[0px_5px_20px_0px_rgba(78,64,128,0.1)] py-[30px] rounded-[20px]">
                            <h5 class="dark:text-[white]">categories</h5>
                            <ul class="mt-[9px]">
                                <li
                                    class="p-0 dark:border-b-[rgba(256,256,256,0.15)] border-b-[rgba(0,0,0,0.155)] border-b border-dashed">
                                    <NuxtLink to="#"
                                        class="flex flex-wrap justify-between text-[#333333] dark:text-[white]  text-base px-0 pb-1.5 pt-0 hover:text-[#5650ce] no-underline">
                                        <span>Showtimes & Tickets</span><span>50</span>
                                    </NuxtLink>
                                </li>
                                <li
                                    class="p-0 dark:border-b-[rgba(256,256,256,0.15)] border-b-[rgba(0,0,0,0.155)] border-b border-dashed">
                                    <NuxtLink to="#"
                                        class="flex flex-wrap justify-between text-[#333333] dark:text-[white]  text-base px-0 py-1.5 hover:text-[#5650ce] no-underline">
                                        <span>Latest Trailers</span><span>43</span>
                                    </NuxtLink>
                                </li>
                                <li
                                    class="p-0 dark:border-b-[rgba(256,256,256,0.15)] border-b-[rgba(0,0,0,0.155)] border-b border-dashed">
                                    <NuxtLink to="#"
                                        class="flex flex-wrap justify-between text-[#333333] dark:text-[white]  text-base px-0 py-1.5 hover:text-[#5650ce] no-underline">
                                        <span>Coming Soon </span><span>34</span>
                                    </NuxtLink>
                                </li>
                                <li
                                    class="p-0 dark:border-b-[rgba(256,256,256,0.15)] border-b-[rgba(0,0,0,0.155)] border-b border-dashed">
                                    <NuxtLink to="#"
                                        class="flex flex-wrap justify-between text-[#333333] dark:text-[white]  text-base px-0 py-1.5 hover:text-[#5650ce] no-underline">
                                        <span>In Theaters</span><span>63</span>
                                    </NuxtLink>
                                </li>
                                <li
                                    class="p-0 dark:border-b-[rgba(256,256,256,0.15)] border-b-[rgba(0,0,0,0.155)] border-b border-dashed">
                                    <NuxtLink to="#"
                                        class="flex flex-wrap justify-between text-[#333333] dark:text-[white]  text-base px-0 py-1.5 hover:text-[#5650ce] no-underline">
                                        <span>Release Calendar </span><span>11</span>
                                    </NuxtLink>
                                </li>
                                <li
                                    class="p-0 dark:border-b-[rgba(256,256,256,0.15)] border-b-[rgba(0,0,0,0.155)] border-b border-dashed">
                                    <NuxtLink to="#"
                                        class="flex flex-wrap justify-between text-[#333333] dark:text-[white]  text-base px-0 py-1.5 hover:text-[#5650ce] no-underline">
                                        <span>Stars</span><span>30</span>
                                    </NuxtLink>
                                </li>
                                <li
                                    class="p-0 dark:border-b-[rgba(256,256,256,0.15)] border-b-[rgba(0,0,0,0.155)] border-b-0 border-dashed">
                                    <NuxtLink to="#"
                                        class="flex flex-wrap justify-between text-[#333333] dark:text-[white]  text-base px-0 py-1.5 hover:text-[#5650ce] no-underline">
                                        <span>Horror Movie </span><span>55</span>
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>
                        <div
                            class="relative mb-8 pt-[31px] pb-[21px] px-[30px] bg-white dark:bg-[#262950] shadow-[0px_5px_20px_0px_rgba(78,64,128,0.1)] py-[30px] rounded-[20px]">
                            <h5 class="dark:text-[white]">latest post</h5>
                            <div class="flex flex-wrap py-2">
                                <span
                                    class="  hover:text-white hover:bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] block w-5 h-5 leading-5 text-center cursor-pointer text-[10px] bg-[#fafbff] shadow-[0px_2px_5px_0px_rgba(0,18,50,0.2)] text-[#333333] dark:text-[white]  transition-all duration-[ease] delay-[0.3s] rounded-[50%]">&lt;</span>
                                <span
                                    class="text-white bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] block w-5 h-5 leading-5 text-center cursor-pointer text-[10px] bg-[#fafbff] shadow-[0px_2px_5px_0px_rgba(0,18,50,0.2)] transition-all duration-[ease] delay-[0.3s] rounded-[50%]">></span>
                            </div>
                            <div style="display: block;" class="owl-carousel owl-theme">
                                <div>
                                    <div class="overflow-hidden mb-[25px] rounded-xl">
                                        <NuxtLink to="#" class=" block no-underline">
                                            <img src="@/assets/frontend/images/blog/resent-post.png" class=" w-full"
                                                alt="blog">
                                        </NuxtLink>
                                    </div>
                                    <div>
                                        <h6 class="text-lg dark:text-[white] mb-[7px]">
                                            <NuxtLink to="#"
                                                class="overflow-hidden dark:text-[white]  text-ellipsis no-underline">How to
                                                Start, Plan, and Keep a
                                                Date Night</NuxtLink>
                                        </h6>
                                        <div class="flex flex-wrap text-sm">
                                            <NuxtLink to="#" class="mr-4 text-[#333333] dark:text-[white] "><i
                                                    class="fas fa-user bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] mr-[5px]"></i>Admin
                                            </NuxtLink>
                                            <NuxtLink to="#" class="text-[#333333] dark:text-[white] "> <i
                                                    class="far fa-comments bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] mr-[5px]"></i>
                                                Comments</NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class=" mb-8 pt-8 pb-[30px] px-[30px] bg-white dark:bg-[#262950] shadow-[0px_5px_20px_0px_rgba(78,64,128,0.1)] py-[30px] rounded-[20px]">
                            <h5 class="dark:text-[white]">Newsletter</h5>
                            <form class="mt-5">
                                <input type="text" placeholder="Enter your Email Address"
                                    class="text-sm mb-[30px] pl-0  bg-transparent dark:text-[white]  rounded-none dark:border-b-[rgba(256,256,256,0.15)] border-b-[rgba(0,0,0,0.15)] border-t-0 border-l-0 border-r-0 border-b border-b-solid focus:border-0 active:border-0 target:border-0 placeholder-[rgb(76,88,143)]"
                                    required>
                                <button type="submit"
                                    class="w-auto min-w-[130px] h-10 rounded-[20px] dark:text-[white] border-2 text-black outline-none"><i
                                        class="fa fa-search mr-[5px]"></i>Send</button>
                            </form>
                        </div>
                        <div
                            class="pt-[31px] pb-[30px] px-[30px] mb-8 bg-white dark:bg-[#262950] shadow-[0px_5px_20px_0px_rgba(78,64,128,0.1)] py-[30px] rounded-[20px] ">
                            <h5 class="dark:text-[white]">featured tags</h5>
                            <ul class="flex flex-wrap mt-[-5px] mr-[-5px] mb-[-5px] ml-[-5px]">
                                <li class="p-[5px]">
                                    <NuxtLink to="#"
                                        class=" hover:bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white  text-sm capitalize  border text-[#333] px-[39px] dark:border-[rgba(256,256,256,0.3)] dark:text-[white] py-1.5 rounded-[20px] border-solid border-[rgba(0,0,0,0.15)] no-underline">
                                        creative</NuxtLink>
                                </li>
                                <li class="p-[5px]">
                                    <NuxtLink to="#"
                                        class=" hover:bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white text-sm capitalize  border text-[#333] px-[39px] dark:border-[rgba(256,256,256,0.3)] dark:text-[white] py-1.5 rounded-[20px] border-solid border-[rgba(0,0,0,0.15)] no-underline">
                                        design</NuxtLink>
                                </li>
                                <li class="p-[5px]">
                                    <NuxtLink to="#"
                                        class=" hover:bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white text-sm capitalize  border text-[#333] px-[39px] dark:border-[rgba(256,256,256,0.3)] dark:text-[white] py-1.5 rounded-[20px] border-solid border-[rgba(0,0,0,0.15)] no-underline">
                                        skill</NuxtLink>
                                </li>
                                <li class="p-[5px]">
                                    <NuxtLink to="#"
                                        class=" hover:bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white text-sm capitalize  border text-[#333] px-[39px] dark:border-[rgba(256,256,256,0.3)] dark:text-[white] py-1.5 rounded-[20px] border-solid border-[rgba(0,0,0,0.15)] no-underline">
                                        template</NuxtLink>
                                </li>
                                <li class="p-[5px]">
                                    <NuxtLink to="#"
                                        class="active bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-white text-sm capitalize  border px-[39px] py-1.5 rounded-[20px] border-solid border-[rgba(0,0,0,0.15)] no-underline">
                                        landing</NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import blogContent from "@/components/PublicUI/blog/blogContent.vue"

</script>

<style scoped>
i {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: -o-linear-gradient(284deg, rgb(242, 40, 118) 0%, rgb(148, 45, 217) 100%);
    background-image: linear-gradient(166deg, rgb(242, 40, 118) 0%, rgb(148, 45, 217) 100%);
}
</style>