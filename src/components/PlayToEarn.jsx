import Heading from "../common/Heading";
import PlayToEarn from "../assets/gif/play-to-earn.gif";
import PlayToEarnLayer from "../assets/images/webp/play-to-earn-layer.webp";

const PlayToEran = () => {
  return (
    <div className="relative px-5 lg:-mt-[123px] pb-[110px] max-md:py-20 max-sm:py-12 overflow-hidden">
      <div className="max-w-[1320px] relative mx-auto">
        <img
          className=" absolute  top-[70%] -translate-y-1/2 -left-[23%]"
          src={PlayToEarnLayer}
          alt="earn layer"
        />
        <img
          className=" absolute  top-[70%] -translate-y-1/2 rotate-y-180 -right-[23%]"
          src={PlayToEarnLayer}
          alt="earn layer"
        />
        <Heading
          textSpanTwo={"Earn"}
          myClass={"text-center"}
          text={"Play To"}
        />
        <p className="text-white text-xl max-md:text-lg max-sm:text-base font-normal leading-[35.9px] max-sm:leading-[30px] font-poppins opacity-70 text-center max-w-[1024px] mx-auto">
          Gilded World will be the first game released by Gilded Games. It is an
          MMORPG, browser based game that is unlike any other. We have taken
          inspiration from some of the most popular and successful MMORPG and
          RPG games and have boiled it down to the best online gameplay that
          people will actually want to play!
        </p>
        <div className="bg-gradient-to-r from-light-purple to-light-blue relative z-20 max-w-[1320px] w-full rounded-[13px] p-[5px] max-md:p-[3px] mx-auto mt-12 max-lg:mt-10 max-md:mt-8 max-sm:mt-6 ">
          <img
            className="w-full max-h-[551px] rounded-[13px] object-cover"
            src={PlayToEarn}
            alt="play to earn"
          />
        </div>
      </div>
    </div>
  );
};

export default PlayToEran;
