import { ajaxRequestStart, ajaxRequestEnd } from '../../src/actions/app';

describe('ajaxRequest actionCreator', () => {
  it('should handle ajax request started', () => {
    expect(ajaxRequestStart()).toEqual({
      type: 'AJAX_REQUEST_START'
    });
  });
  it('should handle ajax request end', () => {
    expect(ajaxRequestEnd()).toEqual({
      type: 'AJAX_REQUEST_END'
    });
  });
});
