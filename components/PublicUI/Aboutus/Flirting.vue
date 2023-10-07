<template>
    <div>
        <section >
            <div
                class=" w-full mx-auto px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1170px] mx-auto sm:px-4">
                <div class="flex flex-wrap mt-[7rem]">
                    <div class="lg:w-1/2 pr-4 pl-4 self-center">
                        <div class="text-center relative px-[30px] py-0">
                            <img src="@/assets/frontend/images/about/about-page-left.html.png" class=" w-full anime" alt="">
                        </div>
                    </div>
                    <div class="lg:w-1/2 pr-4 pl-4 ">
                        <div class=" ">
                            <div class="mb-0">
                                <h6 class=" text-[#5650ce] block text-2xl leading-[34px] font-semibold mb-6">
                                    Welcome to "GetSetLove" - Your Ultimate Destination for Meaningful Connections!
                                </h6>
                                <h2 class=" dark:text-[white] text-[50px] leading-[60px] font-bold block text-[#292929] mb-[11px]">
                                    About us
                                </h2>
                                <p class="my-2 text-justify">At GetSetLove, we believe that everyone deserves to find their perfect match, experience true love, and build meaningful relationships. Our dating platform is designed to bring together individuals from all walks of life, fostering connections that last a lifetime. Whether you're searching for your soulmate or simply seeking companionship, GetSetLove is the place to be.</p>
                                
                            </div>

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
@keyframes animation1 {
    0% {
        margin-left: 0px;
    }

    50% {
        margin-left: 5px;
    }

    100% {
        margin-left: 0px;
    }
}

.anime {
    animation: animation1 2s linear infinite;
}</style>