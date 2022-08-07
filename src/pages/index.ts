import EmptyLayout from "../layout/Empty";
import MainLayout from "../layout/Main";
import chatsSide from "./chats/chatsSide";
import chatArea from "./chats/chatArea";
import auth from "./auth";
import signup from "./signup";
import profile from "./profile";
import editProfile from "./editProfile";
import editPassword from "./editPassword";
import serverError from "./serverError";
import notFound from "./notFound";

export default {
  "": new MainLayout("div", {
    sidebar: chatsSide(),
    content: chatArea(),
    attr: { class: "content-wrap" },
  }),
  auth: new EmptyLayout("div", {
    content: auth(),
    attr: { class: "content-wrap" },
  }),
  signup: new EmptyLayout("div", {
    content: signup(),
    attr: { class: "content-wrap" },
  }),
  profile: new EmptyLayout("div", {
    content: profile(),
    attr: { class: "content-wrap" },
  }),
  "edit-profile": new EmptyLayout("div", {
    content: editProfile(),
    attr: { class: "content-wrap" },
  }),
  "edit-password": new EmptyLayout("div", {
    content: editPassword(),
    attr: { class: "content-wrap" },
  }),
  "server-error": new EmptyLayout("div", {
    content: serverError(),
    attr: { class: "content-wrap" },
  }),
  "not-found": new EmptyLayout("div", {
    content: notFound(),
    attr: { class: "content-wrap" },
  }),
};
