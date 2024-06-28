import { modalContainer } from "./elementsDom.js";

export function showModalPage(server_Status) {
  if (server_Status === "ok") {
    modalContainer.style.display = "block";
  }
}
