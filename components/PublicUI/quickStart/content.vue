<template>
    <div>
        <section class=" py-[20px]">
            <div
                class=" w-full mx-auto px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1170px] mx-auto sm:px-4">
                <div class="flex flex-wrap ">

                    <div class="pr-4 pl-4">
                        <div>
                            <div class="mb-0">
                                <h6 class=" text-[#5650ce] block text-2xl leading-[34px] font-semibold mb-6">
                                    Welcome to the world of online dating! Here's a quick start guide to get you started:
                                </h6>
                                <h4
                                    class="dark:text-[white] text-[30px] leading-[60px] font-bold block text-[#292929] mb-[11px]">


                                </h4>

                                <p class="my-2 text-justify" v-for="item in data">
                                    <span class=" font-bold">
                                        {{ item.title }} :
                                    </span> {{ item.info }}
                                </p>


                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const data = [
    {
        "title": "Choose a reputable dating website:",
        "info": "Look for a website that has a good reputation, positive reviews, and strong safety measures to protect your personal information."
    },
    {
        "title": "Create your profile:",
        "info": "Take some time to create a detailed and authentic profile. Use recent photos, write a catchy headline, and describe your interests and what you are looking for in a relationship."
    },
    {
        "title": "Browse profiles:",
        "info": "Use the search function to browse through profiles that match your preferences. Read through profiles carefully and look for common interests or values."
    },
    {
        "title": "Start messaging:",
        "info": "Once you find someone you're interested in, send them a friendly message to start a conversation. Avoid using cheesy pick-up lines and ask open-ended questions to keep the conversation flowing."
    },
    {
        "title": "Move to the next level:",
        "info": "If the conversation goes well, you can move to the next level by exchanging phone numbers or social media handles. This will help you get to know each other better and potentially plan a first date."
    },
    {
        "title": "Meet in a public place:",
        "info": "When you feel comfortable enough to meet in person, choose a public place for your first date. Let a friend or family member know where you're going and who you're meeting."
    },
    {
        "title": "Have fun:",
        "info": "Remember that dating should be fun! Take your time getting to know someone and enjoy the journey. Don't be afraid to try new things and step outside your comfort zone. Good luck!"
    }
]

</script>

<style scoped>
ol {
    list-style-type: decimal;
}

ul {
    list-style-type: disc;
}
</style>

