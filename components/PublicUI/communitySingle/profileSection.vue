<template>
  <div>
    <section class="px-0 py-[120px] mt-[-150px] pt-0">
      <div
        class="w-full mx-auto px-[15px] sm:max-w-[540px] sm:px-4 md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1170px]"
      >
        <div class="flex flex-wrap justify-center">
          <div class="lg:w-1/4 pr-4 pl-4">
            <div class="relative lg:top-14 sm:top-48 top-40">
              <div>
                <div>
                  <img
                    src="@/assets/frontend/images/cummunity/s-m-profile.png"
                    class="w-full"
                    alt=""
                  />
                </div>
                <div class="mt-[22px]">
                  <p class="text-base leading-[26px]">6 days ago</p>
                  <h4
                    class="dark:text-[white] text-2xl leading-[34px] font-semibold mb-[18px] mt-4"
                  >
                    Easy Way to Dating
                  </h4>
                  <p class="text-base leading-[26px]">
                    Love for one another and love for yourself is priceless.
                  </p>
                  <p class="text-sm leading-6 mt-5">
                    <i
                      class="fas fa-globe-americas bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] mr-[5px]"
                    ></i
                    >Public Group
                  </p>
                </div>
                <div class="mt-7">
                  <h4
                    class="dark:text-[white] title text-xl leading-[30px] font-semibold mb-[15px]"
                  >
                    Group Admins
                  </h4>
                  <a href="#" class="inline-block">
                    <img
                      src="@/assets/frontend/images/cummunity/group-admin.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:w-1/2 pr-4 pl-4">
            <div
              class="border mt-[200px] pt-2.5 pb-[30px] rounded-[20px] border-solid border-[rgba(0,0,0,0.06)] bg-[#F4F8FD] dark:bg-[#2b2f5f] px-[30px]"
            >
              <div
                class="bg-white dark:bg-[#262950] mt-5 pt-[30px] pb-[29px] px-[30px] rounded-[10px]"
              >
                <div class="relative">
                  <img
                    src="@/assets/frontend/images/profile/profile-user-sm.png"
                    class="absolute w-10 h-10 rounded-[50%] left-3 top-3"
                    alt=""
                  />
                  <textarea
                    placeholder="What's on your mind,Vernon"
                    class="h-[100px] pl-[60px] w-full pr-0 pt-2 dark:bg-[#262950] rounded-none border-b-[rgba(0,0,0,0.2)] dark:border-b-[rgba(256,256,256,0.15)] border-x-0 border-t border-b border-solid"
                  ></textarea>
                </div>
                <div class="flex justify-between items-center pt-[13px]">
                  <div class="flex items-center">
                    <div>
                      <NuxtLink
                        href="#"
                        class="h-[30px] w-[60px] leading-[30px] bg-[#f7e9f8] dark:bg-[#202342] inline-block text-center mr-[5px] rounded-[20px]"
                      >
                        <i
                          class="fas fa-paperclip bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)]"
                        ></i>
                      </NuxtLink>
                    </div>
                    <div class="inline-block">
                      <div
                        @click="showHidetype"
                        class="w-[7rem] cursor-pointer px-4 py-1 bg-transparent dark:bg-[#262950] dark:text-white leading-[26px] border h-auto rounded-[50px] border-solid border-[rgba(0,0,0,0.1)] flex items-center justify-between bg-blue-500 font-thin bg-[rgb(238,243,251)] dark:bg-slate-700 dark:text-gray-50 cursor-pointer text-sm h-[31px] bg-[#EEF3FB] ml-1"
                      >
                        <div
                          class="font-semibold cursor-pointer uppercase text-xs"
                        >
                          {{ publishValue }}
                        </div>
                        <div class="">
                          <i
                            class="fa fa-angle-down bg-red-500 text-green normal_icon"
                            aria-hidden="true"
                            v-if="!publishType"
                          ></i>
                          <i
                            class="fa fa-angle-up normal_icon"
                            aria-hidden="true"
                            v-else
                          ></i>
                        </div>
                      </div>
                      <div
                        class="rounded bg-white dark:bg-gray-900 absolute mt-1 shadow z-[1000]"
                        v-if="publishType"
                      >
                        <div
                          class="cursor-pointer p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-[1rem] z-[10] text-sm"
                          v-for="(item, idx) in [
                            'Public',
                            'Friends',
                            'Only me',
                          ]"
                          :key="idx"
                          :class="[item == publishValue ? 'font-bold' : '']"
                          @click="selectPublishType(item)"
                        >
                          {{ item }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a
                      href="#"
                      class="h-[30px] leading-[30px] px-5 py-0 bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] shadow-[0.872px_9.962px_20px_0px_rgba(12,78,165,0.3)] font-semibold text-white inline-block cursor-pointer w-auto rounded-[50px] border-0 hover:text-white hover:shadow-[1px_10px_20px_0px_rgba(12,78,165,0.43)]"
                    >
                      Post
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="bg-white dark:bg-[#262950] mt-[30px] pt-[30px] pb-[29px] px-[30px] rounded-[10px]"
              >
                <div>
                  <div class="inline-block relative">
                    <img
                      src="@/assets/frontend/images/profile/profile-user-sm.png"
                      class="w-10"
                      alt=""
                    />
                    <div
                      class="absolute w-[15px] h-[15px] bg-[#1ce36f] rounded-[50%] border-[3px] border-solid border-white -right-0.5 -bottom-0.5"
                    ></div>
                  </div>
                  <h6
                    class="dark:text-white text-lg leading-7 font-semibold inline-block ml-[15px] mr-[5px] mb-0"
                  >
                    Albert Don
                  </h6>
                  <span
                    class="w-5 h-5 bg-[#fce9f3] inline-block text-center leading-[15px] relative rounded-[50%] -top-0.5"
                  >
                    <i
                      class="fas fa-check bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-[10px]"
                    ></i>
                  </span>
                  <span class="text-sm mx-2.5"> @albertdon </span>
                  <span class="text-sm"> . 19h </span>
                </div>
                <div class="pl-[60px] pt-[23px]">
                  <p class="block mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    vel porta felis.
                  </p>
                </div>
                <div
                  class="sm:flex sm:justify-between block mt-[26px] pt-[30px] border-t-[rgba(0,0,0,0.1)] dark:border-t-[rgba(256,256,256,0.15)] border-t border-solid"
                >
                  <div class="flex items-center gap-4 justify-center mb-5">
                    <div>
                      <a
                        href="#"
                        class="border text-sm leading-[30px] h-[30px] dark:text-gray-50 text-[#333] px-[15px] py-0 rounded-[50px] border-solid border-[rgba(0,0,0,0.2)] bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)]"
                        >Comment</a
                      >
                    </div>
                    <div>
                      <a
                        href="#"
                        class="h-[30px] w-10 leading-[30px] bg-[#f7e9f8] inline-block text-center mr-[5px] rounded-[10px]"
                        ><i class="far fa-star text-[15px]"></i
                      ></a>
                    </div>
                  </div>
                  <div class="flex items-center gap-4 justify-center mb-5">
                    <div>
                     
                      <div
                        @click="showHidePostType"
                        class="w-[7rem] cursor-pointer px-4 py-1 bg-transparent dark:bg-[#262950] dark:text-white leading-[26px] border h-auto rounded-[50px] border-solid border-[rgba(0,0,0,0.2)] flex items-center justify-between bg-blue-500 font-thin bg-[rgb(238,243,251)] dark:bg-slate-700 dark:text-gray-50 cursor-pointer text-sm h-[31px] bg-[#EEF3FB] ml-1"
                      >
                        <div
                          class="font-semibold cursor-pointer uppercase text-xs"
                        >
                          {{ posttyeValue }}
                        </div>
                        <div class="">
                          <i
                            class="fa fa-angle-down bg-red-500 text-green normal_icon"
                            aria-hidden="true"
                            v-if="!postType"
                          ></i>
                          <i
                            class="fa fa-angle-up normal_icon"
                            aria-hidden="true"
                            v-else
                          ></i>
                        </div>
                      </div>
                      <div
                        class="rounded bg-white dark:bg-gray-900 absolute mt-1 shadow z-[1000]"
                        v-if="postType"
                      >
                        <div
                          class="cursor-pointer p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-[1rem] z-[10] text-sm"
                          v-for="(item, idx) in [
                            'All',
                            'New',
                            'Old',
                            'Popular'
                          ]"
                          :key="idx"
                          :class="[item == posttyeValue ? 'font-bold' : '']"
                          @click="selectPostType(item)"
                        >
                          {{ item }}
                        </div>
                      </div>
                    </div>
                    <div>
                      <a
                        href="#"
                        class="h-[30px] w-10 leading-[30px] bg-[#f7e9f8] inline-block text-center mr-[5px] rounded-[10px]"
                        ><i class="far fa-star text-[15px]"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="bg-white dark:bg-[#262950] mt-[30px] pt-[30px] pb-[29px] px-[30px] rounded-[10px]"
              >
                <div>
                  <div class="inline-block relative">
                    <img
                      src="@/assets/frontend/images/profile/profile-user-sm.png"
                      class="w-10"
                      alt=""
                    />
                    <div
                      class="absolute w-[15px] h-[15px] bg-[#1ce36f] rounded-[50%] border-[3px] border-solid border-white -right-0.5 -bottom-0.5"
                    ></div>
                  </div>
                  <h6
                    class="dark:text-white text-lg leading-7 font-semibold inline-block ml-[15px] mr-[5px] mb-0"
                  >
                    Albert Don
                  </h6>
                  <span
                    class="w-5 h-5 bg-[#fce9f3] inline-block text-center leading-[15px] relative rounded-[50%] -top-0.5"
                  >
                    <i
                      class="fas fa-check bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-[10px]"
                    ></i>
                  </span>
                  <span class="text-sm mx-2.5"> @albertdon </span>
                  <span class="text-sm"> . 19h </span>
                </div>
                <div class="pl-[60px] pt-[23px]">
                  <p class="block mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    vel porta felis.
                  </p>
                  <img
                    src="@/assets/frontend/images/profile/s-p-img1.jpg"
                    class="w-full mb-1"
                    alt=""
                  />
                </div>
                <div
                  class="sm:flex sm:justify-between block mt-[26px] pt-[30px] border-t-[rgba(0,0,0,0.1)] dark:border-t-[rgba(256,256,256,0.15)] border-t border-solid"
                >
                  <div class="flex items-center gap-4 justify-center mb-5">
                    <div>
                      <a
                        href="#"
                        class="border text-sm leading-[30px] h-[30px] dark:text-gray-50 text-[#333] px-[15px] py-0 rounded-[50px] border-solid border-[rgba(0,0,0,0.2)] bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)]"
                        >Comment</a
                      >
                    </div>
                    <div>
                      <a
                        href="#"
                        class="h-[30px] w-10 leading-[30px] bg-[#f7e9f8] inline-block text-center mr-[5px] rounded-[10px]"
                        ><i class="far fa-star text-[15px]"></i
                      ></a>
                    </div>
                  </div>
                  <div class="flex items-center gap-4 justify-center mb-5">
                    <div>
                     
                      <div
                        @click="showHidePostType"
                        class="w-[7rem] cursor-pointer px-4 py-1 bg-transparent dark:bg-[#262950] dark:text-white leading-[26px] border h-auto rounded-[50px] border-solid border-[rgba(0,0,0,0.2)] flex items-center justify-between bg-blue-500 font-thin bg-[rgb(238,243,251)] dark:bg-slate-700 dark:text-gray-50 cursor-pointer text-sm h-[31px] bg-[#EEF3FB] ml-1"
                      >
                        <div
                          class="font-semibold cursor-pointer uppercase text-xs"
                        >
                          {{ posttyeValue }}
                        </div>
                        <div class="">
                          <i
                            class="fa fa-angle-down bg-red-500 text-green normal_icon"
                            aria-hidden="true"
                            v-if="!postType"
                          ></i>
                          <i
                            class="fa fa-angle-up normal_icon"
                            aria-hidden="true"
                            v-else
                          ></i>
                        </div>
                      </div>
                      <div
                        class="rounded bg-white dark:bg-gray-900 absolute mt-1 shadow z-[1000]"
                        v-if="postType"
                      >
                        <div
                          class="cursor-pointer p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-[1rem] z-[10] text-sm"
                          v-for="(item, idx) in [
                            'All',
                            'New',
                            'Old',
                            'Popular'
                          ]"
                          :key="idx"
                          :class="[item == posttyeValue ? 'font-bold' : '']"
                          @click="selectPostType(item)"
                        >
                          {{ item }}
                        </div>
                      </div>
                    </div>
                    <div>
                      <a
                        href="#"
                        class="h-[30px] w-10 leading-[30px] bg-[#f7e9f8] inline-block text-center mr-[5px] rounded-[10px]"
                        ><i class="far fa-star text-[15px]"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="bg-white dark:bg-[#262950] mt-[30px] pt-[30px] pb-[29px] px-[30px] rounded-[10px]"
              >
                <div>
                  <div class="inline-block relative">
                    <img
                      src="@/assets/frontend/images/profile/profile-user-sm.png"
                      class="w-10"
                      alt=""
                    />
                    <div
                      class="absolute w-[15px] h-[15px] bg-[#1ce36f] rounded-[50%] border-[3px] border-solid border-white -right-0.5 -bottom-0.5"
                    ></div>
                  </div>
                  <h6
                    class="dark:text-white text-lg leading-7 font-semibold inline-block ml-[15px] mr-[5px] mb-0"
                  >
                    Albert Don
                  </h6>
                  <span
                    class="w-5 h-5 bg-[#fce9f3] inline-block text-center leading-[15px] relative rounded-[50%] -top-0.5"
                  >
                    <i
                      class="fas fa-check bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-[10px]"
                    ></i>
                  </span>
                  <span class="text-sm mx-2.5"> @albertdon </span>
                  <span class="text-sm"> . 19h </span>
                </div>
                <div class="pl-[60px] pt-[23px]">
                  <p class="block mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    vel porta felis.
                  </p>
                </div>
                <div
                  class="sm:flex sm:justify-between block mt-[26px] pt-[30px] border-t-[rgba(0,0,0,0.1)] dark:border-t-[rgba(256,256,256,0.15)] border-t border-solid"
                >
                  <div class="flex items-center gap-4 justify-center mb-5">
                    <div>
                      <a
                        href="#"
                        class="border text-sm leading-[30px] h-[30px] dark:text-gray-50 text-[#333] px-[15px] py-0 rounded-[50px] border-solid border-[rgba(0,0,0,0.2)] bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)]"
                        >Comment</a
                      >
                    </div>
                    <div>
                      <a
                        href="#"
                        class="h-[30px] w-10 leading-[30px] bg-[#f7e9f8] inline-block text-center mr-[5px] rounded-[10px]"
                        ><i class="far fa-star text-[15px]"></i
                      ></a>
                    </div>
                  </div>
                  <div class="flex items-center gap-4 justify-center mb-5">
                    <div>
                     
                      <div
                        @click="showHidePostType"
                        class="w-[7rem] cursor-pointer px-4 py-1 bg-transparent dark:bg-[#262950] dark:text-white leading-[26px] border h-auto rounded-[50px] border-solid border-[rgba(0,0,0,0.2)] flex items-center justify-between bg-blue-500 font-thin bg-[rgb(238,243,251)] dark:bg-slate-700 dark:text-gray-50 cursor-pointer text-sm h-[31px] bg-[#EEF3FB] ml-1"
                      >
                        <div
                          class="font-semibold cursor-pointer uppercase text-xs"
                        >
                          {{ posttyeValue }}
                        </div>
                        <div class="">
                          <i
                            class="fa fa-angle-down bg-red-500 text-green normal_icon"
                            aria-hidden="true"
                            v-if="!postType"
                          ></i>
                          <i
                            class="fa fa-angle-up normal_icon"
                            aria-hidden="true"
                            v-else
                          ></i>
                        </div>
                      </div>
                      <div
                        class="rounded bg-white dark:bg-gray-900 absolute mt-1 shadow z-[1000]"
                        v-if="postType"
                      >
                        <div
                          class="cursor-pointer p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-[1rem] z-[10] text-sm"
                          v-for="(item, idx) in [
                            'All',
                            'New',
                            'Old',
                            'Popular'
                          ]"
                          :key="idx"
                          :class="[item == posttyeValue ? 'font-bold' : '']"
                          @click="selectPostType(item)"
                        >
                          {{ item }}
                        </div>
                      </div>
                    </div>
                    <div>
                      <a
                        href="#"
                        class="h-[30px] w-10 leading-[30px] bg-[#f7e9f8] inline-block text-center mr-[5px] rounded-[10px]"
                        ><i class="far fa-star text-[15px]"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full bg-white mt-[30px]  flex justify-center items-center py-[6px] rounded-full  shadow-[0px_5px_10px_0px_rgba(143,175,202,0.5)]
cursor-pointer hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white
">
                <div class="text-[16px] font-semibold	">
                    Load More...
                </div>
              </div>
            </div>
          </div>
          <div class="lg:w-1/4 sm:w-1/2 pr-4 pl-4">
            <div class="pt-10 lg:mt-48">
              <div
                class="bg-white dark:bg-[#262950] shadow-[0px_5px_20px_0px_rgba(78,64,128,0.1)] px-5 py-[30px] rounded-[20px]"
              >
                <form action="#" class="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    class="w-full dark:bg-transparent dark:text-white h-10 border pl-[45px] pr-5 py-0 rounded-[50px] border-solid border-[rgba(0,0,0,0.15)] dark:border-b-[rgba(256,256,256,0.15)]"
                  />
                  <button
                    type="submit"
                    class="absolute bg-[none] w-10 h-10 text-sm text-[#777] rounded-[50%] border-0 left-1 top-0"
                  >
                    <i class="fas fa-search"></i>
                  </button>
                </form>
              </div>
              <div
                class="bg-white dark:bg-[#262950] shadow-[0px_5px_20px_0px_rgba(78,64,128,0.1)] mt-[30px] pt-[30px] pb-6 px-5 rounded-[20px]"
              >
                <h4
                  class="dark:text-[white] text-2xl leading-[34px] font-semibold block mb-3.5 pb-[9px] border-b-[rgba(0,0,0,0.15)] dark:border-b-[rgba(256,256,256,0.15)] border-b border-solid"
                >
                  Recent Members
                </h4>
                <ul class="grid grid-cols-5">
                  <li class="inline-block" v-for="index in 5" :key="index">
                    <a href="#">
                      <img
                        src="@/assets/frontend/images/cummunity/r-m-1.png"
                        class="rounded-[50%]"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div
                class="bg-white dark:bg-[#262950] shadow-[0px_5px_20px_0px_rgba(78,64,128,0.1)] mt-[30px] pt-[30px] pb-[11px] px-0 rounded-[20px]"
              >
                <h4
                  class="dark:text-[white] text-2xl leading-[34px] font-semibold block mb-5 pt-0 pb-[9px] px-5 border-b-[rgba(0,0,0,0.15)] dark:border-b-[rgba(256,256,256,0.15)] border-b border-solid"
                >
                  Recent Members
                </h4>
                <ul class="flex flex-wrap px-2.5 py-0">
                  <li class="w-6/12 flex-[50%] inline-block mb-0 px-2.5 py-0">
                    <a href="#" class="block mb-5">
                      <img
                        src="@/assets/frontend/images/cummunity/r-p-1.png"
                        class="w-full"
                        alt=""
                      />
                    </a>
                  </li>
                  <li class="w-6/12 flex-[50%] inline-block mb-0 px-2.5 py-0">
                    <a href="#" class="block mb-5">
                      <img
                        src="@/assets/frontend/images/cummunity/r-p-2.png"
                        class="w-full"
                        alt=""
                      />
                    </a>
                  </li>
                  <li class="w-6/12 flex-[50%] inline-block mb-0 px-2.5 py-0">
                    <a href="#" class="block mb-5">
                      <img
                        src="@/assets/frontend/images/cummunity/r-p-3.png"
                        class="w-full"
                        alt=""
                      />
                    </a>
                  </li>
                  <li class="w-6/12 flex-[50%] inline-block mb-0 px-2.5 py-0">
                    <a href="#" class="block mb-5">
                      <img
                        src="@/assets/frontend/images/cummunity/r-p-4.png"
                        class="w-full"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const publishType = ref(false);
const publishValue = ref("Public");
const showHidetype = () => {
  if (publishType.value == true) {
    publishType.value = false;
  } else {
    publishType.value = true;
  }
};
const selectPublishType = (item) => {
  publishType.value = false;
  publishValue.value = item;
};




// post type 

const postType= ref(false)
const posttyeValue= ref('All')
const showHidePostType = ()=>{
    if(postType.value==false){
        postType.value=true
    }else {
        postType.value=false

    }
}
const selectPostType=(item)=>{
    postType.value=false
    posttyeValue.value=item
}
</script>

<style scoped>
i {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: -o-linear-gradient(
    284deg,
    rgb(242, 40, 118) 0%,
    rgb(148, 45, 217) 100%
  );
  background-image: linear-gradient(
    166deg,
    rgb(242, 40, 118) 0%,
    rgb(148, 45, 217) 100%
  );
}

.normal_icon {
  background-image: -o-linear-gradient(
    284deg,
    rgb(158, 158, 158) 0%,
    rgb(158, 158, 158) 100%
  );
  background-image: linear-gradient(
    166deg,
    rgb(158, 158, 158) 0%,
    rgb(158, 158, 158) 100%
  );
}
</style>
