import { useState, useEffect } from 'react';

export const useCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('visitor-count');
    const initialCount = saved ? parseInt(saved) : 0;
    const newCount = initialCount + 1;
    
    setCount(newCount);
    localStorage.setItem('visitor-count', newCount.toString());
  }, []);

  const formatCount = (num: number): string => {
    const numStr = num.toString().padStart(7, '0');
    return numStr.charAt(0) + ' ' + numStr.slice(1);
  };

  return formatCount(count);
};
