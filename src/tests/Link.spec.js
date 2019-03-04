import React from 'react';
import TestUtils from 'react-dom/test-utils';
import { assert, expect } from 'chai';
import createShallowComponent from './utils/createShallowComponent';
import Link from '../components/Header/Link/Link';

describe('Link component', () => {

  let component;

  it('exists and is not undefined', () => {
    assert.isDefined(Link, 'Link component is defined');
  });

  describe('when rendered successfully', () => {

    beforeEach(() => {
      component = createShallowComponent(<Link />);
    });

    it('renders a main archor element', () => {
      expect(component.type).to.equal('a');
    });
  });

  describe('wrapper element', () => {

    it('can be styled with props', () => {
        component = createShallowComponent(<Link styles={{ textDecoration: 'line-through' }} />);        
        expect(component.props.style.textDecoration).to.equal('line-through');
    });
  });

  describe('archor', () => {

    beforeEach(() => {
      component = TestUtils.renderIntoDocument(<Link content={'Link Name'} />);
    });

    it('contains items text', () => {
        const archor = TestUtils.findRenderedDOMComponentWithTag(component, 'a');
        expect(archor.innerHTML).to.equal('Link Name');
      });

    it('responds to hover events', () => {
      const archor = TestUtils.findRenderedDOMComponentWithTag(component, 'a');
      TestUtils.SimulateNative.mouseOver(archor);
      expect(component.state.hover).to.be.true;
      TestUtils.SimulateNative.mouseOut(archor);
      expect(component.state.hover).to.be.false;
    });

    it('has the correct styles', () => {
      component = createShallowComponent(<Link />);
      const expected = { 
        height: '',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        color: '#000000',
        fontSize: '12px',
        textDecoration: 'none',
        borderBottom: '3px solid transparent' 
     }

      expect(component.props.style).to.deep.equal(expected);
    });

    it('has the correct styles on hover', () => {
        const archor = TestUtils.findRenderedDOMComponentWithTag(component, 'a');
        TestUtils.SimulateNative.mouseOver(archor);
        const expected = '3px solid #d84445';  

        expect(archor.style.borderBottom).to.deep.equal(expected);
    });
  });
});
