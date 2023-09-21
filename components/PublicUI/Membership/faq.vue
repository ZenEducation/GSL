<template>
  <div>
    <section class="pb-[120px] dark:bg-slate-800 dark:text-gray-50">
      <div
        class="w-full mx-auto px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1170px]"
      >
        <div class="flex flex-wrap justify-center">
          <div class="lg:w-1/2 pr-4 pl-4">
            <div>
              <div class="mb-10 text-center">
                <h6
                  class="text-[#5650ce] block text-2xl leading-[34px] font-semibold mb-[30px]"
                >
                  Got any Question
                </h6>
                <h2
                  class="text-[50px] dark:text-gray-50 leading-[60px] font-bold block text-[#292929] mb-[11px]"
                >
                  We’ve Got Answers
                </h2>
                <p class="inline-block text-[#333333] dark:text-gray-50">
                  Try to check out frequently ask questions
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-12">
          <div class="max-w-[730px] -mb-5 mx-auto my-0">
            <div
              class="shadow-[0px_5px_20px_0px_rgba(119,123,146,0.2)] mb-5 pt-[15px] pb-4 px-[30px] rounded-[20px]"
            >
              <div class="cursor-pointer relative" @click="n1=!n1"  >
                <h6
                  class="dark:text-gray-50 text-xl font-bold w-[calc(100%_-_40px)] max-w-[535px] leading-normal m-0"
                >
                  What is GetSetLove ?
                </h6>

                <span
                v-if="!n1"
                  class="w-9 h-9 bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] absolute rounded-[50%] right-0 top-0 after:w-5 after:h-0.5 after:bg-white after:transition-all after:duration-[ease] after:delay-[0.3s] after:-translate-x-2/4 after:-translate-y-2/4 after:absolute after:content-[''] after:left-2/4 after:top-2/4 before:w-0.5 before:h-5 before:bg-white before:transition-all before:duration-[ease] before:delay-[0.3s] before:-translate-x-2/4 before:-translate-y-2/4 before:absolute before:content-[''] before:left-2/4 before:top-2/4"
                ></span>
                <span
                v-else
                  class="w-9 h-9 bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] absolute rounded-[50%] right-0 top-0 after:w-5 after:h-0.5 after:bg-white after:transition-all after:duration-[ease] after:delay-[0.3s] after:-translate-x-2/4 after:-translate-y-2/4 after:absolute after:content-[''] after:left-2/4 after:top-2/4 before:w-0.5 before:h-5 before:bg-white before:transition-all before:duration-[ease] before:delay-[0.3s] before:-translate-x-2/4 before:-translate-y-2/4 before:absolute before:content-[''] before:left-2/4 before:top-2/4 before:rotate-90"
                ></span>
              </div>
              <div class="pt-[30px] transition_item" v-show="n1">
                <p class="mb-[37px] ">
                  At GetSetLove, we're dedicated to helping you find your
                  perfect match, experience true love, and build lasting
                  relationships. Our platform brings people from all walks of
                  life together, fostering connections that endure. Whether you
                  seek your soulmate or companionship, GetSetLove is your
                  destination of choice.
                </p>
              </div>
            </div>

            <div
              class="shadow-[0px_5px_20px_0px_rgba(119,123,146,0.2)] mb-5 pt-[15px] pb-4 px-[30px] rounded-[20px] active open"
            >
              <div class="cursor-pointer relative" @click="n2=!n2" >
                <h6
                  class="dark:text-gray-50 text-xl font-bold w-[calc(100%_-_40px)] max-w-[535px] leading-normal m-0"
                >
                  Why GetSetLove ?
                </h6>
                <span
                  class="w-9 h-9 bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] absolute rounded-[50%] right-0 top-0 after:w-5 after:h-0.5 after:bg-white after:transition-all after:duration-[ease] after:delay-[0.3s] after:-translate-x-2/4 after:-translate-y-2/4 after:absolute after:content-[''] after:left-2/4 after:top-2/4 before:w-0.5 before:h-5 before:bg-white before:transition-all before:duration-[ease] before:delay-[0.3s] before:-translate-x-2/4 before:-translate-y-2/4 before:absolute before:content-[''] before:left-2/4 before:top-2/4"
                v-if="!n2"
                  ></span>
                <span
                v-else
                  class="w-9 h-9 bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] absolute rounded-[50%] right-0 top-0 after:w-5 after:h-0.5 after:bg-white after:transition-all after:duration-[ease] after:delay-[0.3s] after:-translate-x-2/4 after:-translate-y-2/4 after:absolute after:content-[''] after:left-2/4 after:top-2/4 before:w-0.5 before:h-5 before:bg-white before:transition-all before:duration-[ease] before:delay-[0.3s] before:-translate-x-2/4 before:-translate-y-2/4 before:absolute before:content-[''] before:left-2/4 before:top-2/4 before:rotate-90"
                ></span>
              </div>
              <div class="block pt-[30px]" v-if="n2">
                <p class="mb-[37px]">
                  Advanced Matching: Our cutting-edge algorithm connects you
                  with like-minded individuals based on your interests, values,
                  and preferences.
                </p>
                <p class="mb-[37px]">
                  <b>Safety First:</b> We prioritize your safety with robust
                  security measures, allowing you to focus on building
                  connections worry-free.
                </p>
                <p class="mb-[37px]">
                  <b>Inclusive Community:</b>Embracing diversity, GetSetLove
                  welcomes all backgrounds and orientations because love knows
                  no boundaries.
                </p>
                <p class="mb-[37px]">
                  <b>Verified Profiles: </b>Say goodbye to fake profiles – our
                  dedicated team ensures an authentic member community.
                </p>
                <p class="mb-[37px]">
                  <b>User-Friendly Interface: </b>Easily explore potential
                  matches on our intuitive platform.
                </p>
              </div>
            </div>
            <div
              class="shadow-[0px_5px_20px_0px_rgba(119,123,146,0.2)] mb-5 pt-[15px] pb-4 px-[30px] rounded-[20px]"
            >
              <div class="cursor-pointer relative"  @click="n3=!n3">
                <h6
                  class="dark:text-gray-50 text-xl font-bold w-[calc(100%_-_40px)] max-w-[535px] leading-normal m-0"
                 
                >
                  How It Works ?
                </h6>
                <span
                  class="w-9 h-9 bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] absolute rounded-[50%] right-0 top-0 after:w-5 after:h-0.5 after:bg-white after:transition-all after:duration-[ease] after:delay-[0.3s] after:-translate-x-2/4 after:-translate-y-2/4 after:absolute after:content-[''] after:left-2/4 after:top-2/4 before:w-0.5 before:h-5 before:bg-white before:transition-all before:duration-[ease] before:delay-[0.3s] before:-translate-x-2/4 before:-translate-y-2/4 before:absolute before:content-[''] before:left-2/4 before:top-2/4"
                v-if="!n3"
                  ></span>
                  <span
                  v-else
                  class="w-9 h-9 bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] absolute rounded-[50%] right-0 top-0 after:w-5 after:h-0.5 after:bg-white after:transition-all after:duration-[ease] after:delay-[0.3s] after:-translate-x-2/4 after:-translate-y-2/4 after:absolute after:content-[''] after:left-2/4 after:top-2/4 before:w-0.5 before:h-5 before:bg-white before:transition-all before:duration-[ease] before:delay-[0.3s] before:-translate-x-2/4 before:-translate-y-2/4 before:absolute before:content-[''] before:left-2/4 before:top-2/4 before:rotate-90"
                ></span>
              </div>
              <div class="pt-[30px]" v-if="n3">
                <p class="mb-[37px]">
                  <b>Create Your Profile: </b>Craft an engaging, detailed
                  profile highlighting your personality and partner preferences.
                </p>
                <p class="mb-[37px]">
                  <b>Find Matches: </b> Our smart algorithm selects potential
                  matches based on your profile info. Browse and connect with
                  intriguing individuals.
                </p>
                <p class="mb-[37px]">
                  <b>Connect and Chat: </b>Start conversations via our secure
                  messaging system, making building connections a breeze.
                </p>
                <p class="mb-[37px]">
                  <b>Virtual Dates: </b>Connect through virtual video dates,
                  sharing passions and laughter from home.
                </p>
                <p class="mb-[37px]">
                  <b>Take It Offline: </b>Transition from GetSetLove to
                  real-life connections when you're ready!
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
const n1=ref(false)
const n2=ref(false)
const n3=ref(false)
</script>

<style lang="scss" scoped>

.transition_item{
  transition-duration: 5s;
}

</style>
