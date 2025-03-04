interface PaginationProps {
    productsPerPage: number;
    totalProducts: number;
    paginate: (pageNumber: number) => void;
    currentPage: number;
  }
  
  export default function Pagination({ productsPerPage, totalProducts, paginate, currentPage }: PaginationProps) {
    const pageNumbers: number[] = [];
  
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav className="mt-8">
        <ul className="flex justify-center space-x-2 py-10">
          {pageNumbers.map((number) => (
            <li key={number}>
              <button
                onClick={() => paginate(number)}
                className={`px-4 py-2  w-10 h-10 rounded-full ${
                  currentPage === number ? "bg-primary text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  