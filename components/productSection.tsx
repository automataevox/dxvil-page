import { useEffect, useState } from "react";
import { getGumRoadProducts } from "@/lib/api";

export default function ProductSection() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getGumRoadProducts();
      setProducts(products);
    };

    fetchProducts();
  }, []);

  console.log(products)

  return (
    <div className="flex flex-col gap-3">
    </div>
  );
}
