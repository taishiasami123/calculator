const add = document.getElementById("btn-add");
const sub = document.getElementById("btn-sub");
const mul = document.getElementById("btn-mul");
const div = document.getElementById("btn-div");
const result = document.getElementById("result");

add.onclick = () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  calResult = num1 + num2;
  result.innerHTML = calResult;
}

sub.onclick = () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  calResult = num1 - num2;
  result.innerHTML = calResult;
}

mul.onclick = () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  calResult = num1 * num2;
  result.innerHTML = calResult;
}

div.onclick = () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  if (num2 == 0) {
    result.innerHTML = "<span style='color: red'>0で割ることはできません！</span>"
  } else {
    calResult = num1 / num2;
    result.innerHTML = calResult;
  }
}

