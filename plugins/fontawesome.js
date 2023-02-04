import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
//import { faTwitterSquare, faTwitch, faGithubSquare ,faGgCircle} from '@fortawesome/free-brands-svg-icons'
///import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";
// import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, fab);

//library.add(faTwitterSquare, faTwitch, faGithubSquare,faGgCircle)

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});
