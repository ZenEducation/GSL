<template>
  
  <div>
    <section class="pt-[120px] pb-[135px] px-0">
      <div
        class="w-full mx-auto px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1170px] mx-auto sm:px-4"
      >
        <div>
          <div class="flex flex-wrap mb--20">
            <div
              class="md:w-1/3 sm:w-1/2 max-sm:w-full mb-10 pr-4 pl-4"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div class="text-center" data-wow-delay="0.1s">
                <div
                  class="inline-block w-[16rem] h-[16rem] bg-[#e1e6ff] text-center leading-[260px] mb-7 rounded-[50%] flex justify-center items-center mx-auto"
                >
                  <img
                    src="@/assets/frontend/images/statistics/stat01.png"
                    class="h-40"
                    alt=""
                  />
                </div>
                <div>
                  <h3 class="dark:text-[white] text-6xl leading-[70px]">
                    <span class="odometer" data-odometer-final="350"></span>
                    {{n1}}M
                 
                     
                 
                  </h3>

                  <span class="block mt-[5px]">Tickets Booked</span>
                </div>
              </div>
            </div>
            <div
              class="md:w-1/3 sm:w-1/2 max-sm:w-full mb-10 pr-4 pl-4"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div class="text-center" data-wow-delay="0.2s">
                <div
                  class="inline-block w-[16rem] h-[16rem] bg-[#e1e6ff] text-center leading-[260px] mb-7 rounded-[50%] flex justify-center items-center mx-auto"
                >
                  <img
                    src="@/assets/frontend/images/statistics/stat02.png"
                    class="h-40"
                    alt=""
                  />
                </div>
                <div>
                  <h3 class="dark:text-[white] text-6xl leading-[70px]">
                    <span class="odometer" data-odometer-final="447"></span>{{n2}}M
                  </h3>
                  <span class="block mt-[5px]">Usefull Sessions</span>
                </div>
              </div>
            </div>
            <div
              class="md:w-1/3 sm:w-1/2 max-sm:w-full mb-10 pr-4 pl-4"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div class="text-center" data-wow-delay="0.3s">
                <div
                  class="inline-block w-[16rem] h-[16rem] bg-[#e1e6ff] text-center leading-[260px] mb-7 rounded-[50%] flex justify-center items-center mx-auto"
                >
                  <img
                    src="@/assets/frontend/images/statistics/stat03.png"
                    class="h-40"
                    alt=""
                  />
                </div>
                <div>
                  <h3 class="dark:text-[white] text-6xl leading-[70px]">
                    <span class="odometer" data-odometer-final="60"></span>{{n3}}M
                  </h3>
                  <span class="block mt-[5px]">Talented Speakers</span>
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

const n1= ref(0)
const n2 = ref(0)
const n3  = ref(0)


// window.addEventListener('scroll', () =>
// {
//   console.log(scrollY)
// if( scrollY>1950 && scrollY<2200){
//   setInterval(() => {
//     if(n1.value < 350) {
//         n1.value++;
//     }
//     if(n2.value < 50) {
//         n2.value++;
//     }
//     if(n3.value < 100) {
//         n3.value++;
//     }
// }, 100);
// }
// }
// )

const scrollPosition = ref(0);
const handleScroll = () => {
  scrollPosition.value = window.scrollY;
  
  if( scrollPosition.value>=3000 && scrollPosition.value<=3500){
    setInterval(() => {
    if(n1.value < 350) {
        n1.value++;
    }
    if(n2.value < 447) {
        n2.value++;
    }
    if(n3.value < 60) {
        n3.value++;
    }
}, 100);
  }

};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped>
.counter {
  font-size: 40px;
}
</style>
