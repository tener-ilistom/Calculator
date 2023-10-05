const display = document.querySelector(".display");
const history = document.querySelector(".history");
const clear = document.querySelector(".clear");
const numDelete = document.querySelector(".delete");
const numberInput = document.querySelectorAll(".numbers");
const equasions = document.querySelectorAll(".eq");
const equals = document.querySelector(".equals");

let A;
let B;
let myEq;
let answer;

numberInput.forEach((number) => {
  number.addEventListener("click", () => {
    display.innerText += number.innerText;
    if (A && myEq) {
      B = Number(display.innerText);
    } else {
      A = Number(display.innerText);
    }
  });
});

equasions.forEach((eq) => {
  eq.addEventListener("click", () => {
    myEq = eq.getAttribute("value");
    if (myEq === "√") {
      answer = eval(A ** 0.5);
      display.innerText = answer;
      history.innerText = `${myEq}${A}`;
      A = answer;
      answer = 0;
    } else if (myEq === "²") {
      answer = eval(A * A);
      display.innerText = answer;
      history.innerText = `${A}${myEq}`;
      A = answer;
      answer = 0;
    } else if (A && B && myEq) {
      answer = eval(A + myEq + B);
      display.innerText = answer;
      history.innerText = `${answer} ${myEq}`;
      A = answer;
      B = 0;
      answer = 0;
      display.innerText = "";
    } else {
      display.innerText = "";
      history.innerText = `${A} ${myEq}`;
    }
  });
});

equals.addEventListener("click", () => {
  if (!A && !B && !myEq) {
    return;
  } else if (!answer) {
    answer = eval(A + myEq + B);
  } else {
    answer = eval(answer + myEq + B);
  }
  history.innerText = `${answer} ${myEq} ${B} =`;
  A = answer;
  display.innerText = answer;
});

numDelete.addEventListener("click", () => {
  if (display.innerText) {
    display.innerText = display.innerText.slice(0, -1);
    A = display.innerText;
  } else return;
});

clear.addEventListener("click", () => {
  A = 0;
  B = 0;
  answer = 0;
  myEq = "";
  display.innerText = "";
  history.innerText = "";
});
