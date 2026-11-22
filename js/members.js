/*
  팀원 소개 페이지
*/

/* 팀원 소개 영역 */
.members-section {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 70px 30px 90px;
}

/* 페이지 제목 */
.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-header h1 {
  font-size: 32px;
  color: #222;
  margin-bottom: 15px;
}

.section-header p {
  font-size: 16px;
  color: #777;
  line-height: 1.6;
}

/* 팀원 카드 전체 */
.members-container {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 30px;
}

/* 개별 카드 및 기본 그림자 색상 */
.member-card {
  --card-shadow-color: rgba(138, 92, 180, 0.16);

  min-width: 0;
  background-color: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 3px 12px var(--card-shadow-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* 카드별 레인보우 그림자 색상 */

/* 1번째 - 빨강 */
.member-card:nth-child(1) {
  --card-shadow-color: rgba(255, 70, 70, 0.18);
}

/* 2번째 - 주황 */
.member-card:nth-child(2) {
  --card-shadow-color: rgba(255, 145, 50, 0.18);
}

/* 3번째 - 노랑 */
.member-card:nth-child(3) {
  --card-shadow-color: rgba(230, 190, 40, 0.20);
}

/* 4번째 - 초록 */
.member-card:nth-child(4) {
  --card-shadow-color: rgba(50, 180, 100, 0.18);
}

/* 5번째 - 파랑 */
.member-card:nth-child(5) {
  --card-shadow-color: rgba(50, 125, 230, 0.18);
}

/* 6번째 - 남색 */
.member-card:nth-child(6) {
  --card-shadow-color: rgba(65, 75, 170, 0.20);
}

/* 카드 호버 효과 */
.member-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 28px var(--card-shadow-color);
}

/* 프로필 사진 영역 */
.member-image {
  width: 100%;
  height: 240px;
  background-color: #f2f3f5;
  border-bottom: 1px solid #eee;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
}

/* 실제 프로필 이미지 */
.member-image img {
  display: block;
  width: 100%;
  height: 100%;

  /* 사진 전체가 보이도록 설정 */
  object-fit: contain;
  object-position: center center;

  transition: transform 0.35s ease;
  transform-origin: center center;
}

/* 이미지 확대 효과 */
.member-image img.is-zoomed {
  transform: scale(1.04);
}

/* 카드 내부 정보 */
.member-info {
  min-width: 0;
  padding: 25px;
}

.member-info h2 {
  font-size: 21px;
  color: #222;
  margin-bottom: 8px;
}

/* 소속 및 전공 */
.member-major {
  font-size: 14px;
  color: #888;
  margin-bottom: 22px;
  line-height: 1.5;
}

/* 관심 기술 영역 */
.member-tech {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 22px;
  flex-wrap: wrap;
}

.tech-label {
  font-size: 11px;
  font-weight: bold;
  color: #888;
  letter-spacing: 1px;
  padding-top: 6px;
}

/* 기술 배지 전체 */
.tech-tags {
  display: flex;
  align-items: center;
  gap: 7px;
  flex-wrap: wrap;
  min-width: 0;
}

/* 기술 배지 공통 스타일 */
.tech-tag {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  padding: 6px 12px;
  border-radius: 20px;
  white-space: nowrap;
}

/* HTML - 주황색 */
.tech-html {
  color: #fff;
  background-color: #e96832;
}

/* CSS - 파란색 */
.tech-css {
  color: #fff;
  background-color: #2878c7;
}

/* JS - 노란색 */
.tech-js {
  color: #333;
  background-color: #f5d547;
}

/* C - 짙은 회색 */
.tech-c {
  color: #fff;
  background-color: #555;
}

/* Java - 빨간색 */
.tech-java {
  color: #fff;
  background-color: #c74646;
}

/* Solidity - 보라색 */
.tech-solidity {
  color: #fff;
  background-color: #7952b3;
}

/* Spring - 초록색 */
.tech-spring {
  color: #fff;
  background-color: #4b9b50;
}

/* 연락처 영역 */
.member-contact {
  border-top: 1px solid #eee;
  padding-top: 15px;
  overflow-wrap: anywhere;
}

.member-contact p {
  font-size: 13px;
  color: #666;
  margin-bottom: 9px;
  line-height: 1.5;
}

.member-contact p:last-child {
  margin-bottom: 0;
}

/* 태블릿 화면 */
@media (max-width: 900px) {
  .members-section {
    padding: 55px 25px 70px;
  }

  .members-container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 25px;
  }

  .member-info {
    padding: 22px;
  }
}

/* 모바일 화면 */
@media (max-width: 600px) {
  .members-section {
    padding: 40px 18px 60px;
  }

  .section-header {
    margin-bottom: 35px;
  }

  .section-header h1 {
    font-size: 26px;
  }

  .section-header p {
    font-size: 14px;
  }

  .members-container {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .member-image {
    height: 240px;
  }

  .member-info {
    padding: 22px;
  }

  .member-info h2 {
    font-size: 19px;
  }

  .member-tech {
    gap: 8px;
  }

  .tech-label {
    font-size: 10px;
  }

  .tech-tag {
    font-size: 11px;
    padding: 6px 10px;
  }

  .member-contact p {
    font-size: 12px;
  }
}

/* 작은 모바일 화면 */
@media (max-width: 380px) {
  .members-section {
    padding-left: 14px;
    padding-right: 14px;
  }

  .member-info {
    padding: 18px;
  }

  .member-image {
    height: 220px;
  }
}

/* 터치 화면에서는 호버 이동 효과 제외 */
@media (hover: none) {
  .member-card:hover {
    transform: none;
    box-shadow: 0 3px 12px var(--card-shadow-color);
  }
}