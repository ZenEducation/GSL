<template>
    <div>
        <header
            class="fixed bg-[#5650ce] w-full z-[99] px-0 py-2.5 border-b border-solid border-[rgba(255,255,255,0.102)] left-0 top-0">
            <div
                class=" w-full mx-auto px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1170px] mx-auto sm:px-4">
                <div class="header-wrapper flex flex-wrap justify-between items-center">
                    <div class="w-[170px]">
                        <NuxtLink to="/peyamba" class="inline-block">
                            <img src="@/assets/frontend/images/logo/logo.png" alt="logo" class="max-w-full" />
                        </NuxtLink>
                    </div>
                    <ul
                        class="menu min-[992px]:flex min-[992px]:flex-wrap min-[992px]:justify-end min-[992px]:items-center">

                        <li
                            class="min-[992px]:relative min-[992px]:px-3 py-[5px] min-[992px]:hover:opacity-100 min-[992px]:hover:visible min-[992px]:hover:translate-y-0 min-[992px]:hover:block">
                            <NuxtLink to="/"
                                class="px-3 py-[5px] no-underline min-[992px]:text-[#e9eeff] min-[992px]:text-base min-[992px]:font-bold min-[992px]:uppercase min-[992px]:relative min-[992px]:before:w-[calc(100%_-_10px)] min-[992px]:before:h-0.5 min-[992px]:before:bg-white min-[992px]:before:absolute min-[992px]:before:content-[''] min-[992px]:before:transition-all min-[992px]:before:duration-[ease] min-[992px]:before:delay-[0.3s] min-[992px]:before:origin-left min-[992px]:before:scale-x-0 min-[992px]:before:top-[calc(100%_+_18px)] min-[992px]:hover:scale-x-100">
                                Home</NuxtLink>
                        </li>
                        <li
                            class="min-[992px]:relative min-[992px]:px-3 py-[5px] min-[992px]:hover:opacity-100 min-[992px]:hover:visible min-[992px]:hover:translate-y-0 min-[992px]:hover:block">
                            <NuxtLink to="/peyamba/community"
                                class="px-3 py-[5px] no-underline min-[992px]:text-[#e9eeff] min-[992px]:text-base min-[992px]:font-bold min-[992px]:uppercase min-[992px]:relative min-[992px]:before:w-[calc(100%_-_10px)] min-[992px]:before:h-0.5 min-[992px]:before:bg-white min-[992px]:before:absolute min-[992px]:before:content-[''] min-[992px]:before:transition-all min-[992px]:before:duration-[ease] min-[992px]:before:delay-[0.3s] min-[992px]:before:origin-left min-[992px]:before:scale-x-0 min-[992px]:before:top-[calc(100%_+_18px)] min-[992px]:hover:scale-x-100">
                                Community</NuxtLink>
                        </li>
                        <li
                            class="min-[992px]:relative min-[992px]:px-3 py-[5px] min-[992px]:hover:opacity-100 min-[992px]:hover:visible min-[992px]:hover:translate-y-0 min-[992px]:hover:block">
                            <NuxtLink to="/peyamba/membership"
                                class="px-3 py-[5px] no-underline min-[992px]:text-[#e9eeff] min-[992px]:text-base min-[992px]:font-bold min-[992px]:uppercase min-[992px]:relative min-[992px]:before:w-[calc(100%_-_10px)] min-[992px]:before:h-0.5 min-[992px]:before:bg-white min-[992px]:before:absolute min-[992px]:before:content-[''] min-[992px]:before:transition-all min-[992px]:before:duration-[ease] min-[992px]:before:delay-[0.3s] min-[992px]:before:origin-left min-[992px]:before:scale-x-0 min-[992px]:before:top-[calc(100%_+_18px)] min-[992px]:hover:scale-x-100">
                                Membership</NuxtLink>
                        </li>
                        <li
                            class="min-[992px]:relative min-[992px]:px-3 py-[5px] min-[992px]:hover:opacity-100 min-[992px]:hover:visible min-[992px]:hover:translate-y-0 min-[992px]:hover:block">
                            <NuxtLink to="/peyamba/shop"
                                class="px-3 py-[5px] no-underline min-[992px]:text-[#e9eeff] min-[992px]:text-base min-[992px]:font-bold min-[992px]:uppercase min-[992px]:relative min-[992px]:before:w-[calc(100%_-_10px)] min-[992px]:before:h-0.5 min-[992px]:before:bg-white min-[992px]:before:absolute min-[992px]:before:content-[''] min-[992px]:before:transition-all min-[992px]:before:duration-[ease] min-[992px]:before:delay-[0.3s] min-[992px]:before:origin-left min-[992px]:before:scale-x-0 min-[992px]:before:top-[calc(100%_+_18px)] min-[992px]:hover:scale-x-100">
                                Shop</NuxtLink>
                        </li>
                        <li
                            class="min-[992px]:relative min-[992px]:px-3 py-[5px] min-[992px]:hover:opacity-100 min-[992px]:hover:visible min-[992px]:hover:translate-y-0 min-[992px]:hover:block">
                            <NuxtLink to="#"
                                class="px-3 py-[5px] no-underline min-[992px]:text-[#e9eeff] min-[992px]:text-base min-[992px]:font-bold min-[992px]:uppercase min-[992px]:relative min-[992px]:before:w-[calc(100%_-_10px)] min-[992px]:before:h-0.5 min-[992px]:before:bg-white min-[992px]:before:absolute min-[992px]:before:content-[''] min-[992px]:before:transition-all min-[992px]:before:duration-[ease] min-[992px]:before:delay-[0.3s] min-[992px]:before:origin-left min-[992px]:before:scale-x-0 min-[992px]:before:top-[calc(100%_+_18px)] min-[992px]:hover:scale-x-100">
                                pages</NuxtLink>
                            <ul
                                class="submenu min-[992px]:absolute min-[992px]:bg-white min-[992px]:min-w-[240px] min-[992px]:shadow-[0px_0px_11.7px_1.3px_rgba(0,0,0,0.08)] min-[992px]:opacity-0 min-[992px]:invisible min-[992px]:transition-all min-[992px]:duration-[ease] min-[992px]:delay-[0.3s] min-[992px]:translate-y-[15px] min-[992px]:px-0 min-[992px]:py-5 min-[992px]:left-1.5 min-[992px]:top-full min-[992px]:before:absolute min-[992px]:before:content-[''] min-[992px]:before:-translate-y-full min-[992px]:before:w-0 min-[992px]:before:h-0 min-[992px]:before:border-t-transparent min-[992px]:before:border-b-[15px] min-[992px]:before:border-x-transparent min-[992px]:before:border-[10px] min-[992px]:before:border-solid min-[992px]:before:border-white min-[992px]:before:left-[15px] min-[992px]:before:top-0">
                                <li class="min-[992px]:px-5 min-[992px]:py-0 min-[992px]:hover:translate-x-0">
                                    <NuxtLink to="/peyamba/userpanel"
                                        class="min-[992px]:capitalize min-[992px]:font-semibold min-[992px]:flex min-[992px]:text-[#292929] min-[992px]:hover:text-[#5650ce] min-[992px]:hover:pl-2.5">
                                        User Panel</NuxtLink>
                                </li>
                                <li class="min-[992px]:px-5 min-[992px]:py-0 min-[992px]:hover:translate-x-0">
                                    <NuxtLink to="/about"
                                        class="min-[992px]:capitalize min-[992px]:font-semibold min-[992px]:flex min-[992px]:text-[#292929] min-[992px]:hover:text-[#5650ce] min-[992px]:hover:pl-2.5">
                                        About Us</NuxtLink>
                                </li>
                                <li class="min-[992px]:px-5 min-[992px]:py-0 min-[992px]:hover:translate-x-0">
                                    <NuxtLink to="/peyamba/communitysingle"
                                        class="min-[992px]:capitalize min-[992px]:font-semibold min-[992px]:flex min-[992px]:text-[#292929] min-[992px]:hover:text-[#5650ce] min-[992px]:hover:pl-2.5">
                                        Community Single</NuxtLink>
                                </li>
                                <li class="min-[992px]:px-5 min-[992px]:py-0 min-[992px]:hover:translate-x-0">
                                    <NuxtLink to="/peyamba/members"
                                        class="min-[992px]:capitalize min-[992px]:font-semibold min-[992px]:flex min-[992px]:text-[#292929] min-[992px]:hover:text-[#5650ce] min-[992px]:hover:pl-2.5">
                                        Members</NuxtLink>
                                </li>
                                <li class="min-[992px]:px-5 min-[992px]:py-0 min-[992px]:hover:translate-x-0">
                                    <NuxtLink to="/peyamba/shop2"
                                        class="min-[992px]:capitalize min-[992px]:font-semibold min-[992px]:flex min-[992px]:text-[#292929] min-[992px]:hover:text-[#5650ce] min-[992px]:hover:pl-2.5">
                                        Shop sidebar</NuxtLink>
                                </li>
                                <li class="min-[992px]:px-5 min-[992px]:py-0 min-[992px]:hover:translate-x-0">
                                    <NuxtLink to="/peyamba/singleprofile"
                                        class="min-[992px]:capitalize min-[992px]:font-semibold min-[992px]:flex min-[992px]:text-[#292929] min-[992px]:hover:text-[#5650ce] min-[992px]:hover:pl-2.5">
                                        Single Profile One</NuxtLink>
                                </li>
                                <li class="min-[992px]:px-5 min-[992px]:py-0 min-[992px]:hover:translate-x-0">
                                    <NuxtLink to="/peyamba/singleprofile2"
                                        class="min-[992px]:capitalize min-[992px]:font-semibold min-[992px]:flex min-[992px]:text-[#292929] min-[992px]:hover:text-[#5650ce] min-[992px]:hover:pl-2.5">
                                        Single Profile Two</NuxtLink>
                                </li>
                                <li class="min-[992px]:px-5 min-[992px]:py-0 min-[992px]:hover:translate-x-0">
                                    <NuxtLink to="/peyamba/singleprofile3"
                                        class="min-[992px]:capitalize min-[992px]:font-semibold min-[992px]:flex min-[992px]:text-[#292929] min-[992px]:hover:text-[#5650ce] min-[992px]:hover:pl-2.5">
                                        Single Profile Three</NuxtLink>
                                </li>
                                <li class="min-[992px]:px-5 min-[992px]:py-0 min-[992px]:hover:translate-x-0">
                                    <NuxtLink to="/peyamba/singleshope"
                                        class="min-[992px]:capitalize min-[992px]:font-semibold min-[992px]:flex min-[992px]:text-[#292929] min-[992px]:hover:text-[#5650ce] min-[992px]:hover:pl-2.5">
                                        Shop Details</NuxtLink>
                                </li>
                                <li class="min-[992px]:px-5 min-[992px]:py-0 min-[992px]:hover:translate-x-0">
                                    <NuxtLink to="/contact"
                                        class="min-[992px]:capitalize min-[992px]:font-semibold min-[992px]:flex min-[992px]:text-[#292929] min-[992px]:hover:text-[#5650ce] min-[992px]:hover:pl-2.5">
                                        Contact</NuxtLink>
                                </li>
                                <li class="min-[992px]:px-5 min-[992px]:py-0 min-[992px]:hover:translate-x-0">
                                    <NuxtLink to="/peyamba/login"
                                        class="min-[992px]:capitalize min-[992px]:font-semibold min-[992px]:flex min-[992px]:text-[#292929] min-[992px]:hover:text-[#5650ce] min-[992px]:hover:pl-2.5">
                                        Login</NuxtLink>
                                </li>
                                <li class="min-[992px]:px-5 min-[992px]:py-0 min-[992px]:hover:translate-x-0">
                                    <NuxtLink to="/peyamba/register"
                                        class="min-[992px]:capitalize min-[992px]:font-semibold min-[992px]:flex min-[992px]:text-[#292929] min-[992px]:hover:text-[#5650ce] min-[992px]:hover:pl-2.5">
                                        Register</NuxtLink>
                                </li>
                                <li class="min-[992px]:px-5 min-[992px]:py-0 min-[992px]:hover:translate-x-0">
                                    <NuxtLink to="/peyamba/404error"
                                        class="min-[992px]:capitalize min-[992px]:font-semibold min-[992px]:flex min-[992px]:text-[#292929] min-[992px]:hover:text-[#5650ce] min-[992px]:hover:pl-2.5">
                                        404</NuxtLink>
                                </li>
                                <li class="min-[992px]:px-5 min-[992px]:py-0 min-[992px]:hover:translate-x-0">
                                    <NuxtLink to="/peyamba/503error"
                                        class="min-[992px]:capitalize min-[992px]:font-semibold min-[992px]:flex min-[992px]:text-[#292929] min-[992px]:hover:text-[#5650ce] min-[992px]:hover:pl-2.5">
                                        503</NuxtLink>
                                </li>
                                <li class="min-[992px]:px-5 min-[992px]:py-0 min-[992px]:hover:translate-x-0">
                                    <NuxtLink to="/report"
                                        class="min-[992px]:capitalize min-[992px]:font-semibold min-[992px]:flex min-[992px]:text-[#292929] min-[992px]:hover:text-[#5650ce] min-[992px]:hover:pl-2.5">
                                        Report</NuxtLink>
                                </li>
                                <li class="min-[992px]:px-5 min-[992px]:py-0 min-[992px]:hover:translate-x-0">
                                    <NuxtLink to="/privacy_policy"
                                        class="min-[992px]:capitalize min-[992px]:font-semibold min-[992px]:flex min-[992px]:text-[#292929] min-[992px]:hover:text-[#5650ce] min-[992px]:hover:pl-2.5">
                                        Privacy Policy</NuxtLink>
                                </li>
                                <li class="min-[992px]:px-5 min-[992px]:py-0 min-[992px]:hover:translate-x-0">
                                    <NuxtLink to="/cookie_policy"
                                        class="min-[992px]:capitalize min-[992px]:font-semibold min-[992px]:flex min-[992px]:text-[#292929] min-[992px]:hover:text-[#5650ce] min-[992px]:hover:pl-2.5">
                                        Cookie Policy</NuxtLink>
                                </li>
                                <li class="min-[992px]:px-5 min-[992px]:py-0 min-[992px]:hover:translate-x-0">
                                    <NuxtLink to="/end_user"
                                        class="min-[992px]:capitalize min-[992px]:font-semibold min-[992px]:flex min-[992px]:text-[#292929] min-[992px]:hover:text-[#5650ce] min-[992px]:hover:pl-2.5">
                                        End-User Agreement</NuxtLink>
                                </li>
                            </ul>
                        </li>
                        <li
                            class="min-[992px]:relative min-[992px]:px-3 py-[5px] min-[992px]:hover:opacity-100 min-[992px]:hover:visible min-[992px]:hover:translate-y-0 min-[992px]:hover:block">
                            <a href="#"
                                class="px-3 py-[5px] no-underline min-[992px]:text-[#e9eeff] min-[992px]:text-base min-[992px]:font-bold min-[992px]:uppercase min-[992px]:relative min-[992px]:before:w-[calc(100%_-_10px)] min-[992px]:before:h-0.5 min-[992px]:before:bg-white min-[992px]:before:absolute min-[992px]:before:content-[''] min-[992px]:before:transition-all min-[992px]:before:duration-[ease] min-[992px]:before:delay-[0.3s] min-[992px]:before:origin-left min-[992px]:before:scale-x-0 min-[992px]:before:top-[calc(100%_+_18px)] min-[992px]:hover:scale-x-100">blog</a>
                            <ul
                                class="submenu min-[992px]:absolute min-[992px]:bg-white min-[992px]:min-w-[240px] min-[992px]:shadow-[0px_0px_11.7px_1.3px_rgba(0,0,0,0.08)] min-[992px]:opacity-0 min-[992px]:invisible min-[992px]:transition-all min-[992px]:duration-[ease] min-[992px]:delay-[0.3s] min-[992px]:translate-y-[15px] min-[992px]:px-0 min-[992px]:py-5 min-[992px]:left-1.5 min-[992px]:top-full min-[992px]:before:absolute min-[992px]:before:content-['s'] min-[992px]:before:-translate-y-full min-[992px]:before:w-0 min-[992px]:before:h-0 min-[992px]:before:border-t-transparent min-[992px]:before:border-b-[15px] min-[992px]:before:border-x-transparent min-[992px]:before:border-[10px] min-[992px]:before:border-solid min-[992px]:before:border-white min-[992px]:before:left-[15px] min-[992px]:before:top-0">
                                <li class="min-[992px]:px-5 min-[992px]:py-0 min-[992px]:hover:translate-x-0">
                                    <NuxtLink to="/peyamba/blog"
                                        class="min-[992px]:capitalize min-[992px]:font-semibold min-[992px]:flex min-[992px]:text-[#292929] min-[992px]:hover:text-[#5650ce] min-[992px]:hover:pl-2.5">
                                        Blog</NuxtLink>
                                </li>
                                <li class="min-[992px]:px-5 min-[992px]:py-0 min-[992px]:hover:translate-x-0">
                                    <NuxtLink to="/peyamba/blogsingle"
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z" />
                                </svg>
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
                                    <a href="#">Profile</a>
                                </li>
                                <li>
                                    <a href="#">Logout</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div class="header-bar lg:hidden">
                        <span></span>
                        <span></span>
                        <span></span>
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


<style scoped>
.header-wrapper {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}



.header-wrapper .logo {
    width: 170px;
}

.header-wrapper .logo a {
    display: inline-block;
}

.header-wrapper .logo a img {
    max-width: 100%;
}

.header-wrapper .menu li.separator {
    margin-right: 7px;
}

.header-wrapper .menu li .language-select {
    margin-left: 10px;
}

.header-wrapper .menu li a {
    padding: 5px 12px;
}

@media (min-width: 992px) {
    .header-wrapper .menu {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .header-wrapper .menu li {
        padding: 5px 12px;
        position: relative;
    }

    .header-wrapper .menu li a {
        color: #e9eeff;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
    }

    .header-wrapper .menu li .submenu {
        position: absolute;
        top: 100%;
        left: 6px;
        background: #ffffff;
        min-width: 240px;
        padding: 20px 0;
        -webkit-box-shadow: 0px 0px 11.7px 1.3px rgba(0, 0, 0, 0.08);
        box-shadow: 0px 0px 11.7px 1.3px rgba(0, 0, 0, 0.08);
        opacity: 0;
        visibility: hidden;
        -webkit-transition: all ease 0.3s;
        -o-transition: all ease 0.3s;
        transition: all ease 0.3s;
        -webkit-transform: translateY(15px);
        -ms-transform: translateY(15px);
        transform: translateY(15px);
    }

    .header-wrapper .menu li .submenu li {
        padding: 0 20px;
    }

    .header-wrapper .menu li .submenu li a {
        text-transform: capitalize;
        font-weight: 600;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        color: #292929;
    }

    .header-wrapper .menu li .submenu li a:hover,
    .header-wrapper .menu li .submenu li a.active {
        padding-left: 10px;
        color: #5650ce;
    }

    .header-wrapper .menu li .submenu::before {
        position: absolute;
        content: "";
        top: 0;
        left: 15px;
        -webkit-transform: translateY(-100%);
        -ms-transform: translateY(-100%);
        transform: translateY(-100%);
        width: 0;
        height: 0;
        border: 10px solid #ffffff;
        border-bottom-width: 15px;
        border-right-color: transparent;
        border-left-color: transparent;
        border-top-color: transparent;
    }

    .header-wrapper .menu li .submenu li .submenu {
        left: calc(100% + 20px);
        top: 0;
        -webkit-transform: translateX(10px);
        -ms-transform: translateX(10px);
        transform: translateX(10px);
    }

    .header-wrapper .menu li .submenu li .submenu::before {
        left: -2px;
        top: 3px;
        -webkit-transform: translateX(-100%) rotate(-90deg);
        -ms-transform: translateX(-100%) rotate(-90deg);
        transform: translateX(-100%) rotate(-90deg);
    }

    .header-wrapper .menu li .submenu li:hover>.submenu {
        -webkit-transform: translateX(0);
        -ms-transform: translateX(0);
        transform: translateX(0);
    }

    .header-wrapper .menu li:hover>.submenu {
        opacity: 1;
        visibility: visible;
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0);
        display: block !important;
    }

    .header-wrapper .menu li .nice-select {
        background: transparent;
        border: none;
        color: #ffffff;
        padding: 0px 25px 0px 0px;
    }

    .header-wrapper .menu li .nice-select::after {
        border-bottom: 2px solid #fff;
        border-right: 2px solid #fff;
    }

    .header-wrapper .menu li .nice-select .list li {
        color: #222;
        padding: 0px 10px;
    }

    .header-wrapper .menu li.separator span {
        color: #fff;
    }

    .header-wrapper .menu li .serch-icon {
        cursor: pointer;
        color: #fff;
    }

    .header-wrapper .menu li .serch-icon i {
        color: #fff;
        font-size: 16px;
    }

    .header-wrapper .menu li.user-profile a {
        display: flex;
        align-items: center;
    }

    .header-wrapper .menu li.user-profile .submenu {
        left: auto !important;
        right: 0px !important;
    }

    .header-wrapper .menu li.user-profile .submenu::before {
        left: auto;
        right: 15px;
    }

    .header-wrapper .menu>li>a {
        position: relative;
    }

    .header-wrapper .menu>li>a::before {
        width: calc(100% - 10px);
        height: 2px;
        background: #fff;
        top: calc(100% + 18px);
        position: absolute;
        content: "";
        -webkit-transform: scaleX(0);
        -ms-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transition: all ease 0.3s;
        -o-transition: all ease 0.3s;
        transition: all ease 0.3s;
        -webkit-transform-origin: left;
        -ms-transform-origin: left;
        transform-origin: left;
    }

    .header-wrapper .menu>li>a:hover::before,
    .header-wrapper .menu>li>a.active::before {
        -webkit-transform: scaleX(1);
        -ms-transform: scaleX(1);
        transform: scaleX(1);
    }

    .header-wrapper .menu>li.header-button a::before {
        display: none;
    }
}

.header-wrapper .menu li.header-button a {
    background-image: -webkit-linear-gradient(169deg,
            rgb(85, 96, 255) 17%,
            rgb(170, 82, 161) 63%,
            rgb(255, 67, 67) 100%);
    padding: 10px 49px;
    font-weight: 600;
    border-radius: 25px;
    display: inline-block;
}

.header-wrapper .menu li.header-button a:hover {
    -webkit-box-shadow: 0px 10px 15px 0px rgba(59, 55, 188, 0.5);
    box-shadow: 0px 10px 15px 0px rgba(59, 55, 188, 0.5);
}

.header-section {
    border-bottom: 1px solid rgba(255, 255, 255, 0.102);
    padding: 10px 0;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 99;
}

.header-section.header-active {
    -webkit-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    background: #5650ce;
    border: none;
    animation-name: fadeInDown;
    -webkit-animation-name: fadeInDown;
    -moz-animation-name: fadeInDown;
    animation-duration: 1s;
    -webkit-animation-duration: 1s;
    -moz-animation-duration: 1s;
}

.header-bar {
    width: 30px;
    height: 25px;
    cursor: pointer;
    position: relative;
}

.header-bar span {
    display: inline-block;
    height: 3px;
    width: 100%;
    -webkit-transition: all ease 0.3s;
    -o-transition: all ease 0.3s;
    transition: all ease 0.3s;
    background-color: #ffffff;
    position: absolute;
    left: 0;
}

.header-bar span:nth-child(2) {
    top: 52%;
    -webkit-transform: translateY(-65%);
    -ms-transform: translateY(-65%);
    transform: translateY(-65%);
}

.header-bar span:first-child {
    top: 0;
}

.header-bar span:last-child {
    bottom: 0;
}

.header-bar.active span:first-child {
    -webkit-transform: rotate(45deg) translate(6px, 13px);
    -ms-transform: rotate(45deg) translate(6px, 13px);
    transform: rotate(45deg) translate(6px, 13px);
}

.header-bar.active span:nth-child(2) {
    opacity: 0;
}

.header-bar.active span:last-child {
    -webkit-transform: rotate(-45deg) translate(3px, -9px);
    -ms-transform: rotate(-45deg) translate(3px, -9px);
    transform: rotate(-45deg) translate(3px, -9px);
}

.tab-item {
    animation-name: fadeInUp;
    -webkit-animation-name: fadeInUp;
    -moz-animation-name: fadeInUp;
    animation-duration: 1s;
    -webkit-animation-duration: 1s;
    -moz-animation-duration: 1s;
}

.menu-item-has-children>a::after {
    content: "\f107";
    font-weight: 600;
    font-family: "Font Awesome 5 Free";
    margin-left: 5px;
}

.search-overlay {
    position: fixed;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.91);
    z-index: 999999;
    display: none;
}

.search-overlay .close {
    position: absolute;
    top: 50px;
    right: 50px;
    color: #fff;
    border: 1px solid #fff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    line-height: 40px;
    text-align: center;
    font-size: 15px;
    cursor: pointer;
}

.search-overlay form {
    width: 60%;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.search-overlay form input {
    background: none;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    border-radius: 0px;
    padding: 0px;
    height: 50px;
    font-size: 16px;
    color: #fff;
}

.search-overlay form input:focus {
    background: none;
}
</style>
