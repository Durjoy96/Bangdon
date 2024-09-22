const donationBtn = getElementById("donationBtn");
const donationContainer = getElementById("donationContainer");
const historyBtn = getElementById("historyBtn");
const historyContainer = getElementById("historyContainer");

historyBtn.addEventListener("click", function () {

    classAdd(historyBtn, "bg-primary");
    classAdd(historyBtn, "text-primary_content");
    classRemove(historyBtn, "bg-transparent");
    classRemove(historyBtn, "text-base_content_secondary");
    classRemove(historyBtn, "border-2");
    classRemove(historyBtn, "border-base_content/30");

    classRemove(donationBtn, "bg-primary");
    classRemove(donationBtn, "text-primary_content");
    classAdd(donationBtn, "bg-transparent");
    classAdd(donationBtn, "text-base_content_secondary");
    classAdd(donationBtn, "border-2");
    classAdd(donationBtn, "border-base_content/30");


    //hide donation container
    classAdd(donationContainer, "hidden");

    //show history container
    classRemove(historyContainer, "hidden");
});

donationBtn.addEventListener("click", function () {
    classAdd(donationBtn, "bg-primary");
    classAdd(donationBtn, "text-primary_content");
    classRemove(donationBtn, "bg-transparent");
    classRemove(donationBtn, "text-base_content_secondary");
    classRemove(donationBtn, "border-2");
    classRemove(donationBtn, "border-base_content/30");

    classRemove(historyBtn, "bg-primary");
    classRemove(historyBtn, "text-primary_content");
    classAdd(historyBtn, "bg-transparent");
    classAdd(historyBtn, "text-base_content_secondary");
    classAdd(historyBtn, "border-2");
    classAdd(historyBtn, "border-base_content/30");

    //hide donation container
    classAdd(historyContainer, "hidden");

    //show history container
    classRemove(donationContainer, "hidden");
});
