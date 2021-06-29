import React from 'react';
import './App.css';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';

const namei = require('@rstacruz/startup-name-generator');
class App extends React.Component {
    state = {
        headerText: "Name It" ,
        headerImageExpand: true,
        suggestedNames: []
    }
handleInputChange = (inputText)=>{
   this.setState({
       headerImageExpand: !(inputText.length),
       suggestedNames : inputText ? namei(inputText) : []
   })
}    
    render()
    {
        console.log(namei('cloud'));
        return (
            <div>
            <Header headerExpanded={this.state.headerImageExpand} headTitle={this.state.headerText} />
            <SearchBox onInputChange= {this.handleInputChange} />
            <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        )
    }
}

export default App;