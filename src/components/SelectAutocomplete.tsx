import React, { InputHTMLAttributes, useState } from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectAutocompleteProps
  extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  error?: string;
  options: Option[];
  onSelectOption: (event: React.MouseEvent<HTMLLIElement>) => void;
}

const SelectAutocomplete: React.FC<SelectAutocompleteProps> = ({
  icon,
  error,
  options = [],
  onSelectOption,
  ...rest
}) => {
  const [inputValue, setInputValue] = useState("");
  const [values, setValues] = useState<Option[]>(options);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    setValues(
      options.filter((option) =>
        option.label.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      )
    );
  };

  return (
    <div className="flex flex-col relative">
      <input
        {...rest}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Agrega un ingrediente"
        className="border border-gray-300 rounded px-4 py-2 bg-white text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-300 w-full"
      />
      {icon && (
        <div className="absolute inset-y-0 right-0 max-w-7 max-h-10 flex items-center pr-2">
          {icon}
        </div>
      )}
      {error && (
        <div className="text-red-500 text-xs mt-1 ml-1 flex">{error}</div>
      )}

      {inputValue && values.length !== 0 && (
        <ul className="mt-2 absolute inset-y-9 w-full min-h-8 h-max max-h-24 overflow-scroll rounded-b-lg border-solid border-x-2 border-gray-200 border-b-2">
          {values.map((option) => (
            <li
              key={option.value}
              onClick={(e) => {
                onSelectOption(e);
                setInputValue("");
              }}
              className={`py-1 pl-2 text-gray-400 bg-white hover:bg-gray-50 flex hover:text-gray-500 `}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectAutocomplete;
