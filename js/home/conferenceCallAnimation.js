function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.15, // 요소의 15%가 보일 때 트리거
    rootMargin: "0px 0px -100px 0px", // 하단에서 100px 전에 트리거
  };

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const animateElements = entry.target.querySelectorAll("[data-animate]");

      if (entry.isIntersecting) {
        // 부모 영역이 보이면 자식 요소들에 애니메이션 적용
        animateElements.forEach((element, index) => {
          setTimeout(() => {
            element.classList.add("animate");
          }, index * 300);
        });
      } else {
        // 영역을 벗어나면 자식 요소들의 애니메이션 초기화
        animateElements.forEach((element) => {
          element.classList.remove("animate");
        });
      }
    });
  }, observerOptions);

  // Conference Call Section 애니메이션
  observeConferenceCallSection(scrollObserver);
}

// Conference Call Section 요소 관찰
function observeConferenceCallSection(observer) {
  const conferenceCallSection = document.querySelector(".conference-call");
  if (conferenceCallSection) {
    observer.observe(conferenceCallSection);
  }
}
