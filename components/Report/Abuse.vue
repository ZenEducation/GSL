<template>
    <div>
        <section class=" py-[116px]">
            <div
                class=" w-full mx-auto px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1170px] mx-auto sm:px-4">
                <div class="flex flex-wrap ">

                    <div class="pr-4 pl-4">
                        <div>
                            <div class="mb-0">
                                <h6 class=" text-[#5650ce] block text-2xl leading-[34px] font-semibold mb-6">
                                    Get to Know More about Report Abuse
                                </h6>
                                <h2 class=" text-[50px] leading-[60px] font-bold block text-[#292929] mb-[11px]">
                                    Report Abuse
                                </h2>
                                <p class="my-2 text-justify">GSL is committed to providing a safe and
                                    respectful environment for
                                    all of its users. We do not tolerate any form of abuse, harassment, or inappropriate
                                    behavior on our platform. This Abuse Report Policy outlines our procedures for
                                    reporting and handling instances of abuse.</p>

                                <ol class="mx-4 mt-2">
                                    <li>Type of Abuse <br />
                                        <p class="mx-6">Abuse can take many forms, including but not limited to:</p>
                                        <ul class="mx-12">
                                            <li>Verbal abuse or harassment, including the use of derogatory language or
                                                slurs.</li>
                                            <li>Physical abuse or threats of physical harm.</li>
                                            <li>Sexual harassment, including unwanted sexual advances or requests for sexual
                                                favors.</li>
                                            <li>Stalking or harassment both online and offline.</li>
                                            <li>Spamming or sending unsolicited messages.</li>
                                            <li>Impersonation or fake profiles.</li>
                                        </ul>

                                    </li>
                                    <hr class="my-2">
                                    <li>Reporting Abuse
                                        <br>
                                        <p class="mx-6">If you experience or witness any form of abuse on the Website,
                                            please report it
                                            to us
                                            immediately. You can report abuse by clicking on the "Report Abuse" button on
                                            the
                                            user's profile or by contacting our customer support team.
                                        </p>

                                        <p class="mx-6 mt-2">When reporting abuse, please provide as much detail as
                                            possible,
                                            including the
                                            username of the offending user, the date and time of the incident, and any
                                            relevant
                                            messages or screenshots. All reports will be taken seriously and investigated
                                            promptly.
                                        </p>
                                    </li>
                                    <hr class="my-2">
                                    <li>Handling of Abuse Reports
                                        <br>
                                        <p class="mx-6">We take all abuse reports seriously and will investigate each report
                                            thoroughly. If we
                                            determine that a user has violated our Abuse Report Policy, we may take one or
                                            more of
                                            the following actions:
                                        </p>
                                        <ul class="mx-12">
                                            <li>Temporarily or permanently suspend the user's account.</li>
                                            <li>Remove the user's profile and/or any offending content.</li>
                                            <li>Contact law enforcement if the abuse constitutes a criminal offense.</li>
                                        </ul>
                                    </li>
                                    <hr class="my-2">
                                    <li>Confidentiality
                                        <br>
                                        <p class="mx-6">
                                            We understand that reporting abuse can be difficult and sensitive. We will
                                            handle all
                                            reports with the utmost confidentiality and will only share information on a
                                            need-to-know basis.
                                        </p>
                                    </li>
                                    <hr class="my-2">
                                    <li>False Reports
                                        <br>
                                        <p class="mx-6">
                                            We take false reports of abuse just as seriously as actual instances of abuse.
                                            If we
                                            determine that a report is false or malicious, we may take disciplinary action
                                            against the
                                            user who made the report.
                                        </p>
                                    </li>
                                    <hr class="my-2">
                                    <li>Contact Us
                                        <br>
                                        <p class="mx-6">
                                            If you have any questions or concerns about our Abuse Report Policy, please
                                            contact us at [Insert Contact Information]
                                        </p>
                                    </li>
                                </ol>

                            </div>

                        </div>
                        <div class=" justify-center items-center h-auto px-40 py-10">
                            <form action="" method="post"
                                class="w-full flex justify-center p-7 flex-col items-center rounded-2xl">
                                <h1 class="text-white text-2xl ">Report About Abuser</h1>
                                <input type="text" placeholder="Enter Your Username:" class="w-2/3 rounded-lg my-2">
                                <input type="email" placeholder="Enter Your Email:" class="w-2/3 rounded-lg my-2">
                                <input type="text" placeholder="Enter Your Abuser Username:" class="w-2/3 rounded-lg my-2">
                                <input type="file" name="proff" id="proff" class="w-2/3 my-2 text-white" accept="image/*">
                                <textarea name="message" id="message" placeholder="Enter Details...." cols="30" rows="10"
                                    class="my-2 w-2/3 rounded-lg"></textarea>
                                <input type="button" value="Submit" id="submit"
                                    class="w-1/3 rounded-lg bg-white text-black text-2xl uppercase h-10">
                            </form>
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
ol {
    list-style-type: decimal;
}

ul {
    list-style-type: disc;
}

form {
    background-image: url("@/assets/frontend/images/banner/bc-about.jpg");
}</style>

