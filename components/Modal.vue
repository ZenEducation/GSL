<template>
    <!-- Details Lightbox -->
      <!-- Lightbox -->
      <div class="modal">
      <div id="details-lightbox" class="lightbox-basic zoom-anim-dialog mfp-hide" >
          <div class="lg:grid lg:grid-cols-12 lg:gap-x-8">
            <div class="modal__backdrop" @click="closeModal()">
              <button title="Close (Esc)" type="button" class="mfp-close x-button">×</button>
            </div>
              <div class="modal__dialog">
                <div class="lg:col-span-8">
                    <div class="mb-12 text-center lg:mb-0 lg:text-left xl:mr-6">
                        <img class="inline rounded-lg" src="../assets/img/details-lightbox.jpg" alt="alternative" />
                    </div>
                </div> <!-- end of col -->

                

              <div class="lg:col-span-4">
                  <h3 class="mb-2">Goals Setting</h3>
                  <hr class="w-11 h-0.5 mt-0.5 mb-4 ml-0 border-none bg-indigo-600" />
                  <p>The app can easily help you track your personal development evolution if you take the time to set it up.</p>
                  <h4 class="mt-7 mb-2.5">User Feedback</h4>
                  <p class="mb-4">This is a great app which can help you save time and make your live easier. And it will help improve your productivity.</p>
                  <ul class="list mb-6 space-y-2">
                      <li class="flex">
                          <i class="fas fa-chevron-right"></i>
                          <div>Splash screen panel</div>
                      </li>
                      <li class="flex">
                          <i class="fas fa-chevron-right"></i>
                          <div>Statistics graph report</div>
                      </li>
                      <li class="flex">
                          <i class="fas fa-chevron-right"></i>
                          <div>Events calendar layout</div>
                      </li>
                      <li class="flex">
                          <i class="fas fa-chevron-right"></i>
                          <div>Location details screen</div>
                      </li>
                      <li class="flex">
                          <i class="fas fa-chevron-right"></i>
                          <div>Onboarding steps interface</div>
                      </li>
                  </ul>
                  <a class="btn-solid-reg mfp-close page-scroll" href="#download">Download</a>
                  <button class="btn-outline-reg mfp-close as-button" type="button">Back</button>
              </div> <!-- end of col -->
              
              </div>
          </div> <!-- end of row -->
      </div> <!-- end of lightbox-basic -->
      <!-- end of lightbox -->
      <!-- end of details lightbox -->
    </div>
</template>

<style scoped>

.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  overflow-x: hidden;
  overflow-y: auto;
}

.overflow-hidden {
  overflow: hidden;
} 

  .model__backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
  .model__dialog {
    position: relative;
    width: 600px;
    background-color: #ffffff;
    border-radius: 5px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    z-index: 2;
    @media screen and (max-width: 992px) {
      width: 90%;
    }
  }
  .model__close {
    width: 30px;
    height: 30px;
  }
  

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

<script>
export default {
  name: "Modal",
  data() {
    return {
      show: true
    };
  },
  methods: {
    closeModal() {
      this.show = false;
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    openModal() {
      this.show = true;
      document.querySelector("body").classList.add("overflow-hidden");
    }
  }
};

</script>