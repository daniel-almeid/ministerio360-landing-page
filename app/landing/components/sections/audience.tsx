import { Crown, Wallet, Users, ClipboardList, type LucideIcon } from "lucide-react";
import Reveal from "../ui/reveal";
import SectionHeading from "../ui/section-heading";

const roles: { icon: LucideIcon; who: string; text: string }[] = [
  { icon: Crown, who: "Pastor", text: "Visão completa da igreja e mais tempo para o que importa: pessoas." },
  { icon: Wallet, who: "Tesouraria", text: "Lançamentos organizados e relatórios prontos para prestar contas." },
  { icon: Users, who: "Líderes de ministério", text: "Equipe e escala claras, sem precisar cobrar um por um." },
  { icon: ClipboardList, who: "Secretaria", text: "Cadastro de membros e visitantes sempre atualizado." },
];

export default function Audience() {
  return (
    <section className="bg-white py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Para toda a liderança"
          title="Cada pessoa da equipe ganha tempo e clareza"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((r, i) => (
            <Reveal key={r.who} delay={i * 0.07} className="h-full">
              <div className="h-full rounded-2xl border border-slate-200 p-6 text-center transition hover:border-teal-300 hover:shadow-lg">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-teal-50 text-teal-600">
                  <r.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy-900">{r.who}</h3>
                <p className="mt-2 text-slate-600">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}