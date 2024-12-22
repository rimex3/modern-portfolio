/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                primary: "#090E13",
                secondary: "#181E24",
                third: "#63B3FF",
                fourth: "#A3A3A3",
            },
        },
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
};
