"use client";

import { motion } from "framer-motion";

import {
    ShieldCheck,
    Wallet,
    Bot,
    Clock3,
    BadgeDollarSign,
    Headphones,
} from "lucide-react";

const features = [
    {
        icon: BadgeDollarSign,
        title: "100% Rebate Kembali",
        desc: "Seluruh komisi Introducing Broker (IB) dikembalikan kepada Anda tanpa potongan."
    },

    {
        icon: Wallet,
        title: "Withdraw Setiap Hari",
        desc: "Ajukan penarikan rebate setiap hari dengan proses yang cepat dan mudah."
    },

    {
        icon: Bot,
        title: "Monitoring Melalui Bot",
        desc: "Pantau rebate, histori transaksi, dan total pendapatan secara real-time."
    },

    {
        icon: ShieldCheck,
        title: "Aman & Transparan",
        desc: "Sistem kami dirancang agar proses rebate berjalan dengan aman dan transparan."
    },

    {
        icon: Clock3,
        title: "Proses Cepat",
        desc: "Tidak perlu menunggu lama. Semua informasi rebate tersedia kapan saja."
    },

    {
        icon: Headphones,
        title: "Support Responsif",
        desc: "Tim kami siap membantu jika Anda mengalami kendala saat registrasi maupun withdraw."
    }
];

export default function Features() {

    return (

        <section
            id="features"
            className="relative py-28"
        >

            <div className="container mx-auto px-6">

                {/* Heading */}

                <motion.div

                    initial={{ opacity: 0, y: 50 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    viewport={{ once: true }}

                    transition={{ duration: .7 }}

                    className="text-center"

                >

                    <span className="inline-block px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-semibold">

                        Kenapa Memilih Kami?

                    </span>

                    <h2 className="text-5xl font-black mt-6">

                        Semua Keuntungan
                        <br />

                        Untuk Trader

                    </h2>

                    <p className="text-gray-400 max-w-3xl mx-auto mt-8 text-lg leading-8">

                        Kami percaya bahwa rebate seharusnya menjadi hak trader.

                        Oleh karena itu kami mengembalikan seluruh komisi
                        kepada Anda tanpa potongan.

                    </p>

                </motion.div>

                {/* Grid */}

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">

                    {features.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <motion.div

                                key={index}

                                initial={{ opacity: 0, y: 60 }}

                                whileInView={{ opacity: 1, y: 0 }}

                                viewport={{ once: true }}

                                transition={{

                                    delay: index * .15,

                                    duration: .6

                                }}

                                className="group rounded-3xl bg-slate-900/70 border border-white/10 p-8 hover:border-blue-500 transition duration-500 hover:-translate-y-3"

                            >

                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-600/30">

                                    <Icon
                                        size={30}
                                    />

                                </div>

                                <h3 className="text-2xl font-bold mt-8">

                                    {item.title}

                                </h3>

                                <p className="text-gray-400 mt-5 leading-8">

                                    {item.desc}

                                </p>

                            </motion.div>

                        );

                    })}

                </div>

                {/* Bottom */}

                <motion.div

                    initial={{ opacity: 0 }}

                    whileInView={{ opacity: 1 }}

                    viewport={{ once: true }}

                    transition={{ delay: .3 }}

                    className="mt-24"

                >

                    <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 p-10 text-center">

                        <h2 className="text-4xl font-black">

                            Trading Lebih Menguntungkan

                        </h2>

                        <p className="text-gray-300 mt-6 text-lg max-w-3xl mx-auto leading-8">

                            Tidak ada perubahan pada cara Anda trading.

                            Yang berubah hanyalah siapa yang menikmati komisi.

                            Bersama <strong>OnePercent FX</strong>,
                            rebate menjadi milik Anda.

                        </p>

                    </div>

                </motion.div>

            </div>

        </section>

    );

}
