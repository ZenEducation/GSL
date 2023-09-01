import { defineNuxtPlugin } from "#app";
import { Amplify, Auth } from "aws-amplify";
import awsExports from "../src/aws-exports.js";

export default defineNuxtPlugin((nuxtApp) => {
  Amplify.configure(awsExports);
  Auth.configure(awsExports)

  return {
    provide: {
        auth: Auth,
    },
  };
});
//export default null;