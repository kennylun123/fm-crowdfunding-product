"use client";

import Image from "next/image";
import CustomButton from "@/app/ui/CustomButton";
import { useState } from "react";
import { ProductHeaderProps } from "@/app/lib/definitions";

const ProductHeader = ({
  title,
  content,
  iconUrl,
  isDialogOpened,
  toggleDialogById,
}: ProductHeaderProps) => {
  return (
    <div className="card-container relative">
      <Image
        src={iconUrl}
        width={56}
        height={56}
        alt="Product illustration"
        className="absolute top-0 -translate-y-1/2"
      />
      <h1 className="text-[22px] lg:text-2xl leading-6 font-bold mt-4">
        {title}
      </h1>
      <p className="mt-6">{content}</p>
      <div className="w-full flex space-x-2 items-center justify-between mt-6 lg:mt-8">
        <CustomButton
          title="Back this project"
          handleClick={() =>
            toggleDialogById ? toggleDialogById("0") : undefined
          }
          aria_expand={isDialogOpened ? "true" : "false"}
          aria_controls="pledge_dialog"
        />
        <BookmarkButton />
      </div>
    </div>
  );
};

const BookmarkButton = () => {
  const [bookmark, setBookmark] = useState(false);

  return (
    <button
      onClick={() => setBookmark((prev) => !prev)}
      className={`group h-14 flex-shrink-0 items-center bg-gray/10 rounded-full inline-flex space-x-4 sm:pr-6 ${
        bookmark ? "text-cyan-500" : ""
      } `}
    >
      <svg
        className="group-hover:opacity-60"
        width="56"
        height="56"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fillRule="evenodd">
          <circle
            className={bookmark ? "fill-cyan-500" : ""}
            fill="#2F2F2F"
            cx="28"
            cy="28"
            r="28"
          />
          <path
            className={bookmark ? "fill-white" : ""}
            fill="#B1B1B1"
            d="M23 19v18l5-5.058L33 37V19z"
          />
        </g>
      </svg>

      <span className="sr-only sm:not-sr-only font-bold">
        {bookmark ? "Bookmarked" : "Bookmark"}
      </span>
    </button>
  );
};

export default ProductHeader;
