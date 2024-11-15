import { defineConfig } from "astro/config";
import swup from "@swup/astro";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

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
    ],
    markdown: {
        syntaxHighlight: "prism",
    },
});
