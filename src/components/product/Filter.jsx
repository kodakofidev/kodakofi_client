import { useState, useRef, useEffect } from "react";

function Filter({ filters, onFilterApply }) {
  const formRef = useRef(null);
  const minLimit = 0;
  const maxLimit = 100000;

  const [search, setSearch] = useState(filters.search || "");
  const [category, setCategory] = useState(filters.category || "");
  const [options, setOptions] = useState(filters.options || "");
  const [minPrice, setMinPrice] = useState(filters.minPrice || minLimit);
  const [maxPrice, setMaxPrice] = useState(filters.maxPrice || maxLimit);
  const [isMinActive, setIsMinActive] = useState(false);
  const [isMaxActive, setIsMaxActive] = useState(false);

  useEffect(() => {
    setSearch(filters.search || "");
    setCategory(filters.category || "");
    setOptions(filters.options || "");
    setMinPrice(filters.minPrice || minLimit);
    setMaxPrice(filters.maxPrice || maxLimit);
    console.log("Filter props:", filters);
  }, [filters]);

  const handleMinInput = (e) => {
    let inputMin = Number(e.target.value);
    if (inputMin < 0) inputMin = 0;
    if (inputMin < maxPrice) setMinPrice(inputMin);
  };

  const handleMaxInput = (e) => {
    let inputMax = Number(e.target.value);
    if (inputMax <= 0) inputMax = undefined;
    if (inputMax > minPrice) setMaxPrice(inputMax);
  };

  const handleReset = () => {
    if (formRef.current) {
      formRef.current.reset();
      setSearch("");
      setCategory("");
      setOptions("");
      setMinPrice(minLimit);
      setMaxPrice(maxLimit);
    }
  };

  return (
    <section className="my-5 hidden h-[650px] w-1/3 rounded-lg bg-black p-5 md:block lg:block xl:block">
      <div className="flex flex-row items-center justify-between">
        <p className="text-sm font-semibold text-white">Filter</p>
        <p
          onClick={handleReset}
          className="cursor-pointer text-xs font-semibold text-white"
        >
          Reset filter
        </p>
      </div>
      <form
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          onFilterApply({
            search,
            category,
            options,
            minPrice: minPrice > 0 ? minPrice : 0,
            maxPrice: maxPrice > 0 ? maxPrice : 0,
          });
        }}
        className="my-5"
      >
        <div className="flex flex-col">
          <label htmlFor="search" className="text-xs font-semibold text-white">
            Search
          </label>
          <input
            type="text"
            name="search"
            placeholder="Search Your Product"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="my-1 w-full rounded-sm bg-white p-3 text-xs text-black"
          />
        </div>
        <div className="my-2">
          <label className="text-xs font-semibold text-white">Category</label>
          {["Coffee", "Non-Coffee", "Food", "Dessert", "Snack", "Topping"].map(
            (type) => (
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
            ),
          )}
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
        <div className="my-3 w-full">
          <label className="text-xs font-semibold text-white">
            Price Range
          </label>
          <div className="relative h-7">
            <div className="absolute top-1/2 h-1 w-full -translate-y-1/2 transform rounded-md bg-[#c3beb7]" />
            <div
              className="absolute top-1/2 h-1 -translate-y-1/2 transform rounded bg-[#ff8906]"
              style={{
                left: `${(minPrice / maxLimit) * 100}%`,
                width: `${((maxPrice - minLimit) / maxLimit) * 100}%`,
              }}
            />

            {/* Minval input */}
            <input
              type="range"
              min={minLimit}
              max={maxLimit}
              value={minPrice}
              onChange={handleMinInput}
              onMouseDown={() => setIsMinActive(true)}
              onMouseUp={() => setIsMinActive(false)}
              className="absolute h-7 w-full cursor-pointer appearance-none bg-transparent"
              style={{ zIndex: isMinActive ? 2 : 1 }}
            />

            {/* Maxval input */}
            <input
              type="range"
              min={minLimit}
              max={maxLimit}
              value={maxPrice}
              onChange={handleMaxInput}
              onMouseDown={() => setIsMaxActive(true)}
              onMouseUp={() => setIsMaxActive(false)}
              className="absolute h-7 w-full cursor-pointer appearance-none bg-transparent"
              style={{ zIndex: isMaxActive ? 2 : 1 }}
            />
          </div>

          {/* Display values */}
          <div className="flex justify-between text-xs font-semibold text-white">
            <span>IDR {minPrice}</span>
            <span>IDR {maxPrice}</span>
          </div>
        </div>
        <button
          type="submit"
          className="my-3 w-full rounded-md bg-[#ff8906] p-2 text-xs"
        >
          Apply filter
        </button>
      </form>
    </section>
  );
}

export default Filter;
