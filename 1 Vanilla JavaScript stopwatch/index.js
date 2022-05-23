window.onload = () => {
  var appendSecond = document.getElementById("second");
  var appendTens = document.getElementById("tens");

  var startButton = document.getElementById("start-btn");
  var stopButton = document.getElementById("stop-btn");
  var resetButton = document.getElementById("reset-btn");
  var second = 0;
  var tens = 0;
  var interval;

  startButton.onclick = () => {
    console.log("you have to  click start button");
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  };
  stopButton.onclick = () => {
    console.log("you have to  click stop button");
    clearInterval(interval);

    set;
  };
  resetButton.onclick = () => {
    console.log("you have to  click reset  button");
    tens = 0;
    second = 0;
    appendTens.innerHTML = "0" + tens;
    appendSecond.innerHTML = "0" + second;
  };

  function startTimer() {
    tens++;
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 

    if (tens > 99) {
      second++;
      appendSecond.innerHTML = "0" + second;
      tens = 0;
      appendTens.innerHTML = tens;
    }
    if (second > 9) {
      appendSecond.innerHTML = second;
    }
  }
};
