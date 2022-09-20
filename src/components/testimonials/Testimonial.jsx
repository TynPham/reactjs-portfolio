import React from "react";
import "./Testimonial.scss";
import CARD1 from "../../assets/avatar1.jpg";
import CARD2 from "../../assets/avatar2.jpg";
import CARD3 from "../../assets/avatar3.jpg";
import CARD4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const dataCard = [
  {
    id: 1,
    image: CARD1,
    name: "Nana Ama McBrown",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing editaddsfsd. Lorem ipsum, dolor sit amet consectetur adipisicing edit ashdg kjasfd dfh. Lorem ipsum, dolor sit amet consectetur adipisicing edit. Lorem ipsum, dolor sit amet consectetur adipisicing hafdkjdfkdshf edit.",
  },
  {
    id: 2,
    image: CARD2,
    name: "Nana Ama McBrown",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing editaddsfsd. Lorem ipsum, dolor sit amet consectetur adipisicing edit ashdg kjasfd dfh. Lorem ipsum, dolor sit amet consectetur adipisicing edit. Lorem ipsum, dolor sit amet consectetur adipisicing hafdkjdfkdshf edit.",
  },
  {
    id: 3,
    image: CARD3,
    name: "Nana Ama McBrown",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing editaddsfsd. Lorem ipsum, dolor sit amet consectetur adipisicing edit ashdg kjasfd dfh. Lorem ipsum, dolor sit amet consectetur adipisicing edit. Lorem ipsum, dolor sit amet consectetur adipisicing hafdkjdfkdshf edit.",
  },
  {
    id: 4,
    image: CARD4,
    name: "Nana Ama McBrown",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing editaddsfsd. Lorem ipsum, dolor sit amet consectetur adipisicing edit ashdg kjasfd dfh. Lorem ipsum, dolor sit amet consectetur adipisicing edit. Lorem ipsum, dolor sit amet consectetur adipisicing hafdkjdfkdshf edit.",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonial</h2>

      <Swiper
        className="container container-testimonial"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {dataCard.map((item) => (
          <SwiperSlide key={item.id} className="testimonial">
            <div className="image">
              <img src={item.image} alt="card" />
            </div>
            <h5>{item.name}</h5>
            <small>{item.content}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
