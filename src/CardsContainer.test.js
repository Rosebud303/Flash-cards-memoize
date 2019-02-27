import React from 'react';
import CardsContainer from './CardsContainer.js';
import { shallow } from 'enzyme';

const mockArray = [{
    "id": 1,
    "name": ".concat",
    "definition": "The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.",
    "type": "accessor"
  },
  {
    "id": 2,
    "name": ".copyWithin",
    "definition": "The copyWithin() method shallow copies part of an array to another location in the same array and returns it, without modifying its size.",
    "type": "mutator"
  },
  {
    "id": 3,
    "name": ".entires",
    "definition": "The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.",
    "type": "iteration"
  }
]

describe('CardsContainer', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
                <CardsContainer prototypes={mockArray}
                    wrong={mockArray}
                />
       )
    });

    it('should create an exact snapshot of component', () =>{
        expect(wrapper).toMatchSnapshot();
    });

    it('should have default state', () => {
        expect(wrapper.state()).toEqual({toggle: false, deck: mockArray, reset: false});
    });

    it('should setState to false when invoked', () =>{
        expect(wrapper.state("reset")).toEqual(false);
        wrapper.instance().toggleReset()
        expect(wrapper.state("reset")).toEqual(false);        
    })

    it('it should call the function being passed down', () => {
        wrapper.find('button').at(0).simulate('click')
    })

    it('it should call the function being passed down', () => {
        wrapper.find('button').at(1).simulate('click')
    })

    it('should setState if this.state.toggle === false', () => {
        expect(wrapper.state('toggle')).toEqual(false);
        expect(wrapper.state('deck')).toEqual(mockArray)
        wrapper.instance().toggleWrong();
        expect(wrapper.state('toggle')).toEqual(true);
        expect(wrapper.state('deck')).toEqual([]);
    })
    
})