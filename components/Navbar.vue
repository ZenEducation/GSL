<script setup>
import { useStyleStore } from '~~/stores/style';
const menuOpen = ref(false);
const changeMenuOpen = ()=>{
    menuOpen.value = !menuOpen.value;
}
const styleStore = useStyleStore();
const toggledark = ()=>{
    styleStore.setDarkMode();
}

</script>
<template>
    <div>
        <header
            class="fixed bg-[#5650ce] w-full z-[99] px-0 py-2.5 border-b border-solid border-[rgba(255,255,255,0.102)] left-0 top-0">
            <div
                class=" w-full mx-auto px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1170px] mx-auto sm:px-4">
                <div class="header-wrapper  flex flex-wrap justify-between items-center">
                    <div class="w-[100px]">
                        <NuxtLink to="/" class="inline-block">
                            <img src="@/assets/frontend/images/logo/logo1.png" alt="logo" class="max-w-full" />
                        </NuxtLink>
                    </div>
                    <div class=" lg:hidden">
                    <ul class="menu active overflow-hidden"  v-if="menuOpen" >
                        <li >
                            <a href="/" class="active">Home</a>
                        </li>
                        <li>
                            <a href="community">Community</a>
                        </li>
                        <li>
                            <a href="membership">Membership</a>
                        </li>


                        <li>
                            <a href="#">blog</a>
                            <ul class="submenu">
                                <li>
                                    <a href="blog">Blog</a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <div class="serch-icon">
                                <i class="fas fa-search"></i>
                            </div>
                        </li>
                        <li @click="toggledark">
                            <div class="serch-icon">
                                <i class="fas fa-moon"></i>
                            </div>
                        </li>
                        <li>
                            <div class="language-select">
                                <select class="select-bar nice-select ">
                                    <option value="">EN</option>
                                    <option value="">IN</option>
                                    <option value="">BN</option>
                                </select>
                            </div>
                        </li>
                        <li class="user-profile">
                            <a href="#">
                                User 
                            </a>
                            <ul class="submenu" style="display: block;"  >
                                <li>
                                    <a href="/singleprofile">Profile</a>
                                </li>
                                <li>
                                    <a href="#">Logout</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                    <div class="max-lg:hidden">
                    <ul
                        class="menu min-[992px]:flex min-[992px]:flex-wrap min-[992px]:justify-end min-[992px]:items-center">

                        <li
                            class="min-[992px]:relative min-[992px]:px-3 py-[5px] min-[992px]:hover:opacity-100 min-[992px]:hover:visible min-[992px]:hover:translate-y-0 min-[992px]:hover:block">
                            <NuxtLink to="/"
                                class=" py-[5px] no-underline min-[992px]:text-[#e9eeff] min-[992px]:text-base min-[992px]:font-bold min-[992px]:uppercase min-[992px]:relative min-[992px]:before:w-[calc(100%_-_10px)] min-[992px]:before:h-0.5 min-[992px]:before:bg-white min-[992px]:before:absolute min-[992px]:before:content-[''] min-[992px]:before:transition-all min-[992px]:before:duration-[ease] min-[992px]:before:delay-[0.3s] min-[992px]:before:origin-left min-[992px]:before:scale-x-0 min-[992px]:before:top-[calc(100%_+_18px)] min-[992px]:hover:scale-x-100">
                                Home</NuxtLink>
                        </li>
                        <li
                            class="min-[992px]:relative min-[992px]:px-3 py-[5px] min-[992px]:hover:opacity-100 min-[992px]:hover:visible min-[992px]:hover:translate-y-0 min-[992px]:hover:block">
                            <NuxtLink to="/community"
                                class=" py-[5px] no-underline min-[992px]:text-[#e9eeff] min-[992px]:text-base min-[992px]:font-bold min-[992px]:uppercase min-[992px]:relative min-[992px]:before:w-[calc(100%_-_10px)] min-[992px]:before:h-0.5 min-[992px]:before:bg-white min-[992px]:before:absolute min-[992px]:before:content-[''] min-[992px]:before:transition-all min-[992px]:before:duration-[ease] min-[992px]:before:delay-[0.3s] min-[992px]:before:origin-left min-[992px]:before:scale-x-0 min-[992px]:before:top-[calc(100%_+_18px)] min-[992px]:hover:scale-x-100">
                                Community</NuxtLink>
                        </li>
                        <li
                            class="min-[992px]:relative min-[992px]:px-3 py-[5px] min-[992px]:hover:opacity-100 min-[992px]:hover:visible min-[992px]:hover:translate-y-0 min-[992px]:hover:block">
                            <NuxtLink to="/membership"
                                class=" py-[5px] no-underline min-[992px]:text-[#e9eeff] min-[992px]:text-base min-[992px]:font-bold min-[992px]:uppercase min-[992px]:relative min-[992px]:before:w-[calc(100%_-_10px)] min-[992px]:before:h-0.5 min-[992px]:before:bg-white min-[992px]:before:absolute min-[992px]:before:content-[''] min-[992px]:before:transition-all min-[992px]:before:duration-[ease] min-[992px]:before:delay-[0.3s] min-[992px]:before:origin-left min-[992px]:before:scale-x-0 min-[992px]:before:top-[calc(100%_+_18px)] min-[992px]:hover:scale-x-100">
                                Membership</NuxtLink>
                        </li>
                        <li
                            class="min-[992px]:relative min-[992px]:px-3 py-[5px] min-[992px]:hover:opacity-100 min-[992px]:hover:visible min-[992px]:hover:translate-y-0 min-[992px]:hover:block">
                            <a href="#"
                                class=" py-[5px] no-underline min-[992px]:text-[#e9eeff] min-[992px]:text-base min-[992px]:font-bold min-[992px]:uppercase min-[992px]:relative min-[992px]:before:w-[calc(100%_-_10px)] min-[992px]:before:h-0.5 min-[992px]:before:bg-white min-[992px]:before:absolute min-[992px]:before:content-[''] min-[992px]:before:transition-all min-[992px]:before:duration-[ease] min-[992px]:before:delay-[0.3s] min-[992px]:before:origin-left min-[992px]:before:scale-x-0 min-[992px]:before:top-[calc(100%_+_18px)] min-[992px]:hover:scale-x-100">blog</a>
                            <ul
                                class="submenu min-[992px]:absolute min-[992px]:bg-white min-[992px]:min-w-[240px] min-[992px]:shadow-[0px_0px_11.7px_1.3px_rgba(0,0,0,0.08)] min-[992px]:opacity-0 min-[992px]:invisible min-[992px]:transition-all min-[992px]:duration-[ease] min-[992px]:delay-[0.3s] min-[992px]:translate-y-[15px] min-[992px]:px-0 min-[992px]:py-5 min-[992px]:left-1.5 min-[992px]:top-full min-[992px]:before:absolute min-[992px]:before:content-['s'] min-[992px]:before:-translate-y-full min-[992px]:before:w-0 min-[992px]:before:h-0 min-[992px]:before:border-t-transparent min-[992px]:before:border-b-[15px] min-[992px]:before:border-x-transparent min-[992px]:before:border-[10px] min-[992px]:before:border-solid min-[992px]:before:border-white min-[992px]:before:left-[15px] min-[992px]:before:top-0">
                                <li class="min-[992px]:px-5 min-[992px]:py-0 min-[992px]:hover:translate-x-0">
                                    <NuxtLink to="/blog"
                                        class="min-[992px]:capitalize min-[992px]:font-semibold min-[992px]:flex min-[992px]:text-[#292929] min-[992px]:hover:text-[#5650ce] min-[992px]:hover:pl-2.5">
                                        Blog</NuxtLink>
                                </li>
                                <li class="min-[992px]:px-5 min-[992px]:py-0 min-[992px]:hover:translate-x-0">
                                    <NuxtLink to="/blogsingle"
                                        class="min-[992px]:capitalize min-[992px]:font-semibold min-[992px]:flex min-[992px]:text-[#292929] min-[992px]:hover:text-[#5650ce] min-[992px]:hover:pl-2.5">
                                        Blog Single</NuxtLink>
                                </li>
                            </ul>
                        </li>
                        <li class="separator mr-[7px]">
                            <span class="min-[992px]:text-white">|</span>
                        </li>
                        <li>
                            <div class="serch-icon min-[992px]:cursor-pointer min-[992px]:text-white">
                                <i class="fas fa-search min-[992px]:text-white min-[992px]:text-base"></i>
                            </div>
                        </li>
                        <li @click="toggledark">
                            <div class="serch-icon min-[992px]:cursor-pointer min-[992px]:text-white">
                                <i class="fas fa-moon min-[992px]:text-white min-[992px]:text-base"></i>

                            </div>
                        </li>
                        <li>
                            <div class="language-select ml-2.5">
                                <select class="select-bar">
                                    <option value="">EN</option>
                                    <option value="">IN</option>
                                    <option value="">BN</option>
                                </select>
                            </div>
                        </li>
                        <li>
                            <a href="#" class="min-[992px]:flex min-[992px]:items-center">
                                <img src="@/assets/frontend/images/user-demo.png" alt="" />
                            </a>
                            <ul
                                class="submenu min-[992px]:left-auto min-[992px]:right-0 min-[992px]:before:left-auto min-[992px]:before:right-[15px]">
                                <li>
                                    <a href="/singleprofile">Profile</a>
                                </li>
                                <li>
                                    <a href="#">Logout</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    </div>
                    <div class="header-bar lg:hidden" @click="changeMenuOpen">
                        <div v-if="!menuOpen" >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div  v-if="menuOpen"  class="header-bar d-lg-none active">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                    </div>
                </div>
            </div>
        </header>

        <div class="search-overlay">
            <div class="absolute top-0 bottom-0 right-0 px-4 py-3">
                <i class="fas fa-times"></i>
            </div>
            <form action="#">
                <input type="text" placeholder="Write what you want.." />
            </form>
        </div>
    </div>
</template>



