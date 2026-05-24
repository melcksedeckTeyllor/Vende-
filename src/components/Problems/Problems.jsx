// import React from 'react'
import "./Problems.css";
import ProblemsCard from "../ui/ProblemsCard/ProblemsCard.jsx";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faUserGroup,
  faBullhorn,
  faBullseye,
  faLightbulb,
  faArrowTrendUp
} from "@fortawesome/free-solid-svg-icons";

export const Problems = () => {
  return (
    <>
        <section className="problems-section">
            <div className="problems-container">
                <h2>Seu negócio pode estar <span>perdendo vendas</span> todos os dias sem perceber.</h2>
                <p>Muitos pequenos negócios não vendem pouco por falta de potencial. Eles vendem pouco porque não têm uma estratégia clara, uma oferta bem construída, uma comunicação forte ou um plano simples de execução.</p>
               <div className="problems-card-grid"> <ProblemsCard icon={faInstagram} description="Instagram sem estratégia"/>
                    <ProblemsCard icon={faUserGroup} description="Pouca entrada de clientes novos"/>
                    <ProblemsCard icon={faBullhorn} description="Promoções que não funcionam"/>
                    <ProblemsCard icon={faBullseye} description="Dificuldade para saber onde investir"/>
                    <ProblemsCard icon={faLightbulb} description="Falta de ideias para vender mais"/>
                    <ProblemsCard icon={faArrowTrendUp} description="Negócio bom, mas mal posicionado"/> 
                    
                </div>
            </div>
        </section>
    </>
  )
}
