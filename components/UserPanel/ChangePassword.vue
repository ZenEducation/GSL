<template>
    <div class="dark:bg-[#262950] shadow-[0px_0px_40px_0px_rgba(94,92,154,0.12)] text-2xl leading-[34px] font-bold bg-white flex justify-between mb-[30px] p-[30px] rounded-[5px]">
        Change Password
    </div>

    <div class="mt-30 dark:bg-[#262950] bg-white p-6 rounded-md">
        <div>
            <h6 class="dark:text-white">

                
            </h6>
        </div>
        <div>
            <div class="flex flex-wrap ">
                <div class="w-full pr-4 pl-4">
                    <div class="mb-[30px]">
                        <label for="" class="dark:text-white text-sm text-[#505386] font-semibold mb-0">Confirm your Current Password</label>
                        <input class="dark:border-[rgba(256,256,256,0.1)] dark:text-white bg-transparent h-[60px] border px-5 py-0 border-solid border-[rgba(0,0,0,0.1)]" type="text" placeholder="Confirm your Current Password">
                    </div>
                </div>
                <div class="max-lg:w-full w-1/2 pr-4 pl-4">
                    <div class="mb-[30px]">
                        <label for="" class="dark:text-white text-sm text-[#505386] font-semibold mb-0">New Password</label>
                        <input class="dark:border-[rgba(256,256,256,0.1)] dark:text-white bg-transparent h-[60px] border px-5 py-0 border-solid border-[rgba(0,0,0,0.1)]" type="text" placeholder="Enter new password">
                    </div>
                </div>
                <div class="max-lg:w-full w-1/2 pr-4 pl-4">
                    <div class="mb-[30px]">
                        <label for="" class="dark:text-white text-sm text-[#505386] font-semibold mb-0">Confirm New Password</label>
                        <input class="dark:border-[rgba(256,256,256,0.1)] dark:text-white bg-transparent h-[60px] border px-5 py-0 border-solid border-[rgba(0,0,0,0.1)]" type="text" placeholder="Confirm new password">
                    </div>
                </div>

                <h6 class=" text-blue-700">
                    Forgot your Password ?
                </h6>

            </div>
        </div>

    </div>


    <div class="buttons  mt-30">
        <button type="submit" class="inline-block w-auto max-sm:px-4 bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] shadow-[0.872px_9.962px_20px_0px_rgba(12,78,165,0.3)] font-semibold text-white cursor-pointer h-auto px-[35px] py-[11px] rounded-[50px] border-0 hover:text-white hover:shadow-[1px_10px_20px_0px_rgba(12,78,165,0.43)]">Save Changes</button>
        <button class="inline-block font-semibold w-auto h-auto ml-5 px-[35px] max-sm:px-4 py-[11px] rounded-[50px] border-2 border-solid border-[rgba(0,0,0,0.1)] bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] shadow-[0.872px_9.962px_20px_0px_rgba(12,78,165,0.3)] text-white cursor-pointer  hover:text-white hover:shadow-[1px_10px_20px_0px_rgba(12,78,165,0.43)]">Discard All</button>
    </div>
</template>