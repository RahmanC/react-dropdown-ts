import { FC, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { useOnClickOutside } from "../hooks";

interface IAppSelectDropdown {
  handleSelect: (val: string) => void;
  selectedOption: string | null;
  options: string[];
  placeholder?: string;
  withFilterIcon?: boolean;
  borderColor?: string | TailwindColor;
  color?: string | TailwindColor;
}

type TailwindColor = string | undefined;

export const Dropdown: FC<IAppSelectDropdown> = ({
  handleSelect,
  selectedOption,
  placeholder,
  options,
  withFilterIcon,
  borderColor,
  color,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef(null);
  useOnClickOutside(dropdownRef, () => setShowOptions(false));

  const getColorClassName = (color: string | TailwindColor): string => {
    if (color && color.startsWith("#")) {
      return color; // Return empty string if it's a normal CSS color code
    } else {
      return color ?? "text-gray-800"; // Return color or default Tailwind class
    }
  };

  const getBorderColorClassName = (
    borderColor: string | TailwindColor
  ): string => {
    if (borderColor && borderColor.startsWith("#")) {
      return `border-${borderColor.slice(1)}`; // Convert normal CSS color to Tailwind class
    } else {
      return borderColor ?? "border-black"; // Return borderColor or default Tailwind class
    }
  };

  return (
    <div
      className={`relative w-full`}
      ref={dropdownRef}
      data-testid="select-dropdown"
    >
      <button
        type="button"
        className={`border ${getBorderColorClassName(
          borderColor
        )} ${getColorClassName(
          color
        )} z-99 flex items-center rounded-lg cursor-pointer ${
          selectedOption && "capitalize"
        } w-full ${"p-2 border-[0.5px] gap-1 text-sm"}`}
        data-testid="select-dropdown-control"
        onClick={() => {
          setShowOptions(!showOptions);
        }}
      >
        {withFilterIcon && (
          <Icon
            icon="ph:funnel-simple"
            className={`w-[18px] h-[18px] ${getColorClassName(color)}`}
          />
        )}
        {selectedOption || placeholder}
        <Icon
          icon={showOptions ? "ph:caret-up" : "ph:caret-down"}
          className={`w-[18px] h-[18px] ${getColorClassName(color)}`}
        />
      </button>

      {showOptions && (
        <div
          className={`absolute z-[99]  bg-white border border-gray-200 shadow-select  rounded-lg grid ${"top-10 left-0 w-full "}`}
          data-testid="select-dropdown-options"
        >
          {options.map((option) => (
            <button
              type="button"
              key={`${option}-option`}
              className={`text-left pl-3 py-[10px] pr-[10px] ${getColorClassName(
                color
              )} text-sm leading-[21px] cursor-pointer rounded-lg hover:bg-neutral-200 w-full capitalize`}
              onClick={() => {
                handleSelect(option);
                setShowOptions(false);
              }}
              data-testid="select-dropdown-option"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
