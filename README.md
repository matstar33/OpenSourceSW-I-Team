# 레인보우 팀 포트폴리오

6명의 팀원을 소개하는 IT 개발 스튜디오형 포트폴리오 웹사이트

## 배포 주소
https://matstar33.github.io/OpenSourceSW-I-Team/

## 프로젝트 소개
- **제작 목적**: 팀원들의 역할 / 보유 기술 / 관심 분야 및 팀 프로젝트 활동을 하나의 웹사이트에 정리하여 소개
- **개발 환경**: HTML / CSS / JavaScript
- **협업 도구**: Git / GitHub
- **배포**: GitHub Pages

## 페이지 구성
| 페이지 | 파일 | 주요 내용 |
|--------|------|-----------|
| 메인 | index.html | 팀 소개 배너 / 프로젝트·팀원 바로가기 버튼 / 주요 페이지 바로가기 카드 |
| 팀 소개 | about.html | 팀의 목표 / 방향성 / 프로젝트 소개 |
| 팀원 소개 | members.html | 6명의 사진 / 이름 / 역할 / 기술 및 관심 분야 |
| 프로젝트 갤러리 | projects.html | 팀 및 개인 프로젝트 카드 / 상세 정보 |
| 활동 기록 | activities.html | 회의 / 개발 과정 / 날짜별 활동 기록 |

공통: 헤더(로고 / 메뉴) · 푸터(팀 정보 / GitHub 주소)

## 팀원 및 역할
| 이름 | 역할 | 브랜치 |
|------|------|--------|
| 길규철 (팀장) | GitHub 관리 / 공통 헤더·푸터 / 디자인 통일 | feature/common-layout |
| 이주영 | 메인 페이지 | feature/main-page |
| 이선호 | 팀 소개 페이지 | feature/team-page |
| 박진석 | 팀원 프로필 페이지 | feature/members-page |
| 김륜환 | 프로젝트 갤러리 | feature/projects |
| 박정언 | 활동 기록 페이지 | feature/activities |

## 폴더 구조
```
├── index.html
├── about.html
├── members.html
├── projects.html
├── activities.html
├── css/
│   ├── style.css        # 공통 헤더·푸터
│   ├── about.css
│   ├── members.css
│   ├── projects.css
│   └── activities.css
├── js/
│   ├── main.js          # 메뉴 강조·모바일 메뉴
│   ├── about.js
│   ├── members.js
│   └── activities.js
└── images/
    └── activities/
```

## 협업 규칙
- 작업 전 Issue 등록 (담당자 / 작업 내용 / 완료 조건)
- 각자 feature 브랜치에서 작업
- main 직접 push 금지 / Pull Request로 병합
- PR은 다른 팀원 1명 이상 승인 후 병합
- 커밋 메시지: `feat:` 기능 / `fix:` 수정 / `style:` 디자인 / `docs:` 문서

## 실행 방법
1. 저장소 clone
2. index.html을 브라우저로 열기

## 병합 충돌 기록
| 날짜 | 상황 | 해결 방법 | 결과 |
| 2026.11.22 | 페이지별 PR 순차 병합 | 페이지 전용 CSS·JS 파일 분리로 공통 파일 수정 최소화 | 충돌 없이 병합 완료 |
