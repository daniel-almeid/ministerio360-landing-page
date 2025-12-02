"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import LoadingButton from "../ui/loadingButton";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all ${
                scrolled ? "bg-white shadow-md py-3" : "bg-white/70 backdrop-blur py-5"
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

                {/* LOGO (mostrado no mobile e desktop) */}
                <Link href="/" className="text-xl font-bold text-teal-600">
                    Ministério360
                </Link>

                {/* MENU SOMENTE DESKTOP */}
                <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
                    <Link href="#features" className="hover:text-teal-600 transition">
                        Recursos
                    </Link>

                    <Link href="#plans" className="hover:text-teal-600 transition">
                        Planos
                    </Link>

                    <LoadingButton
                        href="https://ministerio360.vercel.app/register"
                        className="px-5 py-2"
                    >
                        Criar conta
                    </LoadingButton>
                </nav>

            </div>
        </header>
    );
}
