import Router from "./index";
import EmptyLayout from "../../layout/Empty";
import 'jsdom-global/register';

describe('Checking Router', () => {
  it('should return number of routes correctly', () => {
    const router = new Router('#root');

    router
      //@ts-ignore
      .use('/auth', EmptyLayout, 'div', {content: 'auth'})
      //@ts-ignore
      .use('/sign-up', EmptyLayout, 'div', {content: 'signup'})

    expect(router.routes.length).toEqual(2)
  })
});