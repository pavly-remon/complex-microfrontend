import { mount } from "marketing/mountApp";
import "./index.css";

const container = document.querySelector("#container");
if (container) {
  const appTitle = document.createElement("a");
  appTitle.classList.add("app-title");
  appTitle.href = "/";
  appTitle.innerText = "App";
  container.appendChild(appTitle);
  const loginLink = document.createElement("a");
  loginLink.classList.add("login-link");
  loginLink.href = "/login";
  loginLink.innerText = "Login";
  container.appendChild(loginLink);
}
mount(document.querySelector("#root"));
