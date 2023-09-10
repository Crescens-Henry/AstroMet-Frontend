import React, { useEffect, useState } from "react";
export const Timer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const days = formatTime(timeLeft.days);
  const hours = formatTime(timeLeft.hours);
  const minutes = formatTime(timeLeft.minutes);
  const seconds = formatTime(timeLeft.seconds);

  return (
    <div className="text-center font-Rajdhani">
      <p className="text-3xl font-semibold font-Nunito">
        Próximo Eclipse del Sol:
      </p>
      <p className="text-7xl font-bold mt-2 ">
        {days}:{hours}:{minutes}:{seconds}
      </p>
      <p className="text-lg text-gray-600 mt-1 tracking-widest">
        días : horas : minutos : segundos
      </p>
    </div>
  );
};

const getTimeLeft = (targetDate) => {
  const now = new Date().getTime();
  const difference = targetDate - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};
