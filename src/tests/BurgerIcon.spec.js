import React from 'react';
import TestUtils from 'react-dom/test-utils';
import { assert, expect } from 'chai';
import createShallowComponent from './utils/createShallowComponent';
import BurgerIcon from '../components/Header/BurgerIcon/BurgerIcon';

describe('BurgerIcon component', () => {

  let component;

  it('exists and is not undefined', () => {
    assert.isDefined(BurgerIcon, 'BurgerIcon component is defined');
  });

  describe('when rendered successfully', () => {

    beforeEach(() => {
      component = createShallowComponent(<BurgerIcon />);
    });

    it('renders a main div element', () => {
      expect(component.type).to.equal('div');
    });

    it('contains three span elements', () => {
      expect(component.props.children.props.children.props.children).to.have.length(3);
    });

    it('contains a button element', () => {
      expect(component.props.children.type).to.equal('button');
    });
  });

  describe('wrapper element', () => {

    it('accepts an optional className', () => {
      component = createShallowComponent(<BurgerIcon className={ 'custom-class' } />);
      expect(component.props.className).to.contain('custom-class');
    });
  });

  describe('visual icon', () => {

    let icon;

    beforeEach(() => {
      component = createShallowComponent(<BurgerIcon />);
      icon = component.props.children.props.children;
    });

    it('accepts an optional barClassName', () => {
      component = createShallowComponent(<BurgerIcon barClassName={ 'custom-class' } />);
      icon = component.props.children.props.children;
      expect(icon.props.children[0].props.className).to.contain('custom-class');
    });

    it('has the correct styles', () => {
      const expected = {
        background: undefined,
        position: 'absolute',
        height: '20%',
        left: 0,
        right: 0,
        top: '0%',
        opacity: 1 
      };
  
      expect(icon.props.children[0].props.style).to.deep.equal(expected);
    });

    it('bars can be styled with props', () => {
      component = createShallowComponent(<BurgerIcon colour={ 'red' } />);
      icon = component.props.children.props.children;

      expect(icon.props.children[0].props.style.background).to.equal('red');
      expect(icon.props.children[1].props.style.background).to.equal('red');
      expect(icon.props.children[2].props.style.background).to.equal('red');
    });

  });

  describe('button', () => {

    beforeEach(() => {
      component = TestUtils.renderIntoDocument(<BurgerIcon />);
    });

    it('responds to hover events', () => {
      const button = TestUtils.findRenderedDOMComponentWithTag(component, 'button');
      TestUtils.SimulateNative.mouseOver(button);
      expect(component.state.hover).to.be.true;
      TestUtils.SimulateNative.mouseOut(button);
      expect(component.state.hover).to.be.false;
    });

    it('behaves correctly when clicked', () => {
      let clickHandled = false;
      function handleClick() { clickHandled = true; }
      component = TestUtils.renderIntoDocument(<BurgerIcon onClick={ handleClick } />);
      const button = TestUtils.findRenderedDOMComponentWithTag(component, 'button');
      TestUtils.Simulate.click(button);
      expect(clickHandled).to.be.true;
    });

    it('has the correct styles', () => {
      component = createShallowComponent(<BurgerIcon />);
      const button = component.props.children;
      const expected = { 
        position: 'absolute',
        width: '50%',
        height: '50%',
        border: 'none',
        fontSize: 0,
        background: 'transparent',
        cursor: 'pointer' 
      }

      expect(button.props.style).to.deep.equal(expected);
    });
  });
});
