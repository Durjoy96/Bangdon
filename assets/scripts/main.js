const donateBtns = document.getElementsByClassName("donateBtn");

for(let btn of donateBtns) {
  btn.addEventListener("click", function(event) {
    const parentEle = event.target.parentElement.parentElement;
    addDonateAmount(parentEle);
  });
};

function addDonateAmount(parentEle) {
    const inputValue = Number(document.querySelector(".input").value);
    const donateBalance = parentEle.querySelector(".donateBalance");
    donateBalance.innerText = getSumResult(inputValue, donateBalance.innerText);
};
