import React from "react";

const Author = () => {
  return (
    <section className="bg-white py-10 md:py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Author Image */}
            <div className="text-center">
              <div className="w-80 h-80 rounded-full overflow-hidden mx-auto mb-6 shadow-xl border-4 border-gold-200">
                <img
                  src="https://i.imgur.com/2ekQMrE.jpeg"
                  alt="Marcelle Costa"
                  loading="lazy"
                  width="320"
                  height="320"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Author Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Quem é Marcelle Costa
              </h2>

              <div className="space-y-6 text-lg leading-relaxed text-slate-700">
                <p>
                  Marcelle Costa é psicóloga cristã, terapeuta
                  cognitivo-comportamental e pesquisadora de neurociência
                  aplicada à espiritualidade.
                </p>

                <p>
                  Há mais de 10 anos ajuda pessoas a compreenderem os processos
                  mentais por trás da fé e a transformarem crenças em
                  comportamento.
                </p>

                <p>
                  Criadora do método Neuroterapia Bíblica, Marcelle acredita que
                  a verdadeira cura mental vem quando ciência e fé caminham
                  juntas.
                </p>
              </div>

              {/* Signature Quote */}
              <div className="mt-8 p-6 bg-gold-50 rounded-2xl border-l-4 border-gold-500">
                <p className="text-xl font-bold text-gold-600 italic">
                  "Renovar a mente é um ato de fé, e também de consciência."
                </p>
                <p className="text-right text-slate-900 font-semibold mt-2">
                  — Marcelle Costa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;
