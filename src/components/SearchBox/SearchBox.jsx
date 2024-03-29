import React from 'react';
import './SearchBox.css'
const SearchBox = ({onInputChange}) =>{
    return(
        <div className="search-container">
            <input onChange = { (event)=>{ onInputChange(event.target.value)
            }
            }
            placeholder="Type your keyword" className="search-input"></input>
        </div>
    )
}

export default SearchBox;