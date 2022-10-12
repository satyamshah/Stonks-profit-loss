const initialPrice = document.querySelector("#initial-price")
const quantityOfStock = document.querySelector("#quantity-of-stocks")
const currentPrice = document.querySelector("#current-price")
const checkButton = document.querySelector("#check-btn")
const output = document.querySelector("#output")
const element = document.querySelector('Body');


const showMessage = (message) => output.innerText = message;

function calculateProfitOrLoss(initial, current, quantity) {
    if(initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / (initial*quantity)) * 100;
        lossPercentage = lossPercentage.toFixed(2);
        element.style.backgroundColor = 'red';
        showMessage("Oops! You faced a loss of Rs." + loss + " and the loss percentage is " + lossPercentage + "%.")
        
    } else if(current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / (initial*quantity)) * 100;
        profitPercentage = profitPercentage.toFixed(2);
        element.style.backgroundColor = 'green';
        showMessage("Yay!!! You got a profit of Rs." + profit + " and the profit percentage is " + profitPercentage + "%.")
    } else {
        showMessage("Hehe! no pain no gain.")
        element.style.backgroundColor = 'white';
    }
}

checkButton.addEventListener("click", function checkProfitOrLossHandler() {
    if(initialPrice.value && currentPrice.value && quantityOfStock.value)
    {
        if (Number(initialPrice.value) >= 0 && Number(currentPrice.value) >= 0 && Number(quantityOfStock.value)>=0) 
        {
            calculateProfitOrLoss(Number(initialPrice.value), Number(currentPrice.value), Number(quantityOfStock.value))
        } else
        {
          showMessage("Price or Quantity cannot be negative/Zero");
        }
    } else {
        showMessage("Please enter all the inputs")
    }
})