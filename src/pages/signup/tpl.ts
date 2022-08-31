export default `
  <form class="form" action="#">
    <div class="form__top">
      <span class="title form__title">Регистрация</span>
      {{{ formInputEmail }}}
      {{{ formInputLogin }}}
      {{{ formInputFirstName }}}
      {{{ formInputSecondName }}}
      {{{ formInputTel }}}
      {{{ formInputPassword }}}
      {{{ formInputPasswordAgain }}}
    </div>
    <div class="form__bottom">
      <button type="submit" class="form__submit button">
        Зарегистрироваться
      </button>
      <a href="/auth" class="link form__link">Войти</a>
    </div>
    <div class="error"></div>
  </form>
`;
