// import React from "react";
import Navbar from "../NavBar/Navbar.jsx";
import {
  Sparkle,
  Target,
  ClipboardList,
  ChartColumnIncreasing,
  Headphones,
  MessageCircle,
  ArrowRight,
  TrendingUp,
  Check,
} from "lucide-react";
import heroImage from "../../assets/hero-entrepreneur.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero-section">
        <Navbar />
        <div className="hero-container">
          <div className="content-left">
            <h3 className="hero-badge">
              <Sparkle size={12} /> Consultoria para pequenos negócios
            </h3>
            <p className="hero-title">
              Seu negócio pode <span>vender mais </span> com o investimento que
              você ja tem.
            </p>
            <p className="hero-description">
              O Plano Vende+ é uma consultoria prática para pequenos negócios
              que querem atrair mais clientes, melhorar suas vendas e encontrar
              novas oportunidades de crescimento sem desperdiçar dinheiro.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">
                <MessageCircle size={18} strokeWidth={2} /> Quero meu
                diagnóstico
              </button>
              <button className="btn-secondary">
                Ver planos de consultorias{" "}
                <ArrowRight size={18} strokeWidth={2} />
              </button>
            </div>
            <div className="hero-features">
              <div className="hero-feature">
                <span className="span-rounded">
                  <Target size={16} />
                </span>
                <p>Diagnóstico prático</p>
              </div>
              <div className="hero-feature">
                <span className="span-rounded">
                  <ClipboardList size={16} />
                </span>
                <p>Estratégia sob medida</p>
              </div>
              <div className="hero-feature">
                <span className="span-rounded">
                  <ChartColumnIncreasing size={16} />
                </span>
                <p>Plano de ação real</p>
              </div>
              <div className="hero-feature">
                <span className="span-rounded">
                  <Headphones size={16} />
                </span>
                <p>Atendimento online</p>
              </div>
            </div>
          </div>
          <div className="content-right">
            <div className="hero-image-wrapper">
              <img src={heroImage} alt="Hero" />

              <div className="hero-overlay-top">
                <span>Oportunidades de crescimento para o seu negócio</span>

                <span>
                  <TrendingUp className="overlay-icon" />
                </span>
              </div>

              <div className="hero-overlay-bottom">
                <ul>
                  <li>
                    <Check className="overlay-icon" /> Mais clientes
                  </li>
                  <li>
                    <Check className="overlay-icon" /> Mais vendas
                  </li>
                  <li>
                    <Check className="overlay-icon" /> Mais lucro
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
