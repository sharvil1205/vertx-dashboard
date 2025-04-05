import { useState } from "react";
import { Sidebar } from "../components";

const SidebarContainer = () => {
  const [selectedItem, setSelectedItem] = useState<string>("Analytics");
  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };
  return (
    <Sidebar selectedItem={selectedItem} handleItemClick={handleItemClick} />
  );
};

export default SidebarContainer;
