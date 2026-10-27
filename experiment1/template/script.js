function setup(){
    // function that runs only once
    createCanvas(800, 500);


}

function draw(){
    // function that runs repeatedly
    background(73)
    //we call the function 
    stackOfCircles 

    for (let i = 0; i < 10; i= i+1){
        fill("#ff00dd");

        circle(200,i*10,20);
    }
    // we create a function to display a stack of circles
    function stackOfCircles(x, y, numCircles){ 
        for (let i = 0; i < 10; i= i+1){
            circle(200,i*10,20);
        }
    }
}
//a function that runs when the mouse is pressed
function mousePressed(){
    fill("#00FF00");
    circle(mouseX, mouseY, 50);
}

//variable name 
let randomButton = document.querySelector("#randomize");

randomButton.addEventListener("click", function() {
    background(73);
    generateStacks(5);
});

function setup() {
    // Function that runs only once
    createCanvas(800, 500);

    // To get rid of borders
    noStroke();
    background(73);

    generateStacks(stackamount);
}

function draw() {
    // Display a vertical line of pink circles
    fill("#ff00dd");

    for (let i = 0; i < 10; i = i + 1) {
        circle(200, i * 10, 20);
    }
}

// Function to generate 10 random stacks
function generateStacks() {
    for (let i = 0; i < 10; i = i + 1) {
        let randomX = random(0, 800);
        let randomY = random(0, 500);
        let randomColor = color(random(255), random(255), random(255));

        stackOfCircles(randomX, randomY, randomColor);
    }
}

// Function to display a stack of circles
function stackOfCircles(posX, posY, circleColor) {
    fill(circleColor);

    for (let i = 0; i < 10; i = i + 1) {
        circle(posX, posY + i * 10, 20);
    }
}