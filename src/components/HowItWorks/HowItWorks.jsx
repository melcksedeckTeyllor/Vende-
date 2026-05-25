// import React from 'react'
import HowItWorksCards from "../ui/HowItWorksCards/HowItWorksCards";
import {
  faComment,
  faClipboardList,
  faMagnifyingGlass,
  faFileLines,
  faArrowTrendUp,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

import "./HowItWorks.css";
const HowItWorks = () => {
  return (
    <>
      <section className="how-it-works-container">
        <div className="howItWorks">
          <h2>
            Como funciona o <span> Plano Vende+</span>
          </h2>
          <div className="how-it-works-cards">
            <HowItWorksCards
              icon={faComment}
              title={"Você chama no WhatsApp"}
              description={
                "Você conta sobre seu negócio, segmento, desafios e objetivos."
              }
              badge={1}
              iconArrow={faAngleRight}
            />
            <HowItWorksCards
              icon={faClipboardList}
              title={"Você envia as informações"}
              description={
                "Você manda Instagram, produtos, preços, fotos, dificuldades e orçamento."
              }
              badge={2}
              iconArrow={faAngleRight}
            />
            <HowItWorksCards
              icon={faMagnifyingGlass}
              title={"Nós analisamos seu negócio"}
              description={
                "Avaliamos comunicação, oferta, público, posicionamento, concorrência e oportunidades."
              }
              badge={3}
              iconArrow={faAngleRight}
            />
            <HowItWorksCards
              icon={faFileLines}
              title={"Você recebe seu plano"}
              description={
                "Entregamos ideias práticas, recomendações e ações organizadas para aplicar."
              }
              badge={4}
              iconArrow={faAngleRight}
            />
            <HowItWorksCards
              icon={faArrowTrendUp}
              title={"Você começa a vender com mais estratégia"}
              description={
                "Você passa a ter clareza sobre o que fazer, onde investir e como melhorar suas vendas."
              }
              badge={5}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
