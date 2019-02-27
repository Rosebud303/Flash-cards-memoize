import React from 'react';
import Description from './Description.js';
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

const mockFunc = jest.fn()

describe('Description', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow (
            <Description proto={mockArray} 
                check={mockFunc}
            />
        )
    })

    it('should be a snapshot match', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('it should call the function being passed down', () => {
        wrapper.find('.back').simulate('click')
    })

    it('it should call the function being passed down', () => {
        wrapper.find('button').at(0).simulate('click')
    })

    it('it should call the function being passed down', () => {
        wrapper.find('button').at(1).simulate('click')
    })

    it('it should call the function being passed down', () => {
        wrapper.find('button').at(2).simulate('click')
    })
})