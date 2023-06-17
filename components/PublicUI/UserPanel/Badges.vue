<template>
    <div
        class="dark:bg-[#262950] shadow-[0px_0px_40px_0px_rgba(94,92,154,0.12)] text-2xl leading-[34px] font-bold bg-white flex justify-between mb-[30px] p-[30px] rounded-[5px]">
        Upgrade Membership Plan
    </div>

    <div class="flex flex-wrap ">
        <div class="lg:w-1/2 w-full pr-4 pl-4 pb-12" v-for="index in 4" key="index">
            <div
                class="bg-white dark:bg-slate-900 text-center shadow-[0px_-11px_30px_0px_rgba(112,90,186,0.2)] relative overflow-hidden pt-8 pb-12 px-[30px] rounded-[15px]">
                <div class=" p-8 mx-8 rounded-xl bg-slate-50 dark:bg-black">

                    <img src="@/assets/frontend/images/badge/1.png" class=" m-auto" alt="">
                </div>
                <h6 class="text-[25px] leading-[60px] font-bold text-black dark:text-white">
                    500+ Likes
                </h6>
                <p class="uppercase text-base leading-[26px]">
                    Share your posts and pages link and unlock.
                </p>

                <div class="my-3 w-full   border-t-2 border-t-[rgba(0,0,0,0.15)] dark:border-t-white "></div>

                <div class=" p-3 mx-3 mt-5 bg-slate-50 dark:bg-black rounded-3xl">

                    <div class="flex">

                        <div class=" w-full flex align-middle items-center">
                            <div class=" h-3 w-full rounded bg-slate-200">
                                <div
                                    class="h-3 w-1/2 rounded bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)]">
                                </div>
                            </div>
                        </div>
                        <div class=" w-14">
                            <p class=" font-semibold">56%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</div></template>