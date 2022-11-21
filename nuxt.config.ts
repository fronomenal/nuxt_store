import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  imports: {
  dirs: ["stores"],
  },
  modules: ["@nuxtjs/tailwindcss","@vueuse/nuxt", ["@pinia/nuxt", {autoImports:["defineStore"]}]],
  app: {
    head: {
      title: "Nuxt Merch",
      meta: [
        {name: "description", content: "Built using Nuxt 3"}
      ],
      link: [
        {rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons"}
      ]
    }
  }
})
