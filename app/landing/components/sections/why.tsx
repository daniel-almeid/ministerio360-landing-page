import { CheckCircle } from "lucide-react";
import Reveal from "../ui/reveal";

const items = [
    "Controle os membros e ministérios da sua igreja",
    "Tenha controle e faça acompanhamento de seus visitantes",
    "Economize tempo com escalas automáticas.",
    "Melhore o acompanhamento com relatórios claros.",
    "Tenha controle financeiro fácil e organizado.",
    "Sistema 100% online, acessível de qualquer dispositivo.",
];

export default function Why() {
    return (
        <section id="why" className="py-28 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <Reveal>
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
                        Por que usar o Ministério360?
                    </h2>
                </Reveal>

                <div className="mt-12 grid md:grid-cols-2 gap-8">
                    {items.map((text, i) => (
                        <Reveal key={i}>
                            <div className="flex items-start gap-4">
                                <CheckCircle className="text-teal-600 w-6 h-6" />
                                <p className="text-gray-700 text-lg">{text}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
