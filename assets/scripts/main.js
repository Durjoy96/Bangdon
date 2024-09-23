const donateBtns = document.getElementsByClassName("donateBtn");

for (let btn of donateBtns) {
  btn.addEventListener("click", function (event) {
    const parentEle = event.target.parentElement.parentElement;
    getValidation(parentEle);
    addHistory(parentEle);
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

//history 
function addHistory(parentEle) {
  const historyContainer = getElementById("historyContainer");
  const input = parentEle.querySelector(".input");
  const cardTitle = parentEle.querySelector(".card-title");
  const date = new Date();

  historyContainer.innerHTML += `
   <div class="bg-base_200 border border-base_content/10 rounded-2xl p-5 md:p-6 lg:p-8">
        <h2 class="text-lg font-bold text-base_content md:text-xl">${input.value} Taka is Donated for
          ${cardTitle.innerText}</h2>
        <p class="text-sm font-light text-base_content_secondary mt-2 md:mt-4 md:text-base">Date : ${date}</p>
    </div>
  `;

  input.value = ""; //reset the input value
};

