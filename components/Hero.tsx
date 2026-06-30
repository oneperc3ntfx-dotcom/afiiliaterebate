"use client";

import { ArrowRight, ShieldCheck, Wallet, Bot, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24">

      {/* Background Glow */}

      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-blue-600/20 blur-[180px]" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
          >

            {/* Badge */}

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 mb-8">

              <TrendingUp size={18} />

              <span className="font-semibold">

                100% Forex Rebate

              </span>

            </div>

            {/* Heading */}

            <h1 className="text-5xl lg:text-7xl font-black leading-tight">

              Trading Seperti
              <br />

              <span className="text-blue-400">

                Biasa.

              </span>

              <br />

              Dapatkan

              <span className="text-cyan-400">

                {" "}100% Rebate

              </span>

            </h1>

            {/* Description */}

            <p className="mt-8 text-gray-300 text-xl leading-9 max-w-2xl">

              Setiap transaksi forex menghasilkan komisi untuk
              Introducing Broker (IB).

              <br />
              <br />

              Bersama <strong>OnePercent FX</strong>,
              seluruh rebate dikembalikan kepada Anda.

              Trading tetap seperti biasa,
              tetapi kini Anda memperoleh keuntungan tambahan
              dari setiap transaksi.

            </p>

            {/* Button */}

            <div className="flex flex-wrap gap-5 mt-10">

              <a

                href="https://t.me/ADMOnePercentsFX"

                target="_blank"

                className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 transition font-bold text-lg shadow-xl shadow-blue-600/40 flex items-center gap-3"

              >

                Daftarkan Akun Anda

                <ArrowRight />

              </a>

              <a

                href="#features"

                className="px-8 py-4 rounded-full border border-white/20 hover:border-blue-500 transition"

              >

                Pelajari Selengkapnya

              </a>

            </div>

            {/* Statistics */}

            <div className="grid grid-cols-3 gap-8 mt-16">

              <div>

                <h2 className="text-4xl font-bold text-blue-400">

                  100%

                </h2>

                <p className="text-gray-400 mt-2">

                  Rebate Untuk Trader

                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold text-cyan-400">

                  Daily

                </h2>

                <p className="text-gray-400 mt-2">

                  Withdraw

                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold text-green-400">

                  24/7

                </h2>

                <p className="text-gray-400 mt-2">

                  Monitoring Bot

                </p>

              </div>

            </div>

          </motion.div>
