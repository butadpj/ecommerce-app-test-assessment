import { Input } from "./ui/input";
import { Product } from "./product";

interface ProductsDataProps {
  id: string;
  productName: string;
  description: string;
  unitPrice: number;
  imageUrl: string;
  category: string;
}

export function ProductsList({
  products = [],
}: {
  products: ProductsDataProps[];
}) {
  return (
    <div className="ml-[208px] w-[calc(100%-37rem)] p-10">
      <Input type="search" placeholder="Search something.." />
      {products.length > 0 && (
        <div className="items mt-10 space-y-4">
          {products.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              name={item.productName}
              category={item.category}
              description={item.description}
              price={item.unitPrice}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      )}
    </div>
  );
}
