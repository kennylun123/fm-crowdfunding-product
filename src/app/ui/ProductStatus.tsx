import { formatCurrency } from "@/app/lib/utils";

type productStatusProps = {
  targetFunding: number;
  backedFunding: number;
  backers: number;
  daysLeft: number;
};

const ProductStatus = ({
  targetFunding,
  backedFunding,
  backers,
  daysLeft,
}: productStatusProps) => {
  const percentage = Math.floor((backedFunding / targetFunding) * 100);
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
      {/* Progress bar */}
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
