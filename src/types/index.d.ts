type BlogTypes = "Web Development" | "Mobile Development" | "UI/UX" | "Other";
type BlogTags = "astro" | "typescript" | "javascript" | "tailwindcss" | "react" | "next" | "vue" | "flutter" | "other";


interface BlogsProps {
    title: string;
    blogId: number | string;
    desc: string;
    type: BlogTypes;
    tags: BlogTags[];
    createAt: string;
}

interface ProjectProps {
    title: string;
    imgUrl: string;
    desc: string;
    url: string;
}
