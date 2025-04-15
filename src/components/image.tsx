'use client'

import { ComponentPropsWithRef, use } from "react";



interface ImageProps extends ComponentPropsWithRef<"img"> {

}

export function Image({ src, alt }: { src: string, alt: string }) {
    const imagePromise = createImageResource(src);
    const image = use(imagePromise)

    return <img src={image.src} alt={alt} />
}

const cache = new Map<string, Promise<HTMLImageElement>>();

function createImageResource(src: string) {
    let promise = cache.get(src);
    if (!promise) {
        promise = loadImage(src);
        cache.set(src, promise)
    }

    return promise
}


function loadImage(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const image = new window.Image()
        image.src = src
        image.onload = () => resolve(image)
        image.onerror = () => reject(new Error(`Failed to load image: ${src}`))
    })
}

