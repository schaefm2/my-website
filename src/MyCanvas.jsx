import React from "react";
import Sketch from "react-p5";

const MyCanvas = () => {
  let particles = [];
  let spacex = 50;
  let spacey = 50;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(
      canvasParentRef
    );
    p5.canvas.style.position = "fixed"; // Keep it fixed as background
    p5.canvas.style.top = "0";
    p5.canvas.style.left = "0";
    p5.canvas.style.zIndex = "-1";
  };

  const draw = (p5) => {
    p5.background(20, 20, 40, 100);
    if (particles.length < 100) {
      particles.push(new Particle(p5, spacex, spacey));
      spacex = spacex > p5.width ? 0 : spacex + 50;
      spacey = spacey > p5.height ? 0 : spacey + 50;
    }

    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update();
      particles[i].show();
      if (particles[i].finished()) {
        particles.splice(i, 1);
      }
    }
  };

  function star(x, y, radius1, radius2, npoints, p5) {
    let angle = p5.TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    p5.beginShape();
    for (let a = 0; a < p5.TWO_PI; a += angle) {
      let sx = x + p5.cos(a) * radius2;
      let sy = y + p5.sin(a) * radius2;
      p5.vertex(sx, sy);
      sx = x + p5.cos(a + halfAngle) * radius1;
      sy = y + p5.sin(a + halfAngle) * radius1;
      p5.vertex(sx, sy);
    }
    p5.endShape(p5.CLOSE);
  }

  class Particle {
    constructor(p5, x, y) {
      this.p5 = p5;
      this.x = x;
      this.y = y;
      this.alpha = 50;
      this.shootingx = false;
      this.shootingy = false;
      this.timer = 100;
      this.direction = 1;
    }

    update() {
      this.y += this.p5.sin(this.p5.frameCount * 0.05 + this.x * 0.01) * 0.05;
      let dx = this.x - this.p5.mouseX;
      let dy = this.y - this.p5.mouseY;
      let distance = this.p5.sqrt(dx * dx + dy * dy);
      if (distance < 50) {
        this.x += dx * 0.05;
        this.y += dy * 0.05;
      }
      this.shooting();

      for (let other of particles) {
        if (other !== this) {
          let dx = this.x - other.x;
          let dy = this.y - other.y;
          let distance = this.p5.sqrt(dx * dx + dy * dy);
          if (distance < 20) {
            this.x += dx * 0.1;
            this.y += dy * 0.1;
          }
        }
      }
      // this.alpha -= 5;
    }

    finished() {
      return this.alpha < 0;
    }

    shooting() {
      const edgeBuffer = 60;

      if (this.x < 0 || this.x > this.p5.width) {
        this.shootingx = true;
        this.direction = this.x < 0 ? 1 : -1;
      }

      if (this.y < edgeBuffer || this.y > this.p5.height) {
        this.shootingy = true;
        this.direction = this.y < edgeBuffer ? 1 : -1;
      }

      if (this.shootingx) {
        this.x += 5 * this.direction;
        this.handleShootingReset();
        this.createStar();
      }

      if (this.shootingy) {
        this.y += 5 * this.direction;
        this.handleShootingReset();
        this.createStar();
      }
    }

    handleShootingReset() {
      this.timer--;
      if (this.timer === 0) {
        this.shootingx = false;
        this.shootingy = false;
        this.timer = 100;
      }
    }

    createStar() {
      this.p5.push();
      this.p5.translate(this.x, this.y);
      this.p5.rotate(this.p5.frameCount / -100.0);
      star(0, 0, 5, 15, 5, this.p5);
      this.p5.pop();
    }

    show() {
      this.p5.noStroke();
      this.p5.fill(255, this.alpha);
      this.p5.ellipse(this.x, this.y, 10);
    }
  }

  return <Sketch setup={setup} draw={draw} />;
};

export default MyCanvas;
