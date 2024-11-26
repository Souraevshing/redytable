import { ReactNode } from "react";

/**
 * @description reusable input component to show all types of inputs on the restaurant page
 * @param icon ReactNode
 * @param children ReactNode
 * @param type string
 * @param value string
 * @param setValue void
 * @returns
 */
const InputWrapper = ({
  icon,
  children,
  type,
  value,
  setValue,
}: {
  icon?: ReactNode;
  children?: ReactNode;
  type?: "date" | "text";
  value?: string;
  setValue?: (value: string) => void;
}) => (
  <div className="flex items-center bg-gray-50 border border-gray-300 rounded-md px-4 py-2 flex-grow">
    {icon && <span className="text-gray-500 mr-2">{icon}</span>}
    {type === "date" ? (
      <input
        type="date"
        value={value}
        onChange={(e) => setValue?.(e.target.value)}
        className="w-full bg-transparent text-gray-700 focus:outline-none"
      />
    ) : (
      children
    )}
  </div>
);

export default InputWrapper;
