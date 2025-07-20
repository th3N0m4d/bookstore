import {
  CompanyServices,
  ProductBillboard,
  ProductListing,
  Socials,
} from "@/components";
import useEmblaCarousel from "embla-carousel-react";

const PRODUCTS = [
  {
    image: "images/product-item1.png",
    title: "House of Sky Breath",
    author: "Lauren Asher",
    price: "$870",
    discount: "10% off",
  },
  {
    image: "images/product-item2.png",
    title: "Heartland Stars",
    author: "Lauren Asher",
    price: "$870",
  },
  {
    image: "images/product-item3.png",
    title: "Heavenly Bodies",
    author: "Lauren Asher",
    price: "$870",
  },
  {
    image: "images/product-item4.png",
    title: "His Saving Grace",
    author: "Lauren Asher",
    price: "$870",
    discount: "10% off",
  },
  {
    image: "images/product-item5.png",
    title: "My Dearest Darkest",
    author: "Lauren Asher",
    price: "$870",
  },
  {
    image: "images/product-item6.png",
    title: "The Story of Success",
    author: "Lauren Asher",
    price: "$870",
  },
];

type PropType = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const PrevButton = (props: PropType) => (
  <div
    className="absolute top-1/2 left-0 ps-0 xl:ps-5 ms-0 xl:ms-5 swiper-prev product-slider-button-prev z-10 -translate-y-1/2"
    {...props}
  >
    <svg className="flex justify-center items-center p-2 w-16 h-16 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
      <use xlinkHref="#alt-arrow-left-outline"></use>
    </svg>
  </div>
);

const NextButton = (props: PropType) => (
  <div
    className="absolute top-1/2 right-0 pe-0 xl:pe-5 me-0 xl:me-5 swiper-next product-slider-button-next z-10 -translate-y-1/2"
    {...props}
  >
    <svg className="flex justify-center items-center p-2 w-16 h-16 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
      <use xlinkHref="#alt-arrow-right-outline"></use>
    </svg>
  </div>
);

export function HomePage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    inViewThreshold: 0.7,
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <>
      <ProductBillboard />
      <CompanyServices className="pb-0" />
      <section id="best-selling-items" className="relative py-28">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h3 className="text-4xl font-semibold flex items-center">
              Best selling items
            </h3>
            <a
              href="shop.html"
              className="mt-4 md:mt-0 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              View All
            </a>
          </div>

          {/* Navigation Arrows */}
          <PrevButton onClick={scrollPrev} />
          <NextButton onClick={scrollNext} />

          {/* Product Slider */}
          <div className="swiper product-swiper embla" ref={emblaRef}>
            <div className="swiper-wrapper embla__container">
              {PRODUCTS.map((product, index) => (
                <div
                  className="swiper-slide embla__slide"
                  key={index}
                  style={{ flex: "0 0 25%" }}
                >
                  <div className="card relative p-6 border rounded-xl hover:shadow-lg transition-shadow">
                    {product.discount && (
                      <div className="absolute top-4 left-4">
                        <p className="bg-primary py-1 px-3 text-sm text-white rounded-lg">
                          {product.discount}
                        </p>
                      </div>
                    )}
                    <img
                      src={product.image}
                      className="w-full shadow-sm"
                      alt={product.title}
                    />
                    <h6 className="mt-4 mb-1 font-bold text-lg">
                      <a
                        href="single-product.html"
                        className="hover:text-primary"
                      >
                        {product.title}
                      </a>
                    </h6>
                    <div className="flex items-center">
                      <p className="my-2 mr-2 text-sm text-gray-500">
                        {product.author}
                      </p>
                      <div className="rating text-yellow-400 flex items-center">
                        <svg className="w-4 h-4 fill-current">
                          <use xlinkHref="#star-fill"></use>
                        </svg>
                        <svg className="w-4 h-4 fill-current">
                          <use xlinkHref="#star-fill"></use>
                        </svg>
                        <svg className="w-4 h-4 fill-current">
                          <use xlinkHref="#star-fill"></use>
                        </svg>
                        <svg className="w-4 h-4 fill-current">
                          <use xlinkHref="#star-fill"></use>
                        </svg>
                        <svg className="w-4 h-4 fill-current">
                          <use xlinkHref="#star-fill"></use>
                        </svg>
                      </div>
                    </div>
                    <span className="price text-primary font-bold text-lg">
                      {product.price}
                    </span>
                    <div className="card-concern absolute left-0 right-0 flex justify-center gap-2 opacity-0">
                      <button
                        type="button"
                        className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
                      >
                        <svg className="w-8 h-8 p-1">
                          <use xlinkHref="#cart"></use>
                        </svg>
                      </button>
                      <a
                        href="#"
                        className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
                      >
                        <svg className="w-8 h-8 p-1">
                          <use xlinkHref="#heart"></use>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="limited-offer"
        className="py-28 bg-counter bg-cover bg-no-repeat bg-center"
      >
        <div className="container mx-auto px-4 h-full">
          <div className="flex flex-col md:flex-row items-center h-full">
            {/* Image Column */}
            <div className="w-full md:w-1/2 text-center">
              <div className="image-holder">
                <img
                  src="images/banner-image3.png"
                  className="w-full max-w-lg mx-auto"
                  alt="Limited time offer"
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="w-full md:w-5/12 md:ml-8 mt-10 md:mt-0 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                30% Discount on all items. Hurry Up !!!
              </h2>

              {/* Countdown Timer */}
              <div
                id="countdown-clock"
                className="text-dark flex items-center my-8"
              >
                <div className="time grid pe-3">
                  <span className="days text-5xl font-normal"></span>
                  <small className="text-lg">Days</small>
                </div>
                <span className="text-5xl text-primary mx-1">:</span>
                <div className="time grid pe-3 ps-3">
                  <span className="hours text-5xl font-normal"></span>
                  <small className="text-lg">Hrs</small>
                </div>
                <span className="text-5xl text-primary mx-1">:</span>
                <div className="time grid pe-3 ps-3">
                  <span className="min text-5xl font-normal"></span>
                  <small className="text-lg">Mins</small>
                </div>
                <span className="text-5xl text-primary mx-1">:</span>
                <div className="time grid ps-3">
                  <span className="secs text-5xl font-normal"></span>
                  <small className="text-lg">Secs</small>
                </div>
              </div>

              <a
                href="shop.html"
                className="btn inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
              >
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </section>

      <ProductListing />
      <Socials />
    </>
  );
}
