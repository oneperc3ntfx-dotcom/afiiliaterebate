"use client";

import {
  Send,
  ShieldCheck,
  BadgeDollarSign,
  TrendingUp,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-slate-950 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-blue-600/10 blur-[180px]" />

      <div className="container mx-auto px-6 py-20 relative">

        <div className="grid lg:grid-cols-4 gap-12">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-2xl font-black shadow-lg shadow-blue-500/30">

                OP

              </div>

              <div>

                <h2 className="text-2xl font-black">

                  OnePercent FX

                </h2>

                <p className="text-gray-400">

                  Forex Rebate Program

                </p>

              </div>

            </div>

            <p className="text-gray-400 mt-8 leading-8">

              Trading seperti biasa.

              Nikmati rebate dari setiap transaksi yang memenuhi syarat,
              dengan sistem yang transparan dan mudah dipantau.

            </p>

          </div>

          {/* Menu */}

          <div>

            <h3 className="font-bold text-xl">

              Navigasi

            </h3>

            <ul className="space-y-4 mt-8 text-gray-400">

              <li>
                <a href="#features" className="hover:text-white">
                  Keuntungan
                </a>
              </li>

              <li>
                <a href="#how" className="hover:text-white">
                  Cara Kerja
                </a>
              </li>

              <li>
                <a href="#faq" className="hover:text-white">
                  FAQ
                </a>
              </li>

            </ul>

          </div>

          {/* Benefit */}

          <div>

            <h3 className="font-bold text-xl">

              Keunggulan

            </h3>

            <div className="space-y-5 mt-8">

              <div className="flex gap-3">

                <BadgeDollarSign className="text-green-400" />

                <span className="text-gray-400">

                  100% Rebate

                </span>

              </div>

              <div className="flex gap-3">

                <ShieldCheck className="text-blue-400" />

                <span className="text-gray-400">

                  Aman & Transparan

                </span>

              </div>

              <div className="flex gap-3">

                <TrendingUp className="text-cyan-400" />

                <span className="text-gray-400">

                  Withdraw Harian

                </span>

              </div>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="font-bold text-xl">

              Hubungi Kami

            </h3>

            <p className="text-gray-400 mt-8">

              Telegram Admin

            </p>

            <a
              href="https://t.me/ADMOnePercentsFX"
              target="_blank"
              className="inline-flex items-center gap-3 mt-5 px-6 py-4 rounded-full bg-blue-600 hover:bg-blue-700 transition font-bold shadow-lg shadow-blue-500/30"
            >

              <Send size={18} />

              @ADMOnePercentsFX

            </a>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-white/10 mt-16 pt-10">

          <div className="flex flex-col lg:flex-row justify-between gap-6 items-center">

            <p className="text-gray-500 text-center lg:text-left">

              © {year} OnePercent FX.
              All Rights Reserved.

            </p>

            <p className="text-gray-500 text-center lg:text-right max-w-2xl">

              <strong>Disclaimer:</strong> Trading forex dan CFD memiliki risiko tinggi.
              Pastikan Anda memahami risiko sebelum melakukan transaksi.
              Program rebate tidak menjamin keuntungan dari aktivitas trading.

            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}
