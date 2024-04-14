
/*
COMP 125 Lab 11 - Adding to an Array with mouse clicks
Step 1 - add a line of code to function mousePressed() that will add a new object to the array when the mouse is pressed. The first part (creating a new object where the mouse is pressed) is done for you. Just add the line that appends it to the array.
Step 2 - add comments explaining each line of code in this sketch.
*/
var dots = new Array(1);// create a new array of one element 

function setup() {// runs once
  createCanvas(500, 300); //creates p5 canvas size 
  dots[0] = new Dot(width/2, height/2);// initialize the dits array index 0 w a new instance of the dot class
}// end set up function

function draw() {// draw somethig 60 times a sec
  background(200);//set the background color
  
  for(let i = 0; i < dots.length; i++){//loop through the array
    dots[i].move(); //move each object
    dots[i].display(); // display each object
  }
  textSize(24);// set the text size
  fill(100, 0, 200);//text color
  text("'dots' array length: " + dots.length, 100, 100);// display the sixe of the array on screen

}
//end of draw
function mousePressed(){// when the mouse is clicked
  let obj = new Dot(mouseX, mouseY);//create a new dot object
  dots.push(obj);//dots is an arry, takes watever in paraphs and adds aray
  /* add a line of code that adds "obj" to the "dots" array. Use the .push() method of the dots array object to append the new "obj" to the end of an existing array. Check the Array.push() documentation first to make sure you are using it correctly.
  */
}
// end 


function Dot(X, Y){// constructor function
  
  this.x = X;// set the x propery fro the first argument
  this.y = Y;// set the y property from the second arg
  this.w = random (20, 50);// radom width
  this.sx = random(-5, 5);// set x speed 
  this.sy = random(-5, 5);//set y speed
  this.r = random(0, 255);// set red level 
  this.g = random(0, 255);// set green levl
  this.b = random(0, 255);// set blue level
  
  this.display = function(){// show object
    fill(this.r, this.g, this.b);//set the color
    ellipse(this.x, this.y, this.w, this.w);// draw a circle
  }//end display
  
  this.move = function(){// move the objet
    this.x += this.sx;//update hori location
    this.y += this.sy;//update vert location
    
    if (this.x < 0 || this.x > width){// if off screen horson
        this.sx *= -1;// change direction
    }//edn if
    if (this.y < 0 || this.y > height){// if off screen vert
        this.sy *= -1;//change direction
    }// end of if
  }//end move method
    
}// end of dot consttructor 
