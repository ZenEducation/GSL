<template>
    <div>
        <section class=" pt-0 pb-[120px] px-0">
            <div
                class=" w-full mx-auto px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1170px] mx-auto sm:px-4">
                <div class="flex flex-wrap ">
                    <div class="lg:w-2/5 pr-4 pl-4">
                        <div class="text-left">
                            <div class="text-left mb-[59px]">
                                <h6 class=" text-[#5650ce] block text-2xl leading-[34px] font-semibold mb-[30px] text-left">
                                    Meet New People Today!
                                </h6>
                                <h2 class="dark:text-[white] text-[50px] leading-[60px] font-bold block text-[#292929]  mb-[21px] text-left">
                                    Start Flirting
                                </h2>
                                <p class="text-left">
                                    Meeting new people and flirting can be exciting and fun, and dating apps can be a great
                                    way to connect with others who share your
                                    interests and goals. If you're looking to
                                    start
                                    flirting on a dating app, there are a few things to keep in mind.
                                </p>
                                <br>
                                <p class="text-left">
                                    First, make sure you create a profile that accurately represents you and what you're
                                    looking for. Choose a few flattering photos that show off your personality and
                                    interests,
                                    and write a bio that gives others a sense of who you are.
                                </p>
                                <br>
                                <p  class="text-left">
                                    When you start browsing profiles, take the time to read through them and look for
                                    people who share your interests or seem like a good match. When you find someone
                                    you're interested in, don't be afraid to send them a message and start a conversation.
                                </p>
                                <br>
                                <p  class="text-left">
                                    As you start chatting and getting to know each other, keep things light and playful.
                                    Make
                                    jokes, ask questions, and find common ground. Be respectful of their boundaries and
                                    don't push too hard if they don't seem interested.
                                </p>
                            </div>

                            <NuxtLink to="#"
                                class="bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] shadow-[0.872px_9.962px_20px_0px_rgba(12,78,165,0.3)] font-semibold text-white inline-block cursor-pointer w-auto h-auto no-underline px-[35px] py-[11px] rounded-[50px] border-0 hover:text-white hover:shadow-[1px_10px_20px_0px_rgba(12,78,165,0.43)]  mt-0">
                                Seek Your Partner</NuxtLink>
                        </div>
                    </div>
                    <div class="lg:w-3/5 max-lg:px-4 self-center">
                        <div class="text-center relative max-lg:px-[30px] py-0">
                            <!-- <img class="w-full absolute top-[-10%] z-[-1] animate-[scaleAni_5s_linear_infinite] left-[0%]"
                                src="@/assets/frontend/images/flirting/circle.png" alt=""> -->
                            <img class="w-full" src="@/assets/frontend/images/flirting/illutration.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>

</script>

<style  scoped>
.scaleAni{
    animation: scaleAni 5s linear infinite;
}
@keyframes scaleAni {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
    50% {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}
</style>