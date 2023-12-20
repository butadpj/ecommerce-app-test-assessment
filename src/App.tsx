import { MainNav } from "@components/main-nav";
import { ProductsList } from "@components/products-list";
import { RightNav } from "@components/right-nav";
import { LeftNav } from "@components/left-nav";
import { products } from "@utils/data";
import { useMemo, useState } from "react";
import FilterButtons from "@components/filters/filter-buttons";

export type SortFilterValue = "ASC" | "DESC" | null;

function App() {
  const [nameFilterValue, setNameFilterValue] = useState<SortFilterValue>(null);
  const [priceFilterValue, setPriceFilterValue] =
    useState<SortFilterValue>(null);

  const [categoryFilterValue, setCategoryFilterValue] = useState<string>("all");

  const filteredByCategories = useMemo(() => {
    return products.filter((product) => {
      if (categoryFilterValue !== "all") {
        return product.category === categoryFilterValue;
      }

      return product;
    });
  }, [categoryFilterValue]);

  const filteredProducts = useMemo(() => {
    if (nameFilterValue) {
      return [...filteredByCategories].sort((a, b) => {
        if (nameFilterValue) {
          if (a.productName < b.productName) {
            return nameFilterValue === "ASC" ? -1 : 1;
          }
          if (a.productName > b.productName) {
            return nameFilterValue === "ASC" ? 1 : -1;
          }
        }

        return 0;
      });
    }

    if (priceFilterValue) {
      return [...filteredByCategories].sort((a, b) => {
        if (priceFilterValue) {
          if (a.unitPrice < b.unitPrice) {
            return priceFilterValue === "ASC" ? -1 : 1;
          }
          if (a.unitPrice > b.unitPrice) {
            return priceFilterValue === "ASC" ? 1 : -1;
          }
        }

        return 0;
      });
    }
    return filteredByCategories;
  }, [filteredByCategories, nameFilterValue, priceFilterValue]);

  return (
    <div>
      <MainNav />
      <main className="flex pt-[68px] justify-between">
        <LeftNav>
          <FilterButtons
            categoryFilterValue={categoryFilterValue}
            setCategoryFilterValue={setCategoryFilterValue}
            nameFilterValue={nameFilterValue}
            setNameFilterValue={setNameFilterValue}
            priceFilterValue={priceFilterValue}
            setPriceFilterValue={setPriceFilterValue}
          />
        </LeftNav>
        <ProductsList products={filteredProducts} />
        <RightNav />
      </main>
    </div>
  );
}

export default App;
