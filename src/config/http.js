import { API_HOST } from './api';

class Http {
  constructor(config) {
    this.getConfig = {
      method: 'GET',
      ...config,
    };
    this.postConfig = {
      method: 'POST',
      ...config,
    };
    this.putConfig = {
      method: 'PUT',
      ...config,
    };
    this.deleteConfig = {
      method: 'DELETE',
      ...config,
    };
  }

  checkCodeError = (response) => {
    if (response.status !== 200) {
      return Promise.reject(response.status);
    }
    return response;
  };

  get = uri => (
    fetch(`${API_HOST}${uri}`, this.getConfig)
      .then(response => this.checkCodeError(response))
      .then(response => response.json())
  );

  post = (uri, data) => (
    fetch(`${API_HOST}${uri}`, { ...this.postConfig, body: JSON.stringify(data) })
      .then(response => this.checkCodeError(response))
      .then(response => response.json())
  );

  put = (uri, data) => (
    fetch(`${API_HOST}${uri}`, { ...this.putConfig, body: JSON.stringify(data) })
      .then(response => response.json())
  );

  delete = uri => (
    fetch(`${API_HOST}${uri}`, this.deleteConfig)
      .then(response => response.json())
  );
}

const http = new Http({
  credentials: 'include',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default http;
