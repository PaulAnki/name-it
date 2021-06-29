import React from 'react';
import './ResultsContainer.css';
import NameCard from '../NameCard/NameCard';


const ResultsContainer = ({suggestedNames})=>{
    const suggestedNamenew = suggestedNames.map((element)=>{
        return <NameCard key={element} suggestedNames = {element} />
    }
    )
    return(
        <div className="result-container">
            {suggestedNamenew}</div> 
    )
}

export default ResultsContainer;