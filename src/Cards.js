import React, { Component } from 'react';
import Description from './Description.js'
import './_Cards.scss'

export default class Cards extends Component {
    constructor(props){
        super(props)
        this.state = {
            showDescription: false,
            disableCard: this.props.reset
        }
    }

    toggleDescription = () => {
        this.setState({
            showDescription: !this.state.showDescription,
            disableCard: true
        })
    }

    checkType = (e) => {
        e.preventDefault();
        if(this.props.proto.type === e.target.value && this.props.wrong.includes(this.props.proto.id)) {
            let idx = this.props.wrong.indexOf(this.props.proto.id)
            this.props.wrong.splice(idx, 1)
            localStorage.setItem('wrongAnswers', JSON.stringify(this.props.wrong))
        } else if (this.props.proto.type !== e.target.value && !this.props.wrong.includes(this.props.proto.id)) {
            this.props.wrong.push(this.props.proto.id)
            localStorage.setItem('wrongAnswers', JSON.stringify(this.props.wrong))
        }
        this.toggleDescription();
    }

    render() {
        if(!this.state.showDescription){
            return(
                <input className='unclicked'onClick={this.toggleDescription} disabled={this.state.disableCard} value={this.props.proto.name}>
                </input>
            )
        } else {
            return(
                <Description proto={this.props.proto} 
                    check={this.checkType}
                />
            )
        }

    }
}