<template>
    <div>
        <section class=" pt-40 pb-16 bg-[url('../images/banner/bc-about.jpg')] bg-cover bg-bottom bg-no-repeat h-[21.5rem] ">
        <div class=" w-full mx-auto px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1170px] ">
            <div >
                <h2 class="text-white block pb-4 text-5xl font-black mt-2">
                    {{ props.title }}
                </h2>
                <ul class="bg-transparent block pb-1 max-[575px]:p-0">
                    <li class="capitalize inline-block text-indigo-200 text-lg max-[575px]:text-base max-[575px]:p-0">
                        <NuxtLink to="/" class="capitalize no-underline text-indigo-200 text-lg inline-flex items-center  after:font-semibold after:inline-block   after:font-['Font Awesome 5 Free'] max-[575px]:text-base max-[575px]:p-0">
                            Home
                            <i class="fa fa-angle-right ml-2" aria-hidden="true"></i>
                        </NuxtLink>
                    </li>
                    
                    <li class="capitalize no-underline inline-block text-indigo-200 text-lg max-[575px]:text-base max-[575px]:p-0 ml-3 "
                     v-for="(item,idx) in breadcrumb" :key="idx"
                    >
                        <NuxtLink :to="item.link" class="capitalize no-underline text-indigo-200 text-lg inline-flex items-center max-[575px]:text-base max-[575px]:p-0  ">
                            {{ item.label }} <i class="fa fa-angle-right ml-2" aria-hidden="true"></i>
                        </NuxtLink>
                    </li>
                  
                    <li class="capitalize no-underline inline-block text-indigo-200 text-lg max-[575px]:text-base max-[575px]:p-0 ml-3">
                        <NuxtLink to="#" class="capitalize no-underline text-indigo-200 text-lg inline-flex items-center max-[575px]:text-base max-[575px]:p-0">
                            {{ props.title}}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    </div>
</template>

<script setup>

const props = defineProps({
    title: {
        type:String,
        default:'title'
    },
    breadcrumb:{
    type:Array,
    default:[]
    }
})

</script>

<style lang="scss" scoped>
section{
    background-image: url("@/assets/frontend/images/banner/bc-about.jpg");
}
</style>