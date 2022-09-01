import Router from "./core/Router";
import EmptyLayout from "./layout/Empty";
import MainLayout from "./layout/Main";
import auth from "./pages/auth";
import signup from "./pages/signup";
import profile from "./pages/profile";
import editProfile from "./pages/editProfile";
import editPassword from "./pages/editPassword";
import serverError from "./pages/serverError";
import notFound from "./pages/notFound";
import chatsSide from "./pages/chats/chatsSide";
import chatArea from "./pages/chats/chatArea";
import "./style.scss";

(async() => {
  const router = new Router('#root');
  router
      .use('/auth', EmptyLayout, 'div', {content: auth()})
      .use('/sign-up', EmptyLayout, 'div', {content: signup()})
      .use('/settings', EmptyLayout, 'div', {content: profile()})
      .use('/edit-profile', EmptyLayout, 'div', {content: editProfile()})
      .use('/edit-password', EmptyLayout, 'div', {content: editPassword()})
      .use('/server-error', EmptyLayout, 'div', {content: serverError()})
      .use('/not-found', EmptyLayout, 'div', {content: notFound()})
      .use('/messenger', MainLayout, 'div', {sidebar: await chatsSide(), content: chatArea()})
      .start()}
)()