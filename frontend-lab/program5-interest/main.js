import { calculateInterest } from "./interest.js";
import { showResult, showError } from "./display.js";

const button = document.getElementById("calcBtn");

button.addEventListener("click", () => {
    const principal = Number(document.getElementById("principal").value);
    const rate = Number(document.getElementById("rate").value);
    const time = Number(document.getElementById("time").value);

    if (principal <= 0 || rate <= 0 || time <= 0) {
        showError("Please enter valid positive numbers in all fields.");
        return;
    }

    const interest = calculateInterest(principal, rate, time);
    const total = principal + interest;

    showResult(interest, total);
});
