import React from "react";
import { ComaLeftIcon, ComaRightIcon } from "../utils/Icons";

const GildedGames = () => {
  return (
    <div className="bg-[url('src/assets/images/webp/gilded-game-bg.webp')] flex justify-center py-[228.5px] max-xl:py-44 max-lg:py-32 max-md:py-20 px-5 max-sm:py-10u">
      <div className="relative max-w-[940px]">
        <div className="absolute -top-14 -left-20 gilded-coma max-xl:-left-10 max-lg:-left-5 max-lg:-top-10 max-md:hidden">
          <ComaLeftIcon />
        </div>
        <div className="absolute -bottom-10 right-[20%] gilded-coma max-xl:right-[23%] max-md:hidden">
          <ComaRightIcon />
        </div>
        <p className="text-[40px] text-white font-normal leading-[156%] text-center max-lg:text-3xl max-md:text-2xl">
          Gilded Games is a new type of gaming platform, partially owned and
          operated by its players. Earn Gild tokens by playing and use them to
          decide the future of the game!
        </p>
      </div>
    </div>
  );
};

export default GildedGames;
