import Sketch from "react-p5";

const MyCanvas = () => {
  let particles = [];

  const PARTICLE_COUNT = 200;
  const EDGE_TRIGGER_DISTANCE = 30;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
    p5.canvas.style.position = "fixed";
    p5.canvas.style.top = "0";
    p5.canvas.style.left = "0";
    p5.canvas.style.zIndex = "-1";

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle(p5));
    }
  };

  const draw = (p5) => {
    p5.clear();
    p5.background(15, 15, 30, 240);

    for (let particle of particles) {
      particle.update(p5);
      particle.display(p5);
    }
  };

  const removeCanvas = (p5) => {
    p5.remove();
  };

  class Particle {
    constructor(p5) {
      this.reset(p5);
    }

    reset(p5) {
      this.x = p5.random(p5.width);
      this.y = p5.random(p5.height);
      this.vx = p5.random(-0.2, 0.2);
      this.vy = p5.random(-0.2, 0.2);
      this.size = p5.random(2, 4);
      this.alpha = p5.random(100, 255);
      this.isShooting = false;
      this.shootDirection = p5.random([[-1, 0], [1, 0], [0, -1], [0, 1]]);
      this.starLife = 0;
    }

    update(p5) {
      if (!this.isShooting) {
        
        this.x += this.vx;
        this.y += this.vy;

        const dx = this.x - p5.mouseX;
        const dy = this.y - p5.mouseY;
        const dist = p5.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          this.vx += dx * 0.0005;
          this.vy += dy * 0.0005;
        }
        else{
          if (this.vx > 0.2 || this.vx < -0.2) this.vx *= 0.95;
          if (this.vy > 0.2 || this.vy < -0.2) this.vy *= 0.95;
        }

        if (
          this.x < EDGE_TRIGGER_DISTANCE ||
          this.x > p5.width - EDGE_TRIGGER_DISTANCE ||
          this.y < EDGE_TRIGGER_DISTANCE ||
          this.y > p5.height - EDGE_TRIGGER_DISTANCE
        ) {
          this.isShooting = true;
          this.starLife = 100;
        }
      } else {
        this.x += this.shootDirection[0] * 4;
        this.y += this.shootDirection[1] * 4;
        this.starLife--;

        if (this.starLife <= 0 || this.outOfBounds(p5)) {
          this.reset(p5);
        }
      }
    }

    outOfBounds(p5) {
      return (
        this.x < -50 || this.x > p5.width + 50 || this.y < -50 || this.y > p5.height + 50
      );
    }

    display(p5) {
      if (this.isShooting) {
        p5.push();
        p5.translate(this.x, this.y);
        p5.rotate(p5.frameCount / 20);
        this.drawStar(p5, 0, 0, 2, 6, 5);
        p5.pop();
      } else {
        p5.noStroke();
        p5.fill(255, this.alpha);
        p5.circle(this.x, this.y, this.size);
      }
    }

    drawStar(p5, x, y, r1, r2, n) {
      const angle = p5.TWO_PI / n;
      const halfAngle = angle / 2;
      p5.beginShape();
      for (let a = 0; a < p5.TWO_PI; a += angle) {
        let sx = x + p5.cos(a) * r2;
        let sy = y + p5.sin(a) * r2;
        p5.vertex(sx, sy);
        sx = x + p5.cos(a + halfAngle) * r1;
        sy = y + p5.sin(a + halfAngle) * r1;
        p5.vertex(sx, sy);
      }
      p5.endShape(p5.CLOSE);
    }
  }

  return <Sketch setup={setup} draw={draw} cleanup={removeCanvas} />;
};

export default MyCanvas;
