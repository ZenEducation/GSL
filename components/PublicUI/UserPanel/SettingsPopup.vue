<template>
    <div @click="$emit('close-setting')" class="fixed top-0 bottom-0 left-0 right-0 flex justify-center align-middle">
        <div class="xl:w-2/5 lg:w-1/2 pr-4 pl-4 flex align-middle" @click.stop>

            <div
                class="dark:bg-[#262950] self-center max-h-[200px] relative bg-white shadow-[0px_3px_10px_0px_rgba(0,0,0,0.1)] pt-[23px] pb-[60px] px-0 rounded-[30px]">
                <div
                    class=" pt-[2px] px-5 flex justify-between dark:border-b-[rgba(256,256,256,0.1)] border-b-1 border-b-[rgba(0,0,0,0.1)] ">
                    <p>Notification Settings</p>
                    <div class=" cursor-pointer relative content-end items-end right-0 " @click="$emit('close-modal')">
                        X
                    </div>
                </div>
                <div class="flex  pb-[15px] px-5 border-b-[rgba(0,0,0,0.1)] border-b border-solid">
                    <p class="text-lg leading-7 font-bold relative mr-5 top-[7px]">
                        You can manage how you are notified about Friends updates
                    </p>
                </div>
                <div class="flex  justify-between pb-[15px] px-5 border-b-[rgba(0,0,0,0.1)] border-b border-solid">
                    <div class="flex align-middle">
                        <div class="w-10 h-10 mt-4 bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] leading-10 text-center text-base mr-5 rounded-[50%]">
                            <i class="fas fa-vector-square text-[#f6e9f9]  bg-transparent"></i>
                        </div>
                        <div>
                            <h6 class="mt-6 dark:text-white" >Show notification dots</h6>
                        </div>
                    </div>
                    <div class="w-[70px] flex align-middle">
                        <div class="mt-5">
                            <label class="relative inline-flex sm:ml-6 items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer">
                                <div class="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                              </label>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>