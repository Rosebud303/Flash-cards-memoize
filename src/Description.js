import React from 'react';
import './_Description.scss'

export default function Description (props) {
    return(
        <div className='definition-card'>
            <div className='card'>
                <h1 className='back' onClick={props.toggle}>{props.proto.name}</h1>
                <p className='description'>{props.proto.definition}</p>
                <form>
                    <button className='answer' value='accessor' onClick={props.check}>Accessor</button>
                    <button className='answer' value='iteration' onClick={props.check}>Iteration</button>
                    <button className='answer' value='mutator' onClick={props.check}>Mutator</button>
                </form>
            </div>
        </div>
    )
}