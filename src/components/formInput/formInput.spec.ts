import formInput from "./index";
import 'jsdom-global/register';

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
    ).toEqual('Petr')
  })
});