import { useEffect, useState } from "react";
import logoIcon from "..//assets/images/webp/logo.webp";
import { HEADER_LIST } from "../utils/helper";
import { DiscordIcon } from "../utils/Icons";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const closeHandler = () => {
    setOpen(false);
  };
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);
  return (
    <div className={`bg-black ${open ? "max-lg:opacity-100" : "opacity-80"}`}>
      <div className="max-w-[1355px] flex items-center justify-between py-5 max-lg:px-5 px-4 mx-auto w-full">
        <a href="/">
          {" "}
          <img
            className="max-w-[286px] max-xl:max-w-60 max-md:max-w-48 max-sm:max-w-40"
            src={logoIcon}
            alt="page-logo"
          />{" "}
        </a>
        <div
          className={`flex gap-[29px] max-xl:gap-6 max-lg:fixed max-lg:top-0 max-lg:-right-full max-lg:h-full max-lg:w-full max-lg:justify-center max-lg:items-center transition-all duration-300 max-lg:flex-col max-lg:bg-black max-lg:z-10 ${
            open ? "max-lg:!right-0" : ""
          }`}
        >
          <div className="flex gap-10 max-xl:gap-6 max-lg:flex-col items-center">
            {HEADER_LIST.map((obj, i) => (
              <a
                onClick={closeHandler}
                href={obj.link}
                key={i}
                className="text-white !whitespace-nowrap text-[22px] font-semibold max-xl:text-lg"
              >
                {obj.title}
              </a>
            ))}
          </div>
          <button
            onClick={closeHandler}
            className="text-white cursor-pointer transition-all ease-linear duration-300 flex gap-2.5 items-center text-2xl leading-[24px] rounded-[79px] py-3.5 px-[34px] common-btn"
          >
            <DiscordIcon />
            Discord
          </button>
        </div>
        <div
          onClick={handleClick}
          className="z-[15] flex-col gap-1 lg:hidden flex cursor-pointer"
        >
          <span
            className={`${
              open
                ? "w-8 h-1 bg-white rotate-45 translate-y-3 duration-300 ease-linear rounded"
                : "w-8 h-1 bg-white duration-300 ease-linear rounded"
            }`}
          ></span>
          <span
            className={`${
              open
                ? "w-8 h-1 bg-white -translate-x-10 opacity-0 duration-300 ease-linear"
                : "w-8 h-1 bg-white duration-700 ease-linear rounded"
            }`}
          ></span>
          <span
            className={`${
              open
                ? "w-8 h-1 bg-white -rotate-45 -translate-y-1 duration-300 ease-linear rounded"
                : "w-8 h-1 bg-white duration-300 ease-linear rounded"
            }`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
