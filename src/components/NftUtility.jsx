// import React from "react";
import Heading from "../common/Heading";
import NftImage from "../assets/images/webp/nft-utility-img.webp";
import PlayToEran from "./PlayToEarn";

export const NftUtility = () => {
  return (
    <>
      <div className="bg-[url('src/assets/images/webp/nft-bg-image.webp')] bg-no-repeat bg-center bg-cover lg:min-h-[1079px] max-md:py-20 max-sm:py-10 flex items-center justify-center px-5 -mt-1">
        <div className="max-w-[1205px] w-full flex items-center max-lg:flex-col max-lg:justify-center justify-between gap-y-10 max-sm:gap-y-5">
          <div className="lg:max-w-[649px] ">
            <Heading
              textSpanOne={"NFT"}
              myClass={"max-lg:text-center pb-4"}
              text={"Utility"}
            />
            <p className="text-white max-lg:text-center text-xl max-md:text-lg max-sm:leading-[30px] max-sm:text-base font-normal leading-[35.9px] font-poppins opacity-70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              curabitur iaculis id cursus dignissim. Volutpat placerat volutpat
              commodo id ultricies volutpat vestibulum. Egestas venenatis
              dignissim fames maecenas. Blandit orci consectetur mauris, ipsum
              viverra quisque. Vulputate sollicitudin tellus eget consequat
              lectus dignissim integer in vitae. Commodo integer dis tortor cras
              maecenas sit. Et nunc et platea elementum, cursus morbi. Placerat
              molestie nibh parturient lectus magna sed fusce diam urna. Quam
              magna duis imperdiet posuere iaculis.
            </p>
          </div>
          <img
            className="max-w-[369px] w-full"
            src={NftImage}
            alt="nft-image"
          />
        </div>
      </div>
      <PlayToEran />
    </>
  );
};
export default NftUtility;
