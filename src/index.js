import "./styles.css";

// getting all the DOM elements
var bdate = document.getElementById("bdate");
var enter = document.getElementById("enter");
var lnum = document.getElementById("lnum");
var res = document.getElementById("result");

// event listner on the 'Find' button
enter.addEventListener("click", handleEnter);

// calculates sum of a digit passed as a string "456" --> 15
function calcSum(s) {
  let num = parseInt(s, 10);
  let total = 0;
  while (num > 0) {
    total += Math.floor(num % 10);
    num = Math.floor(num / 10);
  }
  return total;
}

// finds sum of all the digits in a date and updates UI to show results
function handleEnter() {
  // console.log(bdate.value);
  // 2021-09-02 --> ["2021", "09", "02"] --> [5, 9, 1]
  var date = bdate.value.split("-").map((e) => calcSum(e));
  // console.log(date);
  // this is how the cool kids do it [5, 9, 1] --> 5+9+1 --> 15
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
