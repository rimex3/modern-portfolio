import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
} & (
        | {
            as?: "button";
        } & React.ButtonHTMLAttributes<HTMLButtonElement>
        | {
            as?: "a";
        } & React.AnchorHTMLAttributes<HTMLAnchorElement>
    );

export function Button(props: ButtonProps) {
    const { as = "button", children, className, ...rest } = props;


    if (as === "button") {
        return <button className={`button button-gradient rounded-full w-max p-1.5 text-white cursor-pointer ${className}`} {...rest as React.ButtonHTMLAttributes<HTMLButtonElement>}>
            <div className="button-gradient-container py-2 rounded-full px-4">
                {children}
            </div>
        </button>;
    }

    return <a className={`button button-gradient rounded-full  w-max p-1.5 text-white ${className}`} {...rest as React.AnchorHTMLAttributes<HTMLAnchorElement>}>
        <div className="button-gradient-container py-2 rounded-full px-4">
            {children}
        </div>
    </a>
}