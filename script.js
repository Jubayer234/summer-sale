let total = 0;
const applyBtn = document.getElementById("apply-btn");
const buyBtn = document.getElementById("buy-btn");
applyBtn.disabled = true;
buyBtn.disabled = true;

function handleClickBtn(call) {
  const getItemTitle = call.parentNode.childNodes[3].innerText;
  const itemsName = document.getElementById("items");
  const li = document.createElement("li");
  const itemList = itemsName.getElementsByTagName("li").length + 1;
  li.innerText = itemList + ". " + getItemTitle;
  itemsName.appendChild(li);

  const getThePrice = call.parentNode.childNodes[5].innerText.split(" ")[0];
  total = parseFloat(total) + parseFloat(getThePrice);
  const totalPrice = document.getElementById("total-price");
  totalPrice.innerText = total;

  totalPrice.innerText = total;

  if (parseFloat(totalPrice.innerText) >= 0) {
    buyBtn.disabled = false;
  }
  if(parseFloat(totalPrice.innerText) >=200){
    applyBtn.disabled =false;
  }
}

document.getElementById("apply-btn").addEventListener("click", function () {
  const applyTheCoupon = document.getElementById("coupon");
  const discountPrice = document.getElementById("get-discount");
  const getTotalOutput = document.getElementById("get-total");

  if (applyTheCoupon.value == "SELL200") {
    applyTheCoupon.value = "";
    let latestPrice = total - (total * 2) / 10;
    const remainder = total * 0.2;
    discountPrice.innerText = remainder;
    getTotalOutput.innerText = latestPrice;
  } else {
    alert("Please enter a valid code");
    applyTheCoupon.value = "";
  }
});

function btnReload() {
  location.reload();
}