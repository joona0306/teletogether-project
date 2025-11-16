function initScrollAnimations() {
  // Advanced scroll-based animations with reset on exit
  const observerOptions = {
    threshold: 0.15, // 요소의 15%가 보일 때 트리거
    rootMargin: "0px 0px -100px 0px", // 하단에서 100px 전에 트리거
  };

  const scrollObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 섹션에 들어오면 애니메이션 실행
        entry.target.classList.add("animate");
      } else {
        // 섹션을 벗어나면 애니메이션 초기화
        // entry.target.classList.remove("animate");
      }
    });
  }, observerOptions);
}
