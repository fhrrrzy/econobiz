import EconobizAPI from '../data/econobizAPI';

const LoginUtils = {
  sendLogin: async () => {
    const data = {
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
    };

    const getLogin = await EconobizAPI.sendLogin(data);
    console.log(getLogin);
  },
  // storeLogin : (),
  // checkLoginStorage : (),
  // showLoginButton:(),
  // showProfile: (),
  // hideAddProduct: (),
  // renderProfile: (),
};

export default LoginUtils;
