import AutoProductCard from "../common/ProductCards/AutoProductCard";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
      {products.map((product) => (
        <AutoProductCard key={product.id} />
      ))}
    </div>
  );
}
