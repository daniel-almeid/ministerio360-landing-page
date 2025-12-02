"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import LoadingButton from "../ui/loadingButton";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all ${scrolled ? "bg-white shadow-md py-3" : "bg-white/70 backdrop-blur py-5"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold text-teal-600">
                    Ministério360
                </Link>

                {/* DESKTOP MENU */}
                <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
                    <Link href="#features" className="hover:text-teal-600 transition">Recursos</Link>
                    <Link href="#plans" className="hover:text-teal-600 transition">Planos</Link>

                    <LoadingButton
                        href="https://ministerio360.vercel.app/register"
                        className="px-5 py-2"
                    >
                        Criar conta
                    </LoadingButton>
                </nav>

                {/* MENU MOBILE BUTTON */}
                <button
                    onClick={() => setOpen(true)}
                    className="md:hidden text-gray-700"
                >
                    <Menu className="w-7 h-7" />
                </button>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-end z-50 md:hidden">
                    <div className="bg-white w-72 h-full p-6 shadow-xl">
                        <button onClick={() => setOpen(false)} className="mb-6">
                            <X className="w-7 h-7 text-gray-700" />
                        </button>

                        <nav className="flex flex-col gap-6 text-gray-800 text-lg">
                            <Link
                                href="#features"
                                onClick={() => setOpen(false)}
                                className="hover:text-teal-600"
                            >
                                Recursos
                            </Link>

                            <Link
                                href="#plans"
                                onClick={() => setOpen(false)}
                                className="hover:text-teal-600"
                            >
                                Planos
                            </Link>

                            <Link
                                href="/login"
                                onClick={() => setOpen(false)}
                                className="hover:text-teal-600"
                            >
                                Login
                            </Link>

                            {/* MOBILE LOADING BUTTON */}
                            <LoadingButton
                                href="https://ministerio360.vercel.app/register"
                                className="w-full py-3 mt-2"
                            >
                                Criar conta
                            </LoadingButton>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}
