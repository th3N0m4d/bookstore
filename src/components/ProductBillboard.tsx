import useEmblaCarousel from "embla-carousel-react";

const BILLBOARD_ITEMS = [
  {
    title: "The Fine Print Book Collection",
    subtitle: "Best Offer Save 30%. Grab it now!",
    image: "images/banner-image2.png",
    buttonText: "Shop Collection",
  },
  {
    title: "How Innovation works",
    subtitle: "Discount available. Grab it now!",
    image: "images/banner-image1.png",
    buttonText: "Shop Product",
  },
  {
    title: "Your Heart is the Sea",
    subtitle: "Limited stocks available. Grab it now!",
    image: "images/banner-image.png",
    buttonText: "Shop Collection",
  },
];

type PropType = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const PrevButton = (props: PropType) => (
  <div
    className="absolute left-0 ps-0 xl:ps-5 ms-0 xl:ms-5 swiper-prev main-slider-button-prev z-10"
    {...props}
  >
    <svg className="chevron-back-circle flex justify-center items-center p-2 w-20 h-20">
      <use xlinkHref="#alt-arrow-left-outline"></use>
    </svg>
  </div>
);

const NextButton = (props: PropType) => (
  <div
    className="absolute right-0 pe-0 xl:pe-5 me-0 xl:me-5 swiper-next main-slider-button-next z-10"
    {...props}
  >
    <svg className="chevron-forward-circle flex justify-center items-center p-2 w-20 h-20">
      <use xlinkHref="#alt-arrow-right-outline"></use>
    </svg>
  </div>
);

export function ProductBillboard() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section
      id="billboard"
      className="relative flex items-center py-12 bg-gray-100 bg-banner bg-cover bg-no-repeat bg-center "
    >
      <PrevButton onClick={scrollPrev} />
      <NextButton onClick={scrollNext} />

      <div className="embla w-full h-full" ref={emblaRef}>
        <div className="embla__container flex items-center">
          {BILLBOARD_ITEMS.map((item, index) => (
            <div
              className="embla__slide content-center"
              key={index}
              style={{ flex: "0 0 100%" }}
            >
              <div className="container mx-auto px-4">
                <div className="flex flex-col-reverse md:flex-row items-center">
                  <div className="md:w-6/12 md:ml-8 mt-10 md:mt-0 text-center md:text-left">
                    <div className="banner-content">
                      <h2 className="text-4xl md:text-6xl font-semibold mb-4">
                        {item.title}
                      </h2>
                      <p className="text-xl mb-6">{item.subtitle}</p>
                      <a
                        href="shop.html"
                        className="btn inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                      >
                        {item.buttonText}
                      </a>
                    </div>
                  </div>
                  <div className="md:w-5/12 text-center">
                    <div className="image-holder">
                      <img
                        src={item.image}
                        className="w-full max-w-md mx-auto"
                        alt="banner"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
