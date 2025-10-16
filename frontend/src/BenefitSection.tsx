"use client";

import { motion } from "framer-motion";
import { useTranslation } from "./lang/useTranslation";

type Benefit = {
    title: string;
    desc: string;
    img: string;
    color: string;
    textColor?: string;
};

export default function BenefitSection() {
    const { t } = useTranslation();

    const BENEFITS: Benefit[] = [
        {
            title: t("benefits.items.0"),
            desc: t("benefits.desc.0"),
            img: "/StraightfromWhatsApp.svg",
            color: "#E9D7FF", // lavender
        },
        {
            title: t("benefits.items.1"),
            desc: t("benefits.desc.1"),
            img: "/OrdersonAutopilot.svg",
            color: "#FFD6E8", // pink
        },
        {
            title: t("benefits.items.2"),
            desc: t("benefits.desc.2"),
            img: "/YourBusiness.svg",
            color: "#FFF0B3", // yellow
        },
        {
            title: t("benefits.items.3"),
            desc: t("benefits.desc.3"),
            img: "/Bye-bye.svg",
            color: "#D6FFE4", // mint green
        },
        {
            title: t("benefits.items.4"),
            desc: t("benefits.desc.4"),
            img: "/ServeBetter.svg",
            color: "#D6E8FF", // light blue
        },
    ];

    return (
        <section className="relative bg-[#F8F4F4] py-16 select-none overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                {/* ====== Title ====== */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-4xl font-extrabold text-[#0B1E18]">
                        {t("benefits.title")}
                    </h2>
                    <p className="text-gray-500 mt-2">{t("benefits.subtitle")}</p>
                </div>

                {/* ====== Bento Grid ====== */}
                {/* <div
                    className="
        grid gap-6
        sm:grid-cols-2
        lg:grid-cols-4
        auto-rows-auto
        items-stretch
    "
                > */}

                    <div
                        className="
    grid gap-6
    sm:grid-cols-2
    lg:grid-cols-4
    auto-rows-[220px]
  "
                    >


                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                            className="lg:col-span-2 lg:row-span-2 rounded-3xl p-6 flex flex-col justify-between h-full min-h-[400px]"
                            style={{ backgroundColor: BENEFITS[0].color }}
                        >

                            <div>
                                <h3 className="font-bold text-xl mb-3">{BENEFITS[0].title}</h3>
                                <p className="text-sm opacity-80">{BENEFITS[0].desc}</p>
                            </div>
                            <img
                                src={BENEFITS[0].img}
                                alt={BENEFITS[0].title}
                                className="w-full h-auto object-contain rounded-2xl"
                            />
                        </motion.div>

                        {/* 2–5 smaller cards */}
                        {BENEFITS.slice(1).map((b, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.3 }}
                                className="rounded-3xl p-5 flex flex-col justify-between shadow-sm"
                                style={{ backgroundColor: b.color }}
                            >
                                <div>
                                    <h3 className="font-bold text-lg mb-2">{b.title}</h3>
                                    <p className="text-sm opacity-80">{b.desc}</p>
                                </div>
                                <img
                                    src={b.img}
                                    alt={b.title}
                                    className="w-full h-auto object-contain mt-2"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
        </section>
    );
}
