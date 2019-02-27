import React, { Component } from 'react';
import arrayData from './Dataset.js';
import CardsContainer from './CardsContainer.js';
import './_App.scss'


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
    .then(data => {
      this.setState({
        prototypes: data.duyData,
      })
    })
    .catch(error => {
      this.setState({error: error.message})
    });

    if(wrongStorage !== null) {
      updatedCurrentWrong = wrongStorage
    }
    this.setState({ wrongAnswers: updatedCurrentWrong})
  }

  render() {
    return (
      <div className="App">
        <CardsContainer prototypes={this.state.prototypes}
          wrong={this.state.wrongAnswers}
        />
      </div>
    );
  }
}

export default App;
