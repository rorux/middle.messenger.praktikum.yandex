export default `
  <div class="chat-item__wrap">
    <div class="chat-item__container">
      <img
        class="chat-item__avatar"
        src="{{avatar}}"
        alt=""
        width="47"
        height="47"
      />
      <div class="chat-item__content">
        <span class="chat-item__person">{{name}}</span>
        <button class="button" id="activate-chat">Подключиться</button>
        <button class="button-red" id="delete-chat">Удалить</button>
      </div>
    </div>
  </div>
`;
