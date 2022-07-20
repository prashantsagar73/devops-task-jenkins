import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ToggleComponent from './Toggle';

Enzyme.configure({ adapter: new Adapter() });
describe('ToggleComponent', () => {
  it('should show the text', () => {
  const toggleInstance = shallow(<ToggleComponent />);
  const element = toggleInstance.find('div div');
  expect(element.text()).toBe('This will be toggled');
 });

 it('should hide the element after button is clicked', ()=>{
    const toggleInstance = shallow(<ToggleComponent />);
    /** Find the button element from toggleInstance ***/
    const toggleButton= toggleInstance.find('button');
   /** Now problem is how we can find the button clicked without   
    *  anything,
    * here enzyme will help us a lot again. It has a function called
    * simulate,
    * thought this simulate function we can simulate the DOM events
    */
       // "test": "react-scripts test",

    toggleButton.simulate('click');
    const element=toggleInstance.find('div div');
    /*it means after the click the text doesn't exist, and its true*/
    expect(element.length).toBe(0);
 });

});