// 스크롤 등장 효과: 섹션이 화면에 들어오면 부드럽게 나타남
const revealTargets = document.querySelectorAll('.about-hero, .about-section');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// 움직임 줄이기 설정 사용자나 미지원 브라우저는 효과 없이 그대로 표시
if (!reduceMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealTargets.forEach(target => {
    target.classList.add('reveal');
    observer.observe(target);
  });
}
