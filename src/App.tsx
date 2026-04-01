/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  MessageCircle, 
  CheckCircle2, 
  Calendar, 
  Users, 
  Megaphone, 
  TrendingUp, 
  Zap, 
  Target, 
  BarChart3, 
  Globe, 
  ChevronRight,
  Instagram,
  Linkedin
} from 'lucide-react';
import { motion } from 'motion/react';

// ✅ IMPORTS DAS IMAGENS CORRIGIDOS
import heroImg from '../pexels-kindelmedia-7688986.jpg';
import resultado1 from '../resultado1.jpg';
import resultado2 from '../resultado2.jpg';
import resultado3 from '../resultado3.jpg';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary/30">
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
        <div className="glass rounded-full px-8 py-4 flex items-center justify-between">
          <div className="font-display font-extrabold text-xl tracking-tighter">MAV</div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-on-surface-variant">
            <a href="#solucoes" className="hover:text-on-surface transition-colors">Soluções</a>
            <a href="#metodologia" className="hover:text-on-surface transition-colors">Metodologia</a>
            <a href="#resultados" className="hover:text-on-surface transition-colors">Resultados</a>
            <a href="#faq" className="hover:text-on-surface transition-colors">FAQ</a>
          </div>
          <a 
            href="https://wa.me/244930686068?text=Olá! Vim pelo site e gostaria de saber mais sobre a MAV Marketing." 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary text-xs py-2 px-4"
          >
            Consultar Estrategista
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full nebula-glow -z-10" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="label-md text-primary mb-4 block uppercase tracking-[0.2em]">Performance Digital para Empresas</span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1] text-balance">
              Clientes todos os dias para a sua <span className="text-primary italic">empresa</span> — sem depender de indicações
            </h1>
            <p className="text-lg text-on-surface-variant mb-8 max-w-xl leading-relaxed">
              Implementamos um sistema previsível de aquisição de clientes usando anúncios e criativos de alta conversão.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Mais leads qualificados",
                "Crescimento previsível",
                "Escala com anúncios otimizados"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-on-surface-variant">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a 
              href="https://wa.me/244930686068?text=Olá! Vim pelo site e gostaria de saber mais sobre a MAV Marketing." 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary whatsapp-pulse group inline-flex items-center gap-2"
            >
              Falar no WhatsApp
              <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="glass rounded-2xl p-4 rotate-2 hover:rotate-0 transition-transform duration-700">
              {/* ✅ HERO IMAGE CORRIGIDA */}
              <img 
                src={heroImg}
                alt="Funil de Vendas e Performance" 
                className="rounded-lg w-full shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-24 px-6 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A maioria das empresas enfrenta os mesmos problemas</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Calendar, title: "Agenda vazia", desc: "A insegurança de não saber quantos clientes novos entrarão na próxima semana." },
              { icon: Users, title: "Dependência de indicações", desc: "O \"boca a boca\" é ótimo, mas é impossível de controlar ou escalar propositalmente." },
              { icon: Megaphone, title: "Anúncios ruins", desc: "Investir dinheiro em tráfego sem ver retorno real ou atraindo apenas curiosos." },
              { icon: TrendingUp, title: "Falta de previsibilidade", desc: "Sem um sistema, o crescimento é inconsistente e depende da sorte." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-xl card-top-light group hover:bg-surface-container-highest/50 transition-colors"
              >
                <item.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solucoes" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Como nós resolvemos isso</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Três pilares fundamentais para transformar sua empresa em uma máquina de vendas.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Tráfego Pago Especializado", desc: "Campanhas direcionadas para o público certo, no momento exato em que buscam por seus serviços." },
              { num: "02", title: "Máquina de Criativos", desc: "Produzimos de 15 a 30 criativos de alta conversão por mês para evitar a fadiga dos anúncios." },
              { num: "03", title: "Otimização Contínua", desc: "Ajustes diários baseados em dados reais para reduzir o custo por lead e aumentar sua margem." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.2 }}
                className="relative p-10 rounded-2xl bg-surface-container-low border border-white/5 group"
              >
                <span className="text-6xl font-black text-white/5 absolute top-6 right-8 group-hover:text-primary/10 transition-colors">{item.num}</span>
                <h3 className="text-2xl font-bold mb-6 relative z-10">{item.title}</h3>
                <p className="text-on-surface-variant leading-relaxed relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-24 px-6 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <motion.div {...fadeInUp} className="glass p-12 rounded-3xl flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Por que somos diferentes?</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Não somos apenas uma agência de social media. Somos o braço estratégico de crescimento da sua empresa em Luanda.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Zap, title: "Volume de testes", desc: "Testamos centenas de variações para encontrar o campeão." },
              { icon: Target, title: "Foco em resultado", desc: "Ignoramos métricas de vaidade. Nosso foco é faturamento." },
              { icon: BarChart3, title: "Baseado em dados", desc: "Cada kz investido é rastreado e otimizado." },
              { icon: Globe, title: "Estratégia Luanda", desc: "Conhecemos o comportamento do mercado angolano." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-xl"
              >
                <item.icon className="w-6 h-6 text-primary mb-4" />
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="resultados" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Resultados que falam por si</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              // ✅ RESULTS IMAGES CORRIGIDAS
              { title: "Conversão de Vendas", desc: "Alta performance em tráfego pago para serviços diretos.", img: resultado1 },
              { title: "Visitas e Qualificação", desc: "Tráfego qualificado para o perfil da empresa.", img: resultado2 },
              { title: "Escala de Volume", desc: "Aumento massivo no alcance e impressões da marca.", img: resultado3 }
            ].map((item, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.2 }}
                className="group"
              >
                <div className="glass rounded-3xl p-4 mb-6 overflow-hidden">
                  <img 
                    src={item.img}
                    alt={item.title} 
                    className="rounded-2xl w-full grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-on-surface-variant">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="metodologia" className="py-24 px-6 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O caminho para o sucesso</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Análise", desc: "Estudo profundo do seu público e mercado." },
              { step: "2", title: "Criação", desc: "Produção de anúncios impossíveis de ignorar." },
              { step: "3", title: "Geração", desc: "Ativação da máquina e fluxo constante de leads." },
              { step: "4", title: "Otimização", desc: "Escala e refino diário dos resultados." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-primary text-surface flex items-center justify-center font-bold text-xl mx-auto mb-6">
                  {item.step}
                </div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expectations Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto glass p-12 rounded-3xl text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full nebula-glow -z-10 opacity-50" />
          <motion.div {...fadeInUp}>
            <TrendingUp className="w-10 h-10 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-12">Transparência e Expectativa Realista</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="label-md text-on-surface-variant mb-2">Investimento Sugerido</p>
                <p className="text-4xl font-bold text-primary">150k - 300k Kz</p>
              </div>
              <div>
                <p className="label-md text-on-surface-variant mb-2">Expectativa de Leads</p>
                <p className="text-4xl font-bold text-primary">300 - 600 /mês</p>
              </div>
            </div>
            <p className="mt-12 text-xs text-on-surface-variant italic">
              *Nota: Os resultados podem variar conforme o nicho, localização da empresa e capacidade de atendimento comercial da sua equipe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">Quer mais clientes todos os dias?</h2>
            <p className="text-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">
              Não deixe o crescimento da sua empresa ao acaso. Implemente hoje o sistema que as maiores empresas de Angola já utilizam para dominar o mercado.
            </p>
            <div className="flex flex-col items-center gap-6">
              <a 
                href="https://wa.me/244930686068?text=Olá! Vim pelo site e gostaria de saber mais sobre a MAV Marketing." 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary whatsapp-pulse px-12 py-4 text-lg group inline-flex items-center gap-2"
              >
                Falar no WhatsApp
                <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </a>
              <p className="flex items-center gap-2 text-sm text-on-surface-variant">
                <Zap className="w-4 h-4 text-primary" />
                Consultoria gratuita para qualificação.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/5 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="font-display font-extrabold text-2xl tracking-tighter mb-6">MAV Marketing</div>
            <p className="text-on-surface-variant text-sm max-w-xs leading-relaxed mb-8">
              Especialistas em aquisição de clientes e escala para diversos setores em Angola.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-on-surface-variant hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-on-surface-variant hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h5 className="font-bold mb-6">Menu</h5>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li><a href="#solucoes" className="hover:text-on-surface transition-colors">Soluções</a></li>
              <li><a href="#metodologia" className="hover:text-on-surface transition-colors">Metodologia</a></li>
              <li><a href="#resultados" className="hover:text-on-surface transition-colors">Resultados</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6">Legal</h5>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li><a href="#" className="hover:text-on-surface transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-on-surface transition-colors">Termos de Serviço</a></li>
              <li className="pt-4 text-xs">Luanda, Angola<br/>© 2024 MAV Marketing. Todos os direitos reservados.</li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/244930686068?text=Olá! Vim pelo site e gostaria de saber mais sobre a MAV Marketing." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform whatsapp-pulse"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </a>
    </div>
  );
}
