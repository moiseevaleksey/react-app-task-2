import React from 'react';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';

import AddBlog from './../../../src/components/AddBlog/AddBlog';

describe('AddBlog', () => {
  let wrapper;
  const getBlogs = () => {};

  it('AddBlog should be rendered properly', () => {
    wrapper = render(<AddBlog getBlogs={getBlogs}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
