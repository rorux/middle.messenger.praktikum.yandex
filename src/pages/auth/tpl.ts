export default `
  <form class="form" action="#">
    <div class="form__top">
      <span class="title form__title">Вход</span>
      {{{ formInputLogin }}}
      {{{ formInputPassword }}}
    </div>
    <div class="form__bottom">
      <button type="submit" class="form__submit button">
        Авторизоваться
      </button>
      <a href="/sign-up" class="link form__link">Нет аккаунта?</a>
    </div>
    <div class="error"></div>
  </form>
`;
