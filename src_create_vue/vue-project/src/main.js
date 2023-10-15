import { createApp } from "vue";

document.addEventListener('DOMContentLoaded', () => {
  createApp({
    data() {
      return {
        message: "Hello, World!",
        counter: {
          count: 0,
        },
      };
    },
  }).mount("#app");
});
