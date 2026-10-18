import {
  FileSpreadsheet,
  UserMinus,
  CalendarX,
  Wallet,
  HelpCircle,
  Hourglass,
  type LucideIcon,
} from "lucide-react";
import Reveal from "../ui/reveal";
import SectionHeading from "../ui/section-heading";

const pains: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: FileSpreadsheet,
    title: "Informação espalhada por todo lado",
    text: "Membros em uma planilha, finanças em outra, contatos no celular do pastor. Quando alguém sai da liderança, a informação vai junto.",
  },
  {
    icon: UserMinus,
    title: "Visitantes que nunca mais voltam",
    text: "Alguém visita pela primeira vez, ninguém anota, ninguém liga. A pessoa que chegou até a sua porta some sem ser acolhida.",
  },
  {
    icon: CalendarX,
    title: "Escala no caos de domingo",
    text: "Escala combinada no WhatsApp, voluntário que esquece, ministério sem ninguém na hora do culto e líder correndo atrás de substituto.",
  },
  {
    icon: Wallet,
    title: "Finanças sem clareza",
    text: "Dízimos e ofertas anotados à mão, relatório que demora dias e dificuldade de prestar contas com transparência para a igreja.",
  },
  {
    icon: HelpCircle,
    title: "Decisões no “achismo”",
    text: "Quantos membros ativos temos? Quantos visitantes viraram membros? Sem números, a liderança decide no escuro.",
  },
  {
    icon: Hourglass,
    title: "Pastor virou administrador",
    text: "Horas por semana somando valores, cobrando escalas e procurando informação. Tempo que deveria ir para o pastoreio e para as pessoas.",
  },
];

const costs = [
  { label: "Pessoas", text: "Visitantes e membros que esfriam por falta de acompanhamento." },
  { label: "Confiança", text: "Finanças pouco claras geram dúvidas e desgaste na comunidade." },
  { label: "Tempo", text: "Líderes e voluntários esgotados fazendo à mão o que um sistema faz em segundos." },
];

export default function Pain() {
  return (
    <section id="dor" className="bg-slate-50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Você se identifica?"
          title="Toda igreja que cresce sem sistema sente essas dores"
          subtitle="Não é falta de dedicação. É que planilhas, cadernos e grupos de WhatsApp não foram feitos para cuidar de uma igreja."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pains.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08} className="h-full">
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-red-50 text-red-500">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy-900">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 overflow-hidden rounded-3xl bg-navy-900 p-8 text-white md:p-12">
            <h3 className="text-center text-2xl font-extrabold md:text-3xl">
              Desorganização não é só incômodo.{" "}
              <span className="text-teal-300">Ela custa caro.</span>
            </h3>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {costs.map((c) => (
                <div key={c.label} className="border-l-2 border-teal-400 pl-5">
                  <p className="text-lg font-bold text-teal-300">{c.label}</p>
                  <p className="mt-1 text-slate-300">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}