<template>
    <div class="dark:bg-[#262950] shadow-[0px_0px_40px_0px_rgba(94,92,154,0.12)] text-2xl leading-[34px] font-bold bg-white flex justify-between mb-[30px] p-[30px] rounded-[5px]">
        Billing & Payout
    </div>

    <div class="mt-30 dark:bg-[#262950] bg-white p-6 rounded-md">
        <div>
            <p class="dark:text-white font-bold mb-6">

                Provide your payment info
            </p>
        </div>
        <div>
            <div class="flex flex-wrap ">
                <div class="max-lg:w-full w-1/2 pr-4 pl-4">
                    <div class="mb-[30px]">
                        <label for="" class="dark:text-white text-sm text-[#505386] font-semibold mb-0">Profile Name</label>
                        <input class="dark:border-[rgba(256,256,256,0.1)] dark:text-white bg-transparent h-[60px] border px-5 py-0 border-solid border-[rgba(0,0,0,0.1)]" type="text" placeholder="Profile Name">
                    </div>
                </div>
                <div class="max-lg:w-full w-1/2 pr-4 pl-4">
                    <div class="mb-[30px]">
                        <label for="" class="dark:text-white text-sm text-[#505386] font-semibold mb-0">Public Email</label>
                        <input class="dark:border-[rgba(256,256,256,0.1)] dark:text-white bg-transparent h-[60px] border px-5 py-0 border-solid border-[rgba(0,0,0,0.1)]" type="text" placeholder="Public Email">
                    </div>
                </div>

                <div class="max-lg:w-full w-1/2 pr-4 pl-4">
                    <div class="mb-[30px]">
                        <label for="" class="dark:text-white text-sm text-[#505386] font-semibold mb-0">Country</label>
                        <select class="dark:border-[rgba(256,256,256,0.1)] dark:text-white bg-transparent  h-[60px] border px-5 py-0 border-solid border-[rgba(0,0,0,0.1)]" name="" id="">
                            <option value="" disabled selected>Select Country</option>
                            <option value="">United State</option>
                        </select>
                    </div>
                </div>
                <div class="max-lg:w-full w-1/2 pr-4 pl-4">
                    <div class="mb-[30px]">
                        <label for="" class="dark:text-white text-sm text-[#505386] font-semibold mb-0">City</label>
                        <select class="dark:border-[rgba(256,256,256,0.1)] dark:text-white bg-transparent h-[60px] border px-5 py-0 border-solid border-[rgba(0,0,0,0.1)]" name="" id="">
                            <option value="" disabled selected>Select City</option>
                            <option value="">New Work</option>
                        </select>
                    </div>
                </div>

                <div class="max-lg:w-full w-1/2 pr-4 pl-4">
                    <div class="mb-[30px]">
                        <label for="" class="dark:text-white text-sm text-[#505386] font-semibold mb-0">Phone</label>
                        <input class="dark:border-[rgba(256,256,256,0.1)] dark:text-white bg-transparent h-[60px] border px-5 py-0 border-solid border-[rgba(0,0,0,0.1)]" type="text" placeholder="Phone">
                    </div>
                </div>
                <div class="max-lg:w-full w-1/2 pr-4 pl-4">
                    <div class="mb-[30px]">
                        <label for="" class="dark:text-white text-sm text-[#505386] font-semibold mb-0">Email</label>
                        <input class="dark:border-[rgba(256,256,256,0.1)] dark:text-white bg-transparent h-[60px] border px-5 py-0 border-solid border-[rgba(0,0,0,0.1)]" type="text" placeholder="Email">
                    </div>
                </div>

            </div>
        </div>

    </div>


    <div class="mt-30 dark:bg-[#262950] bg-white p-6 rounded-md">
        <div>
            <p class="dark:text-white font-bold mb-6">

                Payment Options
            </p>
        </div>
        <div>
            <div class="select-payment flex gap-8 p-4 rounded-lg flex-wrap mb-8">
                <div class="option w-24 h-20 flex text-xs  p-2 rounded-lg  text-gray-600 dark:text-white border-[#4441e7] flex-col justify-between items-center cursor-pointer relative border-solid border">
                    <i class="fas fa-check-circle absolute text-indigo-700 top-0 left-0 text-xl invisible group-hover:visible"></i>
                    <img src="@/assets/frontend/images/card1.png" alt="">
                    Credit Card
                </div>
                <div class="option w-24 h-20 flex text-xs  p-2 rounded-lg  text-gray-600 dark:text-white hover:border-[#4441e7] flex-col justify-between items-center cursor-pointer relative border-[#a6a6cb] border-solid border">
                    <i class="fa fas-check-circle absolute text-indigo-700 text-xl invisible"></i>
                    <img src="@/assets/frontend/images/card1.png" alt="">
                    Debit Card
                </div>
                <div class="option w-24 h-20 flex text-xs  p-2 rounded-lg  text-gray-600 dark:text-white hover:border-[#4441e7] flex-col justify-between items-center cursor-pointer relative border-[#a6a6cb] border-solid border">
                    <i class="fa fas-check-circle absolute text-indigo-700 text-xl invisible"></i>
                    <img src="@/assets/frontend/images/card2.png" alt="">
                    Paypal
                </div>
            </div>
        </div>
        <div>
            <p class="dark:text-white font-bold mb-6">

                Enter your Card Details
            </p>
        </div>
        <div>
            <div class="flex flex-wrap ">

                <div class="w-full pr-4 pl-4">
                    <div class="mb-[30px]">
                        <label for="" class="dark:text-white text-sm text-[#505386] font-semibold mb-0">Card Number</label>
                        <input class="dark:border-[rgba(256,256,256,0.1)] dark:text-white bg-transparent h-[60px] border px-5 py-0 border-solid border-[rgba(0,0,0,0.1)]" type="text" placeholder="0000 0000 0000 0000">
                    </div>
                </div>

                <div class="w-full pr-4 pl-4">
                    <div class="mb-[30px]">
                        <label for="" class="dark:text-white text-sm text-[#505386] font-semibold mb-0">Name</label>
                        <input class="dark:border-[rgba(256,256,256,0.1)] dark:text-white bg-transparent h-[60px] border px-5 py-0 border-solid border-[rgba(0,0,0,0.1)]" type="text" placeholder="Name">
                    </div>
                </div>
                <div class="max-lg:w-full w-1/2 pr-4 pl-4">
                    <div class="mb-[30px]">
                        <label for="" class="dark:text-white text-sm text-[#505386] font-semibold mb-0">Expiration</label>
                        <input class="dark:border-[rgba(256,256,256,0.1)] dark:text-white bg-transparent h-[60px] border px-5 py-0 border-solid border-[rgba(0,0,0,0.1)]" type="text" placeholder="MM/YY">
                    </div>
                </div>
                <div class="max-lg:w-full w-1/2 pr-4 pl-4">
                    <div class="mb-[30px]">
                        <label for="" class="dark:text-white text-sm text-[#505386] font-semibold mb-0">CVV</label>
                        <input class="dark:border-[rgba(256,256,256,0.1)] dark:text-white bg-transparent h-[60px] border px-5 py-0 border-solid border-[rgba(0,0,0,0.1)]" type="text" placeholder="CVV">
                    </div>
                </div>

            </div>
        </div>

    </div>

    <div class="buttons  mt-30">
        <button type="submit" class="inline-block w-auto max-sm:px-4 bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] shadow-[0.872px_9.962px_20px_0px_rgba(12,78,165,0.3)] font-semibold text-white cursor-pointer h-auto px-[35px] py-[11px] rounded-[50px] border-0 hover:text-white hover:shadow-[1px_10px_20px_0px_rgba(12,78,165,0.43)]">Save Changes</button>
        <button class="inline-block font-semibold w-auto h-auto ml-5 px-[35px] max-sm:px-4 py-[11px] rounded-[50px] border-2 border-solid border-[rgba(0,0,0,0.1)] bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] shadow-[0.872px_9.962px_20px_0px_rgba(12,78,165,0.3)] text-white cursor-pointer  hover:text-white hover:shadow-[1px_10px_20px_0px_rgba(12,78,165,0.43)]">Discard All</button>
    </div>
</template>