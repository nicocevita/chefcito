import React, { MouseEventHandler } from "react";

interface ChipProps {
  text: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  onRemove?: MouseEventHandler<HTMLButtonElement>;
}

const Chip: React.FC<ChipProps> = ({ text, onRemove, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center w-32 bg-gray-200 ${
        !onRemove ? " justify-center" : "justify-between"
      } rounded-full px-3 py-1 mr-2 mb-2`}
    >
      <span
        className="text-sm font-medium text-gray-700 overflow-hidden whitespace-nowrap overflow-ellipsis"
        style={{ maxWidth: "8rem" }}
      >
        {text}
      </span>
      {onRemove && (
        <button
          className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={onRemove}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a8 8 0 100 16 8 8 0 000-16zM5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Chip;
