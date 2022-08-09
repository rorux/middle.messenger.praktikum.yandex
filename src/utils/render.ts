export default function render(query: string, component: any): void {
  const root = document.querySelector<HTMLElement>(query);

  if (root) {
    root.appendChild(component.getContent());
  }

  component.dispatchComponentDidMount();
}
