export default defineNuxtConfig({
  extends: [
    "@nuxt/examples-ui",
    // './ui',
    // './base',
    "./nuxt2-project",
  ],
  // runtimeConfig: {
  //   public: {
  //     theme: {
  //       primaryColor: 'base_primary',
  //       secondaryColor: 'base_secondary'
  //     }
  //   }
  // },
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
  ],
  imports: {
    dirs: ['store']
  }
  // imports: {
  //   dirs: ["./stores"],
  // },
  // components: false,
  // imports: {
  //   autoImport: false
  // }
  // pinia: {
  //   autoImports: ["defineStore", "acceptHMRUpdate"],
  // },
});
