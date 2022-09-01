import { expect } from "chai";
import formInput from "./index";

describe('Checking formInput Component', () => {
  it('should render correctly', () => {
    const formInputComponent = new formInput(
      'div',
      { name: 'Petr', param: 'password' }
    );
    expect(
      formInputComponent
        .render()
        .querySelector('.form__label')?.textContent?.trim()
    ).to.eq('Petr')
  })
});