"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import CtaLink from "../ui/cta-link";
import { LOGIN_URL, WA_TRIAL } from "../../lib/links";

const nav = [
  { href: "#dor", label: "Os problemas" },
  { href: "#solucao", label: "A solução" },
  { href: "#plans", label: "Planos" },
  { href: "#faq", label: "Dúvidas" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-950/95 py-3 shadow-lg backdrop-blur"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#top" aria-label="Ministério360" className="flex items-center gap-2 text-xl font-extrabold text-white">
          <Image src="/logo-light.png" alt="" width={40} height={40} className="h-10 w-auto" priority />
          Ministério<span className="text-teal-400">360</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="transition hover:text-teal-300">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={LOGIN_URL}
            className="hidden text-sm font-medium text-slate-200 transition hover:text-white sm:block"
          >
            Entrar
          </a>
          <CtaLink href={WA_TRIAL} location="header" className="!px-5 !py-2.5 !text-sm">
            Testar grátis
          </CtaLink>
        </div>
      </div>
    </header>
  );
}