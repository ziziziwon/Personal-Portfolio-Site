import React from 'react';
import './About.css';

// 질문-답변 데이터 타입
interface QnA {
  id: number;
  question: string;
  answer: string;
}

// 100문 100답 데이터
const qnaList: QnA[] = [
  { id: 1, question: "이름은?", answer: " Jiwon Jeong 입니다! 잘 부탁해요 (^^)丿" },
  { id: 2, question: "나이는?", answer: "2001.04.05 식목일에 태어났어요" },
  { id: 3, question: "요즘 가장 많이 하는 건?", answer: "코딩이요! 열어두고 이것저것 만들고 있어요 ^▽^" },
  { id: 4, question: "홈페이지 주소는?", answer: "지금 보고 계시는 이곳이에요! 가끔 생각나면 들러주세요☆" },
  { id: 5, question: "취미는?", answer: "일렉기타 치고있어요. 좋아하는 코드 계속 생각하기요☆" },
  { id: 6, question: "특기는?", answer: "버그 잡는 거요~ (웃음)" },
  { id: 7, question: "좋아하는 음식은?", answer: "피자! 치즈 늘어나는 것도 좋아해요♪" },
  { id: 8, question: "싫어하는 음식은?", answer: "버그가 들어간 스파게티 코드... (;_;)" },
  { id: 9, question: "좋아하는 색깔은?", answer: "소닉블루! 유래를 알고 완전 좋아하게 돼☆" },
  { id: 10, question: "좋아하는 코딩 스타일은?", answer: "깔끔하고 읽기 쉬운 코드가 좋아요... 괜히 오래 보게 돼서요." },
  { id: 11, question: "최근 빠져있는 것은?", answer: "사이트 조금씩 만지는 거! 바뀐 거 알아봐 주시면 기뻐요☆" },
  { id: 12, question: "왼손잡이 or 오른손잡이?", answer: "왼손잡이입니다! ^-^" },
  { id: 13, question: "방문객에게 한마디!", answer: "와줘서 정말 기뻐요! 편하게 보고 가주세요♡" },
];

export const About: React.FC = () => {
  
  return (
    <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '20px' }}>
      
      <div className="qna-container">
        <h2 className="qna-title">† 개발자의 100문 100답 †</h2>
        
        <div className="qna-paper">
          <table className="qna-table">
            <tbody>
              {qnaList.map((item) => (
                <tr key={item.id}>
                  <td className="qna-question">
                    <span className="qna-num">{item.id}.</span> {item.question}
                  </td>
                  <td className="qna-answer">{item.answer}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="qna-footer">... (100개를 향해 계속 업데이트 중!) ...</div>
        </div>
      </div>
    </div>
  );
};
