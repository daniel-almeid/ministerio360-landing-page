"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Reveal from "../ui/reveal";

const slides = [
    { src: "/screens/financas.png", alt: "Tela de finanças" },
    { src: "/screens/ministerios.png", alt: "Tela de ministérios" },
    { src: "/screens/membros.png", alt: "Tela de membros" },
    { src: "/screens/visitantes.png", alt: "Tela de visitantes" },
    { src: "/screens/agenda.png", alt: "Tela de agenda e escalas" },
    { src: "/screens/relatorios.png", alt: "Tela de relatórios" },
];

export default function Showcase() {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    return (
        <section className="py-28 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                <Reveal>
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
                        Veja o Ministério360 na prática
                    </h2>
                </Reveal>

                <Reveal>
                    <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
                        Telas reais do sistema mostrando como sua igreja pode ser organizada.
                    </p>
                </Reveal>

                <div className="grid md:grid-cols-2 gap-10 mt-16">
                    {slides.map((slide, i) => (
                        <Reveal key={slide.src}>
                            <button
                                type="button"
                                onClick={() => {
                                    setIndex(i);
                                    setOpen(true);
                                }}
                                className="rounded-2xl overflow-hidden shadow-lg border bg-white transition hover:-translate-y-1 hover:shadow-xl"
                            >
                                <Image src={slide.src} alt={slide.alt} width={1600} height={900} className="w-full h-auto" />
                            </button>
                        </Reveal>
                    ))}
                </div>
            </div>

            <Lightbox open={open} close={() => setOpen(false)} index={index} slides={slides} plugins={[Zoom]} />
        </section>
    );
}
