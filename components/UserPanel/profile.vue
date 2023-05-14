<template>
    <div>
        <section class="user-setting-section px-0 py-[50px]">
            <div class="w-full mx-auto px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1170px] sm:px-4">
                <div class="flex flex-wrap ">
                    <div class="xl:w-1/3  md:w-2/5 w-full pr-4 pl-4 mb-14">

                        <div class="bg-[#f6f4f9] dark:bg-[#262950] dark-text-[white]  shadow-[2.736px_-7.518px_57px_0px_rgba(119,123,146,0.18)] overflow-hidden rounded-[10px]" id="accordionExample">
                            <div class="bg-[none]  rounded-none border-0">
                                <div class="mb-0 p-0 dark:text-[white]  dark:bg-[#262950]  rounded-none border-b-[rgba(0,0,0,0.1)] dark:border-b-[rgba(256,256,256,0.1)] border-b border-solid" id="headingOne">
                                    <button @click="changeOpenTab(0)" class="flex font-bold bg-white items-center text-xl  dark:bg-[#262950]  dark:text-[white] relative pl-5 pr-10 py-10 rounded-none border-0 focus:outline-0" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"
                                        aria-controls="collapseOne">
                                        <div class="w-10 h-10  bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] leading-10 text-center text-base mr-5 rounded-[50%]">
                                            <i class="fas fa-user text-[#f6e9f9]  bg-transparent"></i>
                                        </div>
                                        <span class="flex-[1] text-left">My Profile</span>
                                        <div class="absolute text-xs text-center -translate-y-2/4 w-5 h-5 bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-white rounded-[50%] right-5 top-2/4">
                                            <i :class="{'fas fa-plus block leading-5 ': openTab != 0 , 'fas fa-minus block leading-5 ':openTab == 0 }" ></i>
                                        </div>
                                    </button>
                                </div>

                                <div id="collapseOne" :class="{'show visible': openTab == 0 ,'collapse hidden' : openTab!= 0}" aria-labelledby="headingOne"
                                    data-parent="#accordionExample">
                                    <div  class="mx-4 my-5">
                                        <ul type="disc" class="ml-4">
                                            <li>
                                                <div @click = "()=>{ changePage(0) }" :class="{'text-red-500 dark:text-red-500': page == 0}"  class="cursor-pointer text-sm  dark:hover:text-[#ff3366] dark:text-[white] text-[#3e3f5e]  font-bold transition-all duration-[ease] delay-[0.3s]  hover:text-[#ff3366]" to="user-setting.html">Profile Info</div>
                                            </li>
                                            <li>
                                                <div @click = "()=>{ changePage(1) }" :class="{'text-red-500 dark:text-red-500': page == 1}"  class="cursor-pointer text-sm  dark:hover:text-[#ff3366] dark:text-[white] text-[#3e3f5e]  font-bold transition-all duration-[ease] delay-[0.3s]  hover:text-[#ff3366]" to="user-notification.html">Notifications</div>
                                            </li>
                                            <li>
                                                <div @click = "()=>{ changePage(2) }" :class="{'text-red-500 dark:text-red-500': page == 2}"  class="cursor-pointer text-sm  dark:hover:text-[#ff3366] dark:text-[white] text-[#3e3f5e]   font-bold transition-all duration-[ease] delay-[0.3s]  hover:text-[#ff3366]" to="user-friend-request.html">Friend Requests</div>
                                            </li>
                                            <li>
                                                <div @click = "()=>{ changePage(3) }" :class="{'text-red-500 dark:text-red-500': page == 3}"  class="cursor-pointer text-sm  dark:hover:text-[#ff3366] dark:text-[white] text-[#3e3f5e]   font-bold transition-all duration-[ease] delay-[0.3s]  hover:text-[#ff3366]" to="user-badges.html">Badges</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-[none] rounded-none border-0">
                                <div class="mb-0 p-0  dark:text-[white]  dark:bg-[#262950]  rounded-none border-b-[rgba(0,0,0,0.1)] dark:border-b-[rgba(256,256,256,0.1)] border-b border-solid" id="headingTwo">
                                    <button @click="changeOpenTab(1)" class="collapsed bg-white dark:text-[white]  dark:bg-[#262950]  text-left flex font-bold items-center text-xl relative pl-5 pr-10 py-10 rounded-none border-0 focus:outline-0" type="button" data-toggle="collapse"
                                        data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <div class="w-10 h-10 bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] leading-10 text-center text-base mr-5 rounded-[50%]">
                                            <i class="fas fa-cogs text-[#f6e9f9] bg-transparent"></i>
                                        </div>
                                        <span class="flex-[1]">
                                            Account
                                        </span>
                                        <div class="absolute text-xs text-center -translate-y-2/4 w-5 h-5 bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-white rounded-[50%] right-5 top-2/4">
                                            <i :class="{'fas fa-plus block leading-5 ': openTab != 1 , 'fas fa-minus block leading-5 ':openTab == 1 }" ></i>

                                        </div>
                                    </button>
                                </div>
                                <div id="collapseTwo" :class="{'show visible': openTab == 1 ,'collapse hidden' : openTab!= 1}" aria-labelledby="headingTwo"
                                    data-parent="#accordionExample">
                                    <div class="mx-4 my-5">
                                        <ul>
                                            <li>
                                                <div @click = "()=>{ changePage(4) }" :class="{'text-red-500 dark:text-red-500': page == 4}"  class="cursor-pointer text-sm text-[#3e3f5e]  dark:hover:text-[#ff3366]  hover:text-[#ff3366]  dark:text-[white] font-bold transition-all duration-[ease] delay-[0.3s]" to="user-account-info.html">Account Info</div>
                                            </li>
                                            <li>
                                                <div @click = "()=>{ changePage(5) }" :class="{'text-red-500 dark:text-red-500': page == 5}"  class="cursor-pointer text-sm text-[#3e3f5e]  dark:hover:text-[#ff3366]  hover:text-[#ff3366]  dark:text-[white] font-bold transition-all duration-[ease] delay-[0.3s]" to="user-change-pass.html">Change Password</div>
                                            </li>
                                            <li>
                                                <div @click = "()=>{ changePage(6) }" :class="{'text-red-500 dark:text-red-500': page == 6}"  class="cursor-pointer text-sm text-[#3e3f5e]  dark:hover:text-[#ff3366]  hover:text-[#ff3366]  dark:text-[white] font-bold transition-all duration-[ease] delay-[0.3s]" to="user-privicy-setting.html">Privacy Settings</div>
                                            </li>
                                            <li>
                                                <div @click = "()=>{ changePage(7) }" :class="{'text-red-500 dark:text-red-500': page == 7}"  class="cursor-pointer text-sm text-[#3e3f5e]  dark:hover:text-[#ff3366]  hover:text-[#ff3366]  dark:text-[white] font-bold transition-all duration-[ease] delay-[0.3s]" to="user-verify-account.html">Verified account</div>
                                            </li>
                                            <li>
                                                <div @click = "()=>{ changePage(8) }" :class="{'text-red-500 dark:text-red-500': page == 8}"  class="cursor-pointer text-sm text-[#3e3f5e]  dark:hover:text-[#ff3366]  hover:text-[#ff3366]  dark:text-[white] font-bold transition-all duration-[ease] delay-[0.3s]" to="user-close-account.html">Close Account</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-[none] rounded-none border-0">
                                <div class="mb-0 border-b-0 p-0  dark:text-[white]  dark:bg-[#262950]  rounded-none border-b-[rgba(0,0,0,0.1)] dark:border-b-[rgba(256,256,256,0.1)] border-solid" id="headingThree">
                                    <button @click="changeOpenTab(2)" class="collapsed text-left bg-white  dark:text-[white]  dark:bg-[#262950]  flex font-bold items-center text-xl relative pl-5 pr-10 py-10 rounded-none border-0 focus:outline-0" type="button" data-toggle="collapse"
                                        data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <div class="w-10 h-10 bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] leading-10 text-center text-base mr-5 rounded-[50%]">
                                            <i class="far fa-credit-card text-[#f6e9f9] bg-transparent "></i>
                                        </div>
                                        <span class="flex-[1]">
                                            Subscriptions & Payments
                                        </span>
                                        <div class="absolute text-xs text-center -translate-y-2/4 w-5 h-5 bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] text-white rounded-[50%] right-5 top-2/4">
                                            <i :class="{'fas fa-plus block leading-5 ': openTab != 2 , 'fas fa-minus block leading-5 ':openTab == 2 }" ></i>
                                        </div>
                                    </button>
                                </div>
                                <div id="collapseThree"  :class="{'show visible': openTab == 2 ,'collapse hidden' : openTab!= 2}" aria-labelledby="headingThree"
                                    data-parent="#accordionExample">
                                    <div class="mx-4 my-5">
                                        <ul>
                                            <li>
                                                <div @click = "()=>{ changePage(9) }" :class="{'text-red-500 dark:text-red-500': page == 9}"  class="cursor-pointer text-sm text-[#3e3f5e]  dark:hover:text-[#ff3366]  hover:text-[#ff3366]  dark:text-[white] font-bold transition-all duration-[ease] delay-[0.3s]" to="user-billing.html" >Billing & Payout</div>
                                            </li>
                                            <li>
                                                <div @click = "()=>{ changePage(10) }" :class="{'text-red-500 dark:text-red-500': page == 10}"  class="cursor-pointer text-sm text-[#3e3f5e]  dark:hover:text-[#ff3366]  hover:text-[#ff3366]  dark:text-[white] font-bold transition-all duration-[ease] delay-[0.3s]" to="user-plan.html">Upgrade Membership Plan</div>
                                            </li>
                                            <li>
                                                <div @click = "()=>{ changePage(11) }" :class="{'text-red-500 dark:text-red-500': page == 11}"  class="cursor-pointer text-sm text-[#3e3f5e]  dark:hover:text-[#ff3366]  hover:text-[#ff3366]  dark:text-[white] font-bold transition-all duration-[ease] delay-[0.3s]" to="user-purchase.html">View Purchase History</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="xl:w-2/3  md:w-3/5 pr-4 pl-4 ">

                        <UserPanelProfileInfo v-if="page == 0"/>
                        <LazyUserPanelNotification v-if="page == 1"/>
                        <UserPanelFriendRequests v-if="page == 2"/>
                        <UserPanelBadges  v-if="page == 3" />
                        <UserPanelAccountInfo  v-if="page == 4"/>
                        <UserPanelChangePassword  v-if="page == 5"/>
                        <UserPanelPrivacySettings v-if="page == 6"/>
                        <UserPanelVerifiedAccount v-if="page == 7"/>
                        <UserPanelCloseAccount  v-if="page == 8"/>
                        <UserPanelBilling  v-if="page == 9"/>
                        <UserPanelUpgradeMembership  v-if="page == 10"/>
                        <UserPanelViewPurchase  v-if="page == 11"/>


                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    const page = ref(0)
    const openTab = ref(0)

    const changePage = (request)=>{

        if(request == page.value){
            page.value = 10

        }
        else{
            page.value = request;
        }
        }
    const changeOpenTab = (request)=>{
        if(request == openTab.value){
            openTab.value = 10

        }
        else{
            openTab.value = request;
        }
    }


</script>

<style lang="scss" scoped></style>