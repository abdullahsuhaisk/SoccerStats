export default {
  email: 'E-mail',
  password: 'Wachtwoord',
  login: {
    loginHeader: 'Inloggen',
    loginButton: 'Inloggen',
    dontHaveAccount: "Heeft u geen account?"
  },
  signUp: {
    signUpHeader: 'Aanmelden',
    alreadyAccount: 'Heb je al een account? Log in plaats daarvan in.'
  }
};
// Calling by referring to the key exp -> t('authentication:login.email')
// Nested json object exp -> t(“homePage:dialogue.title”)