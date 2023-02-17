<template>
      <!-- Details Lightbox -->
        <!-- Lightbox -->
        <div id="details-lightbox" class="lightbox-basic zoom-anim-dialog mfp-hide">
            <div class="lg:grid lg:grid-cols-12 lg:gap-x-8">
                <button title="Close (Esc)" type="button" class="mfp-close x-button">×</button>
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
                    <NuxtLink to="/newPage#download" class="btn-solid-reg mfp-close page-scroll">Download</NuxtLink>
                    <NuxtLink to="/newPage#details" class="btn-outline-reg mfp-close as-button" type="button">Back</NuxtLink>
                </div> <!-- end of col -->
            </div> <!-- end of row -->
        </div> <!-- end of lightbox-basic -->
        <!-- end of lightbox -->
        <!-- end of details lightbox -->
</template>


<script>
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state),
    };
  },
};

</script>