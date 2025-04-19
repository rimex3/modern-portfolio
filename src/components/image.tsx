import dynamic from "next/dynamic";


const Image = dynamic(() => import("next/image"), { ssr: false });


export { Image };