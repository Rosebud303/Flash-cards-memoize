import React, { Component } from 'react';
import arrayData from './Dataset.js';
import CardsContainer from './CardsContainer.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      prototypes: arrayData,
      wrongAnswers: [],
      error: ''
    };
  }

  componentDidMount() {
    let wrongStorage = JSON.parse(localStorage.getItem('wrongAnswers'));
    let updatedCurrentWrong = [];
    fetch('http://memoize-datasets.herokuapp.com/api/v1/duyData')
    .then(response => response.json())
    .then(data => console.log("hello", data))
    .then(result => {
      this.setState({
        prototypes: result.prototypes,
      })
    })
    .catch(error => {
      this.setState({error: error.message})
    });

    console.log(JSON.parse(localStorage.getItem('correctAnswers')))
    if(wrongStorage !== null) {
      updatedCurrentWrong = wrongStorage
    }
    this.setState({ wrongAnswers: updatedCurrentWrong})
  }

  render() {
    console.log(this.state.wrongAnswers)
    return (
      <div className="App">
        <h1>TEST YOUR KNOWLEDGE!</h1>
        {/* <h3>Wrong: {this.state.wrongAnswers.length}</h3> */}
        <CardsContainer prototypes={this.state.prototypes}
          wrong={this.state.wrongAnswers}
        />
      </div>
    );
  }
}

export default App;
