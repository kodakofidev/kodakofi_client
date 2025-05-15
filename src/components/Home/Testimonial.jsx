import React, { useState } from "react";
import Photo from "/landingPage/Photo.jpg";
import Photo2 from "/landingPage/Photo2.jpg";
import Photo3 from "/landingPage/Photo3.jpg";
import Photo4 from "/landingPage/Photo4.jpg";
import Star from "/landingPage/Star.svg";
import ArrowUp from "/landingPage/ArrowUp.svg";

export default function Testimonial() {
  const [testimonial, setTestimonial] = useState(1);

  function testimonialHandler(page) {
    if (
      (testimonial === 4 && page === 1) ||
      (testimonial === 1 && page === -1)
    ) {
      return;
    }
    setTestimonial(testimonial + page);
  }

  const testimonials = [
    {
      name: "Viezh Robert",
      role: "Manager Coffee Shop",
      rating: 5.0,
      review:
        "Wow... I am very happy to spend my whole day here. The Wi-Fi is good, and the coffee and meals tho. I like it here!! Very recommended!",
      stars: 5,
    },
    {
      name: "Yessica Christy",
      role: "Graphic Designer",
      rating: 4.5,
      review:
        "Cozy place and friendly staff. Perfect spot for working remotely. Will definitely come again!",
      stars: 5,
    },
    {
      name: "Kim Young Jou",
      role: "Travel Blogger",
      rating: 4.8,
      review:
        "Love the vibe here. Great selection of coffee and snacks. Very Instagrammable too!",
      stars: 5,
    },
    {
      name: "Robert Chen",
      role: "Startup Founder",
      rating: 4.2,
      review:
        "Nice ambiance. Good coffee and fast internet. A bit crowded at times, but still a great spot.",
      stars: 4,
    },
    {
      name: "Amanda Lee",
      role: "Freelance Writer",
      rating: 5.0,
      review:
        "This is my go-to place for writing. Peaceful atmosphere and the best cappuccino in town!",
      stars: 5,
    },
  ];

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-black text-white p-6 select-none">
        <div className="row-span-2 md:col-start-1 px-4">
          <div className="aspect-[4/3] overflow-hidden px-6">
            {(() => {
              switch (testimonial) {
                case 1:
                  return <img src={Photo} alt="photo" />;
                case 2:
                  return <img src={Photo2} alt="photo" />;
                case 3:
                  return <img src={Photo3} alt="photo" />;
                default:
                  return <img src={Photo4} alt="photo" />;
              }
            })()}
          </div>
        </div>
        <div className="h-7 px-6 row-start-1 md:col-start-2 text-center md:text-left self-end">
          Testimonial
        </div>
        <div className=" px-6 flex flex-col gap-3">
          <h1 className="text-3xl font-semibold pl-3 relative before:absolute before:left-0 before:content-[''] before:bg-orange before:w-[4px] before:rounded-lg before:h-10">
            {testimonials[testimonial - 1].name}
          </h1>
          <p className="text-orange">{testimonials[testimonial - 1].role}</p>
          <p>{testimonials[testimonial - 1].review}</p>
          <div className="flex gap-14">
            <div className="flex gap-3">
              {(() => {
                const stars = [];
                for (let i = 0; i < testimonials[testimonial - 1].stars; i++) {
                  stars.push(<img key={i} src={Star} alt="star" />);
                }
                return stars;
              })()}
            </div>
            <div>
              <p>{testimonials[testimonial - 1].rating}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => {
                testimonialHandler(-1);
              }}
              type="button"
              className="p-3 bg-white rounded-full cursor-pointer rotate-180 hover:scale-[1.03] active:scale-[1]"
            >
              <img src={ArrowUp} alt="icon" />
            </button>
            <button
              onClick={() => {
                testimonialHandler(1);
              }}
              type="button"
              className="p-3 bg-orange rounded-full cursor-pointer hover:scale-[1.03] active:scale-[1]"
            >
              <img src={ArrowUp} alt="icon" />
            </button>
          </div>
          <div className="flex gap-3">
            <div
              className={`transition-all duration-100 ${
                testimonial === 1 ? "w-8 bg-orange" : "bg-white"
              } p-1 rounded-full`}
            ></div>
            <div
              className={`transition-all ${
                testimonial === 2 ? "w-8 bg-orange" : "bg-white"
              } p-1 rounded-full`}
            ></div>
            <div
              className={`transition-all ${
                testimonial === 3 ? "w-8 bg-orange" : "bg-white"
              } p-1 rounded-full`}
            ></div>
            <div
              className={`transition-all ${
                testimonial === 4 ? "w-8 bg-orange" : "bg-white"
              } p-1 rounded-full`}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}
