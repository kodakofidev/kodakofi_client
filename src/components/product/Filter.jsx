import { useState, useRef, useEffect } from "react";
// import DualSlider from "./DualSlider";

function Filter({ filters, onFilterApply }) {
  const formRef = useRef(null);
  const minRef = useRef(null);
  const maxRef = useRef(null);

  const minLimit = 0;
  const maxLimit = 100000;

  const [search, setSearch] = useState(filters.search || "");
  const [category, setCategory] = useState(filters.category || []);
  const [options, setOptions] = useState(filters.options || "");
  const [minPrice, setMinPrice] = useState(Number(filters.minPrice || minLimit));
  const [maxPrice, setMaxPrice] = useState(Number(filters.maxPrice || maxLimit));
  const [activeSlider, setActiveSlider] = useState("max")

  useEffect(() => {
    setSearch(filters.search || "");
    setCategory(filters.category || []);
    setOptions(filters.options || "");
    setMinPrice(filters.minPrice || minLimit);
    setMaxPrice(filters.maxPrice || maxLimit);
    console.log("Filter props:", filters);
  }, [filters]);

  const sortOptions = [
    { label: "Best Seller", value: "favorite" },
    { label: "Rating", value: "rating" },
    { label: "Cheapest", value: "cheapest" },
    { label: "Oldest", value: "oldest" },
    { label: "A-Z", value: "asc" },
    { label: "Z-A", value: "desc" },
  ]

  const handleCategoryChange = (type) => {
    setCategory((prev) =>
      prev.includes(type)
        ? prev.filter((c) => c !== type) 
        : [...prev, type]                
    );
  };

  const handleMinInput = (e) => {
    let inputMin = Number(e.target.value);
    if (inputMin < 0) inputMin = 0;
    if (inputMin > maxPrice - 1) inputMin = maxPrice - 1;
    setMinPrice(inputMin);
    setActiveSlider("min")
  };

  const handleMaxInput = (e) => {
    let inputMax = Number(e.target.value);
    if (inputMax > maxLimit) inputMax = maxLimit;
    if (inputMax < minPrice + 1) inputMax = minPrice + 1;
    setMaxPrice(inputMax);
    setActiveSlider("max")
  };

  const handleReset = () => {
    if (formRef.current) {
      formRef.current.reset();
      setSearch("");
      setCategory([]);
      setOptions("");
      setMinPrice(minLimit);
      setMaxPrice(maxLimit);
    }
  };

  return (
    <section className="my-5 hidden h-[680px] w-1/3 rounded-lg bg-black p-5 md:block lg:block xl:block">
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
                  type="checkbox"
                  name="category"
                  id={type}
                  checked={category.includes(type)}
                  onChange={() => handleCategoryChange(type)}
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
          {sortOptions.map((sort) => (
            <div
              key={sort.value}
              className="relative my-2 flex flex-row items-center gap-2"
            >
              <input
                type="radio"
                name="options"
                id={sort.value}
                checked={options === sort.value}
                onChange={() => setOptions(sort.value)}
                className="h-4 w-4 cursor-pointer rounded-full checked:border-[#ff8906] focus:ring-[#ff8906]"
              />
              <label htmlFor={sort.value} className="text-xs text-white capitalize">
                {sort.label}
              </label>
            </div>
          ))}
        </div>
        <div className="my-3 w-full">
          <label className="text-xs font-semibold text-white">
            Price Range
          </label>
          <div onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left; // mouse position within slider
              const middle = rect.width / 2;
              setActiveSlider(x < middle ? "min" : "max");
            }} 
            className="relative h-7">
            <div className="absolute top-1/2 h-1 w-full -translate-y-1/2 transform rounded-md bg-[#c3beb7]" />
            <div
              className="absolute top-1/2 h-1 -translate-y-1/2 transform rounded bg-[#ff8906]"
              style={{
                left: `${((minPrice - minLimit) / (maxLimit - minLimit)) * 100}%`,
                width: `${((maxPrice - minPrice) / (maxLimit - minLimit)) * 100}%`,
              }}
            />

            {activeSlider === "min" ? (
              <>
                <input
                  ref={maxRef}
                  type="range"
                  min={minLimit}
                  max={maxLimit}
                  value={maxPrice}
                  onInput={handleMaxInput}
                  style={{ zIndex: activeSlider === "max" ? 2 : 1 }}
                  className="absolute h-7 w-full appearance-none bg-transparent pointer-events-auto"
                />
                <input
                  ref={minRef}
                  type="range"
                  min={minLimit}
                  max={maxLimit}
                  value={minPrice}
                  onInput={handleMinInput}
                  style={{ zIndex: activeSlider === "min" ? 2 : 1 }}
                  className="absolute h-7 w-full appearance-none bg-transparent pointer-events-auto"
                />
              </>
              ) : (
              <>
                <input
                  ref={minRef}
                  type="range"
                  min={minLimit}
                  max={maxLimit}
                  value={minPrice}
                  onInput={handleMinInput}
                  style={{ zIndex: activeSlider === "min" ? 2 : 1 }}
                  className="absolute h-7 w-full appearance-none bg-transparent pointer-events-auto"
                />
                <input
                  ref={maxRef}
                  type="range"
                  min={minLimit}
                  max={maxLimit}
                  value={maxPrice}
                  onInput={handleMaxInput}
                  style={{ zIndex: activeSlider === "max" ? 2 : 1 }}
                  className="absolute h-7 w-full appearance-none bg-transparent pointer-events-auto"
                />
              </>
            )}
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
