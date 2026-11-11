// module 2 - shows the result on the page
export const showResult = (interest, total) => {
    const result = document.getElementById("result");
    result.innerHTML = `Simple Interest = Rs. ${interest}<br>Total Amount = Rs. ${total}`;
};

export const showError = (message) => {
    const result = document.getElementById("result");
    result.textContent = message;
};
