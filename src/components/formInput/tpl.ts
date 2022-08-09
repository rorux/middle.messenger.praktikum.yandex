export default `
  <input
    class="form__input"
    type="{{type}}"
    name="{{param}}"
    id="{{param}}"
    placeholder=" "
  />
  <label for="{{param}}" class="form__label"> {{name}} </label>
  <div class="form__validation" id="{{param}}-validation"></div>
`;
