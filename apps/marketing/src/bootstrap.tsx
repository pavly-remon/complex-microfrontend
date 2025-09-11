import App from "./App";
import ReactDOM from "react-dom";

const mount = (el: HTMLElement) => {
  ReactDOM.render(<App />, el);
};

// If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
