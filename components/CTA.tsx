"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Wallet,
  Bot,
  BadgeDollarSign,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-blue-600/20 blur-[180px]" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[160px]" />

      </div>

      <div className="container mx-auto px-6 relative">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="rounded-[40px] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-12 lg:p-20 text-center shadow-2xl"
        >

          {/* Badge */}

          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 font-semibold">

            <BadgeDollarSign size={18} />

            100% Forex Rebate

          </span>

          {/* Heading */}

          <h2 className="text-5xl lg:text-7xl font-black mt-8 leading-tight">

            Sudah Saatnya
            <br />

            <span className="text-blue-400">

              Rebate Menjadi

            </span>

            <br />

            Milik Anda.

          </h2>

          {/* Description */}

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-10 leading-9">

            Trading tetap seperti biasa.

            Komisi rebate yang biasanya menjadi milik Introducing Broker,
            kini dikembalikan kepada Anda.

            Pantau rebate melalui bot dan lakukan withdraw setiap hari.

          </p>

          {/* Benefit */}

          <div className="grid md:grid-cols-3 gap-6 mt-16">

            <div className="rounded-2xl bg-slate-900/80 border border-white/10 p-6">

              <ShieldCheck
                size={36}
                className="text-blue-400 mx-auto"
              />

              <h3 className="font-bold text-xl mt-5">

                Aman

              </h3>

              <p className="text-gray-400 mt-3">

                Sistem aman dan transparan.

              </p>

            </div>

            <div className="rounded-2xl bg-slate-900/80 border border-white/10 p-6">

              <Wallet
                size={36}
                className="text-green-400 mx-auto"
              />

              <h3 className="font-bold text-xl mt-5">

                Withdraw Harian

              </h3>

              <p className="text-gray-400 mt-3">

                Tarik rebate kapan saja.

              </p>

            </div>

            <div className="rounded-2xl bg-slate-900/80 border border-white/10 p-6">

              <Bot
                size={36}
                className="text-cyan-400 mx-auto"
              />

              <h3 className="font-bold text-xl mt-5">

                Monitoring Bot

              </h3>

              <p className="text-gray-400 mt-3">

                Cek rebate secara real-time.

              </p>

            </div>

          </div>

          {/* CTA */}

          <div className="mt-16">

            <a
              href="https://t.me/ADMOnePercentsFX"
              target="_blank"
              className="inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-12 py-5 text-xl font-bold hover:scale-105 transition duration-300 shadow-2xl shadow-blue-500/40"
            >

              🚀 Daftarkan Akun Anda Disini

              <ArrowRight />

            </a>

          </div>

          {/* Telegram */}

          <div className="mt-10">

            <p className="text-gray-400">

              Atau hubungi langsung melalui Telegram

            </p>

            <h3 className="text-3xl font-bold text-cyan-400 mt-3">

              @ADMOnePercentsFX

            </h3>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
