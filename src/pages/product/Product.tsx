import Sidebar from "@/components/common/Sidebar/Sidebar";
import FilterPanel from "@/components/product/FilterPanel";
import Pagination from "@/components/product/Pagination";
import ProductGrid from "@/components/product/ProductGrid";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

import { useEffect, useState } from "react";
import { BsSliders } from "react-icons/bs";

// Define types for better TypeScript support
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

interface Filters {
  categories: string[];
  priceRange: [number, number];
}

// Mock data for demonstration
const mockProducts: Product[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  category: ["Electronics", "Clothing", "Books", "Home"][
    Math.floor(Math.random() * 4)
  ],
  price: Math.floor(Math.random() * 1000) + 1,
  image: "/placeholder.svg",
}));

export default function Product() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [filters, setFilters] = useState<Filters>({
    categories: [],
    priceRange: [0, 1000],
  });

  const productsPerPage = 12;
  const filteredProducts = mockProducts.filter(
    (product) =>
      (filters.categories.length === 0 ||
        filters.categories.includes(product.category)) &&
      product.price >= filters.priceRange[0] &&
      product.price <= filters.priceRange[1]
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const resetFilters = () => {
    setFilters({
      categories: [],
      priceRange: [0, 1000],
    });
    setCurrentPage(1); // Reset to first page when filters are cleared
  };

  const [sortOrder, setSortOrder] = useState("default");

  const handleChange = (value: string) => {
    setSortOrder(value);
    // Handle sorting logic based on `value` (default, low-high, high-low)
  };

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const footer = document.getElementById("footer"); // Ensure your footer has this ID
    if (!footer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisible(!entries[0].isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  console.log(isVisible);

  return (
    <>
      <div className="flex flex-row gap-8 relative ">
        <div className="md:sticky md:block hidden md:top-4 md:h-[calc(100vh-2rem)] md:overflow-auto">
          <FilterPanel
            filters={filters}
            setFilters={setFilters}
            resetFilters={resetFilters}
          />
        </div>
        <div
          onClick={() => setIsFilterOpen(true)}
          className={` ${
            !isVisible ? "-left-16" : "-left-0"
          }  transition-all duration-300  bg-primary text-sm h-10 flex items-center justify-center px-3 text-white  md:hidden cursor-pointer rounded-r-full mt-5 fixed z-50 `}
        >
          <BsSliders size={20} />
        </div>

        <div className="flex-1">
          <div className="h-10 py-10 px-6 w-full text-foreground flex items-center justify-end">
            <select
              value={sortOrder}
              onChange={(e) => handleChange(e.target.value)}
              className="w-[180px] px-3 py-2 border outline-none border-gray-300 rounded bg-white text-gray-700 cursor-pointer"
            >
              <option value="default">Default</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>

          <div className=" max-w-5xl px-5 m-auto">
            <ProductGrid products={currentProducts} />
            <Pagination
              productsPerPage={productsPerPage}
              totalProducts={filteredProducts.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>

      <Sidebar
        isOpen={isFilterOpen}
        title="Filter controlls"
        onClose={() => setIsFilterOpen(false)}
        position="left"
      >
        <div>
          <FilterPanel
            filters={filters}
            setFilters={setFilters}
            resetFilters={resetFilters}
          />
        </div>
      </Sidebar>
    </>
  );
}
