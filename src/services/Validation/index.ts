import {
  focusLogin,
  focusFirstName,
  focusSecondName,
  focusPhone,
  focusEmail,
  focusPassword,
  blurLogin,
  blurFirstName,
  blurSecondName,
  blurPhone,
  blurEmail,
  blurPassword,
} from "./functions";

export default class Validation {
  static focus(value: string, type: string, validationBlock: HTMLElement) {
    switch (type) {
      case "login":
        focusLogin(value, validationBlock);
        break;
      case "first_name":
        focusFirstName(value, validationBlock);
        break;
      case "second_name":
        focusSecondName(value, validationBlock);
        break;
      case "display_name":
        focusFirstName(value, validationBlock);
        break;
      case "phone":
        focusPhone(value, validationBlock);
        break;
      case "email":
        focusEmail(value, validationBlock);
        break;
      case "password":
      case "password_again":
      case "old-password":
      case "new-password":
      case "new-password-repeat":
        focusPassword(value, validationBlock);
        break;
    }
  }

  static blur(value: string, type: string, validationBlock: HTMLElement) {
    switch (type) {
      case "login":
        blurLogin(value, validationBlock);
        break;
      case "first_name":
        blurFirstName(value, validationBlock);
        break;
      case "second_name":
        blurSecondName(value, validationBlock);
        break;
      case "display_name":
        blurFirstName(value, validationBlock);
        break;
      case "phone":
        blurPhone(value, validationBlock);
        break;
      case "email":
        blurEmail(value, validationBlock);
        break;
      case "password":
      case "password_again":
      case "old-password":
      case "new-password":
      case "new-password-repeat":
        blurPassword(value, validationBlock);
        break;
    }
  }
}
