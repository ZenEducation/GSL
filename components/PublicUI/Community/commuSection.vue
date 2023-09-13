<template>
  <div>
    <section class="dark:bg-slate-800 dark:text-gray-50">
      <div
        class="w-full mx-auto px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1170px]"
      >
        <div class="flex flex-wrap">
          <div class="w-full pr-4 pl-4">
            <div
              class="sm:flex sm:justify-between block mb-[30px] px-0 py-5 border-y-[rgba(0,0,0,0.1)] border-t border-solid border-b"
            >
              <div class="flex justify-center content-center h-10">
                <div
                  @click="filterShow = true"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                  class="cursor-pointer bg-[rgb(238,243,251)] dark:bg-slate-600 shadow-[0px_5px_10px_0px_rgba(143,175,202,0.5)] text-[#333] dark:text-gray-50 px-[30px] py-1.5 rounded-[50px]"
                >
                  <i
                    class="fas fa-sliders-h bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] mr-1"
                  ></i>
                  Filter your search
                </div>
              </div>
              <div class="flex justify-center content-center h-10">
                <div
                  class="flex content-center items-center text-base leading-[26px] relative mr-[7px]"
                >
                  Order By :
                </div>
               

                <div
                
                @click="orderedbyShowHide"
                class=" w-[10rem] cursor-pointer px-4 py-1  bg-transparent dark:bg-[#262950] dark:text-white leading-[26px] border h-auto   rounded-[50px] border-solid border-[rgba(0,0,0,0.1)] flex items-center justify-between bg-blue-500 font-thin bg-[rgb(238,243,251)] shadow-[0px_5px_10px_0px_rgba(143,175,202,0.5)] dark:bg-slate-700 dark:text-gray-50 cursor-pointer text-sm h-[35px] bg-[#EEF3FB]">
                  <div
                    class=" font-semibold cursor-pointer uppercase text-sm"
                  
                  >
                    {{ orderedBySelected }}
                  </div>
                  <div class="">
                    <i class="fa fa-angle-down bg-red-500 text-green normal_icon"    aria-hidden="true" v-if="!orderBy"></i>
                    <i class="fa fa-angle-up normal_icon" aria-hidden="true" v-else></i>
                </div>
             



               
                </div>
                <div
                    class="rounded bg-white dark:bg-gray-900 absolute mt-12 shadow ml-12 z-[1000]"
                    v-if="orderBy"
                  >
                    <div
                      class="cursor-pointer p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-[1rem] z-[10] uppercase text-sm"
                      v-for="(item, idx) in [ 'Latest Active', 'NEW','OLD','POPULAR']"
                      :key="idx"
                      :class="[item == orderedBySelected ? 'font-bold' :'' ]"
                      @click="selectOrdedBy(item)"
                    >
                      {{ item }}
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap">
          <div
            class="lg:w-1/3 md:w-1/2 pr-4 pl-4"
            v-for="(data, index) in 6"
            :key="index"
          >
            <div class="group">
              <div
                class="shadow-[0px_5px_30px_0px_rgba(86,47,218,0.1)] mb-[30px] bg-white dark:bg-slate-700 dark:text-gray-50 overflow-hidden transition-all duration-[ease] delay-[0.3s] hover:transition-all hover:duration-[ease] hover:delay-[0.3s] rounded-[20px] hover:shadow-[0px_10px_50px_0px_rgb(176,164,226)] hover:translate-y-[-5px] "
              >
                <div class="overflow-hidden">
                  <img
                    src="https://pixner.net/peyamba/peyamba/assets/images/cummunity/img1.jpg"
                    class="w-full transition-all duration-[linear] delay-[0.1s] group-hover:scale-125 duration"
                    alt=""
                  />
                </div>
                <div class="relative pt-[23px] pb-[25px] px-[30px]">
                  <p class="mb-2">6 days ago</p>
                  <NuxtLink
                    to="/communitysingle"
                    class="text-2xl leading-[34px] font-bold block dark:text-gray-50 text-[#333333] mb-[18px]"
                  >
                    Philosophy of love
                  </NuxtLink>
                  <p class="mb-0">
                    Love for one another and love for yourself is priceless.
                  </p>
                </div>
                <div
                  class="flex justify-between items-center p-[30px] border-t-[rgba(0,0,0,0.1)] dark:border-t-white border-t border-solid"
                >
                  <div>
                    <i
                      class="text-shadow fas fa-globe-americas bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] shadow-[0.927px 2.853px 10px rgba(18, 72, 142, 0.5)]"
                   
                   
                      ></i>
                    Public
                  </div>
                  <div
                    class="bg-[#f6e9f9] dark:bg-slate-700 px-5 py-[5px] rounded-[50px]"
                  >
                    <i
                      class=" text-shadow fas fa-users bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] mr-1 shadow-[0.927px 2.853px 10px rgba(18, 72, 142, 0.5)]"
                    
                      ></i>
                    100
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap pb-24">
          <div class="lg:w-full pr-4 pl-4">
            <div class="text-lg mr-[-15px] ml-[-15px] my-0 text-center">
              <NuxtLink
                to="#"
                class="inline-block dark:bg-slate-800 dark:text-gray-50 text-[#333] bg-white shadow-[0px_15px_30px_0px_rgba(119,123,146,0.2)] w-[50px] h-[50px] leading-[50px] mx-0.5 my-0 rounded-[50%] hover:text-white hover:bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)]"
              >
                <i class="fas fa-angle-double-left"></i
              ></NuxtLink>

              <NuxtLink
                to="#"
                class="inline-block dark:bg-slate-800 dark:text-gray-50 text-[#333] bg-white shadow-[0px_15px_30px_0px_rgba(119,123,146,0.2)] w-[50px] h-[50px] leading-[50px] mx-0.5 my-0 rounded-[50%] hover:text-white hover:bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] no-underline"
              >
                1</NuxtLink
              >
              <NuxtLink
                to="#"
                class="inline-block dark:bg-slate-800 dark:text-gray-50 text-[#333] bg-white shadow-[0px_15px_30px_0px_rgba(119,123,146,0.2)] w-[50px] h-[50px] leading-[50px] mx-0.5 my-0 rounded-[50%] hover:text-white hover:bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] no-underline"
              >
                2</NuxtLink
              >
              <NuxtLink
                to="#"
                class="inline-block shadow-[0px_15px_30px_0px_rgba(119,123,146,0.2)] w-[50px] h-[50px] leading-[50px] mx-0.5 my-0 rounded-[50%] hover:text-white bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] dark:text-gray-50 text-white no-underline"
              >
                3</NuxtLink
              >
              <NuxtLink
                to="#"
                class="inline-block dark:bg-slate-800 dark:text-gray-50 text-[#333] bg-white shadow-[0px_15px_30px_0px_rgba(119,123,146,0.2)] w-[50px] h-[50px] leading-[50px] mx-0.5 my-0 rounded-[50%] hover:text-white hover:bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] no-underline"
              >
                4</NuxtLink
              >
              <NuxtLink
                to="#"
                class="inline-block dark:bg-slate-800 dark:text-gray-50 text-[#333] bg-white shadow-[0px_15px_30px_0px_rgba(119,123,146,0.2)] w-[50px] h-[50px] leading-[50px] mx-0.5 my-0 rounded-[50%] hover:text-white hover:bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] no-underline"
              >
                5</NuxtLink
              >
              <NuxtLink
                to="#"
                class="inline-block dark:bg-slate-800 dark:text-gray-50 text-[#333] bg-white shadow-[0px_15px_30px_0px_rgba(119,123,146,0.2)] w-[50px] h-[50px] leading-[50px] mx-0.5 my-0 rounded-[50%] hover:text-white"
              >
                <i class="fas fa-angle-double-right"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- fillter popup  -->
   
    <div class="fixed w-full h-full z-[50] top-0" v-if="filterShow">
      <div class="w-full h-full flex justify-center items-center layer">
        
        <div
          class="dark:bg-[#262950] relative bg-white shadow-[0px_3px_10px_0px_rgba(0,0,0,0.1)] pt-[23px] pb-[60px] px-0 rounded-[4px] w-4/12 mx-auto"
        >
          <div
            class="flex items-center justify-between px-5 border-b-[rgba(0,0,0,0.1)] border-b border-solid pb-4"
          >
            <div class="">Filter your search</div>
            <div class="cursor-pointer" @click="filterShow = false">
              <i class="fa fa-times text-gray-500 normal_icon" aria-hidden="true"></i>
            </div>
          </div>
          <div
            class="flex items-center pt-[22px] pb-[15px] px-5 border-b-[rgba(0,0,0,0.1)] border-b border-solid"
          >
            <p class="text-lg leading-7 font-bold relative mr-5">I am a :</p>
            <div class="flex items-center">
              <div class="mr-3">
                <input
                  type="radio"
                  name="gender"
                  id="males"
                  checked
                  class="w-5 h-5 border rounded-[50%] border-solid border-[#5650ce] hover:shadow-[0_0_5px_0px_#5650ce_inset] before:content-[''] before:block before:w-3/5 before:h-3/5 before:mx-auto before:my-[20%] before:rounded-[50%] checked:before:bg-[#5650ce] checked:bg-[#5650ce]"
                /><label for="males" class="ml-2">Man</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="gender"
                  id="females"
                  class="w-5 h-5 border rounded-[50%] border-solid border-[#5650ce] hover:shadow-[0_0_5px_0px_#5650ce_inset] before:content-[''] before:block before:w-3/5 before:h-3/5 before:mx-auto before:my-[20%] before:rounded-[50%] checked:before:bg-[#5650ce] checked:bg-[#5650ce]"
                /><label for="females" class="ml-2">Woman</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="gender"
                  id="others"
                  class="ml-2 w-5 h-5 border rounded-[50%] border-solid border-[#5650ce] hover:shadow-[0_0_5px_0px_#5650ce_inset] before:content-[''] before:block before:w-3/5 before:h-3/5 before:mx-auto before:my-[20%] before:rounded-[50%] checked:before:bg-[#5650ce] checked:bg-[#5650ce]"
                /><label for="others" class="ml-2">Other</label>
              </div>
            </div>
          </div>
          <div
            class="flex flex items-center pt-[22px] pb-[15px] border-b-[rgba(0,0,0,0.1)] border-b border-solid px-5 py-[17px]"
          >
            <p class="title text-lg leading-7 font-bold relative mr-5">
              Seeking a :
            </p>
            <div class="flex items-center">
              <div class="mr-4">
                <input
                  type="radio"
                  name="seeking"
                  id="males"
                  checked
                  class="w-5 h-5 border rounded-[50%] border-solid border-[#5650ce] hover:shadow-[0_0_5px_0px_#5650ce_inset] before:content-[''] before:block before:w-3/5 before:h-3/5 before:mx-auto before:my-[20%] before:rounded-[50%] checked:before:bg-[#5650ce] checked:bg-[#5650ce]"
                /><label for="males" class="ml-2">Man</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="seeking"
                  id="females"
                  class="w-5 h-5 border rounded-[50%] border-solid border-[#5650ce] hover:shadow-[0_0_5px_0px_#5650ce_inset] before:content-[''] before:block before:w-3/5 before:h-3/5 before:mx-auto before:my-[20%] before:rounded-[50%] checked:before:bg-[#5650ce] checked:bg-[#5650ce]"
                /><label for="females" class="ml-2">Woman</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="seeking"
                  id="others"
                  class="ml-2 w-5 h-5 border rounded-[50%] border-solid border-[#5650ce] hover:shadow-[0_0_5px_0px_#5650ce_inset] before:content-[''] before:block before:w-3/5 before:h-3/5 before:mx-auto before:my-[20%] before:rounded-[50%] checked:before:bg-[#5650ce] checked:bg-[#5650ce]"
                /><label for="others" class="ml-2">Other</label>
              </div>
            </div>
          </div>
          <div
            class="flex flex items-center border-b-[rgba(0,0,0,0.1)] border-b border-solid pt-[21px] pb-5 px-5"
          >
            <p class="text-lg leading-7 font-bold relative mr-5">Ages :</p>
            <div class="flex items-center">
              <div class="mr-3">
                <!-- <select
                                            class="w-[90px] bg-transparent dark:bg-[#262950] dark:text-white leading-[26px] border h-auto pl-[15px] pr-[30px] py-0 rounded-[50px] border-solid border-[rgba(0,0,0,0.1)]">
                                            <option class="ext-[#222] dark:text-white  dark:bg-[#262950]  leading-5 px-2.5 py-0;" value="">18</option>
                                            <option class="ext-[#222] dark:text-white  dark:bg-[#262950]  leading-5 px-2.5 py-0;" value="">20</option>
                                            <option class="ext-[#222] dark:text-white  dark:bg-[#262950]  leading-5 px-2.5 py-0;" value="">24</option>
                                        </select> -->

                <div
                
                @click="ageFromShowHide"
                class=" w-[5rem] cursor-pointer px-3  bg-transparent dark:bg-[#262950] dark:text-white leading-[26px] border h-auto   rounded-[50px] border-solid border-[rgba(0,0,0,0.1)] flex items-center justify-between bg-blue-500 font-thin">
                  <div
                    class=" font-semibold cursor-pointer "
                  
                  >
                    {{ ageFrom }}
                  </div>
                  <div class="">
                    <i class="fa fa-angle-down bg-red-500 text-green normal_icon"    aria-hidden="true" v-if="!showAgefrom"></i>
                    <i class="fa fa-angle-up  normal_icon" aria-hidden="true" v-else></i>
                  </div>
                  


               
                </div>
                <div
                    class="rounded bg-white dark:bg-gray-900 absolute mt-1 shadow"
                    v-if="showAgefrom"
                  >
                    <div
                      class="cursor-pointer p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-[1rem] z-[10] "
                      v-for="(item, idx) in [18, 20, 24]"
                      :key="idx"
                      :class="[item == ageFrom ? 'font-bold' : '']"
                      @click="selectAgefrom(item)"
                    >
                      {{ item }}
                    </div>
                  </div>
              </div>
              <div>-</div>
              <div class="ml-3">
                <!-- <select
                  class="w-[90px] bg-transparent dark:bg-[#262950] dark:text-white leading-[26px] border h-auto pl-[15px] pr-[30px] py-0 rounded-[50px] border-solid border-[rgba(0,0,0,0.1)]"
                >
                  <option
                    class="ext-[#222] dark:text-white dark:bg-[#262950] leading-5 px-2.5 py-0;"
                    value=""
                  >
                    30
                  </option>
                  <option
                    class="ext-[#222] dark:text-white dark:bg-[#262950] leading-5 px-2.5 py-0;"
                    value=""
                  >
                    35
                  </option>
                  <option
                    class="ext-[#222] dark:text-white dark:bg-[#262950] leading-5 px-2.5 py-0;"
                    value=""
                  >
                    40
                  </option>
                </select> -->
                <div
                
                @click="ageToShowHide"
                class=" w-[5rem] cursor-pointer px-3  bg-transparent dark:bg-[#262950] dark:text-white leading-[26px] border h-auto   rounded-[50px] border-solid border-[rgba(0,0,0,0.1)] flex items-center justify-between bg-blue-500 font-thin">
                  <div
                    class=" font-semibold cursor-pointer "
                  
                  >
                    {{ ageTo }}
                  </div>
                  <div class="">
                    <i class="fa fa-angle-down bg-red-500 text-green normal_icon"    aria-hidden="true" v-if="!showAgeTo"></i>
                    <i class="fa fa-angle-up normal_icon" aria-hidden="true" v-else></i>
                  </div>
                  


               
                </div>
                <div
                    class="rounded bg-white dark:bg-gray-900 absolute mt-1 shadow"
                    v-if="showAgeTo"
                  >
                    <div
                      class="cursor-pointer p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-[1rem] z-[10] "
                      v-for="(item, idx) in [35, 40, 45]"
                      :key="idx"
                      :class="[item == ageTo ? 'font-bold' : '']"
                      @click="selectAgeTo(item)"
                    >
                      {{ item }}
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div
            class="flex flex items-center border-b-[rgba(0,0,0,0.1)] border-solid pt-[29px] pb-7 px-5 border-b-0"
          >
            <p class="text-lg leading-7 font-bold relative mr-5">Country :</p>
            <div class="items-center">
              <div class="s-input mr-3">
                <!-- <select
                  class="select-bar w-[190px] dark:bg-[#262950] dark:text-white px-2.5 bg-transparent leading-[26px] border h-auto pl-[15px] pr-[30px] py-0 rounded-[50px] border-solid border-[rgba(0,0,0,0.1)]"
                >
                  <option
                    class="ext-[#222] dark:text-white dark:bg-[#262950] leading-5 px-2.5 py-0;"
                  >
                    Select Country
                  </option>
                  <option
                    class="ext-[#222] dark:text-white dark:bg-[#262950] leading-5 px-2.5 py-0;"
                    value=""
                  >
                    India
                  </option>
                  <option
                    class="ext-[#222] dark:text-white dark:bg-[#262950] leading-5 px-2.5 py-0;"
                    value=""
                  >
                    Japan
                  </option>
                  <option
                    class="ext-[#222] dark:text-white dark:bg-[#262950] leading-5 px-2.5 py-0;"
                    value=""
                  >
                    England
                  </option>
                </select> -->

                <div
                
                @click="showHideCountey"
                class=" w-[15rem] cursor-pointer px-4 py-1  bg-transparent dark:bg-[#262950] dark:text-white leading-[26px] border h-auto   rounded-[50px] border-solid border-[rgba(0,0,0,0.1)] flex items-center justify-between bg-blue-500 font-thin">
                  <div
                    class=" font-semibold cursor-pointer "
                  
                  >
                    {{ country }}
                  </div>
                  <div class="">
                    <i class="fa fa-angle-down bg-red-500 text-green normal_icon"    aria-hidden="true" v-if="!showCountery"></i>
                    <i class="fa fa-angle-up normal_icon" aria-hidden="true" v-else></i>
                </div>
             



               
                </div>
                <div
                    class="rounded bg-white dark:bg-gray-900 absolute mt-1 shadow"
                    v-if="showCountery"
                  >
                    <div
                      class="cursor-pointer p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-[1rem] z-[10] "
                      v-for="(item, idx) in [ 'Select Country', 'India','Japan','England']"
                      :key="idx"
                      :class="[item == country ? 'font-bold' :'' ]"
                      @click="selectCountry(item)"
                    >
                      {{ item }}
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div class="text-center">
            <button
              class="bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] shadow-[0.872px_9.962px_20px_0px_rgba(12,78,165,0.3)] font-semibold text-white inline-block cursor-pointer w-auto h-auto px-[35px] py-[11px] rounded-[50px] border-0 hover:text-white hover:shadow-[1px_10px_20px_0px_rgba(12,78,165,0.43)]"
            >
              Join Now!
            </button>
          </div>
        </div>
       
      </div>
    </div>

  </div>
</template>

<script setup>
const filterShow = ref(false);
// age from 
const ageFrom = ref(18);
const showAgefrom = ref(false);
const ageFromShowHide = () => {
  if (showAgefrom.value == true) {
    showAgefrom.value = false;
  } else {
    showAgefrom.value = true;
  }
};
const selectAgefrom = (value) => {
    ageFrom.value = value;
    showAgefrom.value = false;

};

//age to 
const ageTo = ref(35);
const showAgeTo = ref(false);
const ageToShowHide = () => {
  if (showAgeTo.value == true) {
    showAgeTo.value = false;
  } else {
    showAgeTo.value = true;
  }
};
const selectAgeTo = (value) => {
  ageTo.value = value;
  showAgeTo.value = false;

};

// country 

const country = ref("India")
const showCountery = ref(false)
const showHideCountey = ()=>{
    if(showCountery.value==true){
        showCountery.value=false  
    } else {
        showCountery.value=true 

    }
}

const selectCountry = (item)=>{
    country.value=item
    showCountery.value=false 
}

// order bY 

const orderBy= ref(false)
const orderedBySelected= ref('Latest Active')

const orderedbyShowHide =()=>{
  if(orderBy.value==false){
    orderBy.value=true
  }else {

    orderBy.value=false
  }
} 


const selectOrdedBy = (item)=>{
  orderBy.value=false
  orderedBySelected.value=item
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
.normal_icon{
  background-image: -o-linear-gradient(
    284deg,
    rgb(150, 150, 150) 0%,
    rgb(150, 150, 150) 100%
  ) !important;
  background-image: linear-gradient(
    166deg,
    rgb(150, 150, 150) 0%,
    rgb(150, 150, 150) 100%
  ) !important;
   
}
.layer {
  background: rgba(0, 0, 0, 0.336);
}

.text-shadow {
  text-shadow: 0.927px 2.853px 10px rgba(18, 72, 142, 0.5);
}
.duration{
  transition-duration: 1s;
}
</style>
