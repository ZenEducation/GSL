<script setup>
import left_profile_area from './left_profile_area.vue';
import profile_main_content from './profile_main_content.vue';
import profile_aside_area from './profile_aside_area.vue';
import profile_section from './profile_section.vue';
import friend_section from './friend_section.vue';

const currentSection = ref('activity');
const changeSection = ( update )=>{
    currentSection.value = update;
}

</script>

<template>
    <div>
         <section class="px-0 py-[120px] block  dark:bg-slate-800 dark:text-gray-50">            

            <div class=" w-full mx-auto px-[15px] sm:max-w-[540px] sm:px-4 md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1170px] ">
                <div class=" flex flex-wrap mr-[-15px] ml-[-15px] justify-center">
                    <div class="xl:w-1/3  lg:w-2/5 md:w-3/5 pr-4 pl-4 relative w-full ">
                        <left_profile_area />
                    </div>
                    <div class="xl:w-2/5 lg:w-1/2 pr-4 pl-4 mb-30">
                        <div class="profile-main-content">
                            <ul class="bg-white dark:bg-[#262950] shadow-[0px_5px_30px_0px_rgba(35,57,184,0.2)] block text-center mb-px pt-1.5 pb-2.5 px-2.5 rounded-[10px]">
                                <li @click="()=>{ changeSection('activity') }" class="inline-block px-0 py-[5px] list-none">
                                    <div  class=" cursor-pointer active dark:text-gray-50 text-[#333333] text-base leading-[26px] font-bold relative transition-all duration-[ease] delay-[0.3s] bg-transparent no-underline inline-block mx-3 my-0 active:text-[#ac216c] hover:text-[#ac216c]">
                                        Activity
                                    </div>
                                </li>
                                <li @click="()=>{ changeSection('profile') }" class="inline-block px-0 py-[5px] list-none">
                                    <div  class=" cursor-pointer dark:text-gray-50 text-[#333333] text-base leading-[26px] font-bold relative transition-all duration-[ease] delay-[0.3s] bg-transparent no-underline inline-block mx-3 my-0 active:text-[#ac216c] hover:text-[#ac216c]">
                                        Profile
                                    </div>
                                </li>
                                <li @click="()=>{ changeSection('friends') }" class="inline-block px-0 py-[5px] list-none">
                                    <div   class=" cursor-pointer dark:text-gray-50 text-[#333333] text-base leading-[26px] font-bold relative transition-all duration-[ease] delay-[0.3s] bg-transparent no-underline inline-block mx-3 my-0 active:text-[#ac216c] hover:text-[#ac216c]">
                                        Friends
                                        <div class="absolute bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-[10px] leading-[10px] text-white right-[-17px] px-[5px] py-[3px] rounded-[30px] -top-1.5">04</div>
                                    </div>
                                </li>
                                <li class="inline-block px-0 py-[5px] list-none">
                                    <div class=" cursor-pointer dark:text-gray-50 text-[#333333] text-base leading-[26px] font-bold relative transition-all duration-[ease] delay-[0.3s] bg-transparent no-underline inline-block mx-3 my-0 active:text-[#ac216c] hover:text-[#ac216c]">
                                        Groups
                                        <div class="absolute bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-[10px] leading-[10px] text-white right-[-17px] px-[5px] py-[3px] rounded-[30px] -top-1.5">14</div>
                                    </div>
                                </li>
                                <li class="inline-block px-0 py-[5px] list-none">
                                    <div class=" cursor-pointer dark:text-gray-50 text-[#333333] text-base leading-[26px] font-bold relative transition-all duration-[ease] delay-[0.3s] bg-transparent no-underline inline-block mx-3 my-0 active:text-[#ac216c] hover:text-[#ac216c]">
                                        Media
                                        <div class="absolute bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-[10px] leading-[10px] text-white right-[-17px] px-[5px] py-[3px] rounded-[30px] -top-1.5">47</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <profile_main_content v-if="currentSection == 'activity'" />
                        <profile_section v-if="currentSection == 'profile'"/>
                        <friend_section v-if="currentSection == 'friends'"/>
                    </div>
                    <div class="xl:w-1/4 lg:w-2/5  pr-4 pl-4 ">
                        <profile_aside_area/>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>



<style lang="scss" scoped></style>