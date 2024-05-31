import VueMermaidString from "vue-mermaid-string";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("VueMermaidString", VueMermaidString);
});
