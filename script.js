var display = document.getElementById("display") 
const buttons = document.querySelectorAll(".btn");

function pressed(value){
    display.textContent += value;
    mudarCor(value);
}

function clearAll(){
    display.textContent = ""
}


function backspace() {
  display.textContent = display.textContent.slice(0, -1);
}


function mudarCor(value) {
  removeHighlight();

  buttons.forEach(btn => {
    if (btn.textContent.trim() === value.trim()) {

        btn.style.background = "red";
        btn.style.color = "white";
        setTimeout(() => {
        btn.style.background = "linear-gradient(gray, rgb(2,2,2))";
        btn.style.color = "#fff";
      }, 150);
    }
  });
}

function calculate(){
display.textContent = eval(display.textContent)
}


 document.addEventListener("keydown", function (event) {
    const key = event.key;

    if (/[0-9+\-*/.]/.test(key)) {
      display.textContent += key;
    }
    // Enter → calcular
    else if (key === "Enter") {
      event.preventDefault(); 
      calculate();
    }
    
    else if (key === "Backspace") {
      event.preventDefault();
      backspace();
    }
    // Esc → limpar tudo
    else if (key === "Escape") {
      clearAll();
    }
    mudarCor(key);
  });

  function removeHighlight() {
  buttons.forEach(btn => {
    btn.style.background = "linear-gradient(gray, rgb(2,2,2))";
    btn.style.color = "#fff";
  });
}