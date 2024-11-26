/**
 * @description reusable filter component to filter restaurant
 * @param title string
 * @param options string[]
 * @returns
 */
const FilterGroup = ({
  title,
  options,
}: {
  title: string;
  options: string[];
}) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    {options.map((option, index) => (
      <label key={index} className="flex items-center gap-2">
        <input type="checkbox" />
        {option}
      </label>
    ))}
  </div>
);

export default FilterGroup;
