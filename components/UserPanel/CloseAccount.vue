<template>
    <div class="dark:bg-[#262950] shadow-[0px_0px_40px_0px_rgba(94,92,154,0.12)] text-2xl leading-[34px] font-bold bg-white flex justify-between mb-[30px] p-[30px] rounded-[5px]">
        Close Account
    </div>

    <div class="mt-30 dark:bg-[#262950] bg-white p-6 rounded-md">
        <div>
            <h4 class="dark:text-white mb-4 text-xl">
                Warning
                
            </h4>
        </div>
        <div>
            <p>
                If you close your account, you will be unsubscribed from all your followers and friends, and will lose access forever.
            </p>
        </div>
        <div>
            <div class="flex flex-wrap ">
                <div class="w-full pr-4 pl-4">
                    <div class="my-[30px]">
                        <input class="dark:border-[rgba(256,256,256,0.1)] rounded-md dark:text-white bg-transparent h-[60px] border px-5 py-0 border-solid border-[rgba(0,0,0,0.1)]" type="text" placeholder="Confirm your Current Password">
                    </div>
                </div>


            </div>
        </div>

    </div>


    <div class="buttons  mt-30">
        <button type="submit" class="inline-block w-auto max-sm:px-4 bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] shadow-[0.872px_9.962px_20px_0px_rgba(12,78,165,0.3)] font-semibold text-white cursor-pointer h-auto px-[35px] py-[11px] rounded-[50px] border-0 hover:text-white hover:shadow-[1px_10px_20px_0px_rgba(12,78,165,0.43)]">Delete Account</button>
    </div>
</template>