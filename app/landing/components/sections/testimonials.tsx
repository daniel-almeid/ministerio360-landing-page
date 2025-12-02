"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Reveal from "../ui/reveal";

const list = [
    {
        name: "Pr. João Silva",
        church: "Igreja Vida Plena",
        text: "O Ministério360 revolucionou nossa organização. Hoje temos tudo centralizado.",
    },
    {
        name: "Pr. Marcos Santos",
        church: "Assembleia Luz Divina",
        text: "As escalas automáticas são incríveis! Salvou horas da nossa equipe.",
    },
    {
        name: "Pr. Eduardo Araújo",
        church: "Comunidade Fonte Viva",
        text: "Simples, moderno e completo. Recomendo para qualquer igreja.",
    },
];

export default function Testimonials() {
    return (
        <section className="py-28 bg-white">
            <Reveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
                    O que líderes estão dizendo
                </h2>
            </Reveal>

            <Swiper
                slidesPerView={1}
                spaceBetween={40}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
                className="max-w-3xl mx-auto mt-12"
            >
                {list.map((t, i) => (
                    <SwiperSlide key={i}>
                        <Reveal>
                            <div className="p-10 bg-gray-50 rounded-2xl shadow text-center">
                                <p className="text-gray-700 text-lg">{t.text}</p>
                                <h4 className="mt-6 font-bold text-gray-900">{t.name}</h4>
                                <p className="text-gray-600">{t.church}</p>
                            </div>
                        </Reveal>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
