import "./styles.css";

var bdate = document.getElementById("bdate");
var enter = document.getElementById("enter");
var lnum = document.getElementById("lnum");
var res = document.getElementById("result");

enter.addEventListener("click", handleEnter);

function handleEnter() {
  console.log(bdate.value);
  var date = bdate.value.split("-").map((e) => parseInt(e, 10));
  var t = date.reduce((total, num) => (total += num));
  var n = lnum.value;
  let isLucky = t % n === 0 ? true : false;
  if (isLucky) {
    res.innerHTML = "Birthday is Lucky!✌️";
  } else {
    res.innerHTML =
      "Birthday is Unlucky😦, share this site to 5 people for luck🥶";
  }
}
