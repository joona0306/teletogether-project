function animateCounter() {
  const counterElement = document.querySelector("#count");
  const targetCount = 3066;
  const duration = 2000;
  const steps = 60;
  const increment = targetCount / steps;
  let currentStep = 0;
  let currentCount = 0;

  const timer = setInterval(() => {
    currentStep++;
    if (currentStep <= steps) {
      currentCount = Math.floor(increment * currentStep);
      //toLocaleString으로 천단위 콤마 추가
      counterElement.textContent = "+" + currentCount.toLocaleString();
    } else {
      counterElement.textContent = "+" + targetCount.toLocaleString();
      clearInterval(timer);
    }
  }, duration / steps);
}

window.addEventListener("load", () => {
  setTimeout(animateCounter, 1100);
});
