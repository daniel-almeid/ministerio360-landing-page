"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { Check, Maximize2, UserPlus, CalendarDays, DollarSign, Users, Church, BarChart3, type LucideIcon } from "lucide-react";
import Reveal from "../ui/reveal";
import SectionHeading from "../ui/section-heading";
import CtaLink from "../ui/cta-link";
import { WA_TRIAL } from "../../lib/links";

type Tab = {
  id: string;
  label: string;
  icon: LucideIcon;
  pain: string;
  title: string;
  bullets: string[];
  src: string;
  w: number;
  h: number;
};

const tabs: Tab[] = [
  {
    id: "visitantes",
    label: "Visitantes",
    icon: UserPlus,
    pain: "“Aquele visitante veio uma vez e nunca mais ouvimos falar.”",
    title: "Nenhum visitante fica sem acompanhamento",
    bullets: [
      "Registre cada visitante com contato e data da visita",
      "Acompanhe o follow-up: pendente, em andamento ou concluído",
      "Saiba exatamente quem precisa de uma ligação hoje",
      "Marque quem já virou membro e veja suas conversões",
    ],
    src: "/screens/visitantes.png",
    w: 1912,
    h: 905,
  },
  {
    id: "escalas",
    label: "Agenda & Escalas",
    icon: CalendarDays,
    pain: "“Montei a escala no WhatsApp e faltou gente no domingo.”",
    title: "Escalas e eventos organizados, sem correria",
    bullets: [
      "Cadastre eventos com data, horário e ministérios envolvidos",
      "Monte a escala semanal com ministérios e responsável",
      "Filtre por ministério e veja o que vem pela frente",
      "Tudo visível para a liderança, sem depender de mensagens soltas",
    ],
    src: "/screens/agenda.png",
    w: 1902,
    h: 906,
  },
  {
    id: "financas",
    label: "Finanças",
    icon: DollarSign,
    pain: "“Dízimos e ofertas no caderno. Prestar contas dá trabalho.”",
    title: "Controle de dízimos, ofertas e despesas em um lugar",
    bullets: [
      "Registre entradas e saídas por categoria: dízimo, oferta, doações e mais",
      "Filtre por mês e tipo de lançamento",
      "Veja entradas vs. saídas no painel, em gráfico",
      "Chega de planilha quebrada ou de caderno perdido",
    ],
    src: "/screens/financas.png",
    w: 1915,
    h: 761,
  },
  {
    id: "membros",
    label: "Membros",
    icon: Users,
    pain: "“Não sei dizer quantos membros ativos temos de verdade.”",
    title: "Todos os membros organizados e fáceis de achar",
    bullets: [
      "Cadastro de membros com ministério, contato e data de nascimento",
      "Busca rápida e filtros por ativos e inativos",
      "A informação fica com a igreja, não na cabeça de uma pessoa",
      "Acesse do celular ou do computador",
    ],
    src: "/screens/membros.png",
    w: 1916,
    h: 897,
  },
  {
    id: "ministerios",
    label: "Ministérios",
    icon: Church,
    pain: "“Ninguém sabe direito quem faz parte de qual equipe.”",
    title: "Cada ministério com sua equipe e suas funções",
    bullets: [
      "Organize as equipes e funções da igreja",
      "Saiba quem serve em cada ministério",
      "Base para montar escalas rapidamente",
    ],
    src: "/screens/ministerios.png",
    w: 1903,
    h: 695,
  },
  {
    id: "relatorios",
    label: "Relatórios",
    icon: BarChart3,
    pain: "“Prestar contas ou apresentar números para a liderança é um sufoco.”",
    title: "Relatórios claros, prontos em segundos",
    bullets: [
      "Relatório financeiro mensal por categoria, com entradas, saídas e balanço",
      "Gere em PDF para apresentar à liderança",
      "Acompanhe membros ativos e visitantes do mês",
      "Decisões baseadas em dados, não em achismo",
    ],
    src: "/screens/relatorios.png",
    w: 1919,
    h: 892,
  },
];

export default function Solution() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const tab = tabs[active];

  return (
    <section id="solucao" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="A solução"
          title={<>Para cada dor da sua igreja, <span className="text-teal-600">uma resposta no Ministério360</span></>}
          subtitle="Veja telas reais do sistema. Clique em cada área para ver como ela resolve o problema na prática."
        />

        {/* Tabs */}
        <Reveal>
          <div role="tablist" className="mt-12 flex gap-2 overflow-x-auto pb-2 md:flex-wrap md:justify-center">
            {tabs.map((t, i) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={`flex shrink-0 items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                  i === active
                    ? "border-teal-600 bg-teal-600 text-white shadow-md"
                    : "border-slate-200 bg-white text-slate-700 hover:border-teal-300 hover:text-teal-700"
                }`}
              >
                <t.icon className="h-4 w-4" />
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Panel */}
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2" key={tab.id}>
            <p className="rounded-xl border-l-4 border-red-300 bg-red-50 px-5 py-4 italic text-red-800">
              {tab.pain}
            </p>
            <h3 className="mt-6 text-2xl font-extrabold text-navy-900 md:text-3xl">{tab.title}</h3>
            <ul className="mt-5 space-y-3">
              {tab.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-slate-700">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                  {b}
                </li>
              ))}
            </ul>
            <CtaLink href={WA_TRIAL} location={`solucao_${tab.id}`} className="mt-8">
              Quero resolver isso na minha igreja
            </CtaLink>
          </div>

          <div className="lg:col-span-3">
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Ampliar tela"
              className="group relative block w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl transition hover:shadow-teal-900/10"
            >
              <Image
                key={tab.src}
                src={tab.src}
                alt={`Tela de ${tab.label} do Ministério360`}
                width={tab.w}
                height={tab.h}
                className="h-auto w-full"
              />
              <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-navy-900/80 px-3 py-1.5 text-xs font-medium text-white opacity-0 transition group-hover:opacity-100">
                <Maximize2 className="h-3.5 w-3.5" /> Ampliar
              </span>
            </button>
          </div>
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: tab.src }]}
        plugins={[Zoom]}
        carousel={{ finite: true }}
        render={{ buttonPrev: () => null, buttonNext: () => null }}
      />
    </section>
  );
}