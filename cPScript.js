var num = 6;
var colors =[];
var squares = document.querySelectorAll(".square");
var pickedColor;
var messageDisplay = document.querySelector("#message");
var colorDisplay = document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var scoreButton = document.querySelector(".score");
var display = document.querySelector("#display");
var score = 0;
var resetScore = document.querySelector(".reset");

init();

function init(){
    setupModeButtons();
    setupSquares();
    setupScore(); 
    reset();
}

function setupModeButtons(){
    for(var i =0; i< modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
    
            this.textContent === "Easy" ? num = 3: num=6;
    
            reset();
        });
    }
}

function setupScore(){
    scoreButton.addEventListener("click", function(){
        scoreButton.textContent = score;
    });
    function setupReset(){
        resetScore.addEventListener("click", function(){
            scoreButton.textContent = 0;
        })
    }
}

function setupSquares(){
    for(var i = 0; i<squares.length; i++){
        squares[i].addEventListener("click", function(){
        // alert("Clicked a square");
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            score += 10;
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
        });
    }
}

function reset(){
    colors = generateRandomColor(num);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";

    messageDisplay.textContent = "";
    scoreButton.textContent = "Score";
    for(var i = 0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "rgb(252, 115, 3)";
}

// easyBtn.addEventListener("click", function(){
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     colors = generateRandomColor(3);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         }else {
//             squares[i].style.display = "none" ;
//         }
//     }
// })

// hardBtn.addEventListener("click", function(){
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     colors = generateRandomColor(6);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// })

resetButton.addEventListener("click", function(){
    reset();
});

colorDisplay.textContent = pickedColor;

function changeColors(color){
    for (var i = 0; i <squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset(){
    colors = generateRandomColor(num);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";

    messageDisplay.textContent = "";
    for(var i = 0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}
// easyBtn.addEventListener("click", function(){
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     colors = generateRandomColor(3);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         }else {
//             squares[i].style.display = "none" ;
//         }
//     }
// })

// hardBtn.addEventListener("click", function(){
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     colors = generateRandomColor(6);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// })

resetButton.addEventListener("click", function(){
    reset();
});

colorDisplay.textContent = pickedColor;

function changeColors(color){
    for (var i = 0; i <squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

