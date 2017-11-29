//import java.awt.Color;

var pointCount = 15;
var circleSize = 225;
var pointSize = 20;
var points = [];

//float[][] points = new float[pointCount][2];
var connectionCount = 5;

//var c = color('magenta');
// var c2 = Color.cyan.getRGB();
// var c3 = Color.green.getRGB();
// var c4 = Color.magenta.getRGB();
// var c5 = Color.orange.getRGB();
// var c6 = Color.pink.getRGB();
// var c7 = Color.red.getRGB();
// var c8 = Color.yellow.getRGB();


var colors  = [];


function setup() {
  createCanvas(600, 600);
colors[0]=color('blue');
colors[1]=color('cyan');
colors[2]=color('green');
colors[3]=color('magenta');
colors[4]=color('orange');
colors[5]=color('pink');
colors[6]=color('red');
colors[7]=color('yellow');

colors[8]=color('fuchsia');
colors[9]=color('seaGreen');
colors[10]=color('blueViolet');
colors[11]=color('Sienna');
colors[12]=color('salmon');
colors[13]=color('Navy');
colors[14]=color('Moccasin');
colors[15]=color('Maroon');

}

function draw() {
  background(0);
  var points = [];
  for (var x = 0; x < pointCount; x++) {
    points[x] = [];
  }
  for (i = 0; i < pointCount; i++) {
    points[i][0] = width / 2 + circleSize * cos(i * 2 * PI / pointCount);
    points[i][1] = width / 2 + circleSize * sin(i * 2 * PI / pointCount);

   textAlign(CENTER, CENTER);
  }


  textSize(15);



  for (var i = 0; i < points.length; i++) {
    stroke(colors[i % colors.length]);
    for (var j = 1; j <= connectionCount - (i % (connectionCount + 1)); j++) {
      if (i + j < points.length) {
        line(points[i][0], points[i][1], points[i + j][0], points[i + j][1]);
      } else {
       // console.log("miss");
        line(points[i][0], points[i][1], width / 2, height / 2);
      }
     // console.log(points.length + " "+ (i + j));
    }
    fill(colors[i % colors.length]);
    strokeWeight(0);
    stroke(0);
    ellipse(points[i][0], points[i][1], pointSize, pointSize);
    strokeWeight(3);

     fill(colors[i % colors.length]);
    textSize(25);
    textAlign(CENTER, CENTER);
    text(connectionCount - (i % (connectionCount + 1)), width / 2 + (circleSize + 25) * cos(i * 2 * PI / pointCount), width / 2 + (circleSize + 25) * sin(i * 2 * PI / pointCount));
    
  }
  stroke(2);
  fill(255);
  textSize(15);
  text("Number Of Points: " + pointCount + "             (Use Left and Right arrow keys to change)", 240, 35);

  textSize(15);
  text("Number Of Connections: " + connectionCount + "     (Use Up and Down arrow keys to change)", 240, 15);


  textSize(15);
  text("Eli Schiff", width - 55, height - 15);
  fill(0);
}

function keyPressed() {

  if (keyCode == UP_ARROW && connectionCount < pointCount - 1) {
    connectionCount++;
  } else if (keyCode == DOWN_ARROW && connectionCount > 0) {
    connectionCount--;
  }

  if (keyCode == LEFT_ARROW && pointCount > 1) {
    pointCount--;
    if (connectionCount > pointCount - 1) {
      connectionCount = pointCount - 1;
    }
  } else if (keyCode == RIGHT_ARROW) {
    pointCount++;
  }
}