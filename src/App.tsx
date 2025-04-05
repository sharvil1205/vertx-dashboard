import { SidebarContainer } from "./containers";

const App = () => {
  return (
    <div className="flex flex-row m-5 gap-8 justify-start">
      <SidebarContainer />
      <div>Analytics</div>
    </div>
  );
};

export default App;
