import "./styles.css";

var bdate = document.getElementById("bdate");
var enter = document.getElementById("enter");
var lnum = document.getElementById("lnum");
var res = document.getElementById("result");

enter.addEventListener("click", handleEnter);

function calcSum(s) {
  let num = parseInt(s, 10);
  let total = 0;
  while (num > 0) {
    total += Math.floor(num % 10);
    num = Math.floor(num / 10);
  }
  return total;
}
function handleEnter() {
  // console.log(bdate.value);
  var date = bdate.value.split("-").map((e) => calcSum(e));
  // console.log(date);
  var t = date.reduce((total, num) => (total += num));
  var n = lnum.value;
  // console.log(t);
  let isLucky = t % n === 0 ? true : false;
  if (isLucky) {
    res.innerHTML = "Birthday is Lucky!✌️";
  } else {
    res.innerHTML =
      "Birthday is Unlucky😦, share this site to 5 people for luck🥶";
  }
}
