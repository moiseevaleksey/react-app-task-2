export const AJAX_REQUEST_START = 'AJAX_REQUEST_START';
export const AJAX_REQUEST_END = 'AJAX_REQUEST_END';

export const ajaxRequestStart = () => ({
  type: AJAX_REQUEST_START,
});

export const ajaxRequestEnd = () => ({
  type: AJAX_REQUEST_END,
});
