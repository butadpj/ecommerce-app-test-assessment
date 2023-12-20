import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@components/ui/popover";
import { ArrowDown, ArrowUp, ArrowUpDown, FilterIcon } from "lucide-react";
import { CategoryFilter } from "./category-filter";
import { SortFilterValue } from "src/App";
import { products } from "@utils/data";

export default function FilterButtons({
  nameFilterValue,
  setNameFilterValue,
  priceFilterValue,
  setPriceFilterValue,
  categoryFilterValue,
  setCategoryFilterValue,
}: {
  nameFilterValue: SortFilterValue;
  setNameFilterValue: React.Dispatch<React.SetStateAction<SortFilterValue>>;
  priceFilterValue: SortFilterValue;
  setPriceFilterValue: React.Dispatch<React.SetStateAction<SortFilterValue>>;
  categoryFilterValue: string;
  setCategoryFilterValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  const categories = [...new Set(products.map((item) => item.category))];

  const getNameFilterIcon = () => {
    switch (nameFilterValue) {
      case "ASC":
        return <ArrowUp />;

      case "DESC":
        return <ArrowDown />;

      default:
        return <ArrowUpDown />;
    }
  };

  const getPriceFilterIcon = () => {
    switch (priceFilterValue) {
      case "ASC":
        return <ArrowUp />;

      case "DESC":
        return <ArrowDown />;

      default:
        return <ArrowUpDown />;
    }
  };

  return (
    <div className="flex flex-col gap-4 px-5 text-lg">
      <button
        onClick={() => {
          setPriceFilterValue(null);
          if (!nameFilterValue) return setNameFilterValue("ASC");
          if (nameFilterValue === "ASC") return setNameFilterValue("DESC");
          if (nameFilterValue === "DESC") return setNameFilterValue("ASC");
        }}
        className="cursor-pointer flex gap-2 items-center"
      >
        Name {getNameFilterIcon()}{" "}
        {nameFilterValue ? (
          <span
            onClick={(e) => {
              e.stopPropagation();
              setNameFilterValue(null);
            }}
            className="text-gray-300 text-sm underline mt-1 ml-5"
          >
            reset
          </span>
        ) : (
          ""
        )}
      </button>

      <button
        onClick={() => {
          setNameFilterValue(null);
          if (!priceFilterValue) return setPriceFilterValue("ASC");
          if (priceFilterValue === "ASC") return setPriceFilterValue("DESC");
          if (priceFilterValue === "DESC") return setPriceFilterValue("ASC");
        }}
        className="cursor-pointer flex gap-2 items-center"
      >
        Price {getPriceFilterIcon()}{" "}
        {priceFilterValue ? (
          <span
            onClick={(e) => {
              e.stopPropagation();
              setPriceFilterValue(null);
            }}
            className="text-gray-300 text-sm underline mt-1 ml-5"
          >
            reset
          </span>
        ) : (
          ""
        )}
      </button>

      <Popover>
        <PopoverTrigger className=" flex gap-2 items-center">
          Categories <FilterIcon />
        </PopoverTrigger>
        <PopoverContent>
          <ul>
            <CategoryFilter
              label="All Items"
              isActive={categoryFilterValue === "all"}
              onClick={() => {
                setCategoryFilterValue("all");
              }}
            />
            {categories.map((category) => (
              <CategoryFilter
                key={category}
                label={category}
                isActive={categoryFilterValue === category}
                onClick={() => {
                  setCategoryFilterValue(category);
                }}
              />
            ))}
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  );
}
