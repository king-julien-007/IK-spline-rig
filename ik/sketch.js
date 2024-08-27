let tailer;

function setup() {
  createCanvas(1920, 1080);

  let point = new p5.Vector(300, 200);

  let current = new Segment(point, 10, 0);
  for (let i = 0; i < 20; i++) {
    let next = new Segment(current, 10, i);
    current.child = next;
    current = next;
  }
  tailer = current;
}

function draw() {
  background(51);

  tailer.follow(mouseX, mouseY);
  tailer.update();
  tailer.show();

  let next = tailer.par;
  while (next) {
    next.follow();
    next.update();
    next.show();
    next = next.par;
  }
}
