import { defineConfig } from "astro/config";
import swup from "@swup/astro";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";

export default defineConfig({
    integrations: [
        swup({
            theme: false,
            animationClass: "transition-",
            containers: ["main"],
            cache: true,
            preload: {
                hover: true,
                visible: false,
            },
            progress: true,
            routes: true,
            smoothScrolling: true,
            updateHead: true,
        }),
        tailwind(),
        mdx({
            optimize: true,
        }),
        svelte(),
    ],
    markdown: {
        syntaxHighlight: "prism",
    },
});
