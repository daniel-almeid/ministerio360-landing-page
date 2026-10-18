"use client";

import { ReactNode } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

type Variant = "primary" | "outline" | "white" | "ghost";

type Props = {
  href: string;
  /** Onde o botão está (usado no Meta Pixel para saber qual CTA converte mais) */
  location: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-teal-500 text-white shadow-lg shadow-teal-500/25 hover:bg-teal-400 hover:shadow-teal-400/30",
  outline:
    "border border-white/25 text-white hover:bg-white/10",
  white: "bg-white text-navy-900 shadow-lg hover:bg-teal-50",
  ghost: "border border-gray-300 text-gray-800 hover:bg-gray-100",
};

export default function CtaLink({
  href,
  location,
  children,
  variant = "primary",
  className = "",
}: Props) {
  const isWhatsapp = href.includes("wa.me");

  function track() {
    if (typeof window === "undefined" || !window.fbq) return;
    if (isWhatsapp) {
      window.fbq("track", "Lead", { content_name: location, channel: "whatsapp" });
    } else {
      window.fbq("trackCustom", "ClickCriarConta", { content_name: location });
    }
  }

  return (
    <a
      href={href}
      onClick={track}
      target={isWhatsapp ? "_blank" : undefined}
      rel={isWhatsapp ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400 ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}