export default {
  email: 'Email',
  password: 'Password',
  login: {
    loginHeader:'Login',
    loginButton: 'Login',
    dontHaveAccount: "Don't have an account ?"
  },
  signUp: {
    signUpHeader: 'Sign Up',
    alreadyAccount: 'Already have an account ? Sign in instead.'
  }
};
// Calling by referring to the key exp -> t('authentication:login.email')
// Nested json object exp -> t(“homePage:dialogue.title”)