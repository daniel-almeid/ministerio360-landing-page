import { Check } from "lucide-react";
import Reveal from "../ui/reveal";
import SectionHeading from "../ui/section-heading";
import CtaLink from "../ui/cta-link";
import { REGISTER_URL, WA_TRIAL } from "../../lib/links";

const plans = [
  {
    name: "Grátis",
    desc: "Para dar os primeiros passos",
    price: "R$0",
    features: ["Dashboard", "Controle de membros", "Controle financeiro"],
    cta: "Começar grátis hoje",
    href: REGISTER_URL,
    location: "plano_gratis",
    highlight: false,
  },
  {
    name: "Padrão",
    desc: "Para igrejas em crescimento",
    price: "R$49",
    features: ["Dashboard", "Controle de membros", "Controle de visitantes", "Controle financeiro", "Relatórios"],
    cta: "Testar grátis por 30 dias",
    href: WA_TRIAL,
    location: "plano_padrao",
    highlight: false,
  },
  {
    name: "Premium",
    desc: "Para igrejas que querem controle total",
    price: "R$89",
    features: ["Tudo do plano Padrão", "Ministérios", "Eventos e escalas", "Relatórios avançados", "Suporte prioritário"],
    cta: "Testar grátis por 30 dias",
    href: WA_TRIAL,
    location: "plano_premium",
    highlight: true,
  },
];

export default function Plans() {
  return (
    <section id="plans" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Planos"
          title="Menos que um lanche por dia para organizar a sua igreja"
          subtitle="Comece grátis. Teste os planos pagos por 30 dias, sem cartão de crédito."
        />

        <div className="mt-16 grid items-stretch gap-8 md:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-3xl p-8 ${
                  p.highlight
                    ? "border-2 border-teal-500 bg-navy-900 text-white shadow-2xl md:scale-105"
                    : "border border-slate-200 bg-slate-50"
                }`}
              >
                {p.highlight && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-teal-500 px-4 py-1 text-xs font-bold text-white">
                    Mais escolhido
                  </span>
                )}
                <h3 className={`text-xl font-bold ${p.highlight ? "text-teal-300" : "text-navy-900"}`}>{p.name}</h3>
                <p className={`mt-1 ${p.highlight ? "text-slate-300" : "text-slate-600"}`}>{p.desc}</p>
                <p className="mt-6 text-5xl font-extrabold">
                  {p.price}
                  {p.price !== "R$0" && (
                    <span className={`text-base font-medium ${p.highlight ? "text-slate-300" : "text-slate-500"}`}> /mês</span>
                  )}
                </p>
                <ul className="mt-8 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className={`mt-0.5 h-5 w-5 shrink-0 ${p.highlight ? "text-teal-300" : "text-teal-600"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <CtaLink
                  href={p.href}
                  location={p.location}
                  variant={p.highlight ? "primary" : "ghost"}
                  className="mt-8 w-full"
                >
                  {p.cta}
                </CtaLink>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">
          Sem cartão de crédito para começar o teste de 14 dias.
        </p>
      </div>
    </section>
  );
}
