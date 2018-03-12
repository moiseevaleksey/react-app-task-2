import React from 'react';
import PropTypes from 'prop-types';

const BlogItem = ({ blog, deleteBlog, getBlogs }) => {
  const { title, date, body, author, _id } = blog;
  return (
    <a className="list-group-item list-group-item-action flex-column align-items-start">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{title}</h5>
        <small>{new Date(date).toLocaleString()}</small>
      </div>
      <p className="mb-1">{body}</p>
      <small>By {author}</small>
      <button
        type="button"
        className="close"
        aria-label="Close"
        onClick={() => {
          deleteBlog(_id, getBlogs);
        }}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </a>
  );
};

BlogItem.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
  deleteBlog: PropTypes.func.isRequired,
  getBlogs: PropTypes.func.isRequired,
};

export default BlogItem;
