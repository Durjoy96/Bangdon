const donateBtns = document.getElementsByClassName("donateBtn");

for (let btn of donateBtns) {
  btn.addEventListener("click", function (event) {
    const parentEle = event.target.parentElement.parentElement;
    getValidation(parentEle);
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

function getValidation(parentEle) {
  const input = parentEle.querySelector(".input");
  const balance = getElementById("balance");

  if (Number(input.value) > Number(balance.innerText) || isNaN(Number(input.value)) === true || input.value === "" || input.value.includes("-") === true) {
    alert("please input a valid amount");
  } else {
    addDonateAmount(parentEle); //add donate amount
    decreaseBalance(parentEle); //decrease balance
    getElementById("modal").showModal(); //show the modal
  };

};

