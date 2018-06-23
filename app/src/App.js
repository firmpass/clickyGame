import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    console.log("This is my initializer")

    //empty squares
    

    this.state = {squares: [<div key="0" className="container">
    <div key="1" className="square"></div>
    <div key="2"className="square"></div>
    <div key="3"className="square"></div>
    <div key="4"className="square"></div>
    <div key="5" className="square"></div>
    <div key="6" className="square"></div>
    </div>]}
  }


  render() {
    return (
      <div className="App">

        <table className="titleBar">
        <tbody>
          <tr>
            <td>
            <h1>Super Clicky Game</h1>
            </td>
            <td>
              <span className="Guess">
                Your Guess!
              </span>
            </td>
            <td>
              <p className="Scores">
                Score: <span>0</span> | Top Score: <span>0</span>
              </p>
            </td>
          </tr>
          </tbody>
        </table>

        
          {this.state.squares}    
        


      </div>
    );
  }
}

export default App;
