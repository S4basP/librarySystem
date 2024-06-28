import { getInformationLoan } from "./modules/getInformationDom.js";
import { cLoanBooks } from "./modules/modCleanInputs.js";
import { addLoan } from "./modules/petions.js";

const button_Send = document.getElementById("button-send");
const btnContainerModal = document.getElementById("button-modal");

button_Send.addEventListener("click", () => {
  let loanData = getInformationLoan();

  addLoan(loanData);
  cLoanBooks();
});

btnContainerModal.addEventListener("click", () => {
  window.location.href = "/home";
});
