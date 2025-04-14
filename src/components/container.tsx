import { ReactNode } from "react";

type ContainerProps = {
    children: ReactNode;
    className?: string;
};

export default function Container({ children, className = "" }: ContainerProps) {
    return (
        <div className={`w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto ${className}`}>
            {children}
        </div>
    );
}
