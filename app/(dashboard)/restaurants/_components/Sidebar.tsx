import { cuisines, quickFilters, tags } from "@/constants/restaurant-filters";
import FilterGroup from "./FilterGroup";

/**
 * @description sidebar to show on restaurant page
 */
export function Sidebar() {
  return (
    <aside className="w-1/4 bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Quick Filters</h3>
      <input
        type="text"
        placeholder="Search"
        className="w-full p-2 mb-4 border rounded-md focus:outline-none"
      />
      <FilterGroup title="Options" options={quickFilters.filters} />
      <FilterGroup title="Cuisines" options={cuisines.cuisines} />
      <FilterGroup title="Tags" options={tags.tags} />
    </aside>
  );
}

export default Sidebar;
