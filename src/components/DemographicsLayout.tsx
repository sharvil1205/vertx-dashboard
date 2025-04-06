import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  ProgressBar,
} from "@fluentui/react-components";
import { countryStats } from "../constants";
import { ArrowRight24Regular } from "@fluentui/react-icons";

const DemographicsLayout = () => {
  return (
    <div className="flex flex-row mt-4 border-2 border-gray-900">
      <img src="/map.webp" alt="Map" className="w-2/3" />
      <Card className="w-full p-4">
        {countryStats.map((country, index) => (
          <div key={index} className="mb-5">
            <CardHeader
              header={
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-2">
                    <img
                      src={country.flag}
                      alt={country.name}
                      className="w-5 h-5 rounded-sm"
                    />
                    <span className="text-sm font-medium">{country.name}</span>
                  </div>
                  <span className="text-sm font-medium">
                    {country.percent}%
                  </span>
                </div>
              }
            />
            <ProgressBar
              value={country.percent / 100}
              thickness="medium"
              style={{ backgroundColor: "#1f2937" }}
              className="rounded-full"
              bar={{
                style: {
                  backgroundColor: country.color,
                },
              }}
            />
          </div>
        ))}

        <hr className="border-gray-700 my-3" />

        <CardFooter className="ml-auto">
          <Button className="hover:underline">
            View all countries
            <ArrowRight24Regular className="ml-1" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DemographicsLayout;
