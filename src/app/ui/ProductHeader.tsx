import Image from "next/image";
import CustomButton from "@/app/ui/CustomButton";

type productHeaderProps = {
  title: string;
  content: string;
  iconUrl: string;
};

const ProductHeader = ({ title, content, iconUrl }: productHeaderProps) => {
  return (
    <div className="card-container relative">
      <Image
        src={iconUrl}
        width={56}
        height={56}
        alt="Product illustration"
        className="absolute top-0 -translate-y-1/2"
      />
      <h1 className="text-[22px] leading-6 font-bold mt-4">{title}</h1>
      <p className="mt-6">{content}</p>
      <div className="w-full flex space-x-2 items-center justify-between mt-6 lg:mt-8">
        <CustomButton title="Back this project" label="btp" />
        <BookmarkButton />
      </div>
    </div>
  );
};

const BookmarkButton = () => (
  <button
    className="group h-14 flex-shrink-0 items-center bg-gray/10 rounded-full inline-flex space-x-4 sm:pr-6"
    aria-labelledby="bm"
  >
    <Image
      src="/assets/icon-bookmark.svg"
      width={56}
      height={56}
      alt="bookmark logo"
      className="group-hover:opacity-60"
    />
    <span id="bm" className="hidden sm:block font-bold">
      Bookmark
    </span>
  </button>
);

export default ProductHeader;
