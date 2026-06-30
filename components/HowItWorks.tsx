"use client";

import { motion } from "framer-motion";
import {
  UserPlus,
  Link2,
  CandlestickChart,
  Wallet,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Daftar",
    description:
      "Hubungi admin melalui Telegram untuk mendaftarkan akun trading Anda."
  },
  {
    icon: Link2,
    title: "Hubungkan Akun",
    description:
      "Akun trading Anda akan dihubungkan ke sistem rebate OnePercent FX."
  },
  {
    icon: CandlestickChart,
    title: "Trading Seperti Biasa",
    description:
      "Tetap gunakan strategi trading Anda. Tidak ada perubahan pada cara trading."
  },
  {
    icon: Wallet,
    title: "Rebate Masuk",
    description:
      "Setiap transaksi yang memenuhi syarat akan menghasilkan rebate untuk Anda."
  },
  {
    icon: CheckCircle2,
    title: "Withdraw",
    description:
      "Pantau rebate melalui bot dan lakukan withdraw setiap hari."
  }
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="py-28 relative overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[180px]" />

      <div className="container mx-auto px-6 relative">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center"
        >

          <span className="inline-flex px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 font-semibold">

            Cara Kerja

          </span>

          <h2 className="text-5xl font-black mt-6">

            Mulai Dalam
            <span className="text-blue-400"> 5 Langkah Mudah</span>

          </h2>

          <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-lg leading-8">

            Tidak ada proses yang rumit.

            Setelah akun Anda terhubung,
            Anda cukup trading seperti biasa
            dan rebate akan menjadi milik Anda.

          </p>

        </motion.div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Line */}

          <div className="hidden lg:block absolute left-0 right-0 top-14 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"></div>

          <div className="grid lg:grid-cols-5 gap-10">

            {steps.map((step, index) => {

              const Icon = step.icon;

              return (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: .6,
                    delay: index * .15
                  }}
                  className="relative text-center"
                >

                  {/* Circle */}

                  <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-xl shadow-blue-600/40 relative z-10">

                    <Icon size={38} />

                  </div>

                  {/* Number */}

                  <div className="absolute top-0 right-10 lg:right-6 w-8 h-8 rounded-full bg-white text-black text-sm font-bold flex items-center justify-center">

                    {index + 1}

                  </div>

                  {/* Content */}

                  <h3 className="text-2xl font-bold mt-8">

                    {step.title}

                  </h3>

                  <p className="text-gray-400 mt-5 leading-7">

                    {step.description}

                  </p>

                </motion.div>

              );

            })}

          </div>

        </div>

        {/* CTA Box */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .3 }}
          className="mt-24"
        >

          <div className="rounded-3xl border border-blue-500/20 bg-slate-900/70 p-10 text-center">

            <h2 className="text-4xl font-black">

              Siap Mendapatkan 100% Rebate?

            </h2>

            <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">

              Daftarkan akun trading Anda sekarang
              dan mulai nikmati rebate dari setiap transaksi.

            </p>

            <a
              href="https://t.me/ADMOnePercentsFX"
              target="_blank"
              className="inline-flex mt-10 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 transition font-bold text-lg shadow-lg shadow-blue-500/30"
            >

              🚀 Daftarkan Akun Anda Disini

            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
