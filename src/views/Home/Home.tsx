import React from "react";
import Ingredients from "./components/Ingredients";
import HowItsDone from "./components/HowItsDone";
import FoodsTable from "./components/FoodsTable";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-row gap-12">
        <Ingredients />
        <HowItsDone />
      </div>
      <div className="w-full">
        <FoodsTable />
      </div>
    </div>
  );
};

export default Home;
