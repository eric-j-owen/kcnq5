interface DotType {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  distance: number;
  create(): void;
  animate(): void;
}

interface BackgroundType {
  totalDots: number;
  createDots(): void;
  updateDots(): void;
}

class Background implements BackgroundType {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  totalDots: number;
  dotsArr: DotType[];

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.totalDots = 359;
    this.dotsArr = [];
  }

  createDots() {
    for (let i = 0; i < this.totalDots; i++) {
      let dot = new Dot(this.canvas, this.ctx);
      this.dotsArr.push(dot);
      dot.create();
    }
  }

  updateDots() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let i = 0; i < this.totalDots; i++) {
      let dot = this.dotsArr[i];
      dot.create();
      dot.animate();
    }
  }
}

class Dot implements DotType {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  distance: number;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = -0.5 + Math.random();
    this.vy = -0.5 + Math.random();
    this.radius = Math.random();
    this.distance = 60;
  }

  create() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fill();
  }

  animate() {
    if (this.y < 0 || this.y > this.canvas.height) {
      this.vx = this.vx;
      this.vy = this.vy * -1;
    } else if (this.x < 0 || this.x > this.canvas.width) {
      this.vx = this.vx * -1;
      this.vy = this.vy;
    }
    this.x += this.vx;
    this.y += this.vy;
  }
}

function main() {
  const canvas = document.querySelector("#background") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.fillStyle = "#000000";

  const bg = new Background(canvas, ctx);
  bg.createDots();
  setInterval(() => bg.updateDots(), 1000 / 30);
}

window.addEventListener("load", main);
