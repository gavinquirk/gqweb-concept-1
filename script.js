let p;

// Setup runs once when file is loaded
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  p = new Particle();
}

// Draw runs continuously to create animations
function draw() {
  background(55, 100, 144);
  p.update();
  p.draw();
}

class Particle {
  constructor() {
    // Position
    this.pos = createVector(random(width), random(height));
    // Velocity
    this.vel = createVector(random(-2, 2), random(-2, 2));
    // Size
    this.size = 10;
  }

  update() {
    this.pos.add(this.vel);
  }

  draw() {
    noStroke();
    fill('rgba(255, 255, 255, 0.5)');
    circle(this.pos.x, this.pos.y, this.size);
  }
}
