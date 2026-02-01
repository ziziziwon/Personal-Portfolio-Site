import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import './Blog.css';

interface Post {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string; // 상세 내용 추가
  emoji: string;
}

const blogPosts: Post[] = [
  {
    id: 1,
    title: "🎨 Y2K 디자인 시스템 가이드",
    date: "2026.02.01",
    category: "Design",
    excerpt: "2000년대 초반의 글로시한 버튼, 도트 패턴, 네온 컬러를 현대적으로 재해석하는 방법",
    content: `
      <h3>1. Y2K 디자인이란?</h3>
      <p>Y2K(Year 2000) 미학은 90년대 후반과 2000년대 초반의 사이버펑크, 테크노 낙관주의를 반영합니다. 메탈릭한 질감, 네온 컬러, 그리고 과감한 타이포그래피가 특징입니다.</p>
      <br/>
      <h3>2. 핵심 디자인 요소</h3>
      <ul style="list-style-type: disc; margin-left: 20px;">
        <li><strong>Cybercore Colors:</strong> 네온 핑크, 라임 그린, 사이버 블루</li>
        <li><strong>UI Components:</strong> 글로시한 버튼, 픽셀 아트 아이콘, 마퀴(Marquee) 텍스트</li>
        <li><strong>Typography:</strong> 비트맵 폰트, 기하학적 산세리프</li>
      </ul>
      <br/>
      <h3>3. CSS 구현 팁</h3>
      <p>box-shadow를 활용한 네온 글로우 효과와 border-image를 이용한 도트 패턴 테두리를 적극 활용해보세요.</p>
    `,
    emoji: "💿"
  },
  {
    id: 2,
    title: "⚡ Vite로 구축하는 초고속 프론트엔드",
    date: "2026.01.28",
    category: "Tech",
    excerpt: "Webpack에서 Vite로 넘어가며 느낀 빌드 속도의 혁명과 설정 팁 공유",
    content: `
      <h3>왜 Vite인가?</h3>
      <p>Vite는 Native ES Modules를 사용하여 개발 서버 구동 시간이 획기적으로 빠릅니다. HMR(Hot Module Replacement) 속도 또한 프로젝트 크기와 상관없이 즉각적입니다.</p>
      <br/>
      <h3>주요 장점</h3>
      <ul style="list-style-type: disc; margin-left: 20px;">
        <li>압도적인 개발 서버 시작 속도</li>
        <li>Rollup 기반의 효율적인 프로덕션 빌드</li>
        <li>풍부한 플러그인 생태계</li>
      </ul>
    `,
    emoji: "🚀"
  },
  {
    id: 3,
    title: "TypeScript로 타입 안전성 확보하기",
    date: "2026.01.25",
    category: "Coding",
    excerpt: "any를 쓰지 않고 우아하게 인터페이스와 제네릭을 다루는 실무 노하우",
    content: `
      <h3>AnyScript는 그만!</h3>
      <p>TypeScript의 진정한 가치는 런타임 에러를 컴파일 타임에 잡아내는 데 있습니다. 'any' 타입을 남발하면 TS를 쓰는 이유가 사라집니다.</p>
      <br/>
      <h3>실무 팁</h3>
      <p>API 응답 데이터는 반드시 Interface나 Type Alias로 정의하고, 제네릭(Generic)을 활용하여 재사용 가능한 컴포넌트를 만드세요.</p>
    `,
    emoji: "🛡️"
  },
  {
    id: 4,
    title: "CSS Grid와 Flexbox의 완벽한 조화",
    date: "2026.01.20",
    category: "Layout",
    excerpt: "복잡한 사이버펑크 레이아웃도 Grid 하나면 충분합니다. 레이아웃 정복기",
    content: `
      <h3>Flexbox vs Grid</h3>
      <p>Flexbox는 1차원(행 또는 열) 레이아웃에, Grid는 2차원(행과 열 동시) 레이아웃에 적합합니다. 두 기술을 적재적소에 섞어 쓰는 것이 모던 웹 레이아웃의 핵심입니다.</p>
      <br/>
      <h3>이 사이트의 레이아웃</h3>
      <p>이 포트폴리오 사이트도 전체적인 뼈대는 Grid로 잡고, 내부 컴포넌트 정렬은 Flexbox를 사용하여 구현했습니다.</p>
    `,
    emoji: "📐"
  },
  {
    id: 5,
    title: "나만의 커스텀 훅(Hook) 만들기",
    date: "2026.01.15",
    category: "React",
    excerpt: "반복되는 로직을 useSomething으로 분리하여 코드 재사용성 높이기",
    content: `
      <h3>커스텀 훅의 마법</h3>
      <p>useEffect와 useState가 컴포넌트마다 중복된다면 커스텀 훅으로 분리할 때입니다. 로직을 추상화하면 코드가 훨씬 깔끔해집니다.</p>
      <br/>
      <h3>예시: useCounter</h3>
      <p>이 사이트의 방문자 수 카운터 기능도 useCounter라는 커스텀 훅으로 분리하여 관리하고 있습니다.</p>
    `,
    emoji: "🎣"
  }
];

export const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const openModal = (post: Post) => {
    setSelectedPost(post);
    document.body.style.overflow = 'hidden'; // 모달 열림 시 배경 스크롤 방지
  };

  const closeModal = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'auto'; // 모달 닫힘 시 스크롤 복구
  };

  return (
    <div className="blog-page-wrapper" style={{ maxWidth: '1200px', margin: '40px auto', padding: '20px' }}>
      <div className="notice-box blog-box">
        <h2 className="blog-title">† WEB DEV LOG †</h2>
        <p className="blog-intro">디지털 세상에 남기는 개발 기록입니다.</p>
        
        <div className="blog-posts">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-post-card">
              <div className="post-header">
                <span className="post-category">[{post.category}]</span>
                <span className="post-date">{post.date}</span>
              </div>
              <h3 className="post-title">
                <span className="post-emoji">{post.emoji}</span> {post.title}
              </h3>
              <p className="post-excerpt">{post.excerpt}</p>
              <div className="post-footer">
                <button className="read-more-btn" onClick={() => openModal(post)}>
                  KEEP READING...
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="blog-pagination">
          <button className="page-num active">1</button>
          <button className="page-num">2</button>
          <button className="page-num">3</button>
          <button className="page-num next">NEXT ▶</button>
        </div>
      </div>

      {/* Blog Detail Modal */}
      {selectedPost && createPortal(
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-window" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <span className="modal-title">💾 {selectedPost.title}</span>
              <button className="modal-close-btn" onClick={closeModal}>X</button>
            </div>
            <div className="modal-content">
              <div className="modal-meta">
                <span className="modal-category">📂 {selectedPost.category}</span>
                <span className="modal-date">📅 {selectedPost.date}</span>
              </div>
              <div 
                className="modal-body" 
                dangerouslySetInnerHTML={{ __html: selectedPost.content }} 
              />
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};
