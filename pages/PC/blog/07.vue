<template>
    <div class=" dark:text-[white] dark:bg-[#202342]">
        <Navbar />
        <breadcrumb title="blog" />
        <div>
            <section class="px-0 py-[120px]">
                <div
                    class="w-full mx-auto px-[15px] sm:max-w-[540px] sm:px-4 md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1170px]">
                    <div class="flex flex-wrap ">
                        <div class="lg:w-2/3 pr-4 pl-4">
                            <div class="overflow-hidden bg-white dark:bg-[#262950] mb-[30px] rounded-[20px]">
                                <div>
                                    <img :src="img" class="w-full" alt="">
                                </div>
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
                                        <p class="text-base leading-[26px] mb-[13px]">
                                            December 19, 2021
                                        </p>
                                        <div>
                                            <h4 class="text-[28px]   dark:text-[white] leading-[38px] font-bold mb-[13px]">
                                                {{ data?.title }}
                                            </h4>
                                            <p class="mb-[18px]">
                                                {{ data?.intro }}
                                            </p>
                                            <blockquote class="block p-10 bg-slate-100 my-4  dark:bg-[#202342] rounded-2xl"
                                                v-if="data?.blockquote">
                                                {{ data?.blockquote }}
                                            </blockquote>
                                            <div v-for="item in  data.content" class="mb-7">
                                                <h4
                                                    class="text-[22px] dark:text-[white] leading-[38px] font-bold mb-[13px]">
                                                    {{ item?.heading }}
                                                </h4>
                                                <p class="my-[18px]">
                                                    {{ item?.description }}
                                                </p>
                                                <ul>
                                                    <li v-for="(list, index) in item.list" :key="index">
                                                        <p>{{ list }}</p>
                                                    </li>
                                                </ul>
                                            </div>

                                            <p class="my-[18px]">
                                                {{ data?.conclusion }}
                                            </p>
                                        </div>
                                        <div
                                            class="flex flex-wrap justify-between mt-[5px]  dark:border-t-[rgba(256,256,256,0.155)]  border-t-[rgba(0,0,0,0.1)] border-t border-solid">
                                            <div class="flex flex-wrap mt-[25px]">
                                                <span class="text-lg font-semibold text-[#333]   dark:text-[white]">
                                                    Tags :
                                                </span>
                                                <div>
                                                    <NuxtLink to="#"
                                                        class="text-[#333333]  dark:text-[white] after:content-[',']">
                                                        Tickets
                                                    </NuxtLink>
                                                    <NuxtLink to="#"
                                                        class="text-[#333333]  dark:text-[white] after:content-[',']">
                                                        Coming
                                                        Soon </NuxtLink>
                                                    <NuxtLink to="#" class="text-[#333333]"> Movies </NuxtLink>
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
                            <div
                                class="bg-white dark:bg-[#262950] shadow-[0px_10px_5px_0px_rgba(119,123,146,0.02)] p-[30px] rounded-[10px] sm:flex ">
                                <div
                                    class="min-w-[100px] w-[100px] h-[100px] border p-[5px] rounded-[50%] border-solid border-[rgba(0,0,0,0.1)]">
                                    <NuxtLink to="#" class="block overflow-hidden rounded-[50%]">
                                        <img src="@/assets/frontend/images/blog/blog-admin-big.png" class="w-full"
                                            alt="blog">
                                    </NuxtLink>
                                </div>
                                <div class=" pl-[30px]">
                                    <h5 class="  dark:text-[white] uppercase mb-[18px] m-0">
                                        <NuxtLink class="dark:text-[white] " to="#">
                                            Lee Burke
                                        </NuxtLink>
                                    </h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt
                                        ut
                                        labore et dolore magna aliqua.Quis ipsum suspendisse .
                                    </p>
                                </div>
                            </div>
                            <div class="mt-10 md:mt-[50px] min-[992px]:mt-20">
                                <h5 class="uppercase   dark:text-[white] text-[22px] pb-[15px] min-[576px]:test-[28px]">
                                    comments
                                </h5>
                                <ul>
                                    <li class="px-0 py-[21px]  dark:border-t-[rgba(256,256,256,0.155)]  border-t-[rgba(0,0,0,0.1)] border-t border-solid sm:flex"
                                        v-for="index in 3" key="index">
                                        <div class=" sm:min-w-min">

                                            <div
                                                class="ml-[30px] w-[65px] h-[65px] border p-[5px] flex justify-center rounded-[50%] border-solid border-[rgba(0,0,0,0.15)] ">
                                                <div>
                                                    <NuxtLink to="#" class="block overflow-hidden rounded-[50%]">
                                                        <img src="@/assets/frontend/images/blog/comment-1.png"
                                                            class="w-full" alt="blog">
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                            <div class="w-[150px] pl-[30px]">
                                                <span class="block text-[#9aace5] text-sm mb-2.5">13 days ago</span>
                                                <h6 class="text-base   dark:text-[white] font-semibold uppercase">
                                                    <NuxtLink class="dark:text-[white] " to="#">carl morgan</NuxtLink>
                                                </h6>
                                            </div>
                                        </div>
                                        <div class="w-full sm:w-[calc(100%_-_215px)] pl-[30px]">
                                            <p class="m-0">
                                                Maecenas at velit eu erat egestas vestibulum id ut tellus. Sed et semper
                                                mauris.
                                                Quisque eu lorem libero. Donec finibus metus tellus, eget rutrum est mattis
                                                non.
                                            </p>
                                        </div>
                                    </li>

                                </ul>
                                <div class="mt-5 md:mt-[35px] min-[992px]:mt-[55px]">
                                    <h5 class="uppercase  dark:text-[white] text-[22px] pb-[15px] min-[576px]:text-[28px]">
                                        leave
                                        comment</h5>
                                    <form>
                                        <div class="mb-4">
                                            <input type="text"
                                                class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white  dark:bg-transparent dark:text-[white] text-gray-800 border border-gray-200 rounded"
                                                placeholder="Enter Your Full Name" required>
                                        </div>
                                        <div class="mb-4">
                                            <input type="text"
                                                class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white dark:bg-transparent dark:text-[white] text-gray-800 border border-gray-200 rounded"
                                                placeholder="Enter Your Email Address" required>
                                        </div>
                                        <div class="mb-4">
                                            <textarea placeholder="Write A Message"
                                                class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white dark:bg-transparent dark:text-[white] text-gray-800 border border-gray-200 rounded"
                                                required></textarea>
                                        </div>
                                        <div class="mb-4">
                                            <button
                                                class="bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] shadow-[0.872px_9.962px_20px_0px_rgba(12,78,165,0.3)] font-semibold text-white inline-block cursor-pointer w-auto h-auto px-[35px] py-[11px] rounded-[50px] border-0 hover:text-white hover:shadow-[1px_10px_20px_0px_rgba(12,78,165,0.43)]"
                                                type="submit">Submit Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
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
                                                    class="overflow-hidden dark:text-[white]  text-ellipsis no-underline">
                                                    How to
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
        <NewsLatter />
    </div>
</template>

<script setup>
import img from '@/assets/frontend/images/blog/blogs/07.jpg'
const data = {
    "title": "The Art of Flirting: Tips and Tricks",
    "intro": "Flirting is a subtle art that can help you connect with others and build romantic relationships. But for some people, it can be difficult to know where to start. In this blog post, we'll explore some tips and tricks for mastering the art of flirting.",
    content: [
        {
            heading: "Smile and Make Eye Contact",
            description: "One of the easiest ways to show interest and initiate flirting is by smiling and making eye contact. This simple gesture can help you establish a connection with someone and make them feel more comfortable around you."
        },
        {
            heading: "Use Compliments",
            description: "Everyone likes to be complimented, so using genuine compliments is a great way to show interest and make someone feel special. Be specific in your compliments and avoid generic phrases like 'you look nice.' Instead, try something like 'your smile is contagious.'"
        },
        {
            heading: "Be Confident",
            description: "Confidence is attractive, and people are often drawn to those who exude it. Practice positive self-talk and work on building your self-confidence to make it easier to flirt and connect with others."
        },
        {
            heading: "Listen and Engage",
            description: "Another key to successful flirting is active listening. Ask questions and engage in conversation to show that you're interested in what the other person has to say. This can help establish a connection and build rapport."
        },
        {
            heading: "Use Body Language",
            description: "Body language can communicate a lot about how you feel and what you're thinking. Use open and relaxed body language to show that you're approachable and interested. Lean in slightly and maintain eye contact to show that you're focused on the conversation."
        },
        {
            heading: "Know When to Back Off",
            description: "It's important to be aware of cues that indicate the other person may not be interested. If they seem uncomfortable or are giving short responses, it may be time to back off and respect their boundaries."
        }
    ],
    "conclusion": "In conclusion, mastering the art of flirting takes practice and patience. By using these tips and tricks, you can improve your flirting skills and build stronger connections with others. Remember to be confident, use compliments, actively listen, and use body language to communicate your interest. And most importantly, be respectful of others' boundaries and signals."
}




</script>

<style scoped>i {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: -o-linear-gradient(284deg, rgb(242, 40, 118) 0%, rgb(148, 45, 217) 100%);
    background-image: linear-gradient(166deg, rgb(242, 40, 118) 0%, rgb(148, 45, 217) 100%);
}</style>