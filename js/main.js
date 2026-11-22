// 메인 페이지 버튼 클릭 시 안내창 띄우기
const projectBtn = document.querySelector('.btn-blue');

if (projectBtn) {
  projectBtn.addEventListener('click', function () {
    alert('프로젝트 갤러리 페이지로 이동합니다!');
  });
}
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
