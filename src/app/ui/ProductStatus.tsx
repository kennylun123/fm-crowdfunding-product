import { formatCurrency } from "@/app/lib/utils";
import { ProductStatusProps } from "@/app/lib/definitions";

const ProductStatus = ({
  targetFunding,
  backedFunding,
  backers,
  daysLeft,
}: ProductStatusProps) => {
  // Limit the maximum of percentage to not exceed 100
  const percentage = Math.min(
    Math.floor((backedFunding / targetFunding) * 100),
    100
  );

  return (
    <div className="card-container">
      <ul className="grid absolute-divide-y sm:w-full sm:grid-flow-col sm:grid-cols-3 sm:gap-8 sm:absolute-divide-x sm:text-start">
        <li className="relative px-6 py-6 sm:p-0 font-medium">
          <span className="block text-[2rem] leading-relaxed font-bold text-black">
            {formatCurrency(backedFunding)}
          </span>
          of {formatCurrency(targetFunding)} backed
        </li>
        <li className="relative px-6 py-6 sm:p-0 font-medium">
          <span className="block text-[2rem] leading-relaxed font-bold text-black">
            {backers.toLocaleString()}
          </span>
          total backers
        </li>
        <li className="relative px-6 py-6 sm:p-0 font-medium">
          <span className="block text-[2rem] leading-relaxed font-bold text-black">
            {daysLeft.toLocaleString()}
          </span>
          days left
        </li>
      </ul>
      <ProgressBar percentage={percentage} />
    </div>
  );
};

export default ProductStatus;

const ProgressBar = ({ percentage }: { percentage: number }) => (
  <div className="relative w-full h-3 rounded-md bg-gray/10 mt-6">
    <div
      className={`absolute h-3 rounded-md bg-cyan-400`}
      style={{ width: `${percentage}%` }}
    ></div>
  </div>
);
