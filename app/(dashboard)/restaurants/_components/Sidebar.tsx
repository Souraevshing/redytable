import { cuisines, quickFilters, tags } from "@/constants/restaurant-filters";
import FilterGroup from "./FilterGroup";

/**
 * @description sidebar to show on restaurant page
 */
const Sidebar = () => (
  <aside className="w-1/4 bg-white shadow-md rounded-lg p-4">
    <FilterGroup title="Quick Filters" options={quickFilters.filters} />
    <FilterGroup title="Cuisines" options={cuisines.cuisines} />
    <FilterGroup title="Tags" options={tags.tags} />
  </aside>
);

export default Sidebar;
