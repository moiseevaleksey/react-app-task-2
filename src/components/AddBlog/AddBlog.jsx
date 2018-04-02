import React from 'react';
import PropTypes from 'prop-types';

import convertFormDataToJson from '../utils/utils';
import http from '../../config/http';
import { API_BLOGS } from '../../config/api';

export default class AddBlog extends React.Component {
  postBlog = (blogFormData) => {
    blogFormData.append('date', new Date(Date.now()).toJSON());
    const blogData = convertFormDataToJson(blogFormData);
    http.post(API_BLOGS, blogData)
      .then(() => this.props.getBlogs())
      .catch(e => console.error(e));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(this.blogForm);
    this.postBlog(data);
  };

  render() {
    return (
      <form
        onSubmit={e => this.handleSubmit(e)}
        ref={(blogForm) => { this.blogForm = blogForm; }}
      >
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="">Add blog</span>
          </div>
          <input type="text" name="title" placeholder="Title" className="form-control" />
          <input type="text" name="author" placeholder="Author" className="form-control" />
          <input type="text" name="body" placeholder="Message" className="form-control" />
          <button className="btn btn-outline-secondary" type="submit">Add blog</button>
        </div>
      </form>
    );
  }
}

AddBlog.propTypes = {
  getBlogs: PropTypes.func.isRequired,
};
