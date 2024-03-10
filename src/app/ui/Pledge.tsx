import React from "react";
import CustomButton from "@/app/ui/CustomButton";
import { formatCurrency } from "@/app/lib/utils";
import { PledgeProps } from "@/app/lib/definitions";

const Pledge = ({
  id,
  title,
  content,
  price,
  qty,
  disabled = !qty,
  toggleDialogById,
}: PledgeProps) => {
  return (
    <div className={`pledge-container space-y-6 ${disabled ? "disabled" : ""}`}>
      <div className="flex flex-col lg:flex-row items-start justify-between">
        <h3 className="font-bold">
          {title}
          <span className="ml-6 text-cyan-400">
            Pledge {formatCurrency(price)} or more
          </span>
        </h3>
      </div>
      <p>{content}</p>

      <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
        <p className="flex items-center gap-2 font-medium">
          <span className="text-black text-3xl lg:text-4xl font-bold">
            {qty.toLocaleString()}
          </span>
          left
        </p>
        <CustomButton
          title={qty ? "Select Reward" : "Out of stock"}
          aria_label={`Select Reward ${title}`}
          textStyle="text-sm"
          containerStyle="px-8 h-12 w-40"
          disabled={disabled}
          handleClick={() =>
            toggleDialogById ? toggleDialogById(id) : undefined
          }
        />
      </div>
    </div>
  );
};

export default Pledge;
