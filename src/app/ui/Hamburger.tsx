import Image from "next/image";

const Hamburger = ({
  isOpened,
  handleClick,
}: {
  isOpened: boolean;
  handleClick: () => void;
}) => {
  return (
    <button
      className="lg:hidden"
      onClick={handleClick}
      aria-label="menu toggle"
      aria-expanded={isOpened ? "true" : "false"}
      aria-controls="nav_dialog"
    >
      <Image
        src={
          isOpened
            ? "/assets/icon-close-menu.svg"
            : "/assets/icon-hamburger.svg"
        }
        width={16}
        height={15}
        alt=""
      />
    </button>
  );
};

export default Hamburger;
