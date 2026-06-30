"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Apa itu rebate forex?",
    answer:
      "Rebate adalah pengembalian sebagian komisi Introducing Broker (IB) kepada trader. Dengan OnePercent FX, rebate tersebut dikembalikan kepada Anda sesuai ketentuan program."
  },
  {
    question: "Apakah saya harus membuat akun trading baru?",
    answer:
      "Tergantung pada broker dan status akun Anda. Hubungi admin untuk pengecekan apakah akun yang dimiliki dapat diikutsertakan atau perlu registrasi baru."
  },
  {
    question: "Apakah ada biaya untuk bergabung?",
    answer:
      "Tidak. Bergabung dengan program rebate OnePercent FX tidak dikenakan biaya pendaftaran."
  },
  {
    question: "Bagaimana cara mengetahui rebate saya?",
    answer:
      "Anda dapat memantau rebate melalui bot kami yang menampilkan informasi rebate dan riwayat transaksi secara real-time."
  },
  {
    question: "Kapan rebate bisa di-withdraw?",
    answer:
      "Withdraw dapat diajukan setiap hari sesuai syarat dan ketentuan program."
  },
  {
    question: "Bagaimana cara mendaftar?",
    answer:
      "Klik tombol 'Daftarkan Akun Anda' di halaman ini, kemudian hubungi admin Telegram @ADMOnePercentsFX untuk proses registrasi."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-28 bg-slate-900"
    >
      <div className="container mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="inline-flex px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 font-semibold">
            FAQ
          </span>

          <h2 className="text-5xl font-black mt-6">
            Pertanyaan yang Sering Diajukan
          </h2>

          <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-lg">
            Berikut beberapa pertanyaan yang paling sering ditanyakan oleh trader sebelum bergabung.
          </p>

        </motion.div>

        {/* Accordion */}

        <div className="max-w-4xl mx-auto mt-20 space-y-5">

          {faqs.map((faq, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-white/10 bg-slate-950 overflow-hidden"
            >

              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex justify-between items-center px-8 py-6 text-left"
              >

                <span className="text-xl font-semibold">

                  {faq.question}

                </span>

                <ChevronDown
                  className={`transition duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {open === index && (

                <div className="px-8 pb-8 text-gray-400 leading-8">

                  {faq.answer}

                </div>

              )}

            </motion.div>

          ))}

        </div>

        {/* Contact */}

        <div className="mt-20 text-center">

          <h3 className="text-3xl font-bold">

            Masih Ada Pertanyaan?

          </h3>

          <p className="text-gray-400 mt-5">

            Tim kami siap membantu Anda melalui Telegram.

          </p>

          <a
            href="https://t.me/ADMOnePercentsFX"
            target="_blank"
            className="inline-flex mt-8 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 transition font-bold shadow-lg shadow-blue-500/30"
          >
            💬 Hubungi Admin
          </a>

        </div>

      </div>
    </section>
  );
}
