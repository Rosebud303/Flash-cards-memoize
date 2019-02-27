import React, { Component } from 'react';
import Cards from './Cards.js'
import './_CardsContainer.scss'

export default class CardsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            deck: [],
            reset: false
        }
    }

    componentDidMount (){
        this.setState({
            deck: this.props.prototypes
        })
    }

    toggleReset = () => {
        this.setState({
            reset: false
        })
    }

    toggleWrong = () => {
        if(this.state.toggle){
            this.setState({
                deck: this.props.prototypes,
                toggle: false
            })
        }else{
            let filteredDeck = this.props.prototypes.filter((card) => {
                return this.props.wrong.includes(card.id)
            })
            this.setState({
                deck: filteredDeck,
                toggle: true
            })
        }
    }
    render(){
        console.log(this.state.deck)
        return (
            <div className="card-container">
                    <h2>PROTOTYPE.memoize™</h2>
                    <h3>Wrong Count: {this.props.wrong.length}</h3>
                    <button className='show' onClick={this.toggleWrong}>Show Wrong</button>
                    <button className='show' onClick={this.toggleReset}>Reset</button>
                <ul className='cards'>
                    {
                        this.state.deck.map( proto => {
                            return <Cards key={proto.id} 
                                        proto={proto}
                                        wrong={this.props.wrong}
                                        reset={this.state.reset}
                                    />
                        })
                    }
                </ul>
            </div>
        )
    }
 
}