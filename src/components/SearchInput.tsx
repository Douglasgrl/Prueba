import { cn } from "../utils/cn";
import { IconSearch } from "../utils/svg";
import { InputHTMLAttributes } from "react";

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  inputPlaceHolder: string;
  inputClassName?: string;
  className?: string;
}

const SearchInput = ({
  inputPlaceHolder,
  inputClassName,
  className,
  onChange,
}: SearchProps) => {
  return (
    <div className={cn("w-full ", className)}>
      <div className="relative w-full">
        <div className="absolute top-[18px] left-3 flex md:hidden">
          <IconSearch />
        </div>
        <div className="hidden absolute top-2 right-3 md:flex items-center justify-center md:bg-rick-white md:rounded-full md:w-[39px] md:h-[39px]">
          <IconSearch />
        </div>
        <input
          type="search"
          className={cn(
            "block w-full h-full py-4 px-9 text-[12px] rounded-3xl focus:ring-0 bg-rick-gray text-rick-textos font-book text-opacity-[1] lg:text-[16px]",
            inputClassName
          )}
          placeholder={inputPlaceHolder}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default SearchInput;
