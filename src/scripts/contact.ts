const otherCheck = document.querySelector("#other") as HTMLInputElement;
const otherText = document.querySelector("#other_text") as HTMLInputElement;
if (otherCheck && otherText) {
  otherCheck.addEventListener("change", function (this: HTMLInputElement) {
    if (this.checked) {
      otherText.style.display = "block";
      otherText.required = true;
    } else {
      otherText.style.display = "none";
      otherText.required = false;
    }
  });
}
