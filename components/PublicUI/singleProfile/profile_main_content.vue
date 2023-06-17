<template>
    <div>
        <div class="profile-main-content">
            <ul class="block text-center">
                <li class="inline-block m-0.5">
                    <NuxtLink to="#" class="font-semibold text-xs leading-3 uppercase border pt-[5px] pb-[3px] px-1.5 rounded-[50px] border-solid border-[rgba(0,0,0,0.2)] bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-white hover:bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white">
                        Personal
                    </NuxtLink>
                </li>
                <li class="inline-block m-0.5">
                    <NuxtLink to="#" class="dark:text-gray-50 text-[#333] font-semibold text-xs leading-3 uppercase border pt-[5px] pb-[3px] px-1.5 rounded-[50px] border-solid border-[rgba(0,0,0,0.2)] active:bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] active:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] active:text-white hover:bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white">
                        Favorites
                    </NuxtLink>
                </li>
                <li class="inline-block m-0.5">
                    <NuxtLink to="#" class="dark:text-gray-50 text-[#333] font-semibold text-xs leading-3 uppercase border pt-[5px] pb-[3px] px-1.5 rounded-[50px] border-solid border-[rgba(0,0,0,0.2)] active:bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] active:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] active:text-white hover:bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white">
                        Friends
                    </NuxtLink>
                </li>
                <li class="inline-block m-0.5">
                    <NuxtLink href="#" class="dark:text-gray-50 text-[#333] font-semibold text-xs leading-3 uppercase border pt-[5px] pb-[3px] px-1.5 rounded-[50px] border-solid border-[rgba(0,0,0,0.2)] active:bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] active:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] active:text-white hover:bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white">
                        Groups
                    </NuxtLink>
                </li>
                <li class="inline-block m-0.5">
                    <select class="relative min-w-[105px] inline-block bg-[none] dark:bg-[#262950] dark:text-white  border cursor-pointer text-sm h-[22px] leading-5 pl-2.5 pr-[15px] p-0 rounded-[50px] border-solid border-[rgba(0,0,0,0.2)]">
                        <option value="" class=" active:text-xs active:uppercase active:leading-3 block text-xs uppercase min-h-[30px] leading-[30px] px-[5px] py-0" >ALL</option>
                        <option value="" class=" active:text-xs active:uppercase active:leading-3 block text-xs uppercase min-h-[30px] leading-[30px] px-[5px] py-0">NEW</option>
                        <option value="" class=" active:text-xs active:uppercase active:leading-3 block text-xs uppercase min-h-[30px] leading-[30px] px-[5px] py-0">OLD</option>
                        <option value="" class=" active:text-xs active:uppercase active:leading-3 block text-xs uppercase min-h-[30px] leading-[30px] px-[5px] py-0">POPULAR</option>
                    </select>
                </li>
            </ul>
            <div class="bg-white dark:bg-[#262950] mt-5 pt-[30px] pb-[29px] px-[30px] rounded-[10px]">
                <div class="relative">
                    <img src="@/assets/frontend/images/profile/profile-user-sm.png" class="absolute w-10 h-10 rounded-[50%] left-3 top-3" alt="">
                    <textarea placeholder="What's on your mind,Vernon" class="h-[100px] pl-[60px] w-full pr-0 pt-2 dark:bg-[#262950] rounded-none border-b-[rgba(0,0,0,0.2)] border-x-0 border-t border-b border-solid"></textarea>
                </div>
                <div class="flex justify-between items-center pt-[13px]">
                    <div class="flex items-center">
                        <div>
                            <NuxtLink href="#" class="h-[30px] w-[60px] leading-[30px] bg-[#f7e9f8] dark:bg-[#202342]  inline-block text-center mr-[5px] rounded-[20px]">
                                <i class="fas fa-paperclip bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)]"></i>
                            </NuxtLink>
                        </div>
                        <div class="inline-block">
                            <select class="relative min-w-[105px] inline-block bg-[none] border cursor-pointer text-base h-[30px] leading-7 pl-2.5 pr-[15px] p-0 rounded-[50px] border-solid border-[rgba(0,0,0,0.2)] ">
                                <option value="" class=" active:text-xs active:uppercase active:leading-3 block text-base min-h-[30px] leading-[30px] px-[5px] py-0">Public</option>
                                <option value="" class=" active:text-xs active:uppercase active:leading-3 block text-base min-h-[30px] leading-[30px] px-[5px] py-0">Friends</option>
                                <option value="" class=" active:text-xs active:uppercase active:leading-3 block text-base min-h-[30px] leading-[30px] px-[5px] py-0">Only me</option>
                            </select>
                        </div>

                    </div>
                    <div>
                        <a href="#" class="h-[30px] leading-[30px] px-5 py-0  bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] shadow-[0.872px_9.962px_20px_0px_rgba(12,78,165,0.3)] font-semibold text-white inline-block cursor-pointer w-auto  rounded-[50px] border-0 hover:text-white hover:shadow-[1px_10px_20px_0px_rgba(12,78,165,0.43)]">
                            Post
                        </a>
                    </div>
                </div>
            </div>
            <div class="bg-white dark:bg-[#262950] mt-[30px] pt-[30px] pb-[29px] px-[30px] rounded-[10px]">
                <div>
                    <div class="inline-block relative">
                        <img src="@/assets/frontend/images/profile/profile-user-sm.png" class=" w-10" alt="">
                        <div class="absolute w-[15px] h-[15px] bg-[#1ce36f] rounded-[50%] border-[3px] border-solid border-white -right-0.5 -bottom-0.5"></div>
                    </div>
                    <h6 class="dark:text-white text-lg leading-7 font-semibold inline-block ml-[15px] mr-[5px] mb-0">
                        Albert Don
                    </h6>
                    <span class="w-5 h-5 bg-[#fce9f3] inline-block text-center leading-[15px] relative rounded-[50%] -top-0.5">
                        <i class="fas fa-check bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-[10px]"></i>
                    </span>
                    <span class="text-sm mx-2.5">
                        @albertdon
                    </span>
                    <span class="text-sm">
                        . 19h
                    </span>
                </div>
                <div class="pl-[60px] pt-[23px]">
                    <p class="block mb-5">
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Nam vel porta felis.
                    </p>
                </div>
                <div class="sm:flex sm:justify-between block mt-[26px] pt-[30px] border-t-[rgba(0,0,0,0.1)] border-t border-solid">
                    <div class="flex items-center gap-4 justify-center mb-5 " >
                        <div>

                            <a href="#" class="border text-sm leading-[30px] h-[30px] dark:text-gray-50 text-[#333] mr-3.5 px-[15px] py-0 rounded-[50px] border-solid border-[rgba(0,0,0,0.2)] bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)]">Comment</a>
                        </div>
                        <div>

                            <a href="#" class="h-[30px] w-10 leading-[30px] bg-[#f7e9f8] inline-block text-center mr-[5px] rounded-[10px]"><i class="far fa-star text-[15px] "></i></a>
                        </div>
                    </div>
                    <div class="flex items-center gap-8 justify-center mb-5 ">
                        <div>
                            <select class="relative min-w-[100px] inline-block bg-[none] border cursor-pointer text-sm h-[30px] leading-[30px] mr-[19px] pl-2.5 pr-[15px] p-0 rounded-[50px] border-solid border-[rgba(0,0,0,0.2)] top-0">
                                <option value="" class=" active:text-xs active:uppercase active:leading-3 block text-xs uppercase min-h-[30px] leading-[30px] px-[5px] py-0">ALL</option>
                                <option value="" class=" active:text-xs active:uppercase active:leading-3 block text-xs uppercase min-h-[30px] leading-[30px] px-[5px] py-0">NEW</option>
                                <option value="" class=" active:text-xs active:uppercase active:leading-3 block text-xs uppercase min-h-[30px] leading-[30px] px-[5px] py-0">OLD</option>
                                <option value="" class=" active:text-xs active:uppercase active:leading-3 block text-xs uppercase min-h-[30px] leading-[30px] px-[5px] py-0">POPULAR</option>
                            </select>
                        </div>
                        <div>
                            <a href="#" class="h-[30px] w-10 leading-[30px] bg-[#f7e9f8] inline-block text-center mr-[5px] rounded-[10px]"><i class="far fa-star text-[15px] "></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div  class="bg-white dark:bg-[#262950] mt-[30px] pt-[30px] pb-[29px] px-[30px] rounded-[10px]" >
                <div>
                    <div class="inline-block relative">
                        <img src="@/assets/frontend/images/profile/profile-user-sm.png" class=" w-10" alt="">
                        <div class="absolute w-[15px] h-[15px] bg-[#1ce36f] rounded-[50%] border-[3px] border-solid border-white -right-0.5 -bottom-0.5"></div>
                    </div>
                    <h6 class="dark:text-white text-lg leading-7 font-semibold inline-block ml-[15px] mr-[5px] mb-0">
                        Albert Don
                    </h6>
                    <span class="w-5 h-5 bg-[#fce9f3] inline-block text-center leading-[15px] relative rounded-[50%] -top-0.5  ">
                        <i class="fas fa-check bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-[10px]"></i>
                    </span>
                    <span class="text-sm mx-2.5">
                        @albertdon
                    </span>
                    <span class="text-sm">
                        . 19h
                    </span>
                </div>
                <div class="pl-[60px] pt-[23px]">
                    <p class="block mb-5">
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Nam vel porta felis.
                    </p>
                    <img src="@/assets/frontend/images/profile/s-p-img1.jpg" class="w-full mb-1" alt="">
                </div>
                <div class="sm:flex sm:justify-between block mt-[26px] pt-[30px] border-t-[rgba(0,0,0,0.1)] border-t border-solid">
                    <div class="flex items-center gap-4 justify-center mb-5 " >
                        <div>

                            <a href="#" class="border text-sm leading-[30px] h-[30px] dark:text-gray-50 text-[#333] mr-3.5 px-[15px] py-0 rounded-[50px] border-solid border-[rgba(0,0,0,0.2)] bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)]">Comment</a>
                        </div>
                        <div>

                            <a href="#" class="h-[30px] w-10 leading-[30px] bg-[#f7e9f8] inline-block text-center mr-[5px] rounded-[10px]"><i class="far fa-star text-[15px] "></i></a>
                        </div>
                    </div>
                    <div class="flex items-center gap-8 justify-center mb-5 ">
                        <div>
                            <select class="relative min-w-[100px] inline-block bg-[none] border cursor-pointer text-sm h-[30px] leading-[30px] mr-[19px] pl-2.5 pr-[15px] p-0 rounded-[50px] border-solid border-[rgba(0,0,0,0.2)] top-0">
                                <option value="" class=" active:text-xs active:uppercase active:leading-3 block text-xs uppercase min-h-[30px] leading-[30px] px-[5px] py-0">ALL</option>
                                <option value="" class=" active:text-xs active:uppercase active:leading-3 block text-xs uppercase min-h-[30px] leading-[30px] px-[5px] py-0">NEW</option>
                                <option value="" class=" active:text-xs active:uppercase active:leading-3 block text-xs uppercase min-h-[30px] leading-[30px] px-[5px] py-0">OLD</option>
                                <option value="" class=" active:text-xs active:uppercase active:leading-3 block text-xs uppercase min-h-[30px] leading-[30px] px-[5px] py-0">POPULAR</option>
                            </select>
                        </div>
                        <div>
                            <a href="#" class="h-[30px] w-10 leading-[30px] bg-[#f7e9f8] inline-block text-center mr-[5px] rounded-[10px]"><i class="far fa-star text-[15px] "></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div  class="bg-white dark:bg-[#262950] mt-[30px] pt-[30px] pb-[29px] px-[30px] rounded-[10px]">
                <div>
                    <div class="inline-block relative">
                        <img src="@/assets/frontend/images/profile/profile-user-sm.png" class=" w-10" alt="">
                        <div class="absolute w-[15px] h-[15px] bg-[#1ce36f] rounded-[50%] border-[3px] border-solid border-white -right-0.5 -bottom-0.5"></div>
                    </div>
                    <h6 class="dark:text-white text-lg leading-7 font-semibold inline-block ml-[15px] mr-[5px] mb-0">
                        Albert Don
                    </h6>
                    <span class="w-5 h-5 bg-[#fce9f3] inline-block text-center leading-[15px] relative rounded-[50%] -top-0.5 ">
                        <i class="fas fa-check bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-[10px]"></i>
                    </span>
                    <span class="text-sm mx-2.5">
                        @albertdon
                    </span>
                    <span class="text-sm">
                        . 19h
                    </span>
                </div>
                <div class="pl-[60px] pt-[23px]">
                    <p class="block mb-5">
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Nam vel porta felis.
                    </p>
                </div>
                <div class="sm:flex sm:justify-between block mt-[26px] pt-[30px] border-t-[rgba(0,0,0,0.1)] border-t border-solid">
                    <div class="flex items-center gap-4 justify-center mb-5 " >
                        <div>

                            <a href="#" class="border text-sm leading-[30px] h-[30px] dark:text-gray-50 text-[#333] mr-3.5 px-[15px] py-0 rounded-[50px] border-solid border-[rgba(0,0,0,0.2)] bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)]">Comment</a>
                        </div>
                        <div>

                            <a href="#" class="h-[30px] w-10 leading-[30px] bg-[#f7e9f8] inline-block text-center mr-[5px] rounded-[10px]"><i class="far fa-star text-[15px] "></i></a>
                        </div>
                    </div>
                    <div class="flex items-center gap-8 justify-center mb-5 ">
                        <div>
                            <select class="relative min-w-[100px] inline-block bg-[none]  border cursor-pointer text-sm h-[30px] leading-[30px] mr-[19px] pl-2.5 pr-[15px] p-0 rounded-[50px] border-solid border-[rgba(0,0,0,0.2)] top-0">
                                <option value="" class=" active:text-xs active:uppercase active:leading-3 block text-xs uppercase min-h-[30px] leading-[30px] px-[5px] py-0">ALL</option>
                                <option value="" class=" active:text-xs active:uppercase active:leading-3 block text-xs uppercase min-h-[30px] leading-[30px] px-[5px] py-0">NEW</option>
                                <option value="" class=" active:text-xs active:uppercase active:leading-3 block text-xs uppercase min-h-[30px] leading-[30px] px-[5px] py-0">OLD</option>
                                <option value="" class=" active:text-xs active:uppercase active:leading-3 block text-xs uppercase min-h-[30px] leading-[30px] px-[5px] py-0">POPULAR</option>
                            </select>
                        </div>
                        <div>
                            <a href="#" class="h-[30px] w-10 leading-[30px] bg-[#f7e9f8] inline-block text-center mr-[5px] rounded-[10px]"><i class="far fa-star text-[15px] "></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" class="bg-white dark:bg-[#262950] shadow-[0px_10px_30px_0px_rgba(61,83,209,0.2)] block text-[#333] text-center h-10 font-semibold dark:text-[white] text-base leading-10 mt-[30px] rounded-[50px] hover:bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white">Load More..</a>
        </div>
    </div>
</template>


<style scoped>
i {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: -o-linear-gradient(284deg, rgb(242, 40, 118) 0%, rgb(148, 45, 217) 100%);
    background-image: linear-gradient(166deg, rgb(242, 40, 118) 0%, rgb(148, 45, 217) 100%);
}</style>