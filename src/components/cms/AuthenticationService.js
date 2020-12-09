class AuthenticationService {
  registerSuccessfulLogin(username, password) {
    console.log('User Login');
    sessionStorage.setItem('authenticatedUser', username);
  }
  logout() {
    console.log('User Logout');
    sessionStorage.removeItem('authenticatedUser');
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    if (user === null) return false;
    return true;
  }
}

export default new AuthenticationService();
