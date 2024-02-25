import React from "react";
import CustomButton from "@/app/ui/CustomButton";
import { formatCurrency } from "@/app/lib/utils";

export type pledgeProps = {
  title: string;
  content: string;
  price: number;
  qty: number;
  disabled?: boolean;
};

const Pledge = ({
  title,
  content,
  price,
  qty,
  disabled = !qty,
}: pledgeProps) => {
  return (
    <div className={`pledge-container space-y-6 ${disabled && "disabled"}`}>
      <div className="flex flex-col lg:flex-row items-start justify-between">
        <h3 className="font-bold">{title}</h3>
        <p className="font-medium text-cyan-400">
          Pledge {formatCurrency(price)} or more
        </p>
      </div>
      <p>{content}</p>

      <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
        <p className="flex items-center font-medium">
          <span className="text-black text-3xl font-bold mr-2">
            {qty.toLocaleString()}
          </span>
          left
        </p>
        <CustomButton
          title="Select Reward"
          label="sr"
          textStyle="text-sm"
          containerStyle="px-8 h-12"
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default Pledge;
