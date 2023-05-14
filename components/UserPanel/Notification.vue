<template>
    <div
        class="dark:bg-[#262950] shadow-[0px_0px_40px_0px_rgba(94,92,154,0.12)] text-2xl leading-[34px] font-bold bg-white flex justify-between mb-[30px] p-[30px] rounded-[5px]">
        Notifications
    </div>

    <div class="mt-30 dark:bg-[#262950] bg-white p-6 max-sm:pr-0 rounded-md">
        <div>
            <h4 class="dark:text-white mb-4 text-xl">
                Choose when and how to be notified

            </h4>
        </div>
        <div class="flex flex-col ">
            <div class="mx-2 my-6 p-5 flex bg-slate-100 dark:bg-[#202342] rounded-md "  v-for="index in 7" key="index">

                <div class="">
                    <div class="flex ">
                        <div class="w-[40px] h-[40px] bg-slate-500 rounded-[50%] flex justify-center align-middle mr-6">
                            <i class="fas fa-cogs mt-2"></i>
                        </div>
                        <div>
                            <h6 class="mt-1 dark:text-white" >Subscriptions</h6>
                        </div>

                    </div>
                    <div>
                        <p>
                            Notify me about activity from the profiles I'm subscribed to
                        </p>
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

    <div class="mt-30 dark:bg-[#262950] bg-white p-6 max-sm:pr-0 rounded-md">
        <div>
            <h4 class="dark:text-white mb-4 text-xl">
                Choose when and how to be notified

            </h4>
        </div>
        <div class="flex flex-col ">
            <div class="mx-2 my-6 p-5 flex bg-slate-100 dark:bg-[#202342] rounded-md "  v-for="index in 2" key="index">

                <div class="">
                    <div class="flex ">
                        <div class="w-[40px] h-[40px] bg-slate-500 rounded-[50%] flex justify-center align-middle mr-6">
                            <i class="fas fa-cogs mt-2"></i>
                        </div>
                        <div>
                            <h6 class="mt-1 dark:text-white" >Subscriptions</h6>
                        </div>

                    </div>
                    <div>
                        <p>
                            Notify me about activity from the profiles I'm subscribed to
                        </p>
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


    <div class="buttons  mt-30">
        <button type="submit" class="inline-block w-auto max-sm:px-4 bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] shadow-[0.872px_9.962px_20px_0px_rgba(12,78,165,0.3)] font-semibold text-white cursor-pointer h-auto px-[35px] py-[11px] rounded-[50px] border-0 hover:text-white hover:shadow-[1px_10px_20px_0px_rgba(12,78,165,0.43)]">Save Changes</button>
        <button class="inline-block font-semibold w-auto h-auto ml-5 px-[35px] max-sm:px-4 py-[11px] rounded-[50px] border-2 border-solid border-[rgba(0,0,0,0.1)] bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] shadow-[0.872px_9.962px_20px_0px_rgba(12,78,165,0.3)] text-white cursor-pointer  hover:text-white hover:shadow-[1px_10px_20px_0px_rgba(12,78,165,0.43)]">Discard All</button>
    </div></template>