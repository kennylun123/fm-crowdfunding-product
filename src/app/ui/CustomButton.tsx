import React from "react";

type CustomButtonProp = {
  title: string;
  label: string;
  containerStyle?: string;
  textStyle?: string;
  disabled?: boolean;
};

const CustomButton = ({
  title,
  label,
  containerStyle,
  textStyle,
  disabled,
}: CustomButtonProp) => {
  return (
    <button
      className={`px-11 h-14 rounded-full bg-cyan-400 hover:bg-cyan-500 disabled:bg-gray ${containerStyle}`}
      aria-labelledby={label}
      disabled={disabled}
    >
      <span
        id={label}
        className={`text-base text-white font-bold ${textStyle}`}
      >
        {title}
      </span>
    </button>
  );
};

export default CustomButton;
