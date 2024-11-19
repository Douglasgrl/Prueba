import { useState } from "react";
import { CharactersProps } from "../utils/interface";

export const CardsCharacters = ({ info }: { info: CharactersProps }) => {
  const [hoverActivo, setHoverActivo] = useState(false);

  const handleMouseEnter = () => {
    setHoverActivo(true);
  };

  const handleMouseLeave = () => {
    setHoverActivo(false);
  };

  return (
    <div
      className="flex flex-row lg:gap-3 items-center justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="lg:border-[1px] w-[clamp(12.424rem,4.557rem_+_20.979vw,23.438rem)] h-[clamp(16.764rem,6.149rem_+_28.307vw,31.625rem)] lg:p-2 xl:p-3 rounded-[8px] lg:flex flex-col justify-center  text-white ">
        <div className="bg-[#F9F9F9] cursor-pointer w-[clamp(12.125rem,5.205rem_+_18.453vw,21.813rem)] h-[clamp(12.188rem,5.212rem_+_18.604vw,21.955rem)] flex items-center justify-center rounded-[5px] relative">
          <img
            className={`w-[clamp(8.015rem,3.438rem_+_12.206vw,14.423rem)] pt-[1rem] h-[clamp(9.75rem,4.128rem_+_14.992vw,17.621rem)] object-cover rounded-[7px] transition-transform duration-500 ${
              hoverActivo ? "transform scale-110" : ""
            }`}
            src={info.image}
            alt={info.name}
          />
        </div>
        <div className="flex flex-col py-2 pl-1 gap-3">
          <p className="text-[clamp(0.75rem,0.169rem_+_1.549vw,1.563rem)] text-rick-textos font-bold">
            {info.name}
          </p>
          <p
            className={`text-[clamp(0.625rem,0.179rem_+_1.19vw,1.25rem)] py-[4px] px-2 border-[1px] border-solid font-book max-w-[149px] lg:max-w-[283px] rounded-[2.5px] duration-500 ${
              hoverActivo
                ? "bg-rick-skyBlue text-white border-transparent"
                : "text-rick-skyBlue border-argenpesos-red"
            }`}
          >
            {info.status}
          </p>
          <p className="text-[clamp(0.5rem,0.054rem_+_1.19vw,1.125rem)] text-rick-gray3 font-book">
            {info.gender}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardsCharacters;
