import http from 'config/http';
import { API_LOGIN, API_LOGOUT, API_CHECK_USER, API_REGISTER } from '../config/api';
import { ajaxRequestStart, ajaxRequestEnd } from './app';

export const CLEAR_USER = 'CLEAR_USER';
export const SET_USER = 'SET_USER';

export const clearUser = () => ({
  type: CLEAR_USER,
});

export const setUser = user => ({
  type: SET_USER,
  user,
});

export const checkUser = () => (dispatch) => {
  dispatch(ajaxRequestStart);
  http.get(API_CHECK_USER)
    .then(user => dispatch(setUser(user)))
    .then(() => dispatch(ajaxRequestEnd));
};

export const loginUser = credentials => (dispatch) => {
  dispatch(ajaxRequestStart);
  http.post(API_LOGIN, credentials)
    .then(user => dispatch(setUser(user)))
    .then(() => dispatch(ajaxRequestEnd));
};

export const logoutUser = () => (dispatch) => {
  dispatch(ajaxRequestStart);
  http.get(API_LOGOUT)
    .then((data) => dispatch(clearUser()))
    .then(() => dispatch(ajaxRequestEnd))
    .then(() => {window.location.pathname = '/'});
};

export const registerUser = user => (dispatch) => {
  dispatch(ajaxRequestStart);
  http.post(API_REGISTER, user)
    .then((data) => console.log(data))
    .then(() => dispatch(ajaxRequestEnd));
};