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
        <span class="chat-item__text">
          {{#if myMessage}}
            <span class="chat-item__me">Вы: </span>
          {{/if}}
          {{lastMessage}}
        </span>
      </div>
      <div class="chat-item__params">
        <span class="chat-item__time">{{time}}</span>
        {{#if countUnread}}
          <span class="chat-item__count">{{countUnread}}</span>
        {{/if}}
      </div>
    </div>
  </div>
`;