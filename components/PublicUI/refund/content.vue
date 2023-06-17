<template>
    <div>
        <section class=" py-[20px]">
            <div
                class=" w-full px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1170px] mx-auto sm:px-4">
                <div class="flex flex-wrap ">

                    <div class="pr-4 pl-4">
                        <div>
                            <div class="mb-0">
                                <h6 class=" text-[#5650ce] block text-2xl leading-[34px] font-semibold mb-6">
                                </h6>
                                <h4
                                    class="dark:text-[white] text-[30px] leading-[60px] font-bold block text-[#292929] mb-[11px]">


                                </h4>

                                <p class="my-2 text-justify" >
                                    At our dating website, we strive to provide our users with the best possible online dating experience. If for any reason you are not satisfied with our services, we offer a refund policy that outlines the circumstances under which refunds may be issued.
                                </p>

                                <p class="my-2 text-justify" v-for="item in data">
                                    <span class=" font-bold">
                                        {{ item.title }} :
                                    </span> {{ item.info }}
                                </p>

                                <p class="my-2 text-justify" >
                                    Please note that refunds will be processed back to the original payment method used for the subscription purchase. Refunds may take up to 5-7 business days to process.
                                </p>
                                <p class="my-2 text-justify" >
                                    If you have any questions or concerns about our refund policy, please contact our customer support team for assistance.
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
        "title": "Cancellation of Subscription:",
        "info": "Users can cancel their subscription anytime and if the cancellation request is received before the end of the subscription period, a refund will be processed for the unused portion of the subscription."
    },
    {
        "title": "Technical Issues:",
        "info": "In the event of a technical issue that prevents the user from accessing our website or using our services, a refund may be issued upon verification of the issue."
    },
    {
        "title": "Fraudulent Activity:",
        "info": "If it is discovered that a user engaged in fraudulent activity on our website, such as creating fake profiles or using stolen credit cards, the user will not be eligible for a refund."
    },
    {
        "title": "Unsatisfactory Service:",
        "info": "If a user is unsatisfied with the service provided by our dating website, they may request a refund within 14 days of their subscription purchase. In such cases, we will review the user's request and determine if a refund is appropriate."
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

