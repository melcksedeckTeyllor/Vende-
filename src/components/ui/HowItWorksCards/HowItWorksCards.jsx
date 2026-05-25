// import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./HowItWorksCards.css";
const HowItWorksCards = ({ icon, iconArrow, title, description, badge }) => {
  return (
    <>
      <section className="howItWorksCardsSection">
        <div className="howItWorksCards-container">
          <div className="circle-icon-wrapper">
            <span className="circle-icon">
              <FontAwesomeIcon
                icon={icon}
                size="2xl"
                className="icon-how-it-works"
              />
            </span>
            {badge && <span className="badge">{badge}</span>}
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <p>
          <FontAwesomeIcon icon={iconArrow} />
        </p>
      </section>
    </>
  );
};

export default HowItWorksCards;
