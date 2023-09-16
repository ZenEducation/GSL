<template>
    <div>
        <section class="px-0 py-[120px]">
            <div
                class="w-full mx-auto px-[15px] sm:max-w-[540px] sm:px-4 md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1170px]">
                <div class="flex flex-wrap ">
                    <div class="lg:w-2/3">
                        <div class="overflow-hidden bg-white dark:bg-[#262950] mb-[30px]  rounded-[20px]"
                            v-for="blog in data" :key=blog.id>
                            <NuxtLink :to="'/PC/blog/' + blog.link" class="w-full">
                                <img :src="blog.image" class="w-full" alt="">
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
                                        December 19, 2021
                                    </p>
                                    <div>
                                        <NuxtLink :to="'/blog/' + blog.link">
                                            <h4
                                                class=" dark:text-[white] text-[28px] leading-[38px] font-bold mb-[13px] pt-3">
                                                {{ blog.title }}
                                            </h4>
                                        </NuxtLink>
                                        <p>
                                            {{ blog.para }}
                                        </p>


                                    </div>
                                    <div
                                        class="flex flex-wrap justify-between mt-[5px] border-t-[rgba(0,0,0,0.1)] border-t border-solid">
                                        <div class="flex flex-wrap mt-[25px]">
                                            <span class="text-lg font-semibold dark:text-[white] text-[#333]">
                                                Tags :
                                            </span>
                                            <div>
                                                <NuxtLink to="#"
                                                    class="text-[#333333] dark:text-[white]  after:content-[',']"> Tickets
                                                </NuxtLink>
                                                <NuxtLink to="#"
                                                    class="text-[#333333] dark:text-[white]  after:content-[',']"> Coming
                                                    Soon
                                                </NuxtLink>
                                                <NuxtLink to="#" class="text-[#333333] dark:text-[white] "> Movies
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
                    <div class="lg:w-1/3 pr-4 pl-4">
                        <div
                            class=" mb-8 pt-8 pb-[30px] px-[30px] bg-white dark:bg-[#262950] shadow-[0px_5px_20px_0px_rgba(78,64,128,0.1)] py-[30px] rounded-[20px]">

                            <h5 class=" dark:text-[white] title">search</h5>
                            <form class="search-form mt-5">
                                <input type="text" placeholder="Enter your Search Content"
                                    class="text-sm mb-[30px] bg-transparent dark:text-[white] pl-0 rounded-none dark:border-b-[rgba(256,256,256,0.15)] border-b-[rgba(0,0,0,0.15)] border-t-0 border-l-0 border-r-0 border-b border-b-solid focus:border-0 active:border-0 target:border-0 placeholder-[rgb(76,88,143)]"
                                    required>
                                <button type="submit"
                                    class="w-auto min-w-[130px] h-10 rounded-[20px]  dark:text-[white] border-none text-white outline-none search_btn">
                                    <i
                                        class="fa fa-search mr-[5px] normal_icon"></i>Search</button>
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
                            
                          
                            <div style="display: block;" class="owl-carousel owl-theme h-[20rem]">
                              
                                    <div class="overflow-hidden mb-[25px] ">
                                      
                                       
                                <image-slider />
                        
                                   
                               
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
                                    class="w-auto min-w-[130px] h-10 rounded-[20px] dark:text-[white] border-0 text-white outline-none search_btn">
                                    <i class="fa fa-envelope normal_icon mr-1" aria-hidden="true"></i>

Send</button>
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
import img1 from '@/assets/frontend/images/blog/blogs/01.jpg'
import img2 from '@/assets/frontend/images/blog/blogs/02.jpg'
import img3 from '@/assets/frontend/images/blog/blogs/03.jpg'
import img4 from '@/assets/frontend/images/blog/blogs/04.jpg'
import img5 from '@/assets/frontend/images/blog/blogs/05.jpg'
import img6 from '@/assets/frontend/images/blog/blogs/06.jpg'
import img7 from '@/assets/frontend/images/blog/blogs/07.jpg'
import ImageSlider from '@/components/PublicUI/blog/ImageSlider'
const data = [
    {
        id: 1,
        link: "01",
        title: '5 Tips for Creating a Winning Dating Profile',
        para: "When it comes to online dating, your dating profile is your first impression. It's what potential matches use to decide if they want to get to know you better. Therefore, it's crucial to create a winning dating profile that showcases your best qualities and attracts the right kind of matches. In this blog post, we'll share 5 tips for creating a winning dating profile.",
        image: img1,
    },
    {
        id: 2,
        link: "02",
        title: 'How to Navigate the World of Online Dating',
        para: "Online dating has become a popular way to meet new people and find potential partners. However, navigating the world of online dating can be overwhelming and challenging, especially if you're new to the scene. In this blog post, we'll share some tips on how to navigate the world of online dating",
        image: img2,
    },
    {
        id: 3,
        link: "03",
        title: "The Do's and Don'ts of First Date Etiquette",
        para: "First dates can be nerve-wracking, but they can also be exciting and full of potential. To make a good impression and increase your chances of a second date, it's important to follow some basic first date etiquette. In this blog post, we'll share some do's and don'ts of first date etiquette",
        image: img3,
    },
    {
        id: 4,
        link: "04",
        title: 'The Benefits of Dating Someone with Similar Interests',
        para: "When it comes to dating, many people believe that opposites attract. While there is some truth to this, dating someone with similar interests can also have many benefits. In this blog post, we'll explore some of the advantages of dating someone with similar interests.",
        image: img4,
    },
    {
        id: 5,
        link: "05",
        title: "The Importance of Communication in a Successful Relationship",
        para: "Communication is a fundamental aspect of any relationship, and it plays a crucial role in building a successful and healthy relationship. In this blog post, we'll explore the importance of communication in a successful relationship.",
        image: img5,
    },
    {
        id: 6,
        link: "06",
        title: "How to Spot Red Flags in a Potential Partner",
        para: "When it comes to dating, it's important to be aware of potential red flags in a potential partner. These red flags can signal potential issues or problems down the road, and being able to spot them early on can save you a lot of time and heartache. In this blog post, we'll explore some common red flags to look out for in a potential partner.",
        image: img6,
    },
    {
        id: 7,
        link: "07",
        title: "The Art of Flirting: Tips and Tricks",
        para: "Flirting is a subtle art that can help you connect with others and build romantic relationships. But for some people, it can be difficult to know where to start. In this blog post, we'll explore some tips and tricks for mastering the art of flirting.",
        image: img7,
    },


]

</script>

<style scoped>
i {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: -o-linear-gradient(284deg, rgb(242, 40, 118) 0%, rgb(148, 45, 217) 100%);
    background-image: linear-gradient(166deg, rgb(242, 40, 118) 0%, rgb(148, 45, 217) 100%);
}
.normal_icon{
    background-image: -o-linear-gradient(284deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%);
    background-image: linear-gradient(166deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%);  
}
.search_btn{
    background-image: -o-linear-gradient(284deg, rgb(242, 40, 118) 0%, rgb(148, 45, 217) 100%);
    background-image: linear-gradient(166deg, rgb(242, 40, 118) 0%, rgb(148, 45, 217) 100%);
}
</style>