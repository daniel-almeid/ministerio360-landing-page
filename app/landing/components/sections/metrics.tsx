import Reveal from "../ui/reveal";

export default function Metrics() {
    return (
        <section className="py-24 bg-teal-50">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 text-center gap-10">

                <Reveal>
                    <div>
                        <h3 className="text-5xl font-bold text-teal-700">+120</h3>
                        <p className="text-gray-700 mt-2">Igrejas organizadas</p>
                    </div>
                </Reveal>

                <Reveal>
                    <div>
                        <h3 className="text-5xl font-bold text-teal-700">+4.500</h3>
                        <p className="text-gray-700 mt-2">Membros cadastrados</p>
                    </div>
                </Reveal>

                <Reveal>
                    <div>
                        <h3 className="text-5xl font-bold text-teal-700">+12.000</h3>
                        <p className="text-gray-700 mt-2">Escalas criadas</p>
                    </div>
                </Reveal>

            </div>
        </section>
    );
}
