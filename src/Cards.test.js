import React from 'react';
import Cards from './Cards.js';
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
 
const mockObj = {"id": 2};
const mockFalse = false;


describe('Cards', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow (
            <Cards key={mockObj.id} 
                proto={mockObj}
                wrong={mockArray}
                reset={mockFalse}
            />
        )
    })

    it('should match the snap shot', () => {
        expect(wrapper).toMatchSnapshot()
    });

    it('should have defaut state', () => {
        expect(wrapper.state()).toEqual({showDescription: false, disableCard: mockFalse})
    })

    it('should check the type of the card against the value of the button', () => {
        wrapper.instance().checkType()
    })

    it('should check the type of the card against the value of the button', () => {
        wrapper.instance().checkType()
    })
})