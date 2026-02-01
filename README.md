# Developer's Portfolio - 레트로 스타일 포트폴리오

2000년대 초반 스타일의 개인 홈페이지와 모던한 SPA 기술을 결합한 포트폴리오 사이트입니다.

## 🎨 기술 스택

- **Vite** - 빠른 빌드 도구 및 개발 서버
- **TypeScript** - 타입 안전성을 갖춘 JavaScript
- **CSS3** - 순수 CSS로 스타일링
- **SPA Router** - 프레임워크 없이 직접 구현한 라우터

## 🚀 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173/` 을 열어주세요.

### 빌드

```bash
npm run build
```

### 프리뷰

```bash
npm run preview
```

## ✨ 주요 기능

### 1. SPA 라우팅 시스템
- ✅ 해시 기반 라우팅 (`#home`, `#about`, `#projects` 등)
- ✅ 페이지 전환 애니메이션
- ✅ 활성 메뉴 표시
- ✅ 이벤트 위임을 통한 동적 버튼 처리

### 2. 포트폴리오 페이지
- **Home** - 메인 페이지 및 빠른 링크
- **About Me** - 자기소개 및 프로필
- **Projects** - 프로젝트 포트폴리오 (그리드 레이아웃)
- **Skills** - 기술 스택 및 역량 (태그 + 프로그레스 바)
- **Experience** - 경력 및 활동 (타임라인)
- **Contact** - 연락처 및 메시지 폼
- **Blog** - 블로그 포스트 목록

### 3. 기타 기능
- 📊 방문자 카운터 (LocalStorage)
- 🎨 레트로 감성의 디자인
- 📱 완전한 반응형 레이아웃
- ⚡ 부드러운 페이지 전환 애니메이션

## 📁 프로젝트 구조

```
popo/
├── public/              # 정적 파일
│   ├── yachiyo-banner.png
│   ├── yachiyo-left.png
│   ├── yachiyo-right.png
│   ├── yachiyo-main.png
│   └── header-bg.png
├── src/
│   ├── main.ts         # 앱 초기화 및 엔트리 포인트
│   ├── router.ts       # SPA 라우터 구현
│   ├── pages.ts        # 페이지 컨텐츠 정의
│   └── style.css       # 전체 스타일시트
├── index.html          # HTML 엔트리 포인트
└── package.json        # 프로젝트 설정
```

## 🎯 구현된 기능 상세

### 라우터 시스템 (`router.ts`)
```typescript
// 페이지 타입 안전성
type PageType = 'home' | 'about' | 'projects' | ...

// 라우터 클래스
class Router {
  navigate(page: PageType): void
  private loadPage(page: PageType): void
  private updateActiveMenu(page: PageType): void
}
```

### 페이지 관리 (`pages.ts`)
- 모든 페이지 컨텐츠를 객체로 관리
- 타입 안전성을 위한 인터페이스 정의
- 각 페이지별 타이틀, 상태 메시지, HTML 컨텐츠

### 방문자 카운터
- LocalStorage를 활용한 데이터 영속성
- DSEG7 스타일 디지털 디스플레이
- 페이지 로드마다 자동 증가

## 🎨 디자인 특징

### 컬러 팔레트
- **사이드바**: 베이지/갈색 톤 (`#f5deb3`, `#deb887`, `#8b4513`)
- **메인 영역**: 하늘색/청록색 톤 (`#b0e0e6`, `#87ceeb`, `#4a7c7e`)
- **강조 색상**: 주황색 (`#ff6600`), 금색 (`#ffd700`)

### UI 컴포넌트
- 점선 구분선 (dotted borders)
- 그라데이션 배경 및 버튼
- 호버 효과 및 트랜지션
- 카드 레이아웃
- 타임라인 컴포넌트
- 프로그레스 바

## 🔧 커스터마이징 가이드

### 1. 개인 정보 수정
`src/pages.ts` 파일에서 다음 정보를 수정하세요:
- About 페이지: 이름, 직무, 위치, 이메일
- Projects 페이지: 프로젝트 목록
- Skills 페이지: 기술 스택 및 역량
- Experience 페이지: 경력 사항
- Contact 페이지: 연락처 및 소셜 미디어 링크

### 2. 메뉴 추가/제거
1. `src/pages.ts`에 새로운 페이지 타입 및 컨텐츠 추가
2. `index.html`의 메뉴에 링크 추가
3. 필요시 `src/style.css`에 스타일 추가

### 3. 색상 변경
`src/style.css`의 다음 섹션에서 색상 수정:
- `:root` - 기본 변수
- `.sidebar` - 사이드바 색상
- `.main-content` - 메인 영역 색상

### 4. 카운터 초기값 변경
`src/main.ts`의 `VisitorCounter` 클래스:
```typescript
private loadCount(): number {
  const saved = localStorage.getItem('visitor-count');
  return saved ? parseInt(saved) : 0; // 이 값을 변경
}
```

## 🌟 주요 학습 포인트

이 프로젝트를 통해 학습할 수 있는 것들:

1. **순수 TypeScript SPA 라우터 구현**
   - 해시 라우팅
   - 이벤트 위임
   - 페이지 전환 관리

2. **타입 안전성**
   - 타입 정의 및 인터페이스
   - 제네릭 활용
   - 타입 가드

3. **모던 CSS 기법**
   - Flexbox & Grid
   - CSS 애니메이션
   - 반응형 디자인
   - CSS 변수 활용

4. **웹 API 활용**
   - LocalStorage
   - History API
   - DOM 조작
   - 이벤트 처리

## 📱 반응형 지원

- **Desktop** (1024px+): 2컬럼 레이아웃
- **Tablet** (768px-1024px): 1컬럼 레이아웃, 조정된 폰트 크기
- **Mobile** (<768px): 최적화된 모바일 뷰

## 🚀 배포

### GitHub Pages
```bash
npm run build
# dist 폴더를 GitHub Pages에 배포
```

### Vercel/Netlify
- 빌드 명령: `npm run build`
- 출력 디렉토리: `dist`

## 📝 라이센스

MIT

## 💡 개선 아이디어

- [ ] 다크 모드 추가
- [ ] 블로그 페이지 실제 구현 (마크다운 지원)
- [ ] 프로젝트 필터링 기능
- [ ] 애니메이션 효과 강화
- [ ] 다국어 지원 (i18n)
- [ ] 검색 기능
- [ ] 방명록 기능

## 👨‍💻 개발자

레트로 감성과 모던 기술의 조화를 사랑하는 개발자를 위해 제작되었습니다.
