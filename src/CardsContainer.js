import React, { Component } from 'react';
import WrongContainer from './WrongContainer.js'
import Cards from './Cards.js'
import './_CardsContainer.scss'

export default class CardsContainer extends Component {
    constructor(props) {
        super(props);

    }

    render(){
        return (
            <div className="card-container">
                    <h2>PROTOTYPE</h2>
                    <button>Show Wrong</button>
                <ul className='cards'>
                    {
                        this.props.prototypes.map( proto => {
                            return <Cards key={proto.id} 
                                        proto={proto}
                                        wrong={this.props.wrong}
                                    />
                        })
                    }
                </ul>
            </div>
        )
    }
 
}