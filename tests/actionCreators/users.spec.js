import { clearUser, setUser, checkUser, loginUser, logoutUser, registerUser, CLEAR_USER } from '../../src/actions/user';

describe('user actionCreator', () => {
  it('should handle clear user', () => {
    expect(clearUser()).toEqual({
      type: 'CLEAR_USER'
    });
  });
  it('should handle set user', () => {
    const userMocked = {
      id: Date.now(),
      name: 'Kolya'
    };
    expect(setUser(userMocked)).toEqual({
      type: 'SET_USER',
      user: userMocked,
    });
  });
  // it('should handle check user', (done) => {
  //   loginUser({a:1}, done);
  // });
  // it('should handle login user', (done) => {
  //   loginUser(done);
  // });
  // it('should handle logout user', (done) => {
  //   logoutUser(done);
  // });
  // it('should handle register user', (done) => {
  //   registerUser(done);
  // });
});
