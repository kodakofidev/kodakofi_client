import profile from "../../assets/order-details/Profile.svg"
import location from "../../assets/order-details/Location.svg"
import PhoneCall from "../../assets/order-details/PhoneCall.svg"
import method from "../../assets/order-details/u_postcard.svg"
import status from "../../assets/order-details/u_process.svg"
const OrderDetails = () => {
  return (
    <main className='px-4 lg:px-8 md:px-12 xl:px-24 mt-40'>
      <section>
        <h2 className='text-5xl font-bold '>
          Order <strong>#12345-09893</strong>
        </h2>
        <span>21 March 2023 at 10:30 AM</span>
      </section>
      <section>
        <div>
          <h3 className='font-medium text-[22px] leading-[100%] text-(--color-text-black)'>
            Order Information
          </h3>
          <div>
            <div className='flex justify-between items-center'>
              <img src={profile} alt='profile' />
              <p className='leading-[100%] text-(--color-text-gray)'>
                Full Name
              </p>
            </div>
            <p>Ghaluh Wizard Anggoro</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default OrderDetails
