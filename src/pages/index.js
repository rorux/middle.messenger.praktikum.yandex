import chats from "./chats";
import auth from "./auth";
import signup from "./signup";
import profile from "./profile";
import editProfile from "./editProfile";
import editPassword from "./editPassword";
import serverError from "./serverError";
import notFound from "./notFound";

export default {
  "": chats(),
  auth: auth(),
  signup: signup(),
  profile: profile(),
  "edit-profile": editProfile(),
  "edit-password": editPassword(),
  "server-error": serverError(),
  "not-found": notFound(),
};
