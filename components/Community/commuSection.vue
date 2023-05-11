<template>
    <div>
        <section>
            <div class=" w-full mx-auto px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1170px] ">
                <div class="flex flex-wrap ">
                    <div class="w-full pr-4 pl-4">
                        <div
                            class="sm:flex sm:justify-between block mb-[30px] px-0 py-5 border-y-[rgba(0,0,0,0.1)] border-t border-solid border-b">
                            <div class="flex justify-center content-center h-10 ">
                                <NuxtLink to="#" data-toggle="modal" data-target="#exampleModalCenter"
                                    class="bg-[rgb(238,243,251)] shadow-[0px_5px_10px_0px_rgba(143,175,202,0.5)] text-[#333] px-[30px] py-1.5 rounded-[50px]">
                                    <i
                                        class="fas fa-sliders-h bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] mr-1"></i>
                                    Filter your search
                                </NuxtLink>
                            </div>
                            <div class="flex justify-center content-center h-10 ">
                                <div class="flex content-center items-center text-base leading-[26px] relative mr-[7px] ">
                                    Order By :
                                </div>
                                <div class="block">
                                    <select
                                        class="relative min-w-[105px] bg-none bg-[rgb(238,243,251)] shadow-[0px_5px_10px_0px_rgba(143,175,202,0.5)] cursor-pointer text-sm h-[35px] leading-[35px] pl-5 pr-[30px] p-0 rounded-[50px] top-1 block">
                                        <option
                                            class="block text-xs uppercase min-h-[30px] leading-[30px] px-[5px] py-0 active:text-[12px] active:uppercase active:leading-[12px]"
                                            value="">Latest Active</option>
                                        <option
                                            class="block text-xs uppercase min-h-[30px] leading-[30px] px-[5px] py-0 active:text-[12px] active:uppercase active:leading-[12px]"
                                            value="">NEW</option>
                                        <option
                                            class="block text-xs uppercase min-h-[30px] leading-[30px] px-[5px] py-0 active:text-[12px] active:uppercase active:leading-[12px]"
                                            value="">OLD</option>
                                        <option
                                            class="block text-xs uppercase min-h-[30px] leading-[30px] px-[5px] py-0 active:text-[12px] active:uppercase active:leading-[12px]"
                                            value="">POPULAR</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-wrap" >
                    <div class="lg:w-1/3 md:w-1/2 pr-4 pl-4" v-for="index in 6" key="index">
                        <div class="group">
                            <div
                                class="shadow-[0px_5px_30px_0px_rgba(86,47,218,0.1)] mb-[30px] bg-white overflow-hidden transition-all duration-[ease] delay-[0.3s] hover:transition-all hover:duration-[ease] hover:delay-[0.3s] rounded-[20px] hover:shadow-[0px_10px_50px_0px_rgb(176,164,226)] hover:translate-y-[-5px]">
                                <div class="overflow-hidden">
                                    <img src="@/assets/frontend/images/cummunity/img1.jpg"
                                        class="w-full transition-all duration-[linear] delay-[0.6s] group-hover:scale-110"
                                        alt="">
                                </div>
                                <div class="relative pt-[23px] pb-[25px] px-[30px]">
                                    <p class="mb-2">
                                        6 days ago
                                    </p>
                                    <NuxtLink to="/peyamba/communitysingle"
                                        class="text-2xl leading-[34px] font-bold block text-[#333333] mb-[18px]">
                                        Philosophy of love
                                    </NuxtLink>
                                    <p class="mb-0">
                                        Love for one another and love for yourself is priceless.
                                    </p>
                                </div>
                                <div class="flex justify-between p-[30px] border-t-[rgba(0,0,0,0.1)] border-t border-solid">
                                    <div>
                                        <i
                                            class="fas fa-globe-americas bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] shadow-[0.927px 2.853px 10px rgba(18, 72, 142, 0.5)]"></i>
                                        Public
                                    </div>
                                    <div class="bg-[#f6e9f9] px-5 py-[5px] rounded-[50px]">
                                        <i
                                            class="fas fa-users bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] mr-1 shadow-[0.927px 2.853px 10px rgba(18, 72, 142, 0.5)]"></i>
                                        100
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-wrap ">
                    <div class="lg:w-full pr-4 pl-4">
                        <div class="text-lg mr-[-15px] ml-[-15px] my-0 text-center">
                            <NuxtLink to="#"
                                class=" inline-block text-[#333] bg-white shadow-[0px_15px_30px_0px_rgba(119,123,146,0.2)] w-[50px] h-[50px] leading-[50px] mx-0.5 my-0 rounded-[50%] hover:text-white hover:bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)]">
                                <i class="fas fa-angle-double-left"></i></NuxtLink>
                                
                            <NuxtLink to="#"
                                class="inline-block  text-[#333] bg-white shadow-[0px_15px_30px_0px_rgba(119,123,146,0.2)] w-[50px] h-[50px] leading-[50px] mx-0.5 my-0 rounded-[50%] hover:text-white hover:bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] no-underline">
                                1</NuxtLink>
                            <NuxtLink to="#"
                                class="inline-block  text-[#333] bg-white shadow-[0px_15px_30px_0px_rgba(119,123,146,0.2)] w-[50px] h-[50px] leading-[50px] mx-0.5 my-0 rounded-[50%] hover:text-white hover:bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] no-underline">
                                2</NuxtLink>
                            <NuxtLink to="#"
                                class="inline-block  shadow-[0px_15px_30px_0px_rgba(119,123,146,0.2)] w-[50px] h-[50px] leading-[50px] mx-0.5 my-0 rounded-[50%] hover:text-white bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-white no-underline">
                                3</NuxtLink>
                            <NuxtLink to="#"
                                class="inline-block text-[#333] bg-white shadow-[0px_15px_30px_0px_rgba(119,123,146,0.2)] w-[50px] h-[50px] leading-[50px] mx-0.5 my-0 rounded-[50%] hover:text-white hover:bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] no-underline">
                                4</NuxtLink>
                            <NuxtLink to="#"
                                class="inline-block text-[#333] bg-white shadow-[0px_15px_30px_0px_rgba(119,123,146,0.2)] w-[50px] h-[50px] leading-[50px] mx-0.5 my-0 rounded-[50%] hover:text-white hover:bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] no-underline">
                                5</NuxtLink>
                            <NuxtLink to="#"
                                class="inline-block text-[#333] bg-white shadow-[0px_15px_30px_0px_rgba(119,123,146,0.2)] w-[50px] h-[50px] leading-[50px] mx-0.5 my-0 rounded-[50%] hover:text-white">
                                <i class="fas fa-angle-double-right"></i>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>

</script>

<style scoped>
i {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: -o-linear-gradient(284deg, rgb(242, 40, 118) 0%, rgb(148, 45, 217) 100%);
    background-image: linear-gradient(166deg, rgb(242, 40, 118) 0%, rgb(148, 45, 217) 100%);
}</style>