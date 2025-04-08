import { Link } from "@fluentui/react-components";
import { ArrowRightRegular } from "@fluentui/react-icons";
import { insightData, Messages } from "../constants";

const Insights = () => {
  return (
    <div className="w-1/3 pl-4 border border-eerieBlack flex flex-col justify-between py-4 h-full">
      <div>
        <h3 className="text-2xl font-semibold mb-8">Insights</h3>

        {/* Founders */}
        <div className="mb-10 flex justify-start items-end">
          <div>
            <div className="text-gray-400 text-base mb-1">Founders</div>
            <div className="text-5xl font-bold leading-snug">
              {insightData.founders.value}
            </div>
          </div>
          <div className="text-lg ml-6 flex flex-col items-center mb-2">
            <span className="text-green-500">
              {insightData.founders.growth}
            </span>
            <span className="text-gray-500">
              {insightData.founders.growthValue}
            </span>
          </div>
        </div>

        {/* Investors */}
        <div className="mb-10 flex justify-start items-end">
          <div>
            <div className="text-gray-400 text-base mb-1">Investors</div>
            <div className="text-5xl font-bold leading-snug">
              {insightData.investors.value}
            </div>
          </div>
          <div className="text-lg ml-6 flex flex-col items-center mb-2">
            <span className="text-green-500">
              {insightData.investors.growth}
            </span>
            <span className="text-gray-500">
              {insightData.investors.growthValue}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-2 mr-3 text-right">
        <Link
          href="#"
          className="flex items-center justify-end text-base hover:underline"
        >
          {Messages.viewDetailedInsights}
          <ArrowRightRegular className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default Insights;
