<template>
    <div>
        <header class="header-section">
        <div class="container mx-auto sm:px-4">
            <div class="header-wrapper">
                <div class="logo">
                    <NuxtLink to="/">
                        <img src="@/assets/frontend/images/logo/logo.png" alt="logo">
                    </NuxtLink>
                </div>
                <ul class="menu">
                    <li>
                        <NuxtLink to="#" class="active">Home</NuxtLink>
                        <ul class="submenu">
                            <li>
                                <NuxtLink to="/" class="active">Home One</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/index2">Home Two</NuxtLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NuxtLink to="/community">Community</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/membership">Membership</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/shop">Shop</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="#">pages</NuxtLink>
                        <ul class="submenu">
                            <li>
                                <NuxtLink to="/userpanel">User Panel</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/aboutus">About Us</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/communitysingle">Community Single</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/members">Members</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/shop2">Shop sidebar</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/singleprofile">Single Profile One</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/singleprofile2">Single Profile Two</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/singleprofile3">Single Profile Three</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/singleshope">Shop Details</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/contact">Contact</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/login">Login</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/register">Register</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/404error">404</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/503error">503</NuxtLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">blog</a>
                        <ul class="submenu">
                            <li>
                                <NuxtLink to="/blog">Blog</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/blogsingle">Blog Single</NuxtLink>
                            </li>
                        </ul>
                    </li>
                    <li class="separator">
                        <span>|</span>
                    </li>
                    <li>
                        <div class="serch-icon">
                            <i class="fas fa-search"></i>
                            <!-- <font-awesome-icon :icon="['fas', 'fa-search']" /> -->
                        </div>
                    </li>
                    <li>
                        <div class="language-select">
                            <select class="select-bar">
                                <option value="">EN</option>
                                <option value="">IN</option>
                                <option value="">BN</option>
                            </select>
                        </div>
                    </li>
                    <li class="user-profile">
                        <a href="#">
                            <img src="@/assets/frontend/images/user-demo.png" alt="">
                        </a>
                        <ul class="submenu">
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
        <div class="absolute top-0 bottom-0 right-0 px-4 py-3"><i class="fas fa-times"></i></div>
        <form action="#">
            <input type="text" placeholder="Write what you want..">
        </form>
    </div>
    </div>
</template>

<script setup>
    
</script>

<style lang="scss" scoped>

</style>