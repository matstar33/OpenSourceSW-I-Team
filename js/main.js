// 현재 페이지 메뉴 강조
const currentPage = location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('.nav a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

// 모바일 메뉴 열기·닫기
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});
