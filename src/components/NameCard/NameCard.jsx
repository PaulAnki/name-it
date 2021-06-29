import React from 'react';
import './NameCard.css'

const nameCheap="https://www.namecheap.com/domains/registration/results/?domain";

const NameCard = ({suggestedNames})=>{
    return(
        <a className="card-link" href={`${nameCheap}${suggestedNames}`} target="_blank" rel="noreferrer">
        <div className="result-name-card">
            <p className="result-card">{suggestedNames}</p>
        </div>
        </a>
    )
}
export default NameCard;