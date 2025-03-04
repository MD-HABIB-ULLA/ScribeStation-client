import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { TbReload } from "react-icons/tb";

interface Filters {
  categories: string[];
  priceRange: [number, number];
}

interface FilterPanelProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  resetFilters: () => void;
}

export default function FilterPanel({
  filters,
  setFilters,
  resetFilters,
}: FilterPanelProps) {
  const categories = ["Electronics", "Clothing", "Books", "Home"];

  const handleCategoryChange = (category: string) => {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }));
  };

  const handlePriceChange = (value: number[]) => {
    setFilters((prev) => ({ ...prev, priceRange: [value[0], value[1]] }));
  };

  return (
    <div className="w-full md:w-64 bg-white p-4 rounded-lg  flex flex-col max-h-full">
      <div className="overflow-y-auto flex-grow">
        <h2 className="text-lg font-semibold mb-4 md:block hidden">Filters</h2>
        <div className="mb-6">
          <h3 className="font-semibold  mb-2">Categories</h3>
          {categories.map((category) => (
            <div key={category} className="flex text-sm items-center mb-2">
              <input
                type="checkbox"
                id={category}
                checked={filters.categories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="mr-2"
              />
              <label htmlFor={category}>{category}</label>
            </div>
          ))}
        </div>
        <div>
          <h3 className="font-medium mb-2">Price Range</h3>
          <Slider
            min={0}
            max={1000}
            step={10}
            value={filters.priceRange}
            onValueChange={handlePriceChange}
            className="mb-2"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}</span>
          </div>
        </div>
      </div>
      <div className="mt-6 flex gap-2">
        <Button onClick={resetFilters} variant="outline" className=" hoverText hover:text-primary">
          <TbReload />
        </Button>
        <Button
        
          variant="outline"
          className="w-full !flex-1 hover:text-primary"
        >
          save
        </Button>
      </div>
    </div>
  );
}
