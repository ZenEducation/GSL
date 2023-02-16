<template>
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Vite App</title>
      </head>
  
  <div data-spy="scroll" data-target=".fixed-top">

      <!-- Navigation -->
      <nav class="navbar fixed-top">
          <div class="container flex flex-wrap items-center justify-between sm:px-4 lg:flex-nowrap lg:px-8">

              <!-- Text Logo - Use this if you don't have a graphic logo -->

              <!-- Image Logo -->
              <NuxtLink to="/newPage" class="inline-block mr-4 py-0.5 text-xl whitespace-nowrap hover:no-underline focus:no-underline" >
                  <img src="../assets/img/logo.svg" alt="alternative" class="h-8"/>
              </NuxtLink>

              <button class="background-transparent rounded text-xl leading-none hover:no-underline focus:no-underline lg:hidden lg:text-gray-400" type="button" data-toggle="offcanvas">
                  <span class="navbar-toggler-icon inline-block w-8 h-8 align-middle"></span>
              </button>

              <div class="navbar-collapse offcanvas-collapse lg:flex lg:flex-grow lg:items-center" id="navbarsExampleDefault">
                  <ul class="pl-0 mt-3 mb-2 ml-auto flex flex-col list-none lg:mt-0 lg:mb-0 lg:flex-row">
                      <li>
                          <NuxtLink to="/newPage#header" class="nav-link page-scroll" >Home <span class="sr-only">(current)</span></NuxtLink>
                      </li>
                      <li>
                          <NuxtLink to="/newPage#features" class="nav-link page-scroll" >Features</NuxtLink>
                      </li>
                      <li>
                          <NuxtLink to="/newPage#details" class="nav-link page-scroll" >Details</NuxtLink>
                      </li>
                      <li>
                          <NuxtLink to="/newPage#pricing" class="nav-link page-scroll" >Pricing</NuxtLink>
                      </li>
                      <li class="relativegroup"  @click="isOpen=!isOpen">
                            <button
                            class="md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline flex items-center"
                            @click="this.dropdownToggler"
                            @blur="this.dropdownToggler"
                            >
                            <span>Drop</span>
                            <font-awesome-icon v-if="this.dropdown" icon="fa-solid fa-chevron-up"/>
                            <font-awesome-icon v-else icon="fa-solid fa-caret-down"/>
                            </button>
                            <div>
                                <ul v-if="this.dropdown" class="flex lg:absolute flex-col max-w-42 py-1 lg:bg-white rounded-md lg:shadow-md pl-2 lg:pl-0">
                                    <li >
                                        <Nuxtlink to="/article" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Article</Nuxtlink>
                                    </li>
                                    <li>
                                        <Nuxtlink to="/Privacy" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Privacy</Nuxtlink>
                                    </li>
                                    <li>
                                        <Nuxtlink to="/Terms" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Terms</Nuxtlink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                      <li>
                          <NuxtLink to="/newPage#download" class="nav-link page-scroll">Download</NuxtLink>
                      </li>
                  </ul>
                  <span class="block lg:ml-3.5">
                      <a class="no-underline" href="#your-link">
                          <font-awesome-icon icon="fab fa-brands fa-apple text:indigo-600 hover:text-pink-500 text-xl transition-all duration-200 mr-1.5"/>
                      </a>
                      <a class="no-underline" href="#your-link">
                          <font-awesome-icon icon="fab fa-brands fa-android text-indigo-600 hover:text-pink-500 text-xl transition-all duration-200"/>
                         
                      </a>
                  </span>
              </div> <!-- end of navbar-collapse -->
          </div> <!-- end of container -->
      </nav> <!-- end of navbar -->
      <!-- end of navigation -->


      <!-- Header -->
      <header class="ex-header bg-gray">
          <div class="container px-4 sm:px-8 xl:px-4">
              <h1 class="xl:ml-24">Article Details</h1>
          </div> <!-- end of container -->
      </header> <!-- end of ex-header -->
      <!-- end of header -->

      <!-- Basic -->
      <div class="ex-basic-1 py-12">
          <div class="container px-4 sm:px-8">
              <img class="inline mt-12 mb-4" src="../assets/img/article-details-large.jpg" alt="alternative" />
          </div> <!-- end of container -->
      </div> <!-- end of ex-basic-1 -->
      <!-- end of basic -->

      <!-- Basic -->
      <div class="ex-basic-1 pt-4">
          <div class="container px-4 sm:px-8 xl:px-32">
              <p class="mb-4"> Are you looking for ways to grow the user base for your mobile application? Then you have arrived at the right place. Here you will find a curated collection of landing page HTML templates that will help you build an engaging online presentation for your mobile app and convince visitors to become loyal paying users.</p>
              <p class="mb-12"> All templates in the roundup are premium which means you need to pay for them but we're talking small amounts of money which won't break your bank account but will help authors make a living. In return you get a high quality, updated item together with high quality and very prompt technical support.</p>

              <h2 class="mb-4">Advantages of working with this template</h2>
              <p class="mb-4">Besides buying the template you need some basic web skills in order to customize it. Nothing too fancy HTML/CSS will do just fine and a little bit of image editing. You can always hire a web designer to help with the customization work while you provide the template and the content that is the most important.</p>
              <p class="mb-6">Riga is a landing page HTML template made with Tailwind CSS to help you showcase your mobile app online and persuade visitors to download it from the app stores. The author used Tailwind CSS to build the template and integrated a nice animated navigation that slides from outside the screen.</p>
          </div> <!-- end of container -->
      </div> <!-- end of ex-basic-1 -->
      <!-- end of basic -->

      <!-- Cards -->
      <div class="ex-cards-1 py-4">
          <div class="container px-4 sm:px-8">
              
              <!-- Card -->
              <div class="card">
                  <ul class="list-unstyled">
                      <li class="flex">
                          <span class="fa-stack">
                              <span class="fas fa-circle fa-stack-2x"></span>
                              <span class="fa-stack-1x">1</span>
                          </span>
                          <div class="flex-1 ml-3">
                              <h5 class="mt-0.5 mb-1.5">
                                <font-awesome-icon icon="fa-solid fa-circle-5" />
                                High Quality Service</h5>
                              <p class="mb-4">Features include an eye catching morphtext in the header, details lightbox for more details information</p>
                          </div>
                      </li>
                  </ul>
              </div> <!-- end of card -->
              <!-- end of card -->

              <!-- Card -->
              <div class="card">
                  <ul class="list-unstyled">
                      <li class="flex">
                          <span class="fa-stack">
                              <span class="fas fa-circle fa-stack-2x"></span>
                              <span class="fa-stack-1x">2</span>
                          </span>
                          <div class="flex-1 ml-3">
                              <h5 class="mt-0.5 mb-1.5">Prompt Timely Delivery</h5>
                              <p class="mb-4">Statistics numbers for important values, card slider for testimonials, image slider for customer logos</p>
                          </div>
                      </li>
                  </ul>
              </div> <!-- end of card -->
              <!-- end of card -->

              <!-- Card -->
              <div class="card">
                  <ul class="list-unstyled">
                      <li class="flex">
                          <span class="fa-stack">
                              <span class="fas fa-circle fa-stack-2x"></span>
                              <span class="fa-stack-1x">3</span>
                          </span>
                          <div class="flex-1 ml-3">
                              <h5 class="mt-0.5 mb-1.5">Skilled Team Involved</h5>
                              <p class="mb-4">
                                  Some useful extra pages are bundled with the template lik article details, terms conditions and privacy policy
                              </p>
                          </div>
                      </li>
                  </ul>
              </div> <!-- end of card -->
              <!-- end of card -->

          </div> <!-- end of container -->
      </div> <!-- end of ex-cards-1 -->
      <!-- end of cards -->

      <!-- Basic -->
      <div class="ex-basic-1 pt-6 pb-12">
          <div class="container px-4 sm:px-8 xl:px-32">
              <p class="mb-12"> Features include an eye catching morphtext in the header, details lightbox for more details information, statistics numbers for important values, card slider for testimonials, image slider for customer logos and working forms that will enable your landing page to provide leads in order to achieve your marketing goals.</p>

              <h2 class="mb-6">New elements added to the package</h2>
              <img class="inline mb-12" src="../assets/img/article-details-small.jpg" alt="alternative" />
              <p class="mb-4"> Some useful extra pages are bundled with the template lik article details, terms conditions and privacy policy which can be customized as per your requirements. Riga has an impactful dark style design combined with warm colors and angular background shapes with the unique goal of making your mobile app stand out. </p>
              <p class="mb-12"> Leon is an easy to customize landing page HTML template built with Tailwind CSS for promoting mobile apps to the online audience and making visitors download them from app stores. This template is built with HTML and Tailwind CSS to ensure the highest flexibility for all users.</p>
              <div class="text-box mb-12">
                  <h3 class="mb-2">Visitors love a beautiful and efficient website</h3>
                  <p class="mb-4"> All designers, developers and tech-savvy people will be able to customize this template with basic web coding skills. Among the features you will find details lightbox for more details information, tabbed content for feature details, video lightbox, card slider for testimonials, statistics numbers, image slider for customer logos, dropdown navigation and useful extra pages for article details, terms.</p>
              </div> <!-- end of text-box -->
              <p class="mb-6"> Together with touches of call to action green, the overall landing page design will showcase your app beautifully and will help with convincing visitors to download it from the app stores. Orange and gray hues with one color backgrounds to maximize the impact of your content image slider for customer logos and working forms.</p>
              <ul class="list-unstyled mb-12 space-y-2">
                  <li class="flex">
                      <i class="fas fa-square"></i>
                      <div class="flex-1 ml-2">
                          <strong>Card slider</strong> for testimonials, statistics numbers for important values image slider for logos
                      </div>
                  </li>
                  <li class="flex">
                      <i class="fas fa-square"></i>
                      <div class="flex-1 ml-2">
                          <strong>Dropdown navigation</strong> and useful extra pages for article details, terms conditions and privacy policy
                      </div>
                  </li>
                  <li class="flex">
                      <i class="fas fa-square"></i>
                      <div class="flex-1 ml-2">
                          <strong>Clean light design</strong> mixing purple, orange and gray hues with one color backgrounds to maximize
                      </div>
                  </li>
                  <li class="flex">
                      <i class="fas fa-square"></i>
                      <div class="flex-1 ml-2">
                          <strong>Together with</strong> touches of call to action green, the overall landing page design will showcase your app
                      </div>
                  </li>
                  <li class="flex">
                      <i class="fas fa-square"></i>
                      <div class="flex-1 ml-2">
                          <strong>This template</strong> is built with HTML and Tailwind CSS to ensure the highest flexibility for all users
                      </div>
                  </li>
              </ul>

              <NuxtLink to="/newPage#download" class="btn-solid-reg mb-12" >Download</NuxtLink>
          </div> <!-- end of container -->
      </div> <!-- end of ex-basic-1 -->
      <!-- end of basic -->

      <!-- Footer -->
      <div class="footer">
          <div class="container px-4 sm:px-8">
              <h4 class="mb-8 lg:max-w-3xl lg:mx-auto">Pavo is a mobile application for marketing automation and you can reach the team at <a class="text-indigo-600 hover:text-gray-500" href="mailto:email@domain.com">email@domain.com</a>
              </h4>
              <div class="social-container">
                  <span class="fa-stack">
                      <a href="#your-link">
                          <i class="fas fa-circle fa-stack-2x"></i>
                          <i class="fab fa-facebook-f fa-stack-1x"></i>
                      </a>
                  </span>
                  <span class="fa-stack">
                      <a href="#your-link">
                          <i class="fas fa-circle fa-stack-2x"></i>
                          <i class="fab fa-twitter fa-stack-1x"></i>
                      </a>
                  </span>
                  <span class="fa-stack">
                      <a href="#your-link">
                          <i class="fas fa-circle fa-stack-2x"></i>
                          <i class="fab fa-pinterest-p fa-stack-1x"></i>
                      </a>
                  </span>
                  <span class="fa-stack">
                      <a href="#your-link">
                          <i class="fas fa-circle fa-stack-2x"></i>
                          <i class="fab fa-instagram fa-stack-1x"></i>
                      </a>
                  </span>
                  <span class="fa-stack">
                      <a href="#your-link">
                          <i class="fas fa-circle fa-stack-2x"></i>
                          <i class="fab fa-youtube fa-stack-1x"></i>
                      </a>
                  </span>
              </div> <!-- end of social-container -->
          </div> <!-- end of container -->
      </div> <!-- end of footer -->
      <!-- end of footer -->


     <!-- Copyright -->
     <div class="copyright">
          <div class="container px-4 sm:px-8 lg:grid lg:grid-cols-3">
              <ul class="mb-4 list-unstyled p-small">
                  <li class="mb-2"><NuxtLink to="/article">Article Details</NuxtLink></li>
                  <li class="mb-2"><NuxtLink to="/terms">Terms & Conditions</NuxtLink></li>
                  <li class="mb-2"><NuxtLink to="/privacy">Privacy Policy</NuxtLink></li>
              </ul>
              <p class="pb-2 p-small statement">Copyright © <a href="#your-link" class="no-underline">Your name</a></p>

              <p class="pb-2 p-small statement">Distributed by :<a href="https://themewagon.com/" class="no-underline">Themewagon</a></p>
          </div> 
      </div> <!-- end of copyright -->
      <!-- end of copyright -->
  </div>
  </html>
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
  
  <style lang="scss" scoped>
  
  
  </style>
  