let display = document.getElementById('output');
function appendvalue(a){
  display.value += a;
}
function allclear(){
  display.value = "";
}
function oneclear(){
  display.value = display.value.slice(0,-1);
}
function result(){
  try{
    display.value = eval(display.value);
  }
  catch{
    alert("Invalid Input");
    display.value = "";
  }
}