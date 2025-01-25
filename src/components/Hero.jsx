import { useEffect, useState } from "react";
import Header from "../common/Header";
import { PresaleIcon } from "../utils/Icons";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetTime = new Date();
    targetTime.setHours(11, 0, 0, 0);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetTime - now;

      if (difference <= 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className=" bg-hero bg-no-repeat bg-cover bg-center">
      <Header />
      <div className="lg:min-h-[730px] flex flex-col lg:justify-end justify-center items-center">
        <div className="max-w-[1360px] px-5 mx-auto lg:mb-[129px] max-lg:py-24">
          <h1 className="text-7xl max-w-[1320px] mx-auto leading-[91.8px] max-lg:leading-[80px] max-md:leading-[60px] max-sm:leading-[40px] max-lg:text-6xl max-md:text-5xl max-sm:text-4xl font-poppins text-center text-white">
            There are games... And then there are{" "}
            <span className="text-[#1BABFE]">Gilded</span> Games
          </h1>
          <p className="text-white text-center text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl mt-5">
            {`${timeLeft.days}d : ${timeLeft.hours}hr : ${timeLeft.minutes}min : ${timeLeft.seconds}sec`}
          </p>
          <p className="text-center leading-[22.95px] text-lg max-md:text-base max-md:leading-[18px] text-white">
            Remaining Presale Time
          </p>
          <div className="flex justify-center gap-6 mt-[22px]">
            <button className="px-[34px] py-3.5 max-md:px-8 max-md:py-3 max-md:text-xl cursor-pointer common-btn rounded-[79px] transition-all duration-00 ease-linear text-white flex text-2xl leading-6 gap-2.5">
              {" "}
              <PresaleIcon /> Presale{" "}
            </button>
            <button className="px-[34px] py-3.5 max-md:px-8 max-md:py-3 max-md:text-xl cursor-pointer transition-all duration-300 ease-linear rounded-[79px] border border-white text-2xl leading-6 text-white">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
