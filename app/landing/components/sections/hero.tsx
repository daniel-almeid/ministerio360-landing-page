import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import CtaLink from "../ui/cta-link";
import Reveal from "../ui/reveal";
import { REGISTER_URL, WA_TRIAL } from "../../lib/links";

const trust = ["30 dias grátis", "Sem cartão de crédito", "Comece em poucos minutos"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-950 px-6 pb-24 pt-36 md:pt-44">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-teal-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl text-center">
        <Reveal>
          <span className="inline-block rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-1.5 text-sm font-medium text-teal-300">
            Sistema de gestão para igrejas
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-6xl">
            Sua igreja cresce. <br className="hidden md:block" />
            Sua organização{" "}
            <span className="bg-gradient-to-r from-teal-300 to-teal-500 bg-clip-text text-transparent">
              está acompanhando?
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 md:text-xl">
            Chega de visitantes esquecidos, escalas bagunçadas e finanças em caderno. O Ministério360
            reúne <strong className="font-semibold text-white">membros, visitantes, escalas e finanças</strong>{" "}
            em um só lugar, para você voltar a cuidar de pessoas.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CtaLink href={WA_TRIAL} location="hero_primary" className="w-full !px-9 !py-4 !text-lg sm:w-auto">
              Testar 14 dias grátis
              <ArrowRight className="h-5 w-5" />
            </CtaLink>
            <CtaLink href={REGISTER_URL} location="hero_secondary" variant="outline" className="w-full !py-4 sm:w-auto">
              Criar conta agora
            </CtaLink>
          </div>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-300">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-teal-400" /> {t}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="relative mx-auto mt-16 max-w-5xl">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-b from-teal-400/20 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-navy-900 shadow-2xl shadow-black/40">
              <div className="flex items-center gap-2 border-b border-white/10 bg-navy-900 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
                <span className="ml-3 truncate rounded-md bg-white/5 px-3 py-1 text-xs text-slate-400">
                  ministerio360.vercel.app/dashboard
                </span>
              </div>
              <Image
                src="/screens/dashboard.png"
                alt="Painel do Ministério360 com entradas, saídas, visitantes e próximos eventos"
                width={1914}
                height={908}
                priority
                className="h-auto w-full"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
