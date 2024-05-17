import { useState } from "react";

type TableColumn<T> = {
  key: keyof T;
  label: string;
};

type TableProps<T> = {
  data: T[];
  columns: TableColumn<T>[];
  showFilter?: boolean;
};

const Table = <T extends { name: string; id: number }>({
  data,
  columns,
  showFilter,
}: TableProps<T>) => {
  const [filter, setFilter] = useState("");

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="flex flex-col">
      {showFilter && (
        <input
          type="text"
          placeholder="Filter by name"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded"
        />
      )}
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key as number}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 text-gray-400">
          {filteredData.map((item) => (
            <tr key={item.id}>
              {columns.map((column) => (
                <td
                  key={column.key as number}
                  className="px-6 py-4 whitespace-nowrap"
                >
                  {item[column.key] as React.ReactNode}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
