const donateBtns = document.getElementsByClassName("donateBtn");

for(let btn of donateBtns) {
  btn.addEventListener("click", function(event) {
    const parentEle = event.target.parentElement.parentElement;
    addDonateAmount(parentEle);
    decreaseBalance(parentEle);
  });
};

function addDonateAmount(parentEle) {
    const input = parentEle.querySelector(".input");
    const donateBalance = parentEle.querySelector(".donateBalance");
    donateBalance.innerText = getSumResult(input.value, donateBalance.innerText);
};

function decreaseBalance(parentEle) {
  const input = parentEle.querySelector(".input");
  const balance = getElementById("balance");
  balance.innerText = getSubtractionResult(balance.innerText, input.value);
  input.value = ""; //reset the input value
};