import pages from "./pages";
import "./style.scss";

const uri = window.location.pathname.replace("/", "");

if (pages.hasOwnProperty(uri)) {
  document.getElementById("root").innerHTML = pages[uri];
} else {
  document.getElementById("root").innerHTML = pages["not-found"];
}
