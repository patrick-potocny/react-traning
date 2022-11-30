import React, { Component } from 'react';
import Header from './Header';
import Inputs from './Inputs';
import Preview from './Preview';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      photo: '',
      fName: '',
      lName: '',
      adress: '',
      city: '',
      desc: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    let newState = {...this.state}
    const toChange = e.target.name
    newState[toChange] = e.target.value
    this.setState(newState);
    console.log(this.state);
  }

  render() {
    return (
      <>
        <Header />
        <div className="body">
        <Inputs data={this.state} changeFunc={this.handleChange}/>
        <Preview data={this.state} />
        </div>
      </>
    );
  }
}

export default App;