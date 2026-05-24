// import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Problems.css"

const ProblemsCard = ({ icon, description }) => {
  
  return (
    <>
        <div className="problems-card">
            <span className="icon-problmems-card"><FontAwesomeIcon icon={icon} size="lg" /></span>
            <p className="description-problems-card">{description}</p>
        </div>
    </>
  )
}

export default ProblemsCard