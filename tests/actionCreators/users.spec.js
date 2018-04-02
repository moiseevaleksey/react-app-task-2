import { clearUser, setUser } from '../../src/actions/user';

describe('user actionCreator', () => {
  it('should handle clear user', () => {
    expect(clearUser()).toEqual({
      type: 'CLEAR_USER'
    });
  });
  it('should handle set user', () => {
    const userMocked = {
      id: Date.now(),
      name: 'Alex'
    };
    expect(setUser(userMocked)).toEqual({
      type: 'SET_USER',
      user: userMocked,
    });
  });
});
