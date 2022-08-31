export default `
  <select name="{{ param }}" id="{{ param }}">
    <option value="{{{ option1.id }}}">{{ option1.name }}</option>
    <option value="{{ option2.id }}">{{ option2.name }}</option>
    <option value="{{ option3.id }}">{{ option3.name }}</option>
  </select>
`;