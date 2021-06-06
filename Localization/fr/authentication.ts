export default {
  email: 'E-mail',
  password: 'Password',
  login: {
    loginHeader: 'Connexion',
    loginButton: 'Connexion',
    dontHaveAccount: "Vous n'avez pas de compte?"
  },
  signUp: {
    signUpHeader: 'Inscription',
    alreadyAccount: 'Vous avez déjà un compte? Connectez-vous à la place.'
  }
};
// Calling by referring to the key exp -> t('authentication:login.email')
// Nested json object exp -> t(“homePage:dialogue.title”)