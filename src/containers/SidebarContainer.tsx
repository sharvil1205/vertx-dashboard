import { useState } from "react";
import { Sidebar } from "../components";
import { useNavigate } from "react-router-dom";

const SidebarContainer = () => {
  const [selectedItem, setSelectedItem] = useState<string>("Analytics");
  const navigate = useNavigate();
  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    navigate(item.toLowerCase());
  };
  return (
    <Sidebar selectedItem={selectedItem} handleItemClick={handleItemClick} />
  );
};

export default SidebarContainer;
