import { ArrowRight } from "lucide-react";
import Reveal from "../ui/reveal";
import CtaLink from "../ui/cta-link";
import { REGISTER_URL, WA_DUVIDA, WA_TRIAL } from "../../lib/links";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 to-teal-700 py-24 text-center text-white md:py-28">
      <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-6">
        <Reveal>
          <h2 className="text-3xl font-extrabold leading-tight md:text-5xl">
            Cada semana sem organização é uma semana de pessoas sem acompanhamento
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-5 text-lg text-teal-50 md:text-xl">
            Comece hoje. Teste o Ministério360 por 30 dias e veja sua igreja organizada em poucos minutos.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CtaLink href={WA_TRIAL} location="final_primary" variant="white" className="w-full !px-9 !py-4 !text-lg sm:w-auto">
              Testar 30 dias grátis <ArrowRight className="h-5 w-5" />
            </CtaLink>
            <CtaLink href={REGISTER_URL} location="final_secondary" variant="outline" className="w-full !py-4 sm:w-auto">
              Criar conta agora
            </CtaLink>
          </div>
          <p className="mt-5 text-sm text-teal-100">Sem cartão de crédito · Sem compromisso</p>
          <a href={WA_DUVIDA} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-sm underline underline-offset-4 hover:text-white">
            Prefere conversar antes? Fale com a gente no WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}