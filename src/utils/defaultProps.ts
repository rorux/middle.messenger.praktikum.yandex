import Router from "../core/Router";

export const defaultProps = {
  attr: { class: "content-wrap" },
  events: {
    click: (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t && t.getAttribute('href')) {
        (new Router()).go(t.getAttribute('href'));
        e.preventDefault();
        e.stopPropagation();
      }
    }
  }
}