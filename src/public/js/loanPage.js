import { getInformationLoan } from "./modules/getInformationDom.js";
import { cLoanBooks } from "./modules/modCleanInputs.js";
import { addLoan } from "./modules/petions.js";

const button_Send = document.getElementById('button-send');


button_Send.addEventListener('click', () => {
    let loanData = getInformationLoan();

    addLoan(loanData);
    cLoanBooks();
});