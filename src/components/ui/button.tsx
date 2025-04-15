'use client'

import React from "react";
import { HTMLMotionProps, motion } from "framer-motion";

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
} & (
        | { as?: "button" } & React.ButtonHTMLAttributes<HTMLButtonElement>
        | { as?: "a" } & React.AnchorHTMLAttributes<HTMLAnchorElement>
    );

const buttonVariants = {
    initial: { scale: 0.95, opacity: 0, y: 10 },
    animate: {
        scale: 1,
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
    whileHover: {
        scale: 1.05,
        rotate: 0.5,
        boxShadow: "0px 0px 16px rgba(99, 102, 241, 0.6)", // Soft glow
    },
    whileTap: { scale: 0.95 }, // This is correctly defined as an animation
};

export function Button(props: ButtonProps) {
    const { as = "button", children, className = "", ...rest } = props;

    const baseClass = `relative z-10 button button-gradient rounded-full w-max p-1.5 text-white cursor-pointer ${className}`;

    const content = (
        <div className="button-gradient-container py-2 rounded-full px-4 relative z-20">
            {children}
        </div>
    );

    const Glow = (
        <motion.div
            className="absolute inset-0 rounded-full bg-indigo-400 opacity-10 blur-xl z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            whileHover={{ opacity: 0.3, scale: 1.1 }}
            transition={{ duration: 0.4 }}
        />
    );

    // Button as button or anchor
    if (as === "button") {
        return (
            <motion.button
                className={baseClass}
                variants={buttonVariants}
                initial="initial"
                animate="animate"
                whileHover="whileHover"
                whileTap="whileTap"
                {...(rest as HTMLMotionProps<"button">)}
            >
                {Glow}
                {content}
            </motion.button>
        );
    }

    return (
        <motion.a
            className={baseClass}
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            whileTap="whileTap"
            {...(rest as HTMLMotionProps<"a">)}
        >
            {Glow}
            {content}
        </motion.a>
    );
}
