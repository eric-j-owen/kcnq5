function main() {
  const canvas = document.querySelector("#background") as HTMLCanvasElement;
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  }
}

window.addEventListener("load", main);
