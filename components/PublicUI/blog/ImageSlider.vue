<template>
  <div>
    <div class="flex items-center justify-between mb-6 ">


    <h5 class="dark:text-[white] ">latest post</h5>
    <div class="flex">
    <div class=" hover:text-white hover:bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] block w-6 h-6 leading-5 text-center cursor-pointer text-[10px] bg-[#fafbff] shadow-[0px_2px_5px_0px_rgba(0,18,50,0.2)] text-[#333333] dark:text-[white]  transition-all duration-[ease] delay-[0.3s] rounded-[50%] flex justify-center items-center mr-2 prev_btn" @click="prev"><i class="fa fa-chevron-left" aria-hidden="true"></i>
</div>
    <div  class="text-white bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] block w-6 h-6 leading-5 text-center cursor-pointer text-[10px] bg-[#fafbff] shadow-[0px_2px_5px_0px_rgba(0,18,50,0.2)] transition-all duration-[ease] delay-[0.3s] rounded-[50%] flex justify-center items-center " @click="next"><i class="fa fa-chevron-left next_button" aria-hidden="true"></i>
</div></div> 
  </div>


    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <NuxtLink
              to="#"
              class="overflow-hidden dark:text-[white] text-ellipsis no-underline"
              >
        <img :src="currentImg" class="w-full h-48 rounded-xl" />
        <div class="pt-3">
          <h6 class="text-lg dark:text-[white] mb-[7px]">
          How to Start, Plan, and Keep a Date Night
            
          </h6>
          <div class="flex flex-wrap text-sm">
            <NuxtLink to="#" class="mr-4 text-[#333333] dark:text-[white]"
              ><i
                class="fas fa-user bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] mr-[5px]"
              ></i
              >Admin
            </NuxtLink>
            <NuxtLink to="#" class="text-[#333333] dark:text-[white]">
              <i
                class="far fa-comments bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] mr-[5px]"
              ></i>
              Comments</NuxtLink
            >
          </div>
        </div>
    </NuxtLink>
      </div>
    </transition-group>
  </div>
</template>
<script>
export default {
  name: "Slider",
  data() {
    return {
      images: [
        "https://pixner.net/peyamba/peyamba/assets/images/blog/resent-post.png",
        "https://pixner.net/peyamba/peyamba/assets/images/blog/blog3.png",
        "https://pixner.net/peyamba/peyamba/assets/images/blog/blog4.png",
        "https://pixner.net/peyamba/peyamba/assets/images/blog/blog1.png",
      ],
      timer: null,
      currentIndex: 0,
    };
  },

  mounted: function () {
    this.startSlide();
  },

  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 6000);
    },

    next: function () {
      this.currentIndex += 1;
    },
    prev: function () {
      this.currentIndex -= 1;
    },
  },

  computed: {
    currentImg: function () {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}

img {
  width: 100%;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.9);
}

i {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: -o-linear-gradient(284deg, rgb(242, 40, 118) 0%, rgb(148, 45, 217) 100%);
    background-image: linear-gradient(166deg, rgb(242, 40, 118) 0%, rgb(148, 45, 217) 100%);
}
.next_button{
    background-image: -o-linear-gradient(284deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%);
    background-image: linear-gradient(166deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%);  
    transform: rotate(180deg);
}
.search_btn{
    background-image: -o-linear-gradient(284deg, rgb(242, 40, 118) 0%, rgb(148, 45, 217) 100%);
    background-image: linear-gradient(166deg, rgb(242, 40, 118) 0%, rgb(148, 45, 217) 100%);
}

.prev_btn:hover i{
    background-image: -o-linear-gradient(284deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%);
    background-image: linear-gradient(166deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%);     
}

</style>
