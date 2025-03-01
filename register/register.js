import { participantTemplate, successTemplate } from "./Templates.js";

document.addEventListener("DOMContentLoaded", () => {
    let participantCount = 1;
    const addButton = document.getElementById("add");
    const form = document.getElementById("registrationForm");
    const summary = document.getElementById("summary");

    addButton.addEventListener("click", () => {
        participantCount++;
        const newParticipantHTML = participantTemplate(participantCount);
        addButton.insertAdjacentHTML("beforebegin", newParticipantHTML);
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const totalFeesValue = totalFees();
        const adultName = document.getElementById("adult_name").value;
        form.style.display = "none";
        summary.innerHTML = successTemplate(adultName, participantCount, totalFeesValue);
        summary.style.display = "block";
    });

    function totalFees() {
        let feeElements = document.querySelectorAll("[id^=fee]");
        feeElements = [...feeElements];
        return feeElements.reduce((sum, feeInput) => sum + Number(feeInput.value || 0), 0);
    }
});
