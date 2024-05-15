import React from "react";
import ModuleBox from "../../../components/ModuleBox";
import Table from "../../../components/Table";

const FoodsTable: React.FC = () => {
  return (
    <ModuleBox title="Listado de comidas" minWidth="2024px">
      <div>
        <Table
          data={[
            { id: 1, name: "Pizza" },
            { id: 2, name: "Hamburguesa" },
            { id: 3, name: "Tacos" },
          ]}
          columns={[
            { key: "id", label: "ID" },
            { key: "name", label: "Name" },
            { key: "name", label: "Name" },
            { key: "name", label: "Name" },
            { key: "name", label: "Name" },
            { key: "name", label: "Name" },
          ]}
        />
      </div>
    </ModuleBox>
  );
};

export default FoodsTable;
