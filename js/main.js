// 메인 페이지 버튼 클릭 시 안내창 띄우기
const projectBtn = document.querySelector('.btn-blue');

if (projectBtn) {
  projectBtn.addEventListener('click', function () {
    alert('프로젝트 갤러리 페이지로 이동합니다!');
  });
}