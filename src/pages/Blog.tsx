import React from 'react';
import './Blog.css';

interface Post {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  emoji: string;
}

const blogPosts: Post[] = [
  {
    id: 1,
    title: "🎨 Y2K 디자인 시스템 가이드",
    date: "2026.02.01",
    category: "Design",
    excerpt: "2000년대 초반의 글로시한 버튼, 도트 패턴, 네온 컬러를 현대적으로 재해석하는 방법",
    emoji: "💿"
  },
  {
    id: 2,
    title: "⚡ Vite로 구축하는 초고속 프론트엔드",
    date: "2026.01.28",
    category: "Tech",
    excerpt: "Webpack에서 Vite로 넘어가며 느낀 빌드 속도의 혁명과 설정 팁 공유",
    emoji: "🚀"
  },
  {
    id: 3,
    title: "TypeScript로 타입 안전성 확보하기",
    date: "2026.01.25",
    category: "Coding",
    excerpt: "any를 쓰지 않고 우아하게 인터페이스와 제네릭을 다루는 실무 노하우",
    emoji: "🛡️"
  },
  {
    id: 4,
    title: "CSS Grid와 Flexbox의 완벽한 조화",
    date: "2026.01.20",
    category: "Layout",
    excerpt: "복잡한 사이버펑크 레이아웃도 Grid 하나면 충분합니다. 레이아웃 정복기",
    emoji: "📐"
  },
  {
    id: 5,
    title: "나만의 커스텀 훅(Hook) 만들기",
    date: "2026.01.15",
    category: "React",
    excerpt: "반복되는 로직을 useSomething으로 분리하여 코드 재사용성 높이기",
    emoji: "🎣"
  }
];

export const Blog: React.FC = () => {
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
                <a href="#" className="read-more">KEEP READING...</a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="blog-pagination">
          <span className="page-num active">1</span>
          <span className="page-num">2</span>
          <span className="page-num">3</span>
          <span className="page-num">NEXT ▶</span>
        </div>
      </div>
    </div>
  );
};
