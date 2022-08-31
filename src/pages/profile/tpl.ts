export default `
  <div class="form-edit" action="#">
  <form id="sendAvatar">
    <div class="form-edit__avatar form-edit__avatar_hover">
        <input type="file" name="avatar" id="avatar" />
        <label for="avatar" class="avatar-label">
          Выбрать новый аватар
        </label>
        <img src="{{avatarPicture}}" alt="" width="130" height="130" />
        <input type="submit" class="button form-edit__avatar-send" value="Изменить аватар" style="margin-bottom: 5px">
        <div class="success"></div>
        <div class="error"></div>
        <div class="form-edit__title">{{ displayName }}</div>
    </div>
  </form>

    {{{ formInputEditEmail }}}
    {{{ formInputEditLogin }}}
    {{{ formInputEditFirstName }}}
    {{{ formInputEditLastName }}}
    {{{ formInputEditDisplayName }}}
    {{{ formInputEditTel }}}

    <div class="form-edit__bottom">
      <a href="/edit-profile" class="link form-edit__link"
        >Изменить данные</a
      >
      <a href="/edit-password" class="link form-edit__link"
        >Изменить пароль</a
      >
      <a href="#" id="logout" class="link-red form-edit__link">Выйти</a>
    </div>
  </div>
`;
