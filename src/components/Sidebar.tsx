import { Avatar } from "@fluentui/react-components";
import { sideBarItems } from "../constants";

interface ISidebarProps {
  selectedItem: string;
  handleItemClick: (item: string) => void;
}

const Sidebar = ({ selectedItem, handleItemClick }: ISidebarProps) => {
  return (
    <div className="flex flex-row gap-8 w-1/5">
      <section className="flex flex-col gap-y-6 shrink-0 items-center">
        <img src="/vertx-icon.png" alt="vertx" className="w-12 h-12" />
        <Avatar shape="circular" className="bg-blue-500" initials={"SP"} />
      </section>
      <section className="flex flex-col justify-center mb-auto">
        <h1 className="mb-4 text-xl font-semibold">Vertx Labs, Inc</h1>
        {sideBarItems.map((item: string) => (
          <div
            key={item}
            className={`${
              selectedItem !== item && "text-daveGray cursor-pointer"
            } my-4`}
            onClick={() => handleItemClick(item)}
          >
            {item}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Sidebar;
