"use client";

import { motion } from "framer-motion";
import {
  BadgeDollarSign,
  Wallet,
  Bot,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    icon: BadgeDollarSign,
    value: "100%",
    title: "Rebate Kembali",
    description:
      "Seluruh komisi IB dikembalikan kepada trader."
  },
  {
    icon: Wallet,
    value: "Daily",
    title: "Withdraw",
    description:
      "Ajukan withdraw rebate setiap hari."
  },
  {
    icon: Bot,
    value: "24/7",
    title: "Monitoring Bot",
    description:
      "Pantau rebate Anda kapan saja."
  },
  {
    icon: ShieldCheck,
    value: "100%",
    title: "Transparan",
    description:
      "Sistem rebate yang aman dan jelas."
  }
];

export default function Statistics() {
  return (
    <section className="py-28 bg-slate-950">

      <div className="container mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center"
        >

          <span className="inline-flex px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 font-semibold">
            Statistik OnePercent FX
          </span>

          <h2 className="text-5xl font-black mt-6">
            Trading Lebih Menguntungkan
          </h2>

          <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-lg leading-8">
            Fokus pada trading Anda. Biarkan sistem kami mengembalikan rebate
            yang menjadi hak Anda.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-20">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, scale: .8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .15,
                  duration: .5
                }}
                className="rounded-3xl bg-slate-900 border border-white/10 p-8 hover:border-blue-500 transition duration-300 text-center"
              >

                <div className="w-20 h-20 rounded-full mx-auto bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-600/30">

                  <Icon size={36} />

                </div>

                <h3 className="text-5xl font-black mt-8 text-blue-400">
                  {item.value}
                </h3>

                <h4 className="text-2xl font-bold mt-4">
                  {item.title}
                </h4>

                <p className="text-gray-400 mt-4 leading-7">
                  {item.description}
                </p>

              </motion.div>

            );

          })}

        </div>

        {/* Bottom Banner */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .3 }}
          className="mt-24"
        >

          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-10 text-center shadow-2xl">

            <h2 className="text-4xl font-black">

              Setiap Lot Trading Memiliki Nilai.

            </h2>

            <p className="mt-6 text-lg max-w-3xl mx-auto text-white/90">

              Mengapa membiarkan rebate menjadi keuntungan pihak lain?
              Trading seperti biasa dan nikmati keuntungan tambahan
              dari setiap transaksi yang memenuhi syarat.

            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
