export default `
  <input
    class="form-edit__input"
    type="{{ type }}"
    name="{{ param }}"
    id="{{ param }}"
    placeholder=" "
    value="{{ value }}"
    {{#if disabled}} disabled {{/if}}
  />
  <label for="{{ param }}" class="form-edit__label"> {{ name }} </label>
  <div class="form__validation" id="{{param}}-validation"></div>
`;
