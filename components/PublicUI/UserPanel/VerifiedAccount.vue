<template>
    <div
        class="dark:bg-[#262950] shadow-[0px_0px_40px_0px_rgba(94,92,154,0.12)] text-2xl leading-[34px] font-bold bg-white flex justify-between mb-[30px] p-[30px] rounded-[5px]">
        Varified account
    </div>

    <div class="mt-30 dark:bg-[#262950] bg-white p-6 max-sm:pr-0 rounded-md">
        <div>
            <h4 class="dark:text-white mb-4 text-xl">
                Verification FAQ

            </h4>
        </div>
        <div class="flex flex-col ">
            <div class="mx-2 my-6 p-10 bg-slate-50 dark:bg-[#202342] rounded-md "  v-for="index in 2" key="index">
                <h6 class="dark:text-white my-2">What are the best parts about getting verified badge on peyamba?
                </h6>
                <p class="dark:text-white my-2  font-bold">1. There is no minimum number of connected for your account</p>
                <p class="ml-10" >
                    The good news is that you don’t need to have a huge following to be verified on peyamba
                </p>
                <p class="dark:text-white my-2 font-bold">1. There is no minimum number of connected for your account</p>
                <p class="ml-10" >
                    The good news is that you don’t need to have a huge following to be verified on peyamba
                </p>
                <p class="dark:text-white my-2 font-bold">1. There is no minimum number of connected for your account</p>
                <p class="ml-10" >
                    The good news is that you don’t need to have a huge following to be verified on peyamba
                </p>
            </div>

            <div class="mx-2 my-6 p-5 bg-slate-50 dark:bg-[#202342] rounded-md "  v-for="index in 3" key="index">
                <h6 class="dark:text-white my-2">What does verification mean?</h6>
                <p class="ml-10" >
                    The verified badge  on peyamba lets people know that an account of public interest is authentic
                </p>
            </div>

        </div>


    </div>




    <div class="buttons  mt-30">
        <button type="submit" class="inline-block w-auto max-sm:px-4 bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] shadow-[0.872px_9.962px_20px_0px_rgba(12,78,165,0.3)] font-semibold text-white cursor-pointer h-auto px-[35px] py-[11px] rounded-[50px] border-0 hover:text-white hover:shadow-[1px_10px_20px_0px_rgba(12,78,165,0.43)]">Save Changes</button>
        <button class="inline-block font-semibold w-auto h-auto ml-5 px-[35px] max-sm:px-4 py-[11px] rounded-[50px] border-2 border-solid border-[rgba(0,0,0,0.1)] bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] shadow-[0.872px_9.962px_20px_0px_rgba(12,78,165,0.3)] text-white cursor-pointer  hover:text-white hover:shadow-[1px_10px_20px_0px_rgba(12,78,165,0.43)]">Discard All</button>
    </div></template>