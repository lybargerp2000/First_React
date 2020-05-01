import React, {Component} from 'react';
import './App.css';
import Die from './components/Die';

class Main extends Component{
  display(message){
      alert(message);
  }
  
  render(){
      
      return(
          <div className="App">
              <h1>NFL Matchup of the Week</h1>
              <Die numberOfSides={10} buttonClick={(message) => this.display(message)}/>
​
              {/* <RegisterForm /> */}
          </div>
      );
  }
}
export default Main;
