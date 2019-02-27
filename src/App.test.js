import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const wrapper = shallow (
    <App />
  )

  it('should have a matching snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  // it('should have default state', () => {
  //   expect(wrapper.state()).toEqual({prototypes: [], wronAnswers: [], error: ''})
  // })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
}) 
