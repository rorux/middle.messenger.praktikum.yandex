import Component from "./core/Component";
import pages from "./pages";
import { default as renderDOM } from "./utils/render";
import "./style.scss";

type TPages = {
  [index: string]: Component;
};

const pageList: TPages = pages;

const uri: string = window.location.pathname.replace("/", "");

if (pages.hasOwnProperty(uri)) {
  renderDOM("#root", pageList[uri]);
} else {
  renderDOM("#root", pageList["not-found"]);
}
