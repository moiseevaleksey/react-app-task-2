import React from 'react';
import BlogItem from 'components/BlogItem/BlogItem';
import AddBlog from 'components/AddBlog/AddBlog';
import http from 'config/http';
import { API_BLOGS } from '../../config/api';

export default class BlogList extends React.Component {
  constructor() {
    super();
    this.state = {
      blogs: [],
      filteredBlogs: [],
      currentPage: 1,
    };
  }

  componentDidMount() {
    this.getBlogs();
  }

  getBlogs = () => {
    http.get(API_BLOGS)
      .then(blogs => this.setState(state => ({
        ...state,
        blogs,
        filteredBlogs: blogs,
      })))
      .catch(e => console.error(e));
  };

  nextPage = () => {
    this.setState(state => ({
      ...state,
      currentPage: state.currentPage + 1,
    }));
  };

  prevPage = () => {
    this.setState(state => ({
      ...state,
      currentPage: state.currentPage - 1,
    }));
  };

  filterByAuthor = (author) => {
    const { blogs } = this.state;
    const filteredBlogs = author
      ? blogs.filter(blog => blog.author === author)
      : blogs;
    this.setState({
      ...this.state,
      filteredBlogs,
    });
  };

  deleteBlog = (id, callback) => {
    http.delete(`${API_BLOGS}/${id}`)
      .then(() => callback())
      .catch(e => console.error(e));
  };

  render() {
    const { filteredBlogs, currentPage } = this.state;
    return (
      <div>
        <br />
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Author's username"
            id="author-filter-param"
            ref={(input) => { this.filterInput = input; }}
            onInput={() => this.filterByAuthor(this.filterInput.value)}
          />
        </div>
        <AddBlog getBlogs={this.getBlogs} />
        <br />
        <div className="list-group">
          {
            filteredBlogs.slice(
              currentPage === 1 ? 0 : (currentPage - 1) * 10,
              currentPage === 1 ? 10 : ((currentPage - 1) * 10) + 10,
            )
              .map((blog) => {
                const { _id: id } = blog;
                return (<BlogItem
                  key={id}
                  blog={blog}
                  deleteBlog={this.deleteBlog}
                  getBlogs={this.getBlogs}
                />);
              })
          }
        </div>

        {this.state.filteredBlogs.length > 10 ? (
          <div className="d-flex w-100 justify-content-center mt-3">
            <div className="btn-group justify-content-center" role="group">
              <button
                type="button"
                className="btn btn-dark"
                onClick={this.prevPage}
                disabled={currentPage === 1}
              >
                {currentPage === 1 ? '0' : currentPage - 1}
              </button>
              <button type="button" className="btn btn-dark" disabled>{currentPage}</button>
              <button
                type="button"
                className="btn btn-dark"
                onClick={this.nextPage}
                disabled={
                  currentPage === Math.ceil(filteredBlogs.length / 10)
                  || filteredBlogs.length === 0
                }
              >
                {currentPage + 1}
              </button>
            </div>
          </div>) : null
        }
      </div>
    );
  }
}
