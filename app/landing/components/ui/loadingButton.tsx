"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

type Props = {
    children: string;
    href?: string;
    onClick?: () => void;
    className?: string;
    delay?: number;
};

export default function LoadingButton({
    children,
    href,
    onClick,
    className = "",
    delay = 600
}: Props) {
    const [loading, setLoading] = useState(false);

    function handleClick() {
        if (loading) return;

        setLoading(true);

        if (onClick) onClick();

        if (href) {
            setTimeout(() => {
                window.location.href = href;
            }, delay);
        }
    }

    return (
        <button
            onClick={handleClick}
            disabled={loading}
            className={`
        px-5 py-2 rounded-full font-semibold flex items-center gap-2 transition
        ${loading ? "bg-teal-700 cursor-not-allowed text-white" : "bg-teal-600 hover:bg-teal-700 text-white"}
        ${className}
      `}
        >
            {loading ? (
                <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Carregando...
                </>
            ) : (
                children
            )}
        </button>
    );
}
