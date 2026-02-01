import React from 'react';
import './Contact.css';

export const Contact: React.FC = () => {
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('전송 채널이 연결되었습니다. (데모 버전: 실제 전송은 되지 않습니다)');
  };

  return (
    <div className="contact-page-wrapper">

      <div className="notice-box contact-box">
        <div className="contact-header">
          <div className="status-dot-green"></div>
          <h2 className="contact-main-title">ESTABLISH CONNECTION</h2>
          <p className="contact-sub-title">협업 문의 및 브랜드 세계관 확장을 위한 채널이 열려 있습니다.</p>
        </div>

        <div className="contact-grid">
          {/* 왼쪽: 직접 연락처 노드 */}
          <div className="contact-methods-section">
            <div className="method-card">
              <span className="method-icon">📧</span>
              <div className="method-info">
                <label>DIRECT_MAIL</label>
                <a href="jjw12338@gmail.com">jjw12338@gmail.com</a>
              </div>
            </div>

            <div className="method-card">
              <span className="method-icon">🐙</span>
              <div className="method-info">
                <label>SOURCE_CODE</label>
                <a href="https://github.com/ziziziwon" target="_blank" rel="noreferrer">https://github.com/ziziziwon</a>
              </div>
            </div>

            <div className="method-card">
              <span className="method-icon">💼</span>
              <div className="method-info">
                <label>INSTAGRAM_ID</label>
                <a href="@youaremysavior" target="_blank" rel="noreferrer">@youaremysavior</a>
              </div>
            </div>

            <div className="method-card">
              <span className="method-icon">📝</span>
              <div className="method-info">
                <label>CALL_ME</label>
                <a href="010-8878-6449" target="_blank" rel="noreferrer">010-8878-6449</a>
              </div>
            </div>
          </div>

          {/* 오른쪽: 메시지 전송 폼 */}
          <div className="contact-form-section">
            <div className="form-header">
              <span className="form-tag">MESSAGE_SENDER</span>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>SENDER_NAME:</label>
                <input type="text" placeholder="익명의 방문자" className="form-input" required />
              </div>
              <div className="form-group">
                <label>REPLY_ADDRESS:</label>
                <input type="email" placeholder="your.email@example.com" className="form-input" required />
              </div>
              <div className="form-group">
                <label>DATA_PAYLOAD:</label>
                <textarea placeholder="전달할 메시지를 입력하세요..." className="form-textarea" rows={6} required></textarea>
              </div>
              <button type="submit" className="retro-button submit-btn">
                SEND_PACKET 
              </button>
            </form>
          </div>
        </div>

        <div className="contact-footer-alert">
          <p>⚠️ 주의: 모든 데이터는 암호화되어 전송(될 예정)입니다. 무단 침입 시 핑크색 팝업이 발생할 수 있습니다.</p>
        </div>
      </div>
    </div>
  );
};
