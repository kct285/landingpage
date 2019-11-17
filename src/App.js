import React, {Component} from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Solution from './components/Solution';
import Features from './components/Features';
import Support from './components/Support';
import './App.css';

class App extends Component {
  
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  
  
  handleClick(event){
    document.querySelector(event.target.name).scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }
  
  render(){
    return (
      <div className="App">
        <header> */}
          <NavBar handleClick={this.handleClick}/>
        </header>
  
          <Home/>
          <Solution/>
          <Features/>
          <Support/>
  
  
        
  
  
        
  
      </div>
    )
  }
}
export default App;
