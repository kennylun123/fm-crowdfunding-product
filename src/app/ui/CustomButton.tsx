import { CustomButtonProp } from "../lib/definitions";

const CustomButton = ({
  title,
  type = "button",
  containerStyle = "",
  textStyle = "",
  disabled,
  aria_label,
  aria_expand,
  aria_controls,
  handleClick,
}: CustomButtonProp) => {
  return (
    <button
      className={`${containerStyle} px-11 h-14 rounded-full bg-cyan-400 hover:bg-cyan-500 active:bg-cyan-600 focus:outline-none focus:ring focus:ring-cyan-400/40 disabled:bg-gray`}
      type={type}
      disabled={disabled}
      onClick={handleClick}
      aria-label={aria_label}
      aria-expanded={aria_expand}
      aria-controls={aria_controls}
    >
      <span className={`text-white font-bold ${textStyle}`}>{title}</span>
    </button>
  );
};

export default CustomButton;
