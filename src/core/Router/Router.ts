import Route from './Route';
import Component from "../Component";
import { defaultProps } from "../../utils/defaultProps";
import { AuthAPI } from "../../api";

export default class Router {

  static _instance: Router;

  rootQuery;
  routes: Route[];
  history;
  currentRoute: Route | null;

  constructor(rootQuery: string = '') {

    if(Router._instance)
      return Router._instance;

    this.routes = [];
    this.history = window.history;
    this.currentRoute = null;
    this.rootQuery = rootQuery;

    Router._instance = this;
  }

  use(path: string, component: Component, tag = 'div', props = {}) {
    this.routes.push(new Route(path, component, tag, { ...props, ...defaultProps, rootQuery: this.rootQuery }));
    return this;
  }

  start() {
    window.onpopstate = (() => { this._onRoute(window.location.pathname) });
    this._onRoute(window.location.pathname);
    if(window.location.pathname === '/')
      this.go('/auth')
  }

  go(path: string | null) {
    this.history?.pushState({}, '', path);
    this._onRoute(path);
  }

  back() {
    window.history.back();
  }

  forward() {
    window.history.forward();
  }

  _onRoute(path: string | null) {
    const route = this.getRoute(path);

    if(!route)
      return;

    if(this.currentRoute && this.currentRoute !== route)
      this.currentRoute.leave();
    this.currentRoute = route;

    AuthAPI.getUserInfo().then(
      resGetUser => {
        if(resGetUser?.status !== 200 && path !== '/sign-up' && path !== '/auth')
          this.go('/auth')
      }
    );

    route.render();
  }

  getRoute(path: string | null) {
    return this.routes.find(route => route.match(path as string));
  }
}