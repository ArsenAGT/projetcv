import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../../sliderProps";
const testimonialData = [
  {
    id: 1,
    text: "Je prends plaisir à réaliser des petits projets dans le domaine de l'informatique et de la programmation.",
    authorImage: "assets/img/testimonials/t1.jpg",
    authorName: "Projets informatiques",
    authorDesignation: " ",
  },
  {
    id: 2,
    text: "Je m'adonne à un mode de vie sain en pratiquant la salle de sport, la natation et le ski. Ces activités renforcent ma discipline, ma forme physique et ma résistance mentale.",
    authorImage: "assets/img/testimonials/t2.jpg",
    authorName: "Sports",
    authorDesignation: " ",
  },
  {
    id: 3,
    text: "Passionné par la découverte de nouveaux endroits et cultures",
    authorImage: "assets/img/testimonials/t3.jpg",
    authorName: "Voyager",
    authorDesignation: " ",
  },
];
const Testimonials = () => {
  return (
    <div className="tokyo_tm_testimonials w-full h-auto clear-both float-left py-[100px] px-0">
      <div className="container">
        <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
          <h3 className="text-[20px] font-bold">Centres d'inérêt</h3>
        </div>
        <div className="list w-full h-auto clear-both float-left overflow-hidden">
          <Swiper
            {...sliderProps.testimonial}
            className="m-0 list-none cursor-e-resize"
          >
            {testimonialData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="list_inner w-full h-auto clear-both float-left relative">
                  <div className="text w-full h-auto clear-both float-left border-solid border-[#E5EDF4] border-2 p-[40px] mb-[30px] relative">
                    <p>{item.text}</p>
                  </div>
                  <div className="details w-full h-auto clear-both float-left flex items-center pl-[20px]">
                    <div className="image relative w-[60px] h-[60px]">
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full"
                        data-img-url={item.authorImage}
                        style={{ backgroundImage: `url(${item.authorImage})` }}
                      />
                    </div>
                    <div className="info pl-[20px]">
                      <h3 className="text-[16px] mb-[2px] font-semibold">
                        {item.authorName}
                      </h3>
                      <span className="text-[14px]">
                        {item.authorDesignation}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
