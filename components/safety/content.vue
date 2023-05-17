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
                                <h4 class="dark:text-[white] text-[30px] leading-[60px] font-bold block text-[#292929] mb-[11px]">
                                    Safety tips for using dating websites:

                                </h4>

                                <p class="my-2 text-justify" v-for="item in data">
                                    <span class=" font-bold">
                                        {{item.title}} :
                                    </span> {{ item.info }}
                                </p>

                                <p class="my-2 text-justify">
                                    By following these safety tips, you can enjoy the benefits of online dating without putting yourself at risk. Remember to always prioritize your safety and trust your instincts.
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
            title : "Protect your personal information",
            info : "Do not share your full name, address, phone number, or any other personal information on your dating profile. Only share your personal information with someone you trust."

        },
        {
            title : "Use a reputable dating website",
            info : "Before signing up for a dating website, research the company to ensure it is reputable and has a good track record for safety and security."
        },
        {
            title : "Use a strong password",
            info : "Choose a strong password that includes a mix of letters, numbers, and symbols. Avoid using common words or phrases.",
        },
        {
            title : "Be cautious when sharing photos",
            info : "Only share photos that you are comfortable with the public seeing. Consider using a private photo-sharing app or service for more personal photos.",
        },
        {
            title : "Use a separate email address",
            info : "Create a separate email address for your dating profile. This will help keep your personal and work emails separate, and prevent any unwanted messages from your dating profile from appearing in your work inbox",
        },
        {
            title : "Trust your instincts",
            info : "If someone seems too good to be true or makes you feel uncomfortable, trust your instincts and move on. Do not continue communication with someone who makes you feel uneasy." ,
        },
        {
            title :"Meet in a public place" ,
            info : "When meeting someone for the first time, choose a public place such as a coffee shop or restaurant. Let someone else know where you will be and who you will be meeting.",
        },
        {
            title :"Use your own transportation" ,
            info : "Drive yourself or take public transportation to your date. Avoid getting into a car with someone you do not know well.",
        },
        {
            title : "Do not share financial information:",
            info : "Do not share your bank account information or any other financial information with someone you have just met on a dating website." ,
        },
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

