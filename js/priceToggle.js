const PRICE_TOGGLE = document.getElementById("price-toggle");
const ANUAL_LABEL = document.querySelector(".annualLabel");
const MONTHLY_LABEL = document.querySelector(".monthlyLabel");
const PRICES = document.querySelectorAll(".price");

PRICE_TOGGLE.addEventListener("click", () => {
    if (PRICE_TOGGLE.style.justifyContent == "flex-end") {
        PRICE_TOGGLE.style.justifyContent = "flex-start";

        PRICES[0].innerText = "199.99";
        PRICES[1].innerText = "249.99";
        PRICES[2].innerText = "399.99";
    } else {
        PRICE_TOGGLE.style.justifyContent = "flex-end";

        PRICES[0].innerText = "19.99";
        PRICES[1].innerText = "24.99";
        PRICES[2].innerText = "39.99";
    }
});

ANUAL_LABEL.addEventListener("click", () => {
    // set the correct position for the circle element according to the label
    PRICE_TOGGLE.style.justifyContent = "flex-start";

    // if the circle is in the correct position, --> change the position so that the PRICE_TOGGLE event listener function will keep the circle in the correct place. this makes it so when you click on one of the labels, it doesn't keep toggling the circle. it will remain in place according to which label is clicked
    if (PRICE_TOGGLE.style.justifyContent == "flex-start") {
        PRICE_TOGGLE.style.justifyContent = "flex-end";
    }
});

MONTHLY_LABEL.addEventListener("click", () => {
    PRICE_TOGGLE.style.justifyContent = "flex-end";

    if (PRICE_TOGGLE.style.justifyContent == "flex-end") {
        PRICE_TOGGLE.style.justifyContent = "flex-start";
    }
});
