let buttons = document.querySelectorAll("button");
let display = document.querySelector("#display");

buttons.forEach((item) =>{
  item.onclick = () => {
    if(item.id == "clear" ){
      display.innerText = "";
    } else if(item.id == "backspace"){
      let nem = display.innerText.toString();
      display.innerText = nem.substr(0, nem.length - 1);
    } else if(display.innerText != " " && item.id == "equal"){
      display.innerText = eval(display.innerText);
    } else if( display.innerText == "" && item.id == "equal" ){
      display.innerText = "Empty";
      setTimeout(() => (display.innerText = ""),2000);
    } else{
      display.innerText += item.id;
    }
  }
})