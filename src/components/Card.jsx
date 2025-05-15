// import pic from '../assets/image-30.png'
import star from '../assets/star.svg'
import Cart from '../assets/ShoppingCart.svg'
import kopi from '../assets/kopi.jpg'

function Card() {
  return (
    <div className='relative w-full h-full border'>
        <div className='w-full h-full bg-[#FF8906]'>
            <div className='h-2/3 w-2/3'>
                <img src={kopi} alt="ini kopi" />
            </div>
            <div className='h-1/3 bg-white'></div>
        </div>
        <div className='flex flex-col gap-[40vh] p-10 absolute top-0'>
            <div className='bg-[#D00000] rounded-full text-white text-center w-1/6 px-3 font-lg font-bold'>FLASH SALE</div>
            <div className='bg-white flex flex-col gap-[10px]'>
                <div className='text-2xl text-black'>Hazelnut Latte</div>
                <div className='text-[#4F5665]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dignissimos ducimus alias, natus, nihil doloribus culpa quisquam delectus quam quasi labore laudantium inventore enim eos! Saepe delectus pariatur quis amet.</div>
                <div className='flex flex-row items-center gap-[10px]'>
                    <div><img src={star} alt="rating" /></div>
                    <div>5.0</div>
                </div>
                <div className='text-[#FF8906] text-2xl'>IDR. 20000</div>
                <div className='flex flex-row gap-[10px]'>
                    <button className='bg-[#FF8906] rounded-md py-2 w-9/10'>Buy</button>
                    <button className='border-[#FF8906] rounded-md p-2 w-1/10 flex flex-col items-center'><img src={Cart} alt="Add to cart" /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card
