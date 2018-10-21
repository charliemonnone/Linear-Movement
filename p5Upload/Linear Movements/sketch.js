let shape_one;
let n = 0;
let x = 0;
let y = 0;
let xloc,yloc;

function setup() {
  createCanvas(500, 500);
  // background(230, 130, 83, 10);
  stroke(0);
  strokeCap(ROUND);
}

function draw() {

  // background(230, 183, 50, 10);
// right side rects
  for (var i = 0; i < 4; i++) {
    var temp = new Shape(0 + i * width / 4, height - i * 100,
      0 + i * width / 4, height - 100 - i * 100,
      width, height - 100 - i * 100,
      width, height - i * 100,
      true);

    temp.show();
  }

// left side rects
  for (var i = 0; i < 4; i++) {

    var temp = new Shape(0, 0 + i * 100,
      0, 0 + 100 + i * 100,
      width - i * width / 4, 0 + 100 + i * 100,
      width - i * width / 4, 0 + i * 100,
      false);
    temp.show();
  }


// left set of rect movement
  for (var i = 0; i < 4; i++) {
    strokeCap(ROUND);
    strokeWeight(4);
    stroke(0);
    xloc = map(x, 0, width, 0 + i * width / 4, width)
    if (xloc >= width) x = i * width / 4;
    line(xloc, height - i * 100, xloc, height - 100 - i * 100);
    x += 1;
    
  }

  for (var i = 0; i < 4; i++) {
    strokeCap(ROUND);
    strokeWeight(4);
    stroke(0);
    yloc = map(y, 0, height, 0 + i * 100, 0 + 100 + i * 100);
    if (yloc >= 100 + i * height / 4) y = i * height / 4;
    line(0, yloc,  width - i * width / 4, yloc);
    y += 0.7;
    
  }





}



function Shape(x1, y1, x2, y2, x3, y3, x4, y4, fill_sel) {
  this.show = function () {
    if (fill_sel) fill(250, 130, 70, 3);
    // else fill(230, 183, 50, 15);
    else fill(250, 130, 70, 3)
    strokeWeight(4);
    stroke(0);
    strokeCap(ROUND);

    beginShape();

    vertex(x1, y1);
    vertex(x2, y2);
    vertex(x3, y3);
    vertex(x4, y4);

    endShape(CLOSE);
  }

}