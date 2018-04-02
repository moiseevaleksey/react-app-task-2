import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { App } from './../../../src/components/App/App';

describe('App', () => {
  let wrapper;

  it('App should be rendered with props', () => {
    wrapper = shallow(<App checkUser={()=>{}}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
