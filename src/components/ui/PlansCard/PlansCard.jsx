// import React from 'react'
import './PlansCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PlansCard = ({
  planName,
  planPrice,
  planDescription,
  features,
  planOption,
  oldPrice,
  monthly,
  badge,
  isHighlighted,
  iconCheck,
}) => {
  return (
    <>
      <div className={`plans-card-container ${isHighlighted ? "highlighted" : ""}`}>
        {badge && (
          <div className="plans-card-badge">
            <p>{badge}</p>
          </div>
        )}
        <h3>{planName}</h3>
        {oldPrice && (
          <p className="plans-card-old-price">
            <span className="old-price-value">De</span> R$ {oldPrice}
            {monthly && <span>/mês</span>}
          </p>
        )}
        <p>
          <span className="currency">R$ </span> 
          <span className="value">{planPrice}</span>
          {monthly && <span className='monthly'>/mês</span>}
        </p>
        <p className='plan-card-description'>{planDescription}</p>
        <ul>
          {features?.map((feature, index) => (
            <li key={index} className='li-items-plan-card'><FontAwesomeIcon icon={iconCheck} size='lg' className='icon-check'  />{feature}</li>
          ))}
        </ul>
        <button className={`btn-plan ${isHighlighted ? "highlighted" : ""}`}>
          {planOption}
        </button>
      </div>
    </>
  );
};
