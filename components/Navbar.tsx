"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-950/80 border-b border-white/10">
      <div className="container mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}

          <a
            href="/"
            className="flex items-center gap-3"
          >

            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-green-400 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/30">

              OP

            </div>

            <div>

              <h1 className="text-xl font-bold text-white">

                OnePercent FX

              </h1>

              <p className="text-xs text-gray-400">

                100% Forex Rebate

              </p>

            </div>

          </a>

          {/* Desktop Menu */}

          <nav className="hidden md:flex items-center gap-8">

            <a
              href="#features"
              className="text-gray-300 hover:text-white transition"
            >
              Keuntungan
            </a>

            <a
              href="#how"
              className="text-gray-300 hover:text-white transition"
            >
              Cara Kerja
            </a>

            <a
              href="#faq"
              className="text-gray-300 hover:text-white transition"
            >
              FAQ
            </a>

            <a
              href="https://t.me/ADMOnePercentsFX"
              target="_blank"
              className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition font-semibold shadow-lg shadow-blue-500/30"
            >
              Daftar Sekarang
            </a>

          </nav>

          {/* Mobile */}

          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {open && (

        <div className="md:hidden bg-slate-900 border-t border-white/10">

          <div className="flex flex-col p-6 gap-5">

            <a href="#features">
              Keuntungan
            </a>

            <a href="#how">
              Cara Kerja
            </a>

            <a href="#faq">
              FAQ
            </a>

            <a
              href="https://t.me/ADMOnePercentsFX"
              target="_blank"
              className="bg-blue-600 text-center py-3 rounded-full font-bold"
            >
              🚀 Daftar Sekarang
            </a>

          </div>

        </div>

      )}

    </header>
  );
}
