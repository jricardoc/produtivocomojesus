import React from "react";
import { Brain, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-gold-900">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="bg-gold-500 p-3 rounded-full">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <span className="text-2xl font-bold text-gold-500">
              Produtivo como Jesus
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-slate-400">
            <a href="#" className="hover:text-gold-500 transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-gold-500 transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-gold-500 transition-colors">
              Suporte
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="#"
              className="text-slate-400 hover:text-gold-500 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-gold-500 transition-colors"
            >
              <Youtube className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-gold-500 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-slate-500 space-y-2">
            <p>© 2025 Produtivo como Jesus · Todos os direitos reservados</p>
            <p>
              Produzido por BV Digital — Desenvolvimento Breno Costa Santos.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
