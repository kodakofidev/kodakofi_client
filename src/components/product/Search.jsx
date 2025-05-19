import { useState, useEffect, useRef } from "react";
import filter from "../../assets/icon/Filter.svg";
import searchpic from "../../assets/icon/Search2.svg";

function Search({ filters, onFilterApply }) {
  const formRef = useRef(null);
  const [search, setSearch] = useState(filters.search || "");
  const [category, setCategory] = useState(filters.category || "");
  const [options, setOptions] = useState(filters.options || "");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setSearch(filters.search || "");
    setCategory(filters.category || "");
    setOptions(filters.options || "");
  }, [filters]);

  const handleReset = () => {
    if (formRef.current) {
      formRef.current.reset();
      setSearch("");
      setCategory("");
      setOptions("");
    }
  };

  function showMenu() {
    setIsVisible((prev) => !prev);
  }

  return (
    <div className="relative block md:hidden lg:hidden xl:hidden">
      <form
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          onFilterApply({
            search,
            category,
            options,
          });
        }}
      >
        <div className="mt-20 flex flex-row justify-between gap-[10px] px-4 md:px-12">
          <div className="flex w-full flex-row rounded-sm border border-[#777c82] bg-[#e8e8e8] p-2">
            <img src={searchpic} alt="search" />
            <input
              type="text"
              name="search"
              value={search}
              placeholder="Search Your Product"
              onChange={(e) => setSearch(e.target.value)}
              className="mx-2 w-full bg-[#e8e8e8] text-xs text-black outline-none"
            />
          </div>
          <div
            onClick={showMenu}
            className="rounded-md bg-[#ff8906] px-2 pt-3 pb-2"
          >
            <img src={filter} alt="Filter" />
          </div>
        </div>
        <div
          className={`${isVisible ? "visible" : "invisible"} absolute left-4 flex w-[91vw] flex-row justify-between rounded-lg bg-[#000000cc] p-5 transition-all duration-300 ease-in-out sm:w-[95vw]`}
        >
          <div className="my-2">
            <label className="text-xs font-semibold text-white">Category</label>
            {[
              "Coffee",
              "Non-Coffee",
              "Food",
              "Dessert",
              "Snack",
              "Topping",
            ].map((type) => (
              <div
                key={type}
                className="relative my-2 flex flex-row items-center gap-2"
              >
                <input
                  type="radio"
                  name="category"
                  id={type}
                  checked={category === type}
                  onChange={() => setCategory(type)}
                  className="h-4 w-4 cursor-pointer rounded-full checked:border-[#ff8906] focus:ring-[#ff8906]"
                />
                <label
                  htmlFor={type}
                  className="cursor-pointer text-xs text-white capitalize"
                >
                  {type}
                </label>
              </div>
            ))}
          </div>
          <div className="my-2">
            <label className="text-xs font-semibold text-white">Sort by</label>
            {[
              "favorite",
              "newest",
              "oldest",
              "ascending",
              "descending",
              "cheapest",
            ].map((sort) => (
              <div
                key={sort}
                className="relative my-2 flex flex-row items-center gap-2"
              >
                <input
                  type="radio"
                  name="options"
                  id={sort}
                  checked={options === sort}
                  onChange={() => setOptions(sort)}
                  className="h-4 w-4 cursor-pointer rounded-full checked:border-[#ff8906] focus:ring-[#ff8906]"
                />
                <label htmlFor={sort} className="text-xs text-white capitalize">
                  {sort}
                </label>
              </div>
            ))}
          </div>
          <div className="my-10 flex flex-col gap-[5px]">
            <button
              type="submit"
              className="h-10 w-full rounded-md bg-[#ff8906] p-2 text-xs"
            >
              Apply filter
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="h-10 w-full rounded-md bg-[#ff8906] p-2 text-xs"
            >
              Reset filter
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Search;
