'use client';

import { useState, useEffect } from "react";

const titles: string[] = ["Web Developer", "Frontend Engineer", "Software Developer"];

export default function AnimatedTitle() {
    const [text, setText] = useState<string>("");
    const [index, setIndex] = useState<number>(0);
    const [charIndex, setCharIndex] = useState<number>(0);
    const [deleting, setDeleting] = useState<boolean>(false);

    useEffect(() => {
        const currentTitle = titles[index];
        const timeout = setTimeout(() => {
            if (deleting) {
                setText(currentTitle.slice(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);
            } else {
                setText(currentTitle.slice(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);
            }
        }, deleting ? 50 : 100);

        if (!deleting && charIndex === currentTitle.length) {
            setTimeout(() => setDeleting(true), 1000);
        } else if (deleting && charIndex === 0) {
            setDeleting(false);
            setIndex((prev) => (prev + 1) % titles.length);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, deleting, index]);

    return (
        <h2 className="flex items-center space-x-1 text-[25px]">
            <span className="text-[#7D7789] font-light">Creative</span>
            <span className="text-[#333333] font-semibold">{text}</span>
        </h2>
    );
}