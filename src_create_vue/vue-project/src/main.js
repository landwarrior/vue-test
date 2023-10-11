import { createApp } from "vue";

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
