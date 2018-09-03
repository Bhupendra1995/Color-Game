window.setTimeout(function(){
  var numSquares = 6;
  var colors =generateRandomColor(numSquares);
  var messageDisplay = document.querySelector("#message");
  var pickedColor = pickColor();
  var h1=document.querySelector("h1");
  //Selecting the span element which displays the color name
  var colorDisplay = document.querySelector("#colorDisplay");
  var square = document.querySelectorAll(".square");
  var resetButton = document.querySelector("#reset");
  var modeButton = document.querySelectorAll(".mode");

  for(var i=0;i<modeButton.length;i++){
    modeButton[i].addEventListener("click",function(){
      modeButton[0].classList.remove("selected");
      modeButton[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares=3: numSquares=6;
      reset();
    });
  }

  function reset(){
    colors = generateRandomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent=pickedColor;
    messageDisplay.textContent="";
    for(var i=0;i<square.length;i++){
      if(colors[i]){
        square[i].style.display="block";
        square[i].style.backgroundColor=colors[i];
      }else {
        square[i].style.display="none";
      }
    }
    h1.style.backgroundColor="steelblue";
    resetButton.textContent="New Colors";
  }

  // easyBtn.addEventListener("click",function(){
  //   easyBtn.classList.add("selected");
  //   hardBtn.classList.remove("selected");
  //   numSquares = 3;
  //   colors = generateRandomColor(numSquares);
  //   pickedColor = pickColor();
  //   colorDisplay.textContent = pickedColor;
  //   for(var i=0;i<square.length;i++){
  //     if(colors[i]){
  //       square[i].style.backgroundColor = colors[i];
  //     }else {
  //       square[i].style.display = "none";
  //     }
  //   }
  // });
  // hardBtn.addEventListener("click",function(){
  //   easyBtn.classList.remove("selected");
  //   hardBtn.classList.add("selected");
  //   numSquares = 6;
  //   colors = generateRandomColor(numSquares);
  //   pickedColor = pickColor();
  //   colorDisplay.textContent = pickedColor;
  //   for(var i=0;i<square.length;i++){
  //     square[i].style.backgroundColor = colors[i];
  //     square[i].style.display = "block";
  //   }
  // });


  resetButton.addEventListener("click",function(){
    reset();
    // colors = generateRandomColor(numSquares);
    // pickedColor = pickColor();
    // colorDisplay.textContent=pickedColor;
    // messageDisplay.textContent="";
    // for(var i=0;i<square.length;i++){
    //   square[i].style.backgroundColor=colors[i];
    // }
    // h1.style.backgroundColor="steelblue";
    // this.textContent="New Colors";
  });
  //change the content of span element
  colorDisplay.textContent=pickedColor;
  for(var i=0; i<colors.length;i++){
    //intial color
    square[i].style.backgroundColor=colors[i];
    //change color on clicking
    square[i].addEventListener("click",function(){
    var clickedColor = this.style.backgroundColor;
    if(clickedColor===pickedColor){
      changeColor(pickedColor);
      resetButton.textContent="Play Again ?";
      messageDisplay.textContent="Correct!";
      h1.style.backgroundColor=pickedColor;
    }else {
      this.style.backgroundColor="#232323";
      messageDisplay.textContent="Try again!";
    }
    });
  }
  function changeColor(color){
    for(var i=0;i<square.length;i++){
      square[i].style.backgroundColor=color;
    }
  }
  function pickColor(){
    var random = Math.floor(Math.random()*colors.length)
    return colors[random];
  }
  function generateRandomColor(num){
    //make an array
    var arr = [];
    //iterarte the loop
    for(var i=0;i<num;i++){
      arr.push(randomColor());
    }
    //return array
    return arr;
  }
  function randomColor(){
    //generate value for r
    var r= Math.floor(Math.random()*256);
    //generate value for g
    var g= Math.floor(Math.random()*256);
    //generate value for b
    var b= Math.floor(Math.random()*256);
    return "rgb(" + r +", " + g +", " + b + ")";
  }

},250);
