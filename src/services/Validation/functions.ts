import {
  loginRegexp,
  nameRegexp,
  phoneRegexp,
  emailRegexp,
  passwordRegexp,
} from "./constants";

export const focusLogin = (value: string, validationBlock: HTMLElement) => {
  if (!value) validationBlock.innerText = "Введите логин";
};

export const focusFirstName = (value: string, validationBlock: HTMLElement) => {
  if (!value) validationBlock.innerText = "Введите имя";
};

export const focusSecondName = (
  value: string,
  validationBlock: HTMLElement
) => {
  if (!value) validationBlock.innerText = "Введите фамилию";
};

export const focusPhone = (value: string, validationBlock: HTMLElement) => {
  if (!value) validationBlock.innerText = "Введите телефон";
};

export const focusEmail = (value: string, validationBlock: HTMLElement) => {
  if (!value) validationBlock.innerText = "Введите Email";
};

export const focusPassword = (value: string, validationBlock: HTMLElement) => {
  if (!value) validationBlock.innerText = "Введите Пароль";
};

export const blurLogin = (value: string, validationBlock: HTMLElement) => {
  if (!value) validationBlock.innerText = "Введите логин";
  else if (!value.match(loginRegexp))
    validationBlock.innerText = "Неверный логин";
  else validationBlock.innerText = "";
};

export const blurFirstName = (value: string, validationBlock: HTMLElement) => {
  if (!value) validationBlock.innerText = "Введите имя";
  else if (!value.match(nameRegexp))
    validationBlock.innerText = "Недопустимые символы в имени";
  else validationBlock.innerText = "";
};

export const blurSecondName = (value: string, validationBlock: HTMLElement) => {
  if (!value) validationBlock.innerText = "Введите фамилию";
  else if (!value.match(nameRegexp))
    validationBlock.innerText = "Недопустимые символы в фамилии";
  else validationBlock.innerText = "";
};

export const blurPhone = (value: string, validationBlock: HTMLElement) => {
  if (!value) validationBlock.innerText = "Введите телефон";
  else if (!value.match(phoneRegexp))
    validationBlock.innerText = "Введите корректный номер телефона";
  else validationBlock.innerText = "";
};

export const blurEmail = (value: string, validationBlock: HTMLElement) => {
  if (!value) validationBlock.innerText = "Введите Email";
  else if (!value.match(emailRegexp))
    validationBlock.innerText = "Введите корректный Email";
  else validationBlock.innerText = "";
};

export const blurPassword = (value: string, validationBlock: HTMLElement) => {
  if (!value) validationBlock.innerText = "Введите пароль";
  else if (!value.match(passwordRegexp))
    validationBlock.innerText = "Неверный пароль";
  else validationBlock.innerText = "";
};
