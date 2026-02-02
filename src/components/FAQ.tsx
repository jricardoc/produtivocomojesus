import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "O conteúdo é digital ou físico?",
      answer:
        "100% digital. Você recebe o acesso e os arquivos imediatamente após o pagamento.",
    },
    {
      question: "Posso aplicar mesmo sem ser terapeuta?",
      answer:
        "Sim. O método foi criado para qualquer pessoa que deseje reprogramar pensamentos e emoções à luz da Bíblia.",
    },
    {
      question: "Funciona mesmo em 21 dias?",
      answer:
        "O período de 21 dias é o tempo médio que o cérebro precisa para consolidar novas conexões neurais. O processo varia, mas o método foi estruturado cientificamente pra isso.",
    },
    {
      question: "Tem garantia?",
      answer:
        "Sim! 7 dias de garantia incondicional. Se não fizer sentido pra você, devolvemos 100% do valor.",
    },
    {
      question: "É compatível com minha fé?",
      answer:
        "Totalmente. O conteúdo é fundamentado na Bíblia e respeita princípios éticos e espirituais cristãos.",
    },
    {
      question: "Como faço para acessar o suporte?",
      answer: (
        <div className="space-y-3">
          <p>Você tem três opções — use a mais prática:</p>
          <p>
            <strong>WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/5571982438844"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-600 hover:underline"
            >
              wa.me/5571982438844
            </a>
          </p>
          <p>
            <strong>E-mail:</strong>{" "}
            <a
              href="mailto:recursosbiblicosterapeutas@gmail.com"
              className="text-gold-600 hover:underline"
            >
              recursosbiblicosterapeutas@gmail.com
            </a>
          </p>
          <p>
            <strong>Área do Cliente (Hotmart):</strong> botão "Ajuda/Suporte"
            dentro da sua compra.
          </p>
          <p className="text-sm">
            Para agilizar o atendimento, envie: nome completo, e-mail da compra,
            nº do pedido (se tiver) e prints/descrição do problema.
          </p>
          <p className="text-sm">
            ⚠️ Nunca compartilhe senhas ou dados de cartão pelo suporte.
          </p>
        </div>
      ),
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="bg-gold-50 py-10 md:py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">
            Dúvidas Comuns Antes de Começar
          </h2>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gold-100"
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gold-50/50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-xl font-bold text-slate-800 pr-4">
                    {index + 1}️⃣ {faq.question}
                  </span>
                  {openFAQ === index ? (
                    <ChevronUp className="w-6 h-6 text-gold-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gold-500 flex-shrink-0" />
                  )}
                </button>

                {openFAQ === index && (
                  <div className="px-6 pb-6 border-t border-gold-50/50">
                    <div className="text-slate-600 leading-relaxed text-lg pt-4">
                      {typeof faq.answer === "string" ? (
                        <p className="whitespace-pre-line">→ {faq.answer}</p>
                      ) : (
                        <div>→ {faq.answer}</div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
