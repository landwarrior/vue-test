document.addEventListener('DOMContentLoaded', () => {
    Vue.createApp({
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
