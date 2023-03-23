function show(num) {
  result.value += num;
}

function calculate() {
  result.value = eval(result.value);
}

function root() {
  const num = parseFloat(result.value);
  result.value = Math.sqrt(result.value);
}

function clr() {
  result.value = "";
}

function bk() {
  result.value = result.value.slice(0, -1);
}
