import { createRoot, type Root } from "react-dom/client";
import App from "./App";

let root: Root | null = null;

export function mount(el: HTMLElement) {
  if (!root) root = createRoot(el);
  root.render(<App />);
  return root;
}

export function unmount() {
  if (root) {
    root.unmount();
    root = null;
  }
}
