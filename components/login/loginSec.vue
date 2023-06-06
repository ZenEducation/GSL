<template>
    <div>
        <section class="relative h-screen w-full">
            <div>
                <div
                    class="w-full mx-auto px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1170px]  sm:px-4">
                    <div class="flex flex-wrap ">
                        <div class="lg:w-2/5 pr-4 pl-4">
                            <NuxtLink to="/"
                                class="absolute z-10  text-white max-lg:text-black max-lg:dark:text-white px-0 py-[15px] hover:underline">
                                <i class="fas fa-chevron-left  mr-[5px]"></i> Back to GSL
                            </NuxtLink>
                        </div>
                        <div class="lg:w-3/5  max-lg:mt-10  pr-4 pl-4 ">
                            <div class="block text-left px-0 py-[15px]">
                                <img src="@/assets/frontend/images/logo/logo1.png" class="inline-block h-10" alt="logo">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="w-full mx-auto px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1170px] sm:px-4">
                <div class="flex flex-wrap  justify-end">
                    <div
                        class="bg-[url(@/assets/frontend/images/log.jpg)] max-lg:hidden bg-no-repeat bg-center bg-cover h-screen w-2/5 absolute left-0 top-0">
                    </div>
                    <div class="lg:w-3/5 max-lg:w-full pr-4 pl-4 ">
                        <div class="h-[calc(100vh_-_72px)] overflow-y-auto pb-10">
                            <div class="text-center mb-[30px] pt-20">
                                <h2 class="text-[28px] dark:text-white leading-[38px] capitalize">
                                    Welcome to GSL
                                </h2>
                            </div>
                            <div>
                                <form action="#" @submit="login">
                                    <div class="mb-4">
                                        <label for="" class="text-lg leading-7 text-[#3b368c] font-semibold">Your
                                            Address</label>
                                        <input type="name" v-model="email"
                                            class="border bg-[rgb(234,242,252)] dark:text-white dark:bg-[#262950]   shadow-[1.948px_13.864px_6px_0px_rgba(220,234,251,0.3)] text-base text-[#3b368c] h-[60px] px-[30px] py-0 border-solid border-[rgba(59,54,140,0.1)] placeholder:text-[#3b368c]"
                                            placeholder="Enter Your Email">
                                    </div>
                                    <div class="mb-4">
                                        <label for=""
                                            class="text-lg leading-7 text-[#3b368c] font-semibold">Password</label>
                                        <input type="text" v-model="password"
                                            class="border bg-[rgb(234,242,252)] dark:text-white dark:bg-[#262950]   shadow-[1.948px_13.864px_6px_0px_rgba(220,234,251,0.3)] text-base text-[#3b368c] h-[60px] px-[30px] py-0 border-solid border-[rgba(59,54,140,0.1)] placeholder:text-[#3b368c]"
                                            placeholder="Enter Your Password">
                                    </div>
                                    <p class="text-base">
                                        Forgot your password? <a href="#"
                                            class="text-[#3b368c] font-semibold hover:underline">recover password</a>
                                    </p>
                                    <div class="block text-center">
                                        <button type="submit"
                                            class="bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] shadow-[0.872px_9.962px_20px_0px_rgba(12,78,165,0.3)] font-semibold text-white inline-block cursor-pointer w-auto h-auto px-[35px] py-[11px] rounded-[50px] border-0 hover:text-white hover:shadow-[1px_10px_20px_0px_rgba(12,78,165,0.43)]">Sign
                                            IN</button>
                                    </div>
                                    <div
                                        class="text-base font-bold text-[#3b368c] block text-center relative w-full mt-10 mb-4 before:absolute before:content-[''] before:h-px before:w-full before:bg-[#dddce7] before:-translate-y-2/4 before:z-[-1] before:left-0 before:top-2/4">
                                        <p class="inline-block mb-0 px-[15px] py-0">OR</p>
                                    </div>
                                    <div class="block text-center">
                                        <p class="text-[#3b368c] text-base leading-[26px]">Sign up with your email</p>
                                        <NuxtLink to="#"
                                            class=" no-underline border bg-[rgb(234,242,252)] dark:bg-[#262950]  shadow-[1.948px_13.864px_6px_0px_rgba(220,234,251,0.3)] transition-all duration-[ease] delay-[0.3s] mt-[9px] mb-[19px] px-[30px] py-2.5 rounded-[50px] border-solid border-[rgba(59,54,140,0.1)] hover:shadow-[2px_13px_16px_0px_rgba(59,54,140,0.1)]">
                                            <img src="" class="mr-2" alt=""> Sign Up with
                                            Google
                                        </NuxtLink>
                                        <p class="text-base">
                                            Don't have an account? <NuxtLink
                                                class="text-[#3b368c] font-semibold hover:underline" to="/register">
                                                Sign up here
                                            </NuxtLink>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Auth } from 'aws-amplify';
const email = ref('');
const password = ref('');
const router = useRouter();



const login = async (event) => {
    event.preventDefault();
    try {
        await Auth.signIn(email.value, password.value);
        router.push({ path: '/singleProfile' });
    } catch (error) {
        console.error('Login error:', error);
        // Handle login error
    }
};
</script>

<style lang="scss" scoped></style>