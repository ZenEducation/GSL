<template>
    <div
        class="dark:bg-[#262950] shadow-[0px_0px_40px_0px_rgba(94,92,154,0.12)] text-2xl leading-[34px] font-bold bg-white flex justify-between mb-[30px] p-[30px] rounded-[5px]">
        Profile Info
    </div>

    <div class="lg:flex lg:flex-wrap ">
        <div class="lg:w-1/2  pr-4 pl-4">
            <div
                class="bg-white   dark:bg-[#262950] shadow-[0px_10px_5px_0px_rgba(119,123,146,0.02)] transition-all duration-[ease] delay-[0.3s] rounded-[10px]">
                <div :style="{ backgroundImage: `url(${coverPreview})` }"
                    class="h-40 bg-no-repeat bg-[bottom_center] bg-cover">
                </div>
                <div class="relative text-center pt-[55px] pb-[30px] px-[30px]">
                    <div
                        class="bg-white w-[120px] h-[120px] absolute -translate-x-2/4 top-[-60px] z-[9] rounded-[50%] left-2/4 before:absolute before:content-[''] before:w-[140px] before:h-[140px] before:bg-[rgba(255,255,255,0.2)] before:z-[-1] before:rounded-[50%] before:-left-2.5 before:-top-2.5 after:absolute after:content-[''] after:w-40 after:h-40 after:bg-[rgba(255,255,255,0.2)] after:z-[-1] after:rounded-[50%] after:-left-5 after:-top-5">
                        <img :src="profilePreview" class="rounded-[50%] w-[120px] h-[120px]" alt="">
                        <div
                            class="absolute w-5 h-5 bg-[#1ce36f] rounded-[50%] border-[3px] border-solid border-white right-[9px] bottom-[9px]">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="lg:w-1/2  pr-4 pl-4">
            <div @click="openFileInput('profileInput')" 
                class="mb-30 bg-white  dark:bg-[#262950] shadow-[0px_0px_40px_0px_rgba(94,92,154,0.12)] relative pl-[90px] pr-[30px] py-[30px] rounded-[5px]">
                <div
                    class="absolute -translate-y-2/4 w-10 h-10 leading-10 text-center bg-[#f7e9f8] mr-5 rounded-[50%] left-[30px] top-2/4">
                    <i
                        class="fas fa-user bg-clip-text bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] fill-transparent"></i>
                </div>
                <div class="block">
                    <h4 class="dark:text-white text-sm m-0">Change Avatar</h4>
                    <span class="dark:text-white text-sm text-[#9192a6] mb-0">120x120p size minimum</span>
                  </div>
                  <input ref="profileInput" type="file" @change="handleFileUpload($event, 'profile')" accept="image/*" class="hidden">

            </div>
            <div @click="openFileInput('coverInput')"
                class="mb-30 bg-white  dark:bg-[#262950] shadow-[0px_0px_40px_0px_rgba(94,92,154,0.12)] relative pl-[90px] pr-[30px] py-[30px] rounded-[5px]">
                <div
                    class="absolute -translate-y-2/4 w-10 h-10 leading-10 text-center bg-[#f7e9f8] mr-5 rounded-[50%] left-[30px] top-2/4">
                    <i
                        class="fas fa-image bg-clip-text bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] fill-transparent"></i>
                </div>
                <div class="block">
                    <h4 class="dark:text-[white] text-sm m-0">
                        Change Cover
                    </h4>
                    <span class="dark:text-[white] text-sm text-[#9191a6] mb-0">
                        1200x300p size minimum
                    </span>
                </div>
                <input ref="coverInput" type="file" @change="handleFileUpload($event, 'cover')" accept="image/*" class="hidden">

            </div>
        </div>
    </div>
    <div class="mt-30 dark:bg-[#262950] bg-white p-6 rounded-md">
        <div>
            <h4 class="dark:text-white">

                About your Profile
            </h4>
        </div>
        <div>
            <div class="flex flex-wrap ">
                <div class="max-lg:w-full w-1/2  pr-4 pl-4">
                    <div class="mb-[30px]">
                        <label for="" class="dark:text-white text-sm text-[#505386] font-semibold mb-0">Profile Name</label>
                        <input
                            class="dark:border-[rgba(256,256,256,0.1)] dark:text-white bg-transparent h-[60px] border px-5 py-0 border-solid border-[rgba(0,0,0,0.1)]"
                            type="text" placeholder="Profile Name">
                    </div>
                </div>
                <div class="max-lg:w-full w-1/2  pr-4 pl-4">
                    <div class="mb-[30px]">
                        <label for="" class="dark:text-white text-sm text-[#505386] font-semibold mb-0">Public Email</label>
                        <input
                            class="dark:border-[rgba(256,256,256,0.1)] dark:text-white bg-transparent h-[60px] border px-5 py-0 border-solid border-[rgba(0,0,0,0.1)]"
                            type="text" placeholder="Public Email">
                    </div>
                </div>
                <div class="w-full pr-4 pl-4">
                    <div class="mb-[30px]">
                        <textarea
                            class="dark:border-[rgba(256,256,256,0.1)] dark:text-white bg-transparent  border h-[120px] border-solid border-[rgba(0,0,0,0.1)]"
                            name="" placeholder="Write a little description about you..."></textarea>
                    </div>
                </div>
                <div class="max-lg:w-full w-1/2  pr-4 pl-4">
                    <div class="mb-[30px]">
                        <label for="" class="dark:text-white text-sm text-[#505386] font-semibold mb-0">Country</label>
                        <select
                            class="dark:border-[rgba(256,256,256,0.1)] dark:text-white bg-transparent  h-[60px] border px-5 py-0 border-solid border-[rgba(0,0,0,0.1)]"
                            name="" id="">
                            <option value="" disabled selected>Select Country</option>
                            <option value="">United State</option>
                        </select>
                    </div>
                </div>
                <div class="max-lg:w-full w-1/2  pr-4 pl-4">
                    <div class="mb-[30px]">
                        <label for="" class="dark:text-white text-sm text-[#505386] font-semibold mb-0">City</label>
                        <select
                            class="dark:border-[rgba(256,256,256,0.1)] dark:text-white bg-transparent h-[60px] border px-5 py-0 border-solid border-[rgba(0,0,0,0.1)]"
                            name="" id="">
                            <option value="" disabled selected>Select City</option>
                            <option value="">New Work</option>
                        </select>
                    </div>
                </div>
                <div class="max-lg:w-full w-1/2  pr-4 pl-4">
                    <div class="mb-[30px]">
                        <label for="" class="dark:text-white text-sm text-[#505386] font-semibold mb-0">Birthday</label>
                        <input
                            class="dark:border-[rgba(256,256,256,0.1)] dark:text-white bg-transparent h-[60px] border px-5 py-0 border-solid border-[rgba(0,0,0,0.1)]"
                            type="date">
                    </div>
                </div>
                <div class="max-lg:w-full w-1/2  pr-4 pl-4">
                    <div class="mb-[30px]">
                        <label for="" class="dark:text-white text-sm text-[#505386] font-semibold mb-0">Occupation</label>
                        <input
                            class="dark:border-[rgba(256,256,256,0.1)] dark:text-white bg-transparent h-[60px] border px-5 py-0 border-solid border-[rgba(0,0,0,0.1)]"
                            type="text" placeholder="Occupation">
                    </div>
                </div>
                <div class="max-lg:w-full w-1/2  pr-4 pl-4">
                    <div class="mb-[30px]">
                        <label for="" class="dark:text-white text-sm text-[#505386] font-semibold mb-0">Status</label>
                        <select
                            class="dark:border-[rgba(256,256,256,0.1)] dark:text-white bg-transparent h-[60px] border px-5 py-0 border-solid border-[rgba(0,0,0,0.1)]"
                            name="" id="">
                            <option value="">In a Relationship</option>
                            <option value="">Single</option>
                            <option value="">Marid</option>
                        </select>
                    </div>
                </div>
                <div class="max-lg:w-full w-1/2  pr-4 pl-4">
                    <div class="mb-[30px]">
                        <label for="" class="dark:text-white text-sm text-[#505386] font-semibold mb-0">Birthplace</label>
                        <input
                            class="dark:border-[rgba(256,256,256,0.1)] dark:text-white bg-transparent h-[60px] border px-5 py-0 border-solid border-[rgba(0,0,0,0.1)]"
                            type="text" placeholder="Birthplace">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-30 dark:bg-[#262950] bg-white p-6 rounded-md">
        <div>
            <h4 class="dark:text-white">

                Interests
            </h4>
        </div>
        <div>
            <div class="flex flex-wrap ">
                <div class="w-full pr-4 pl-4">
                    <div class="mb-[30px]">
                        <label for="" class="dark:text-white text-sm text-[#505386] font-semibold mb-0">Favourite TV
                            Shows</label>
                        <textarea
                            class="dark:border-[rgba(256,256,256,0.1)] dark:text-white bg-transparent border h-[120px] border-solid border-[rgba(0,0,0,0.1)]"
                            name="" placeholder="Favourite TV Shows"></textarea>
                    </div>
                </div>
                <div class="w-full pr-4 pl-4">
                    <div class=" mb-[30px]">
                        <label for="" class="dark:text-white text-sm text-[#505386] font-semibold mb-0">Favourite Music
                            Bands / Artists</label>
                        <textarea
                            class="dark:border-[rgba(256,256,256,0.1)] dark:text-white bg-transparent border h-[120px] border-solid border-[rgba(0,0,0,0.1)]"
                            name="" placeholder="Favourite Music Bands / Artists"></textarea>
                    </div>
                </div>
                <div class="w-full pr-4 pl-4">
                    <div class=" mb-[30px]">
                        <label for="" class="dark:text-white text-sm text-[#505386] font-semibold mb-0">Favourite
                            Movies</label>
                        <textarea
                            class="dark:border-[rgba(256,256,256,0.1)] dark:text-white bg-transparent border h-[120px] border-solid border-[rgba(0,0,0,0.1)]"
                            name="" placeholder="Favourite Movies"></textarea>
                    </div>
                </div>
                <div class="w-full pr-4 pl-4">
                    <div class=" mb-[30px]">
                        <label for="" class="dark:text-white text-sm text-[#505386] font-semibold mb-0">Favourite Games
                        </label>
                        <textarea
                            class="dark:border-[rgba(256,256,256,0.1)] dark:text-white bg-transparent border h-[120px] border-solid border-[rgba(0,0,0,0.1)]"
                            name="" placeholder="Favourite Games "></textarea>
                    </div>
                </div>
                <div class="w-full pr-4 pl-4">
                    <div class=" mb-[30px]">
                        <label for="" class="dark:text-white text-sm text-[#505386] font-semibold mb-0">Favourite Games
                        </label>
                        <textarea
                            class="dark:border-[rgba(256,256,256,0.1)] dark:text-white bg-transparent border h-[120px] border-solid border-[rgba(0,0,0,0.1)]"
                            name="" placeholder="Favourite Games"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-30 dark:bg-[#262950] bg-white p-6 rounded-md">
        <div>
            <h4 class="dark:text-white">
                Jobs & Education
            </h4>
        </div>
        <div>
            <div class="flex flex-wrap ">
                <div class="w-full pr-4 pl-4">
                    <div class=" mb-[30px]">
                        <label for="" class="dark:text-white text-sm text-[#505386] font-semibold mb-0">Title or
                            Place</label>
                        <input
                            class="dark:border-[rgba(256,256,256,0.1)] dark:text-white bg-transparent h-[60px] border px-5 py-0 border-solid border-[rgba(0,0,0,0.1)]"
                            type="text" placeholder="Title or Place">
                    </div>
                </div>
                <div class="max-lg:w-full w-1/2  pr-4 pl-4">
                    <div class=" mb-[30px]">
                        <label for="" class="dark:text-white text-sm text-[#505386] font-semibold mb-0">Year Started</label>
                        <select
                            class="dark:border-[rgba(256,256,256,0.1)] dark:text-white bg-transparent h-[60px] border px-5 py-0 border-solid border-[rgba(0,0,0,0.1)]"
                            name="" id="">
                            <option value="">2014</option>
                        </select>
                    </div>
                </div>
                <div class="max-lg:w-full w-1/2  pr-4 pl-4">
                    <div class=" mb-[30px]">
                        <label for="" class="dark:text-white text-sm text-[#505386] font-semibold mb-0">Year End</label>
                        <select
                            class="dark:border-[rgba(256,256,256,0.1)] dark:text-white bg-transparent h-[60px] border px-5 py-0 border-solid border-[rgba(0,0,0,0.1)]"
                            name="" id="">
                            <option value="">2017</option>
                        </select>
                    </div>
                </div>
                <div class="w-full pr-4 pl-4">
                    <div class=" mb-[30px]">
                        <label for="" class="dark:text-white text-sm text-[#505386] font-semibold mb-0">Description</label>
                        <textarea
                            class="dark:border-[rgba(256,256,256,0.1)] dark:text-white bg-transparent border h-[120px] border-solid border-[rgba(0,0,0,0.1)]"
                            name="" id="" placeholder="Description"></textarea>
                    </div>
            </div>
            <div class="w-full pr-4 pl-4">
                <div class=" mb-[30px]">
                    <label for="" class="dark:text-white text-sm text-[#505386] font-semibold mb-0">Title or
                        Place</label>
                    <input
                        class="dark:border-[rgba(256,256,256,0.1)] dark:text-white bg-transparent h-[60px] border px-5 py-0 border-solid border-[rgba(0,0,0,0.1)]"
                        type="text" placeholder="Title or Place">
                </div>
            </div>
            <div class="max-lg:w-full w-1/2  pr-4 pl-4">
                <div class=" mb-[30px]">
                    <label for="" class="dark:text-white text-sm text-[#505386] font-semibold mb-0">Year Started</label>
                    <select
                        class="dark:border-[rgba(256,256,256,0.1)] dark:text-white bg-transparent h-[60px] border px-5 py-0 border-solid border-[rgba(0,0,0,0.1)]"
                        name="" id="">
                        <option value="">2014</option>
                    </select>
                </div>
            </div>
            <div class="max-lg:w-full w-1/2  pr-4 pl-4">
                <div class=" mb-[30px]">
                    <label for="" class="dark:text-white text-sm text-[#505386] font-semibold mb-0">Year End</label>
                    <select
                        class="dark:border-[rgba(256,256,256,0.1)] dark:text-white bg-transparent h-[60px] border px-5 py-0 border-solid border-[rgba(0,0,0,0.1)]"
                        name="" id="">
                        <option value="">2017</option>
                    </select>
                </div>
            </div>
            <div class="w-full pr-4 pl-4">
                <div class=" mb-[30px]">
                    <label for="" class="dark:text-white text-sm text-[#505386] font-semibold mb-0">Description</label>
                    <textarea
                        class="dark:border-[rgba(256,256,256,0.1)] dark:text-white bg-transparent border h-[120px] border-solid border-[rgba(0,0,0,0.1)]"
                        name="" id="" placeholder="Description"></textarea>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="buttons  mt-30">
    <button type="submit"
        class="inline-block w-auto max-sm:px-4 bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] shadow-[0.872px_9.962px_20px_0px_rgba(12,78,165,0.3)] font-semibold text-white cursor-pointer h-auto px-[35px] py-[11px] rounded-[50px] border-0 hover:text-white hover:shadow-[1px_10px_20px_0px_rgba(12,78,165,0.43)]">Save
        Changes</button>
    <button
        class="inline-block font-semibold w-auto h-auto ml-5 px-[35px] max-sm:px-4 py-[11px] rounded-[50px] border-2 border-solid border-[rgba(0,0,0,0.1)] bg-[-o-linear-gradient(284deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] shadow-[0.872px_9.962px_20px_0px_rgba(12,78,165,0.3)] text-white cursor-pointer  hover:text-white hover:shadow-[1px_10px_20px_0px_rgba(12,78,165,0.43)]">Discard
        All</button>
</div></template>
<script>
import { ref } from 'vue';
import profileDefault from '@/assets/frontend/images/profile/profile-user.png'
import coverDefault from '@/assets/frontend/images/profile/profile-box-bg.png'

export default {
  setup() {
    const profileInput = ref(null);
    const coverInput = ref(null);
    const profilePreview = ref(profileDefault);
    const coverPreview = ref(coverDefault);

    const handleFileUpload = (event, type) => {
      const file = event.target.files[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = () => {
          if (type === 'profile') {
            profilePreview.value = reader.result;
          } else if (type === 'cover') {
            coverPreview.value = reader.result;
          }
        };
        reader.readAsDataURL(file);
      }
    };

    const openFileInput = (inputRef) => {
      const fileInput = inputRef === 'profileInput' ? profileInput.value : coverInput.value;
      fileInput.value = ''; // Clear the previously selected file (optional for re-selecting the same file)
      fileInput.click();
    };

    return {
      profileInput,
      coverInput,
      profilePreview,
      coverPreview,
      handleFileUpload,
      openFileInput,
    };
  },
};
</script>