import React from 'react';
import './_Description.scss'

export default function Description (props) {
    return(
        <div className='definition-card'>
            <div className='card'>
                <h1 className='back' onClick={props.toggle}>{props.proto.name}</h1>
                <h2>{props.proto.definition}</h2>
                <form>
                    <button value='accessor' onClick={props.check}>Accessor</button>
                    <button value='iteration' onClick={props.check}>Iteration</button>
                    <button value='mutator' onClick={props.check}>Mutator</button>
                </form>
            </div>
        </div>
    )
}