import coffee from '../../assets/coffee.jpg'

function Tagline() {
  return (
    <>
      <section className='hidden md:block lg:block xl:block relative z-0 before:content-[""] before:absolute before:inset-0 before:-z-1 before:bg-[#00000099]' style={{
        backgroundImage: `url(${coffee})`,
        backgroundPosition: "0% 65%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "300px"
        }}>
        <div className='py-30'><p className='text-4xl text-white w-1/2 md:mx-12 lg:mx-8 xl:mx-24'>We Provide Good Coffee and Healthy Meals</p></div>
      </section>
    </>
  )
}

export default Tagline
