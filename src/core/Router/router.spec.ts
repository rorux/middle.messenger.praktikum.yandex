import Router from "./index";
import EmptyLayout from "../../layout/Empty";
import { expect } from "chai";


describe('Checking Router', () => {
  it('should return number of routes correctly', () => {
    const router = new Router('#root');

    router
      .use('/auth', EmptyLayout, 'div', {content: 'auth'})
      .use('/sign-up', EmptyLayout, 'div', {content: 'signup'})

    expect(router.routes.length).to.eq(2)
  })
});