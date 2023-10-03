<template>
    <div class=" dark:text-[white] dark:bg-[#202342]">

      <PublicUINavbar />
      <breadcrumb title="blog" />
      <section class="px-0 py-[120px]">
      <div class="w-full mx-auto px-[15px] sm:max-w-[540px] sm:px-4 md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1170px]">
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
                                      <NuxtLink to="#" class="block w-[30px] h-[30px] bg-[#f8e9f7] text-center leading-[30px] text-base mx-auto my-0 rounded-[50%] no-underline">
                                          <i class="far fa-comments bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)]"></i>
                                      </NuxtLink>
                                      <span class="font-semibold">30</span>
                                  </li>
                                  <li class="mb-0">
                                      <NuxtLink to="#" class="block w-[30px] h-[30px] bg-[#f8e9f7] text-center leading-[30px] text-base mx-auto my-0 rounded-[50%] no-underline">
                                          <i class="fas fa-share-alt bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)]"></i>
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
                                          <div v-for="(item,idx) in  data.content" :key="idx" class="mb-7">
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
                              <div class="flex flex-wrap justify-between mt-[5px]  dark:border-t-[rgba(256,256,256,0.155)]  border-t-[rgba(0,0,0,0.1)] border-t border-solid">
                                  <div class="flex flex-wrap mt-[25px]">
                           <span class="text-lg font-semibold text-[#333]   dark:text-[white]">
                                          Tags :
                                      </span>
                                      <div>
                                          <NuxtLink to="#" class="text-[#333333]  dark:text-[white] after:content-[',']"> Tickets </NuxtLink>
                          <NuxtLink to="#" class="text-[#333333]  dark:text-[white] after:content-[',']"> Coming Soon </NuxtLink>
                                          <NuxtLink to="#" class="text-[#333333]"> Movies </NuxtLink>
                                </div>
                                  </div>
                                  <ul class="mt-[13.5px] mr-[-7.5px] mb-[-7.5px] ml-[-7.5px] flex ">
                                      <li class="p-[7.5px]">
                                          <NuxtLink to="#" class="w-9 h-9 leading-9 text-center border text-[#a3a5ac] text-sm rounded-[50%] border-solid border-[rgba(0,0,0,0.1)]">
                                              <i class="fab fa-facebook-f"></i>
                                          </NuxtLink>
                                      </li>
                                      <li class="p-[7.5px]">
                                          <NuxtLink to="#" class="w-9 h-9 leading-9 text-center border text-[#a3a5ac] text-sm rounded-[50%] border-solid border-[rgba(0,0,0,0.1)]">
                                              <i class="fab fa-instagram"></i>
                                          </NuxtLink>
                                      </li>
                                      <li class="p-[7.5px]">
                                          <NuxtLink to="#" class="w-9 h-9 leading-9 text-center border text-[#a3a5ac] text-sm rounded-[50%] border-solid border-[rgba(0,0,0,0.1)]">
                                              <i class="fab fa-pinterest"></i>
                                          </NuxtLink>
                                      </li>
                                      <li class="p-[7.5px]">
                                          <NuxtLink to="#" class="w-9 h-9 leading-9 text-center border text-[#a3a5ac] text-sm rounded-[50%] border-solid border-[rgba(0,0,0,0.1)]">
                                              <i class="fab fa-google"></i>
                                          </NuxtLink>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="bg-white dark:bg-[#262950] shadow-[0px_10px_5px_0px_rgba(119,123,146,0.02)] p-[30px] rounded-[10px] sm:flex ">
                      <div class="min-w-[100px] w-[100px] h-[100px] border p-[5px] rounded-[50%] border-solid border-[rgba(0,0,0,0.1)]">
                          <NuxtLink to="#" class="block overflow-hidden rounded-[50%]">
                              <img src="https://pixner.net/peyamba/peyamba/assets/images/blog/blog-admin-big.png" class="w-full" alt="blog">
                          </NuxtLink>
                      </div>
                      <div class=" pl-[30px]">
                          <h5 class="  dark:text-[white] uppercase mb-[18px] m-0">
                              <NuxtLink class="dark:text-[white] "  to="#">
                                  Lee Burke
                              </NuxtLink>
                          </h5>
                          <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua.Quis ipsum suspendisse .
                          </p>
                      </div>
                  </div>
                  <div class="mt-10 md:mt-[50px] min-[992px]:mt-20 pt-[5rem]">
                      <h5 class="uppercase   dark:text-[white] text-[22px] pb-[15px] min-[576px]:test-[28px]">comments</h5>
                      <ul class="">
                          <li class="px-0 py-[21px]  dark:border-t-[rgba(256,256,256,0.155)]  border-t-[rgba(0,0,0,0.1)] border-t border-solid sm:flex" v-for="index in 3" :key="index">
                              <div class=" sm:min-w-min flex items-center">

                                  <div class="ml-[30px] w-[65px] h-[65px] border p-[5px] flex justify-center rounded-[50%] border-solid border-[rgba(0,0,0,0.15)] ">
                                      <div>
                                          <NuxtLink to="#" class="block overflow-hidden rounded-[50%]">
                                              <img src="https://pixner.net/peyamba/peyamba/assets/images/blog/comment-1.png" class="w-full" alt="blog">
                                          </NuxtLink>
                                      </div>
                                  </div>
                                  <div class="w-[150px] pl-[30px]">
                                      <span class="block text-[#9aace5] text-sm mb-2.5">13 days ago</span>
                                      <h6 class="text-base   dark:text-[white] font-semibold uppercase"><NuxtLink  class="dark:text-[white] " to="#">carl morgan</NuxtLink></h6>
                                  </div>
                              </div>
                              <div class="w-full sm:w-[calc(100%_-_215px)] pl-[30px]">
                                  <p class="m-0">
                                      Maecenas at velit eu erat egestas vestibulum id ut tellus. Sed et semper mauris. Quisque eu lorem libero. Donec finibus metus tellus, eget rutrum est mattis non.
                                  </p>
                              </div>
                          </li>

                      </ul>
                      <div class="mt-5 md:mt-[35px] min-[992px]:mt-[55px]">
                          <h5 class="uppercase  dark:text-[white] text-[22px] pb-[15px] min-[576px]:text-[28px]">leave comment</h5>
                          <form>
                              <div class="mb-4">
                                  <input type="text" class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white  dark:bg-transparent dark:text-[white] text-gray-800    border_botton" placeholder="Enter Your Full Name" required>
                              </div>
                            
                              <div class="mb-4">
                                  <input type="text" class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white dark:bg-transparent dark:text-[white] text-gray-800 border border-gray-200 " placeholder="Enter Your Email Address" required>
                              </div>
                              <div class="mb-4">
                                  <textarea placeholder="Write A Message" class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white dark:bg-transparent dark:text-[white] text-gray-800  border-gray-200 " required></textarea>
                              </div>
                              <div class="mb-4 pt-4 ">
                                  <button class="bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] shadow-[0.872px_9.962px_20px_0px_rgba(12,78,165,0.3)] font-semibold text-white inline-block cursor-pointer w-auto h-auto px-[35px] py-[11px] rounded-[50px] border-0 hover:text-white hover:shadow-[1px_10px_20px_0px_rgba(12,78,165,0.43)]" type="submit">Submit Now</button>
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
                              class="w-auto min-w-[130px] h-10 rounded-[20px] border-none dark:text-[white] text-white outline-none search_btn"><i
                                  class="fa fa-search mr-[5px] normal_icon"></i>Search</button>
                      </form>
                  </div>
                  <div
                      class=" mb-8 pt-8 pb-[30px] px-[30px] bg-white dark:bg-[#262950] shadow-[0px_5px_20px_0px_rgba(78,64,128,0.1)] py-[30px] rounded-[20px]">
                      <h5 class="dark:text-[white]">categories</h5>
                      <ul class="mt-[9px]">
                          <li class="p-0 dark:border-b-[rgba(256,256,256,0.15)] border-b-[rgba(0,0,0,0.155)] border-b border-dashed">
                              <NuxtLink to="#"
                                  class="flex flex-wrap justify-between text-[#333333] dark:text-[white]  text-base px-0 pb-1.5 pt-0 hover:text-[#5650ce] no-underline">
                                  <span>Showtimes & Tickets</span><span>50</span>
                              </NuxtLink>
                          </li>
                          <li class="p-0 dark:border-b-[rgba(256,256,256,0.15)] border-b-[rgba(0,0,0,0.155)] border-b border-dashed">
                              <NuxtLink to="#"
                                  class="flex flex-wrap justify-between text-[#333333] dark:text-[white]  text-base px-0 py-1.5 hover:text-[#5650ce] no-underline">
                                  <span>Latest Trailers</span><span>43</span>
                              </NuxtLink>
                          </li>
                          <li class="p-0 dark:border-b-[rgba(256,256,256,0.15)] border-b-[rgba(0,0,0,0.155)] border-b border-dashed">
                              <NuxtLink to="#"
                                  class="flex flex-wrap justify-between text-[#333333] dark:text-[white]  text-base px-0 py-1.5 hover:text-[#5650ce] no-underline">
                                  <span>Coming Soon </span><span>34</span>
                              </NuxtLink>
                          </li>
                          <li class="p-0 dark:border-b-[rgba(256,256,256,0.15)] border-b-[rgba(0,0,0,0.155)] border-b border-dashed">
                              <NuxtLink to="#"
                                  class="flex flex-wrap justify-between text-[#333333] dark:text-[white]  text-base px-0 py-1.5 hover:text-[#5650ce] no-underline">
                                  <span>In Theaters</span><span>63</span>
                              </NuxtLink>
                          </li>
                          <li class="p-0 dark:border-b-[rgba(256,256,256,0.15)] border-b-[rgba(0,0,0,0.155)] border-b border-dashed">
                              <NuxtLink to="#"
                                  class="flex flex-wrap justify-between text-[#333333] dark:text-[white]  text-base px-0 py-1.5 hover:text-[#5650ce] no-underline">
                                  <span>Release Calendar </span><span>11</span>
                              </NuxtLink>
                          </li>
                          <li class="p-0 dark:border-b-[rgba(256,256,256,0.15)] border-b-[rgba(0,0,0,0.155)] border-b border-dashed">
                              <NuxtLink to="#"
                                  class="flex flex-wrap justify-between text-[#333333] dark:text-[white]  text-base px-0 py-1.5 hover:text-[#5650ce] no-underline">
                                  <span>Stars</span><span>30</span>
                              </NuxtLink>
                          </li>
                          <li class="p-0 dark:border-b-[rgba(256,256,256,0.15)] border-b-[rgba(0,0,0,0.155)] border-b-0 border-dashed">
                              <NuxtLink to="#"
                                  class="flex flex-wrap justify-between text-[#333333] dark:text-[white]  text-base px-0 py-1.5 hover:text-[#5650ce] no-underline">
                                  <span>Horror Movie </span><span>55</span>
                              </NuxtLink>
                          </li>
                      </ul>
                  </div>
                  <div
                      class="relative mb-8 pt-[31px] pb-[21px] px-[30px] bg-white dark:bg-[#262950] shadow-[0px_5px_20px_0px_rgba(78,64,128,0.1)] py-[30px] rounded-[20px]">
                      <div style="display: block;" class="owl-carousel owl-theme h-[21rem]">
                            
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
                              <i class="fa fa-envelope normal_icon mr-2" aria-hidden="true"></i>Send</button>
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
import ImageSlider from '@/components/PublicUI/blog/ImageSlider'
import Breadcrumb from '~~/components/PublicUI/Breadcrumb.vue';
import img from '@/assets/frontend/images/blog/blogs/06.jpg'
const data = {
    "title": "How to Spot Red Flags in a Potential Partner",
    "intro": "When it comes to dating, it's important to be aware of potential red flags in a potential partner. These red flags can signal potential issues or problems down the road, and being able to spot them early on can save you a lot of time and heartache. In this blog post, we'll explore some common red flags to look out for in a potential partner.",
    content: [
        {
            heading: "Lack of Communication",
            description: "Communication is key in any relationship. If a potential partner is consistently unresponsive or fails to communicate effectively, it could be a sign that they are not invested in the relationship."
        },
        {
            heading: "Selfishness",
            description: "If a potential partner consistently puts their needs above yours, it could be a red flag that they are not interested in building a mutually fulfilling relationship."
        },
        {
            heading: "Dishonesty",
            description: "Dishonesty is a major red flag in any relationship. If a potential partner is lying about small things, it could indicate that they are not trustworthy or may be hiding something more significant."
        },
        {
            heading: "Controlling Behavior",
            description: "Controlling behavior can take many forms, from trying to dictate your schedule to monitoring your social media. If a potential partner is displaying controlling behavior, it's important to address it early on to prevent it from becoming a more significant issue."
        },
        {
            heading: "Disrespectful Behavior",
            description: "If a potential partner is consistently disrespectful towards you or others, it's a major red flag. Disrespectful behavior can be a sign of deeper issues or a lack of empathy, which can lead to problems down the road."
        },
        {
            heading: "Inconsistent Behavior",
            description: "If a potential partner's behavior is inconsistent or unpredictable, it can be challenging to build a stable and healthy relationship. It's essential to pay attention to any patterns of inconsistency early on."
        }
    ],
    "conclusion": "In conclusion, being able to spot red flags in a potential partner is essential to building a healthy and fulfilling relationship. By paying attention to communication, selfishness, dishonesty, controlling behavior, disrespectful behavior, and inconsistency, you can make informed decisions about who to pursue a relationship with. Remember to trust your gut and prioritize your own needs and well-being in the dating process."
}


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

input,textarea{
  border:none !important;
  border-bottom:1px solid gray !important;
  background: transparent !important;
  border-radius: 0 !important;
}
input:focus{
  border:none !important;
  border-color: rgb(238, 145, 5) !important;

}
input:hover,textarea:hover{
  border-color: rgb(238, 145, 5) !important;

}





</style>