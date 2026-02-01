# 🌐 POPO - Personal Portfolio Site

**"브랜드 세계관을 인터랙션으로 설계하는 UI/UX 중심 프론트엔드 웹디자이너"** 의 개인 포트폴리오 사이트입니다.
2000년대 초반의 Y2K 감성과 Cyberpunk 무드를 현대적인 React 기술로 재해석하여 독창적인 웹 경험을 제공합니다.

🔗 **Live Demo**: [https://jjw0144.mycafe24.com/popo/](https://jjw0144.mycafe24.com/popo/)

---

## 🎨 Design Concept: "Cyberpunk Y2K"

이 프로젝트는 단순한 정보 전달을 넘어, 방문자에게 **"디지털 세계 탐험"** 이라는 경험을 제공하기 위해 설계되었습니다.

*   **Visual Identity**: 네온 컬러(`Cyan`, `Magenta`, `Blue`), 도트 패턴(Dotted Borders), 픽셀 폰트 감성.
*   **Interaction**: 부드러운 페이지 전환, 마이크로 인터랙션, 글래스모피즘(Glassmorphism) 효과.
*   **Layout**: 고정된 사이드바 네비게이션과 반응형 콘텐츠 영역의 조화.
*   **Typography**: `Gulim`, `Malgun Gothic` 등 레트로한 시스템 폰트를 사용하여 2000년대 웹 감성 재현.

---

## 🛠 Tech Stack

### Core
*   ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) **React 18** - 컴포넌트 기반 UI 아키텍처
*   ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) **TypeScript** - 정적 타입 시스템으로 안정성 확보
*   ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) **Vite** - 초고속 빌드 및 HMR 환경

### Styling & Routing
*   **CSS Modules** - 컴포넌트 단위 스타일 캡슐화 (`*.module.css` 패턴 활용)
*   **React Router v6** - SPA(Single Page Application) 클라이언트 라우팅
*   **Flexbox & Grid** - 정교한 레이아웃 설계

### Deployment
*   **Cafe24 Hosting** - 정적 웹 호스팅

---

## 📂 Project Structure

```
popo/
├── public/              # 정적 에셋 (파비콘 등)
├── src/
│   ├── components/      # 재사용 가능한 UI 컴포넌트
│   │   ├── Sidebar.tsx  # 전역 네비게이션
│   │   ├── Sidebar.css
│   │   ├── Layout.tsx   # 메인 레이아웃 래퍼
│   │   └── Layout.css
│   ├── pages/           # 페이지별 컴포넌트
│   │   ├── Home.tsx     # 메인 페이지 (카운터, 공지)
│   │   ├── About.tsx    # 100문 100답 (테이블 레이아웃)
│   │   ├── Projects.tsx # 프로젝트 갤러리 (Flexbox)
│   │   ├── Skills.tsx   # 역량 시각화
│   │   ├── Blog.tsx     # 블로그 (모달 팝업 상세)
│   │   └── Contact.tsx  # 터미널 컨셉 연락처
│   ├── hooks/           # 커스텀 훅
│   │   └── useCounter.ts # 방문자 카운터 로직
│   ├── main.tsx         # 엔트리 포인트
│   ├── index.css        # 전역 스타일 (Reset, Variables)
│   └── vite-env.d.ts    # Vite 타입 선언
├── index.html           # HTML 템플릿
├── package.json         # 의존성 관리
└── vite.config.ts       # Vite 설정 (Base Path 등)
```

---

## ✨ Key Features & Pages

### 1. 🏠 Home
*   **Visitor Counter**: `localStorage`를 활용한 방문자수 카운팅 기능 (레트로 감성).
*   **Navigation Hub**: 주요 페이지로의 빠른 접근을 위한 카드형 링크 제공.
*   **Global Components**: 헤더, 공지사항 바 등 공통 요소 배치.

### 2. 👤 About Me
*   **100 Q&A Table**: 정형화된 자기소개를 탈피하여, 100문 100답 형식의 테이블로 솔직하고 디테일한 정보를 전달.
*   **Unique Layout**: 고전적인 HTML 테이블 스타일을 CSS로 세련되게 스타일링.

### 3. 💻 Projects
*   **Project Cards**: 각 프로젝트의 핵심 정보(개요, 기술 스택, 링크)를 담은 카드형 UI.
*   **Dotted Design**: `3px dotted` 테두리를 활용한 독특한 박스 디자인.
*   **Interactive Links**: GitHub 및 데모 사이트로 바로 연결되는 버튼 제공.

### 4. ⚡ Skills
*   **Identity Definition**: "브랜드 세계관을 설계하는 웹디자이너"로서의 정체성 명시.
*   **Visualized Capabilities**: 개발 스킬뿐만 아니라 디자인, 기획, 협업 능력을 시각적으로 구조화하여 표현.
*   **Keyword Tags**: 핵심 역량을 태그 형태로 나열하여 가독성 확보.

### 5. 📝 Blog
*   **Modal Detail View**: 페이지 이동 없이 모달 팝업(`createPortal`)을 통해 글 내용을 즉시 확인 가능.
*   **Pagination**: 레트로한 버튼 스타일의 페이지네이션 UI.
*   **Category Tags**: 게시글 분류를 위한 색상 태그 시스템.

### 6. 📞 Contact
*   **Terminal Concept**: "ESTABLISH CONNECTION"이라는 터미널 접속 컨셉의 디자인.
*   **Glassmorphism**: 반투명한 유리 질감의 카드 UI 적용.
*   **Direct Actions**: `mailto:`, `tel:` 등을 연동하여 클릭 시 바로 연결.

---

## 🚀 Getting Started

### Installation

```bash
# Repository Clone
git clone https://github.com/ziziziwon/Personal-Portfolio-Site.git

# Install Dependencies
npm install
```

### Development

```bash
# Run Dev Server
npm run dev
```
브라우저에서 `http://localhost:5173/` (또는 터미널에 표시된 포트)로 접속하세요.

### Build

```bash
# Production Build
npm run build
```
`dist/` 폴더에 최적화된 배포 파일이 생성됩니다.

---

## 👨‍💻 Developer Identity

**"단순히 코딩하는 디자이너도, 디자인만 하는 프론트엔드도 아닙니다."**

*   **Design-Driven Development**: 디자인 시안을 100% 구현하는 것을 넘어, 인터랙션과 사용자 경험을 코드로 승화시킵니다.
*   **Detail-Oriented**: 0.1초의 애니메이션 타이밍, 1px의 오차도 허용하지 않는 집요함을 가졌습니다.
*   **Brand Storyteller**: 프로젝트마다 고유한 세계관과 톤앤매너를 설정하고, 이를 웹 경험 전반에 녹여냅니다.

---

## 📝 License

This project is licensed under the MIT License.

---

© 2026 POPO Portfolio. Designed & Developed by Jeon Jiwon.
