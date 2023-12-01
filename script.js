const inputfield = document.getElementById("inputSpace");
const calculator = document.getElementsByClassName("calculator");

function display(num){
    inputfield.value += num;
}
function clean(){
    inputfield.value = '';
}

function del(){
    inputfield.value = inputfield.value.slice(0,-1);
}



function calculate(){
   inputfield.value= eval(inputfield.value);
  
}



// save data on the Browser


