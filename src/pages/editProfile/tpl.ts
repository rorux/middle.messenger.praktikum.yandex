export default `
  <form class="form-edit" action="#">
    <div class="form-edit__avatar">
      <img src="{{avatarPicture}}" alt="" width="130" height="130" />
    </div>

    {{{ formInputEditEmail }}}
    {{{ formInputEditLogin }}}
    {{{ formInputEditFirstName }}}
    {{{ formInputEditLastName }}}
    {{{ formInputEditDisplayName }}}
    {{{ formInputEditTel }}}

    <div class="form-edit__bottom">
      <button type="submit" class="form-edit__submit button">
        Сохранить
      </button>
    </div>
    <div class="error"></div>
  </form>
`;
