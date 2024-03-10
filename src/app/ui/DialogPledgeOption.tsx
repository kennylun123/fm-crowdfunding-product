import CustomButton from "@/app/ui/CustomButton";
import { DialogPledgeProps } from "@/app/lib/definitions";
import { formatCurrency } from "../lib/utils";

const DialogPledgeOption = ({
  pledge: { id, title, content, price, qty },
  selectedOptionId,
  handleOptionChange,
  input,
  setInput,
  disabled = !qty && id !== "0",
}: DialogPledgeProps) => {
  return (
    <label
      htmlFor={`dialog_pledge_${id}`}
      className={`group w-full flex flex-col divide-y divide-gray/40 border border-gray/40 rounded-md has-[:checked]:border-cyan-400 has-[:focus]:border-cyan-400 ${
        disabled && "disabled"
      }`}
    >
      {/* top half */}
      <div className="grid grid-cols-[min-content_auto] md:grid-cols-[min-content_auto_min-content] grid-flow-dense gap-y-6 px-6 py-6 items-center">
        <input
          id={`dialog_pledge_${id}`}
          className="appearance-none w-4 h-4 mr-4 outline outline-gray/40 group-hover:outline-cyan-400 checked:bg-cyan-400 checked:border-4 checked:border-white rounded-full"
          type="radio"
          name="pledge"
          value={id}
          checked={selectedOptionId === id}
          onChange={handleOptionChange}
          disabled={disabled}
        />

        <h3 className="flex flex-col md:flex-row md:gap-4 font-bold group-hover:text-cyan-400">
          {title}
          {!!price && (
            <span className="text-cyan-400">
              Pledge {formatCurrency(price)} or more
            </span>
          )}
        </h3>

        <p className="col-span-2 md:col-start-2">{content}</p>

        {!!qty && (
          <p className="col-span-2 md:col-span-1 flex items-center font-medium gap-2">
            <span className="text-black text-lg font-bold">
              {qty.toLocaleString()}
            </span>
            left
          </p>
        )}
      </div>

      {selectedOptionId === id && (
        <div className="flex flex-col items-center px-6 py-6">
          <p>Enter your pledge</p>
          <div className="flex gap-4 mt-4">
            <label
              htmlFor={`pledge_amount_${id}`}
              className="has-[:focus]:border-cyan-400 w-full h-12 px-6 flex items-center gap-1 border border-gray/40 rounded-full font-bold"
            >
              $
              <input
                id={`pledge_amount_${id}`}
                className="appearance-none w-full text-black outline-none caret-cyan-400 text-center"
                type="number"
                name="amount"
                value={input}
                min={1}
                max={9999}
                onChange={(e) => setInput(Number(e.target.value))}
                onFocus={(e) => e.target.select()}
                autoComplete="off"
                autoFocus
                required
              />
            </label>
            <CustomButton
              title="Continue"
              type="submit"
              containerStyle="w-full h-[3rem] px-6"
              textStyle="text-sm lg:text-base"
            />
          </div>
        </div>
      )}
    </label>
  );
};

export default DialogPledgeOption;
