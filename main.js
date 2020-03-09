const add = document.getElementById("btn-add");
const sub = document.getElementById("btn-sub");
const mul = document.getElementById("btn-mul");
const div = document.getElementById("btn-div");

add.onclick = () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = document.getElementById("result");
  calResult = num1 + num2;
  result.innerHTML = calResult;
}

sub.onclick = () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = document.getElementById("result");
  calResult = num1 - num2;
  result.innerHTML = calResult;
}

mul.onclick = () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = document.getElementById("result");
  calResult = num1 * num2;
  result.innerHTML = calResult;
}

div.onclick = () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = document.getElementById("result");
  calResult = num1 / num2;
  result.innerHTML = calResult;
}

