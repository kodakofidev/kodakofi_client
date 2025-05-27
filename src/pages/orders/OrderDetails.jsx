import profile from "../../assets/order-details/Profile.svg";
import location from "../../assets/order-details/Location.svg";
import PhoneCall from "../../assets/order-details/PhoneCall.svg";
import method from "../../assets/order-details/u_postcard.svg";
import shipping from "../../assets/order-details/truck.svg";
import status from "../../assets/order-details/u_process.svg";
import Coffee from "../../assets/iconCheckoutPage/Coffee.jpg";

const OrderDetails = () => {
  const data = [
    {
      id: 1,
      product: "Hazelnut latte",
      quantity: 2,
      size: "Regular",
      variant: "Ice",
      typeOrder: "Dine In",
      originalPrice: 40000,
      discountPrice: 20000,
    },
  ];
  return (
    <main className="mt-20 px-4 md:mt-40 md:px-12 lg:px-8 xl:px-24">
      <section>
        <h2 className="mb-2.5 text-2xl font-bold md:text-5xl">
          Order <strong>#12345-09893</strong>
        </h2>
        <p className="mb-7 leading-[100%] text-(--color-text-gray)">
          21 March 2023 at 10:30 AM
        </p>
      </section>
      <section className="gap-5 md:flex">
        <div className="md:flex-3">
          <h3 className="mb-3 text-xl leading-[100%] font-medium text-(--color-text-black) md:text-[22px]">
            Order Information
          </h3>
          <div className="flex items-center justify-between border-b border-[#E8E8E8E8] px-2.5 py-5">
            <div className="flex items-center gap-2">
              <img src={profile} alt="profile" width={16} height={16} />
              <p className="leading-[100%] font-medium text-(--color-text-gray) max-sm:text-sm">
                Full Name
              </p>
            </div>
            <p className="text-right leading-[100%] font-black text-(--color-text-black) max-sm:text-sm">
              Ghaluh Wizard Anggoro
            </p>
          </div>
          <div className="flex items-center justify-between border-b border-[#E8E8E8E8] px-2.5 py-5">
            <div className="flex items-center gap-2">
              <img src={location} alt="profile" width={16} height={16} />
              <p className="leading-[100%] font-medium text-(--color-text-gray) max-sm:text-sm">
                Address
              </p>
            </div>
            <p className="text-right leading-[100%] font-black text-(--color-text-black) max-sm:text-sm">
              Griya bandung indah
            </p>
          </div>
          <div className="flex items-center justify-between border-b border-[#E8E8E8E8] px-2.5 py-5">
            <div className="flex items-center gap-2">
              <img src={PhoneCall} alt="profile" width={16} height={16} />
              <p className="leading-[100%] font-medium text-(--color-text-gray) max-sm:text-sm">
                Phone
              </p>
            </div>
            <p className="text-right leading-[100%] font-black text-(--color-text-black) max-sm:text-sm">
              082116304338
            </p>
          </div>
          <div className="flex items-center justify-between border-b border-[#E8E8E8E8] px-2.5 py-5">
            <div className="flex items-center gap-2">
              <img src={method} alt="profile" width={16} height={16} />
              <p className="leading-[100%] font-medium text-(--color-text-gray) max-sm:text-sm">
                Payment Method
              </p>
            </div>
            <p className="text-right leading-[100%] font-black text-(--color-text-black) max-sm:text-sm">
              Cash
            </p>
          </div>
          <div className="flex items-center justify-between border-b border-[#E8E8E8E8] px-2.5 py-5">
            <div className="flex items-center gap-2">
              <img src={shipping} alt="profile" width={16} height={16} />
              <p className="leading-[100%] font-medium text-(--color-text-gray) max-sm:text-sm">
                Shipping
              </p>
            </div>
            <p className="text-right leading-[100%] font-black text-(--color-text-black) max-sm:text-sm">
              Dine In
            </p>
          </div>
          <div className="flex items-center justify-between border-b border-[#E8E8E8E8] px-2.5 py-5">
            <div className="flex items-center gap-2">
              <img src={profile} alt="profile" width={16} height={16} />
              <p className="leading-[100%] font-medium text-(--color-text-gray) max-sm:text-sm">
                Status
              </p>
            </div>
            <p className="rounded-3xl bg-[#00A70033] p-3 text-right text-sm leading-6 font-black text-[#00A700] max-sm:text-sm">
              Done
            </p>
          </div>
          <div className="flex items-center justify-between px-2.5 py-5">
            <div className="flex items-center gap-2">
              <p className="leading-[100%] font-medium text-(--color-text-gray) max-sm:text-sm">
                Total Transaksi
              </p>
            </div>
            <p className="text-right leading-[100%] font-black text-(--secondary-color) max-sm:text-sm">
              Idr 40.000
            </p>
          </div>
        </div>
        <div className="max-sm:mt-9 max-sm:mb-3 md:flex-3">
          <h3 className="mb-3 text-[22px] leading-[100%] font-medium text-(--color-text-black)">
            Your Order
          </h3>
          <div className="flex items-center justify-between border-b border-[#E8E8E8E8] px-2.5 py-5">
            {data.map((product, idx) => (
              <CardOrder {...product} key={idx} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

function CardOrder({
  product,
  quantity,
  size,
  variant,
  typeOrder,
  originalPrice,
  discountPrice,
  id,
}) {
  return (
    <>
      <div className="flex w-full items-center gap-3 rounded-sm bg-[#E8E8E84D] p-4">
        <div className="max-sm: mr-7 lg:flex">
          <img
            src={Coffee}
            alt="image"
            className="aspect-square w-[76px] flex-2 md:w-[178px]"
          />
        </div>
        <div className="col-span-2 flex flex-3 flex-col gap-1">
          <div className="w-max rounded-2xl bg-red-600 px-2.5 py-0.5">
            <p className="text-[10px]md:text-sm leading-6 font-bold text-white max-[1000px]:text-[10px]">
              FLASH SALE
            </p>
          </div>
          <h1 className="text-sm font-semibold max-[1000px]:text-sm md:text-[17px]">
            {product}
          </h1>
          <div>
            <p className="text-sm text-(--color-text-gray) max-[1000px]:text-sm md:text-lg">
              {quantity} pcs | {size} | {variant} | {typeOrder}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-[12px] font-medium text-red-500 line-through max-[1000px]:text-[13px]">
              IDR {originalPrice.toLocaleString("id-ID")}
            </p>
            <p className="text-orange text-[15px]md:text-[18px] font-semibold max-[1000px]:text-[15px]">
              IDR {discountPrice.toLocaleString("id-ID")}
            </p>
          </div>
        </div>
        <div
          className="absolute top-3 right-3 cursor-pointer md:top-1/2 md:right-4 md:-translate-y-1/2"
          onClick={() => {
            deleteProductOrder(id);
          }}
        ></div>
      </div>
    </>
  );
}

export default OrderDetails;
