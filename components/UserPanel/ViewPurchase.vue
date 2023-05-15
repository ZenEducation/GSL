<template>
    <div
        class="dark:bg-[#262950] shadow-[0px_0px_40px_0px_rgba(94,92,154,0.12)] text-2xl leading-[34px] font-bold bg-white flex justify-between mb-[30px] p-[30px] rounded-[5px]">
        View purchase history
    </div>

    <div class="mt-30 dark:bg-[#262950] bg-white p-6 rounded-md">

        <div class="flex flex-wrap ">
            <div class="max-lg:w-full  w-1/3 self-center pr-4 pl-4">
                <div class="mb-[30px]">
                    <input
                        class="dark:border-[rgba(256,256,256,0.1)] dark:text-white bg-transparent h-[60px] border px-5 py-0 border-solid border-[rgba(0,0,0,0.1)]"
                        type="date">
                </div>
            </div>
            <div class="max-lg:w-full w-1/3 self-center  pr-4 pl-4">
                <div class="mb-[30px]">
                    <input
                        class="dark:border-[rgba(256,256,256,0.1)] dark:text-white bg-transparent h-[60px] border px-5 py-0 border-solid border-[rgba(0,0,0,0.1)]"
                        type="date">
                </div>
            </div>
            <div class="buttons  w-1/3  pr-4 pl-4  ">
                <button type="submit"
                    class="inline-block h-[60px]  max-sm:px-4 bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] shadow-[0.872px_9.962px_20px_0px_rgba(12,78,165,0.3)] font-semibold text-white cursor-pointer px-[35px] py-[11px] rounded-[50px] border-0 hover:text-white hover:shadow-[1px_10px_20px_0px_rgba(12,78,165,0.43)]">
                    <i class="fas fa-search"></i>
                </button>
            </div>

        </div>
        <div class=" overflow-x-scroll scrollbar-hide">


              <table class="table mt-4">
                <thead class="mt-4 dark:text-black bg-slate-200 h-8 border-y-2 border-y-slate-400">
                    <tr>
                        <th>DATE</th>
                        <th>ITEM</th>
                        <th>TYPE</th>
                        <th>CODE</th>
                        <th>PRICE</th>
                    </tr>
                </thead>
                <tbody class=" bg-transparent text-sm" >
                    <tr v-for="item in 8" key="item">
                        <td class=" text-gray-500">Nov 15th, 2021</td>
                        <td class=" text-green-400">Subscriptions Plan</td>
                        <td class=" font-bold">Purchase</td>
                        <td class="text-gray-500">VK1287</td>
                        <td class="font-bold">$34</td>
                    </tr>

                </tbody>
              </table>
        </div>


        <div>

        </div>

    </div>
</template>
<style>
    thead{
        display: table-header-group;
    }
    tr{
        display: table-row;
    }
    td{
        display: table-cell;
    }
    tbody{
        display: table-row-group;
    }

</style>