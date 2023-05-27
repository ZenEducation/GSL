<template>
    <div>
        <section >
            <div
                class=" w-full mx-auto px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1170px] mx-auto sm:px-4">
                <div class="flex flex-wrap ">
                    <div class="lg:w-1/2 pr-4 pl-4 self-center">
                        <div class="text-center relative px-[30px] py-0">
                            <img src="@/assets/frontend/images/about/about-page-left.html.png" class=" w-full anime" alt="">
                        </div>
                    </div>
                    <div class="lg:w-1/2 pr-4 pl-4">
                        <div>
                            <div class="mb-0">
                                <h6 class=" text-[#5650ce] block text-2xl leading-[34px] font-semibold mb-6">
                                    Get to Know More
                                </h6>
                                <h2 class=" dark:text-[white] text-[50px] leading-[60px] font-bold block text-[#292929] mb-[11px]">
                                    About us
                                </h2>
                                <p class="my-2 text-justify">Are you tired of swiping right on dating apps, only to match
                                    with people who are just looking for a pen pal? Look no further, because GSL is like the
                                    best friend you never knew you needed!</p>
                                <hr>
                                <p class="my-2 text-justify">GSL is like a virtual cocktail party, where you can mingle with
                                    like-minded singles from the comfort of your own home. Don't worry about awkward small
                                    talk, because our profiles are designed to showcase your personality and interests.</p>
                                <hr>
                                <p class="my-2 text-justify">But wait, there's more! Our algorithm is so advanced, it's like
                                    having your own personal wingman (or wingwoman). It will suggest compatible matches
                                    based on your preferences, so you can focus on getting to know someone who shares your
                                    values and sense of humor.</p>
                                <hr>
                                <p class="my-2 text-justify">And if you're feeling extra adventurous, our website even has a
                                    feature called "Wacky Dates", where you can choose from a variety of quirky date ideas.
                                    From axe throwing to escape rooms, we've got your back!</p>
                                <hr>
                                <p class="my-2 text-justify">So what are you waiting for? Join our GSL community today and
                                    start swiping your way to love (or at least a good laugh)!</p>
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