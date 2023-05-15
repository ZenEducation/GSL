<template>
    <div 
        class="dark:bg-[#262950] shadow-[0px_0px_40px_0px_rgba(94,92,154,0.12)]  bg-white flex justify-between mb-[30px] p-[30px] rounded-[5px]">
        <div class=" text-2xl leading-[34px] font-bold" >
            Friend Requests
        </div>
        <div  class="flex align-middle self-end relative max-lg:mt-6">
            <NuxtLink @click="()=>{showModal = true}" to="#"
                class="mx-3 text-[#333] dark:text-gray-50 px-5 py-1.5  right-0 top-2/4 ">
                Find Friend
            </NuxtLink>
            <NuxtLink @click="()=>{showSetting = true}" to="#"
                class="mx-3 flex-[16px] text-[#333] dark:text-gray-50 px-5 py-1.5  right-0 top-2/4 ">
                Settings
            </NuxtLink>
        </div>

        
    </div>

    <div class="mt-30 bg-transparent dark:bg-transparent border-solid border-1 border-blue-950 p-6 rounded-md">
        <div v-for="index in 8" key="index">
            <div
                class="lg:flex sm:flex-auto border mt-[30px] p-5 rounded-[15px] border-solid dark:border-[rgba(256,256,256,0.1)]border-[rgba(0,0,0,0.1)]">
                <div class="flex flex-auto self-center relative">
                    <div class="max-w-[80px] mr-5">

                        <img src="@/assets/frontend/images/frequest/1.png" class="max-w-[80px] mr-5" alt="">
                    </div>
                    <div>

                        <NuxtLink to="#" class="text-xl leading-[30px] font-bold text-[#333333] dark:text-gray-50">
                            Ema Porter
                            <div class="inline-block">
                                <i
                                class="fas fa-check-circle bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-base ml-1"></i>
                            </div>
                        </NuxtLink>
                        <p class="text-base leading-[26px] mb-0">
                            21 Years Old | <span> <i
                                class="fas fa-map-marker-alt bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-base ml-1"></i> </span>
                                Paris 
                            </p>
                    </div>
                </div>
                <div  class="flex align-middle self-center relative max-lg:mt-6">
                    <NuxtLink to="#"
                        class="mx-3 flex-[16px] dark:text-gray-50 dark:border-none border px-5 py-1.5 rounded-[50px] border-solid border-[rgba(0,0,0,0.15)] dark:border-[white] right-0 top-2/4 bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-white">
                        Accept
                    </NuxtLink>
                    <NuxtLink to="#"
                        class="mx-3 flex-[16px] text-[#333] dark:text-gray-50 px-5 py-1.5 rounded-[50px] right-0 top-2/4 ">
                        Ignore
                    </NuxtLink>
                </div>
            </div>
        </div>

    </div>



    <div class="buttons  mt-30">
        <button type="submit"
            class="inline-block w-auto max-sm:px-4 bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] shadow-[0.872px_9.962px_20px_0px_rgba(12,78,165,0.3)] font-semibold text-white cursor-pointer h-auto px-[35px] py-[11px] rounded-[50px] border-0 hover:text-white hover:shadow-[1px_10px_20px_0px_rgba(12,78,165,0.43)]">Save
            Changes</button>
        <button
            class="inline-block font-semibold w-auto h-auto ml-5 px-[35px] max-sm:px-4 py-[11px] rounded-[50px] border-2 border-solid border-[rgba(0,0,0,0.1)] bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] shadow-[0.872px_9.962px_20px_0px_rgba(12,78,165,0.3)] text-white cursor-pointer  hover:text-white hover:shadow-[1px_10px_20px_0px_rgba(12,78,165,0.43)]">Discard
            All</button>
    </div>
    <UserPanelFindFriendPopup @close-modal="showModal = false" v-show="showModal" />
    <UserPanelSettingsPopup @close-modal="showSetting = false" v-show="showSetting"/>
</template>
<style scoped>
i {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: -o-linear-gradient(284deg, rgb(242, 40, 118) 0%, rgb(148, 45, 217) 100%);
    background-image: linear-gradient(166deg, rgb(242, 40, 118) 0%, rgb(148, 45, 217) 100%);
}</style>
<script setup>
const showModal = ref(false)

const showSetting = ref(false)



</script>