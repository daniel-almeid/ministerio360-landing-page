"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import CtaLink from "../ui/cta-link";
import { WA_TRIAL } from "../../lib/links";

/** Barra fixa no mobile (aparece após rolar o hero) + botão flutuante do WhatsApp no desktop */
export default function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy-950/95 px-4 py-3 backdrop-blur transition-transform duration-300 md:hidden ${
          show ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <CtaLink href={WA_TRIAL} location="sticky_mobile" className="w-full">
          Testar 30 dias grátis
        </CtaLink>
        <p className="mt-1.5 text-center text-[11px] text-slate-400">Sem cartão de crédito</p>
      </div>

      <a
        href={WA_TRIAL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        onClick={() => window.fbq?.("track", "Lead", { content_name: "whatsapp_float", channel: "whatsapp" })}
        className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-110 md:grid"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </>
  );
}