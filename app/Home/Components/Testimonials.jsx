import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const testimonials = [
  {
    name: "MoistCr1tikal",
    quote: "This platform helped me turn my passion into income. Love the freedom it gives creators!",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Cr1TiKaL_in_2022.jpg/220px-Cr1TiKaL_in_2022.jpg",
    title: "Twitch Creator",
  },
  {
    name: "Ryan Gosling",
    quote: "Finally, a place where I can connect with my true fans and get paid doing what I love.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_sjBZPOPtnE1-K90OT05gWH50uOkDYWa9rA&s",
    title: "Actor",
  },
  {
    name: "iJustine",
    quote: "“For the first time, I’m earning consistently from my writing. This community believes in my stories.”",
    image: "https://alchetron.com/cdn/ijustine-c9fe444e-01fc-4ced-8178-59340313706-resize-750.jpeg",
    title: "Youtuber",
  },
  {
    name: "Livva",
    quote: "“For the first time, I’m earning consistently from my writing. This community believes in my stories.”",
    image: "https://th.bing.com/th/id/OIP.yAzLDPMuz22M42S3Drh6LgHaHa?rs=1&pid=ImgDetMain",
    title: "Fashion Blogger",
  },
];

function TestimonialCard({ name, title, image, quote }) {
  return (
    <div className="w-72 h-72 bg-white rounded-2xl shadow-lg pt-7 px-4 relative flex flex-col items-center text-center">
      <div className="  ">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-full border-4 border-white shadow-md"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-indigo-500">{name}</h3>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="mt-3 text-sm italic text-gray-700">"{quote}"</p>
      </div>
    </div>
  );
}

export default function TestimonialSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    arrows: false,
  };

  return (
    <section className="bg-gray-100 py-12  px-4 ml-20">
      <div className="max-w-lg  mx-auto">
        <Slider {...settings}>
          {testimonials.map((c, idx) => (
            <div key={idx} className="flex justify-center">
              <TestimonialCard {...c} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
