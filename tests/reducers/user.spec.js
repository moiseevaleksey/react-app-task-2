import user  from '../../src/reducers/user';
import { SET_USER, CLEAR_USER } from '../../src/actions/user';

describe('User reducer', () => {
  it('should return the initial state', () => {
    expect(user(undefined, {})).toEqual({});
  });
  it('should handle SET_USER', () => {
    const authAction = {
      type: SET_USER,
      user: {
        username: 'user',
        password: 'user',
      },
    };
    expect(user({}, authAction)).toEqual({
      username: 'user',
      password: 'user',
    });
  });
  it('should handle CLEAR_USER', () => {
    const authAction = {
      type: CLEAR_USER
    };
    expect(user({}, authAction)).toEqual({});
  });
});
