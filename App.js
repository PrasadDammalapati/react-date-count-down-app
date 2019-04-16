import React, { Component } from 'react';
import './App.css';
import Clock from './clock';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      deadline:'June 20, 2020',
      newdeadline:''
    };
  }
  
  changeDeadLine(){
    console.log(this.state);
    this.setState({deadline:this.state.newDeadline});
  }
  render() {
    return (
      <div className="App">
        <div>Countdown to {this.state.deadline}</div>
        <div className="clock-body">
          <Clock deadline={this.state.deadline} />
        </div>
        <div>
          <input placeholder="new date" onChange={event => this.setState({newDeadline:event.target.value})}/>
          <input type="submit" value="Submit" onClick={()=>this.changeDeadLine()}/>
        </div>
      </div>
    );
  }
}

export default App;
