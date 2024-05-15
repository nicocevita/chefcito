import React from "react";

interface ModuleBoxProps {
  title: string;
  children: React.ReactNode;
  maxWidth?: string;
  minWidth?: string;
}

const ModuleBox: React.FC<ModuleBoxProps> = ({
  title,
  children,
  maxWidth,
  minWidth,
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-4 w-full ${
        maxWidth && `max-w-[${maxWidth}]`
      } ${minWidth && `min-w-[${minWidth}]`}`}
    >
      <div className="flex items-start">
        <h2 className="text-xl font-bold mb-4 text-blue-300">{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default ModuleBox;
