// import React from 'react'
import "./Plans.css";
import { PlansCard } from "./../ui/PlansCard/PlansCard";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
export const Plans = () => {
  return (
    <>
      <section className="plans-section">
        <h2>Escolha o plano ideal para o momento do seu negócio</h2>
        <div className="plans-container">
          <PlansCard
            planName={"Diagnóstico vende+"}
            planPrice={97}
            planDescription={
              "Para quem quer entender onde está errando e quais oportunidades pode aproveitar."
            }
            features={[
              "Análise inicial do negócio",
              "Análise do Instagram ou canal principal",
              "Pontos fortes e pontos de melhoria",
              "Ideias rápidas para atrair clientes",
              "Sugestão inicial de ações comerciais",
              "Entrega por PDF ou mensagem estruturada",
            ]}
            planOption={"Quero meu diagnóstico"}
            iconCheck={faCircleCheck}
          />
          <PlansCard
            planName={"Plano vend+ estrátegico"}
            planPrice={297}
            planDescription={
              "Para quem quer um direcionamento mais completo de crescimento."
            }
            features={[
              "Diagnóstico completo do negócio",
              "Análise de público e posicionamento",
              "Análise do Instagram",
              "Ideias de campanhas e promoções",
              "Sugestão de melhorias em produto, serviço ou atendimento",
              "Plano de ação de 30 dias",
              "Estratégia conforme o orçamento disponível",
              "Sugestões de conteúdo para redes sociais",
              "Indicação de prioridades: o que fazer primeiro",
            ]}
            planOption={"Quero meu plano estratégico"}
            iconCheck={faCircleCheck}
            isHighlighted={true}
            badge={"Mais recomendado"}
          />
          <PlansCard
            planName={"Vende+ acompanhamento"}
            planPrice={597}
            planDescription={
              "Para quem quer apoio durante a execução e ajustes ao longo do mês."
            }
            features={[
              "Tudo do Plano Estratégico",
              "Acompanhamento por WhatsApp",
              "Revisão semanal das ações",
              "Ajustes conforme os resultados",
              "Apoio em ideias de campanhas",
              "Direcionamento para posts, ofertas e parcerias",
              "Suporte consultivo por 30 dias",
            ]}
            planOption={"Quero acompanhamento"}
            oldPrice={997}
            monthly={true}
            iconCheck={faCircleCheck}
            badge={"Promocional de lançamento"}
          />
        </div>
        <p className="p-plans-section">
          Pagamento 100% online e seguro. Atendimento consultivo e
          personalizado.
        </p>
      </section>
    </>
  );
};
