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

                                </h6>
                                <h4
                                    class="dark:text-[white] text-[30px] leading-[60px] font-bold block text-[#292929] mb-[11px]">

                                </h4>

                                <div v-for="items in data">
                                    <p class="my-2 text-justify font-extrabold" >
                                        {{ items.question }}
                                    </p>
                                    <p class="my-2 text-justify" >
                                        {{ items.answer }}
                                    </p>
                                </div>


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
        "question": "Is online dating safe?",
        "answer": "Online dating can be safe if you take precautions and follow safety guidelines."
    },
    {
        "question": "How do I create a good dating profile?",
        "answer": "A good dating profile should be honest, authentic, and showcase your interests and personality."
    },
    {
        "question": "How do I start a conversation on a dating website?",
        "answer": "Start by finding something in common or interesting in the person's profile and ask open-ended questions."
    },
    {
        "question": "How long should I wait to meet someone in person?",
        "answer": "It's recommended to wait a few weeks of consistent messaging, but it depends on your comfort level."
    },
    {
        "question": "What should I wear on a first date?",
        "answer": "Dress comfortably and appropriately for the location, and wear something that makes you feel confident."
    },
    {
        "question": "How do I know if someone is right for me?",
        "answer": "Look for someone who shares similar values, interests, and goals, and prioritize communication and mutual respect."
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

