import { Button, ProgressBar } from "@fluentui/react-components";
import { ArrowRight24Regular } from "@fluentui/react-icons";
import { countryStats } from "../constants";

const DemographicsLayout = () => {
  return (
    <div className="flex flex-row mt-4 p-4 rounded-xl border border-eerieBlack">
      <img
        src="/map.webp"
        alt="Map"
        className="w-2/3 rounded-lg object-cover"
      />
      <div className="w-full border-none shadow-none h-full">
        {countryStats.map((country, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-center mb-1 py-2">
              <div className="flex items-center gap-2">
                <img
                  src={country.flag}
                  alt={country.name}
                  className="w-7 h-7 rounded-sm"
                />
                <span className="text-base font-medium">{country.name}</span>
              </div>
              <span className="text-sm font-medium">{country.percent}%</span>
            </div>
            <ProgressBar
              value={country.percent / 100}
              thickness="large"
              style={{
                backgroundColor: "#2d2d2d",
                borderRadius: "9999px",
              }}
              bar={{
                style: {
                  backgroundColor: country.color,
                  borderRadius: "9999px",
                },
              }}
            />
          </div>
        ))}

        <hr className="border-gray-700 my-4" />

        <div className="flex justify-end">
          <Button appearance="transparent" className="hover:underline">
            View all countries
            <ArrowRight24Regular className="ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DemographicsLayout;
