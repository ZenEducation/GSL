<template>
    <div  @click="$emit('close-modal')" class="fixed top-0 bottom-0 left-0 right-0 flex justify-center"  >
        <div class="xl:w-2/5 flex lg:w-1/2 pr-4 pl-4"  @click.stop>

            <div
            class="dark:bg-[#262950] self-center relative bg-white shadow-[0px_3px_10px_0px_rgba(0,0,0,0.1)] pt-[23px] pb-[60px] px-0 rounded-[30px]">
            <div class=" pt-[2px]  px-5 flex justify-between dark:border-b-[rgba(256,256,256,0.1)] border-b-1 border-b-[rgba(0,0,0,0.1)] ">
                <p >Filter your Search</p>
                <div class=" cursor-pointer relative content-end items-end right-0 " @click="$emit('close-modal')">
                    X
                </div>
            </div>
            <div class="flex pt-[22px] pb-[15px] px-5 border-b-[rgba(0,0,0,0.1)] border-b border-solid">
                <p class="text-lg leading-7 font-bold relative mr-5 top-[7px]">
                    I am a :
                </p>
                <div class="flex items-center">
                    <div class="mr-3">

                        <input type="radio" name="gender" id="males" checked
                            class="w-5 h-5 border rounded-[50%] border-solid border-[#5650ce] hover:shadow-[0_0_5px_0px_#5650ce_inset] before:content-[''] before:block before:w-3/5 before:h-3/5 before:mx-auto before:my-[20%] before:rounded-[50%] checked:before:bg-[#5650ce] checked:bg-[#5650ce]"><label
                            for="males" class=" ml-2">Man</label>
                    </div>
                    <div>

                        <input type="radio" name="gender" id="females"
                            class="w-5 h-5 border  rounded-[50%] border-solid border-[#5650ce] hover:shadow-[0_0_5px_0px_#5650ce_inset] before:content-[''] before:block before:w-3/5 before:h-3/5 before:mx-auto before:my-[20%] before:rounded-[50%] checked:before:bg-[#5650ce] checked:bg-[#5650ce]"><label
                            for="females" class=" ml-2">Woman</label>
                    </div>
                    <div>

                        <input type="radio" name="gender" id="others"
                            class="ml-2 w-5 h-5 border  rounded-[50%] border-solid border-[#5650ce] hover:shadow-[0_0_5px_0px_#5650ce_inset] before:content-[''] before:block before:w-3/5 before:h-3/5 before:mx-auto before:my-[20%] before:rounded-[50%] checked:before:bg-[#5650ce] checked:bg-[#5650ce]"><label
                            for="others" class=" ml-2">Other</label>
                    </div>
                </div>
            </div>
            <div class="flex pt-[22px] pb-[15px] border-b-[rgba(0,0,0,0.1)] border-b border-solid px-5 py-[17px]">
                <p class="title text-lg leading-7 font-bold relative mr-5 top-[7px]">
                    Seeking a :
                </p>
                <div class="flex items-center">
                    <div class="mr-4">

                        <input type="radio" name="seeking" id="males" checked
                            class="w-5 h-5 border rounded-[50%] border-solid border-[#5650ce] hover:shadow-[0_0_5px_0px_#5650ce_inset] before:content-[''] before:block before:w-3/5 before:h-3/5 before:mx-auto before:my-[20%] before:rounded-[50%] checked:before:bg-[#5650ce] checked:bg-[#5650ce]"><label
                            for="males" class=" ml-2">Man</label>
                    </div>

                    <div>
                        <input type="radio" name="seeking" id="females"
                            class="w-5 h-5 border  rounded-[50%] border-solid border-[#5650ce] hover:shadow-[0_0_5px_0px_#5650ce_inset] before:content-[''] before:block before:w-3/5 before:h-3/5 before:mx-auto before:my-[20%] before:rounded-[50%] checked:before:bg-[#5650ce] checked:bg-[#5650ce]"><label
                            for="females" class=" ml-2">Woman</label>
                    </div>
                    <div>
                        <input type="radio" name="seeking" id="others"
                            class=" ml-2 w-5 h-5 border  rounded-[50%] border-solid border-[#5650ce] hover:shadow-[0_0_5px_0px_#5650ce_inset] before:content-[''] before:block before:w-3/5 before:h-3/5 before:mx-auto before:my-[20%] before:rounded-[50%] checked:before:bg-[#5650ce] checked:bg-[#5650ce]"><label
                            for="others" class="ml-2">Other</label>
                    </div>
                </div>
            </div>
            <div class="flex  border-b-[rgba(0,0,0,0.1)] border-b border-solid pt-[21px] pb-5 px-5">
                <p class="text-lg leading-7 font-bold relative mr-5 top-[7px]">
                    Ages :
                </p>
                <div class="flex items-center">
                    <div class="mr-3">
                        <select
                            class="w-[90px] bg-transparent dark:bg-[#262950] dark:text-white leading-[26px] border h-auto pl-[15px] pr-[30px] py-0 rounded-[50px] border-solid border-[rgba(0,0,0,0.1)]">
                            <option class="ext-[#222] dark:text-white  dark:bg-[#262950]  leading-5 px-2.5 py-0;" value="">18</option>
                            <option class="ext-[#222] dark:text-white  dark:bg-[#262950]  leading-5 px-2.5 py-0;" value="">20</option>
                            <option class="ext-[#222] dark:text-white  dark:bg-[#262950]  leading-5 px-2.5 py-0;" value="">24</option>
                        </select>
                    </div>
                    <div>
                        -
                    </div>
                    <div class="ml-3">
                        <select
                            class="w-[90px] bg-transparent dark:bg-[#262950] dark:text-white leading-[26px] border h-auto pl-[15px] pr-[30px] py-0 rounded-[50px] border-solid border-[rgba(0,0,0,0.1)]">
                            <option class="ext-[#222] dark:text-white  dark:bg-[#262950]  leading-5 px-2.5 py-0;" value="">30</option>
                            <option class="ext-[#222] dark:text-white  dark:bg-[#262950]  leading-5 px-2.5 py-0;" value="">35</option>
                            <option class="ext-[#222] dark:text-white  dark:bg-[#262950]  leading-5 px-2.5 py-0;" value="">40</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="flex  border-b-[rgba(0,0,0,0.1)] border-solid pt-[29px] pb-7 px-5 border-b-0">
                <p class="top-1  text-lg leading-7 font-bold relative mr-5 ">
                    Country :
                </p>
                <div class="items-center">
                    <div class="s-input mr-3">
                        <select
                            class="select-bar w-[190px] dark:bg-[#262950] dark:text-white px-2.5 bg-transparent leading-[26px] border h-auto pl-[15px] pr-[30px] py-0 rounded-[50px] border-solid border-[rgba(0,0,0,0.1)]">
                            <option class="ext-[#222] dark:text-white  dark:bg-[#262950]  leading-5 px-2.5 py-0;">Select Country</option>
                            <option class="ext-[#222] dark:text-white  dark:bg-[#262950]  leading-5 px-2.5 py-0;" value="">India</option>
                            <option class="ext-[#222] dark:text-white  dark:bg-[#262950]  leading-5 px-2.5 py-0;" value="">Japan</option>
                            <option class="ext-[#222] dark:text-white  dark:bg-[#262950]  leading-5 px-2.5 py-0;" value="">England</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="text-center">
                <button
                    class="bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] shadow-[0.872px_9.962px_20px_0px_rgba(12,78,165,0.3)] font-semibold text-white inline-block cursor-pointer w-auto h-auto px-[35px] py-[11px] rounded-[50px] border-0 hover:text-white hover:shadow-[1px_10px_20px_0px_rgba(12,78,165,0.43)]">Join
                    Now!</button>
            </div>
        </div>
    </div>
    </div>
</template>