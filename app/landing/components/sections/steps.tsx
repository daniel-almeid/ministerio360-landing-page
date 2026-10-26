import Reveal from "../ui/reveal";
import SectionHeading from "../ui/section-heading";

const steps = [
  { n: "1", title: "Crie sua conta", text: "Em poucos minutos, sem cartão de crédito. São 14 dias para testar com calma." },
  { n: "2", title: "Cadastre sua igreja", text: "Adicione membros, ministérios e visitantes. Você já enxerga tudo organizado." },
  { n: "3", title: "Passe a ter controle", text: "Escalas, finanças e relatórios funcionando. Você volta a cuidar de pessoas." },
];

export default function Steps() {
  return (
    <section className="bg-navy-950 py-24 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading dark eyebrow="Simples de começar" title="Da bagunça à organização em 3 passos" />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1} className="h-full">
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-8">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-teal-500 text-xl font-extrabold">{s.n}</span>
                <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-slate-300">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
