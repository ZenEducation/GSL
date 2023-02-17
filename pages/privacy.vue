<template>
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Vite App</title>
        <img src="../assets/img/favicon.png" alt="pavo"/>
      </head>

<div data-spy="scroll" data-target=".fixed-top">

<!-- Navigation -->
<nav class="navbar fixed-top">
    <div class="container mx-auto flex flex-wrap items-center justify-between sm:px-4 lg:flex-nowrap lg:px-8 xl:max-w-6xl">

        <!-- Text Logo - Use this if you don't have a graphic logo -->
        <!-- <a class="text-gray-800 font-semibold text-3xl leading-4 no-underline page-scroll" href="index.html">Pavo</a> -->

        <!-- Image Logo -->
        <a class="inline-block mr-4 py-0.5 text-xl whitespace-nowrap hover:no-underline focus:no-underline" href="index.html">
            <img src="../assets/img/logo.svg" alt="alternative" class="h-8"/>
        </a>

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
                <li class="relative group">
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
                                <ul
                                    v-if="this.dropdown" 
                                    class="flex lg:absolute flex-col max-w-42 py-1 lg:bg-white rounded-md lg:shadow-md pl-2 lg:pl-0"
                                >
                                    <li>
                                    <NuxtLink to="/article" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Article</NuxtLink>
                                    </li>
                                    <li>
                                    <NuxtLink to="/terms" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Terms</NuxtLink>
                                    </li>
                                    <li>
                                    <NuxtLink to="/privacy" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Privacy</NuxtLink>
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
    <div class="container mx-auto px-4 sm:px-8 xl:max-w-6xl xl:px-4">
        <h1 class="xl:ml-24">Privacy Policy</h1>
    </div> <!-- end of container -->
</header> <!-- end of ex-header -->
<!-- end of header -->


<!-- Basic -->
<div class="ex-basic-1 py-12">
    <div class="container mx-auto px-4 sm:px-8 xl:max-w-5xl xl:px-12">
        <h2 class="mt-12 mb-4">1. Private data we receive and collect</h2>
        <p class="mb-12"> Leon also automatically collects and receives certain information from your computer or mobile device, including the activities you perform on our Website, the Platforms, and the Applications, the type of hardware and software you are using (for example, your operating system or browser), and information obtained</p>
        <h3 class="mb-2">1.1. For example each time you visit the website</h3>
        <p class="mb-12">For example, each time you visit the Website or otherwise use the Services, we automatically collect your IP address, browser and device type, access times, the web page from which you came, the regions from which you navigate the web page, and the web page(s) you access (as applicable). There is more to this section and we want.</p>
        <h3 class="mb-2">1.2. When you first register for a leon account</h3>
        <p class="mb-12">Your billing address and any necessary other information to complete any financial transaction, and when making purchases through the Services, we may also collect your credit card or PayPal information or any other sensitive data that might be acquired by third parties not involved in the process</p>

        <h2 class="mb-4">2. Advantages of working with vera</h2>
        <p class="mb-4">Leon Landing Page Template uses visitors' data for the following general purposes and for other specific ones that are important. To identify you when you login to your account so we can start or user security process for the entire session and duration. Enable us to operate the Services and provide them to you without fear of losing.</p>
        <p class="mb-6">Verify your transactions and for purchase confirmation, billing, security, and authentication (including security tokens for communication with installed). Always take security measures like not saving passwords in your browser or writing them down. analyze the Website or the other Services and information about our visitors.</p>
        <ul class="list-unstyled mb-6 space-y-2">
            <li class="flex">
                <i class="fas fa-square"></i>
                <div class="flex-1 ml-2">
                    <strong>To identify you</strong> when you login to your account so we can start or user security process for the entire session and duration and the need to protect sensitive data for the user and their company
                </div>
            </li>
            <li class="flex">
                <i class="fas fa-square"></i>
                <div class="flex-1 ml-2">
                    <strong>To enable us</strong> to operate the Services and provide them to you without fear of losing precious confidential information of your users and find more stuff to place on the shelves
                </div>
            </li>
            <li class="flex">
                <i class="fas fa-square"></i>
                <div class="flex-1 ml-2">
                    <strong>To verify your</strong> transactions and for purchase confirmation, billing, security, and authentication (including security tokens for communication with installed). Always take security measures
                </div>
            </li>
        </ul>
        <p class="mb-12">Like not saving passwords in your browser or writing them down. To analyze the Website or the other Services and information about our visitors and users, including research into our user demographics and user behaviour in order to improve our content and Services that are offered by the system and other third party companies.</p>
        <div class="text-box mb-12">
            <h3 class="mb-2">Contact you about your account and provide customer</h3>
            <p class="mb-4">Share aggregate (non-identifiable) statistics about users of the Services to prospective advertisers and partners. Keep you informed about the Services, features, surveys, newsletters, offers, surveys, newsletters, offers, contests and events we think you may find useful or which you have requested from us sell or market Leon Landing Page products and services to you or in other parts.</p>
        </div> <!-- end of text-box -->

        <h2 class="mb-4">3. Better understand your needs</h2>
        <p class="mb-12">In the aggregate, diagnose problems, analyze trends, improve the features and usability of the Services, and better understand and market to our customers and users. Keep the Services safe and secure for everyone using the app from administrators to regular users with limited rights and other aspects of the business</p>
        <h3 class="mb-2">3.1. In these ways please stop using the services</h3>
        <p class="mb-12">Leon Landing Page uses tracking technology on the landing page, in the Applications, and in the Platforms, including mobile application identifiers and a unique Hootsuite user ID to help us recognize you across different Services, to monitor usage and web traffic routing for the Services, and to customize.</p>
        <h3 class="mb-2">3.2. By visiting leon or using the services you agree</h3>
        <p class="mb-12">For example, each time you visit the Website or otherwise use the Services, we automatically collect your IP address, browser and device type, access times, the web page from which you came, the regions from which you navigate the web page , and the web page(s) you access. When you first register for a Leon account.</p>
        <div class="text-box mb-12">
            <ul class="list-unstyled space-y-2 mb-4">
                <li class="flex">
                    <i class="fas fa-square"></i>
                    <div class="flex-1 ml-2">
                        <strong>To identify you</strong> when you login to your account so we can start or user security process for the entire session and duration and the need to protect sensitive data for the user and their company</div>
                </li>
                <li class="flex">
                    <i class="fas fa-square"></i>
                    <div class="flex-1 ml-2">
                        <strong>To enable us</strong> to operate the Services and provide them to you without fear of losing precious confidential information of your users and find more stuff to place on the shelves
                    </div>
                </li>
                <li class="flex">
                    <i class="fas fa-square"></i>
                    <div class="flex-1 ml-2">
                        <strong>To verify your</strong> transactions and for purchase confirmation, billing, security, and authentication (including security tokens for communication with installed). Always take security measures
                    </div>
                </li>
                <li class="flex">
                    <i class="fas fa-square"></i>
                    <div class="flex-1 ml-2">
                        <strong>To better understand</strong> your needs and the needs of users in the aggregate, diagnose problems, analyze trends, improve the features and usability of the Services, and better understand and market
                    </div>
                </li>
                <li class="flex">
                    <i class="fas fa-square"></i>
                    <div class="flex-1 ml-2">
                        <strong>We also use</strong> non-identifiable information gathered for statistical purposes to keep track of the number of visits to the Services with a view to introducing improvements and improve
                    </div>
                </li>
            </ul>
        </div> <!-- end of text-box -->

        <h2 class="mb-4">4. We may share this type of statistical sata</h2>
        <p class="mb-6">Sell or market Leon Landing Page products and services to you or in other parts of the world where legislation is less restrictive. Needs and the needs of users in the aggregate, diagnose problems, analyze trends, improve the features and usability of the Services, and better understand and market to our customers and users</p>
        <ul class="list-unstyled mb-12 space-y-2">
            <li class="flex">
                <strong>1.</strong>
                <div class="flex-1 ml-2"><strong>Details lightbox</strong> for more details information, statistics numbers for important values, card slider for testimonials, image slider for customer logos and working forms positioned in the right place</div>
            </li>
            <li class="flex">
                <strong>2.</strong>
                <div class="flex-1 ml-2"><strong>Some useful extra</strong> pages are bundled with the template lik article details, terms conditions and privacy policy which can be customized as per your requirements and other user needs manifested in emails</div>
            </li>
            <li class="flex">
                <strong>3.</strong>
                <div class="flex-1 ml-2"><strong>Riga has an impactful</strong> dark style design combined with warm colors and angular background shapes with the unique goal of making your mobile app stand out from the crowd needs to see this app</div>
            </li>
            <li class="flex">
                <strong>4.</strong>
                <div class="flex-1 ml-2"><strong>Leon is an easy</strong> to customize landing page HTML template built with Tailwind CSS for promoting mobile apps to the online audience and making visitors download them from app stores built by the media companies</div>
            </li>
            <li class="flex">
                <strong>5.</strong>
                <div class="flex-1 ml-2"><strong>This template</strong> is built with HTML & Tailwind CSS to ensure the highest flexibility for all users. All designers, developers and tech-savvy people will be able to customize and modify all required aspects</div>
            </li>
        </ul>

        <div class="text-box mb-12">
            <h3 class="mb-2">Among the features you will find details lightbox</h3>
            <p class="mb-4">For more details information, tabbed content for feature details, video lightbox, card slider for testimonials, statistics numbers for important values, image slider for customer logos, dropdown navigation and useful extra pages for article details, terms conditions and privacy policy light design. Build an engaging online presentation for your mobile app and convince visitors to return.</p>
        </div>
        <!-- end of text-box -->
        <p class="mb-12">Help you showcase your mobile app online and persuade visitors to download it from the app stores. The author used Tailwind CSS to build the template and integrated a nice animated navigation that slides from outside the screen. Features include an eye catching morphtext in the header, details lightbox and other features.</p>

        <NuxtLink to="/newPage#download" class="btn-solid-lg" >Download</NuxtLink>
    </div>
    <!-- end of container -->
</div>
<!-- end of ex-basic-1 -->
<!-- end of basic -->

<!-- Footer -->
<div class="footer">
    <div class="container mx-auto px-4 sm:px-8 xl:max-w-6xl">
        <h4 class="mb-8 lg:max-w-3xl lg:mx-auto">Pavo is a mobile application for marketing automation and you can reach the team at <a class="text-indigo-600 hover:text-gray-500" href="mailto:email@domain.com">email@domain.com</a></h4>
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
