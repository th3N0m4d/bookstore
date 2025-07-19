import useEmblaCarousel from "embla-carousel-react";

const TESTIMONIALS = [
  {
    quote:
      "As an avid reader, I'm always on the lookout for new releases, and this bookstore never disappoints. They always have the latest titles, and their recommendations have introduced me to some incredible reads!",
    author: "Thomas John",
  },
  {
    quote:
      "I stumbled upon this bookstore while visiting the city, and it instantly became my favorite spot. The cozy atmosphere, friendly staff, and wide selection of books make every visit a delight!",
    author: "Emma Chamberlin",
  },
  {
    quote:
      "I ordered a few books online from this store, and I was impressed by the quick delivery and careful packaging. It's clear that they prioritize customer satisfaction, and I'll definitely be shopping here again!",
    author: "Kevin Bryan",
  },
  {
    quote:
      "I stumbled upon this tech store while searching for a new laptop, and I couldn't be happier with my experience! The staff was incredibly knowledgeable and guided me through the process of choosing the perfect device for my needs. Highly recommended!",
    author: "Stevin",
  },
  {
    quote:
      "I stumbled upon this tech store while searching for a new laptop, and I couldn't be happier with my experience! The staff was incredibly knowledgeable and guided me through the process of choosing the perfect device for my needs. Highly recommended!",
    author: "Roman",
  },
];

type PropType = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const PrevButton = (props: PropType) => {
  return (
    <div
      className="absolute top-1/2 left-0 ps-0 xl:ps-5 ms-0 xl:ms-5 swiper-prev testimonial-button-prev -translate-y-1/2 swiper-button-disabled"
      {...props}
    >
      <svg
        className="flex justify-center items-center p-2"
        width="80"
        height="80"
      >
        <use xlinkHref="#alt-arrow-left-outline"></use>
      </svg>
    </div>
  );
};

const NextButton = (props: PropType) => {
  return (
    <div
      className="absolute top-1/2 right-0 pe-0 xl:pe-5 me-0 xl:me-5 swiper-next testimonial-button-next -translate-y-1/2"
      {...props}
    >
      <svg
        className="flex justify-center items-center p-2"
        width="80"
        height="80"
      >
        <use xlinkHref="#alt-arrow-right-outline"></use>
      </svg>
    </div>
  );
};

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section
      id="customers-reviews"
      className="relative py-28 bg-banner bg-cover bg-center bg-no-repeat"
    >
      <div className="container mx-auto px-4 md:ml-1/4 md:w-1/2">
        <PrevButton onClick={scrollPrev} />
        <NextButton onClick={scrollNext} />

        <div className="section-title mb-4 text-center">
          <h3 className="text-4xl font-semibold mb-6">Customers reviews</h3>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {TESTIMONIALS.map((testimonial, index) => (
              <div className="embla__slide" key={index}>
                <div className="card relative text-left p-10 border rounded-lg bg-white">
                  <blockquote className="text-lg italic">
                    {testimonial.quote}
                  </blockquote>
                  <div className="rating text-yellow-400 flex items-center mt-4">
                    <svg className="w-5 h-5 fill-current">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="w-5 h-5 fill-current">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="w-5 h-5 fill-current">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="w-5 h-5 fill-current">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="w-5 h-5 fill-current">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                  </div>
                  <h5 className="mt-2 font-normal text-lg">
                    {testimonial.author}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
