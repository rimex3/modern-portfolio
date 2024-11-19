/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                primary: "#222831",
                secondary: "#31363F",
                third: "#76ABAE",
                fourth: "#EEEEEE",
            },
        },
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
};
