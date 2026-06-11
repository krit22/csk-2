import React, { useState, useEffect } from 'react';

const GlassTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(2 * 3600 + 14 * 60 + 35);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (totalSeconds: number) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return [hrs, mins, secs]
      .map((v) => (v < 10 ? '0' + v : v))
      .join(':');
  };

  return (
    <div className="absolute left-1/2 -translate-x-1/2 bottom-[22%] z-20 hidden md:flex flex-col items-center">
      <div className="px-8 py-4 rounded-2xl bg-white/[0.01] backdrop-blur-[2px] border border-white/10 flex flex-col items-center justify-center min-w-[280px]">
        <span className="text-white/60 text-sm font-julee tracking-wide mb-1">
          Next match starting in
        </span>
        <span className="text-[#FAFF00] text-5xl font-jersey tracking-[0.1em] leading-none">
          {formatTime(timeLeft)}
        </span>
      </div>
    </div>
  );
};

export default GlassTimer;
