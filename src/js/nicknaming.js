export default class Validator {
  validateUsername(userName) {
    if (/[^A-Za-z0-9_-]/.test(userName) || /[0-9]{3}/.test(userName) || /^[0-9_-]/.test(userName) || /[0-9_-]$/.test(userName)) {
      return false;
    }
    return true;
  }
}
const userNameChecker = new Validator();
userNameChecker.validateUsername('arte_ksa7');
