output = document.getElementById("output");
function disp_num(input) {
    output.value += input;  
}
function rem_num() {
  output.value = output.value.slice(0, output.value.length - 1);
}
function clear_disp() {
  output.value = "";
}
function final() {
  if (output.value != "") {
    output.value = eval(output.value);
  } else {
    output.value = "write something first";
  }
}
function theme(){
  let element = document.querySelector('.main');
  element.classList.toggle("dark");
}
