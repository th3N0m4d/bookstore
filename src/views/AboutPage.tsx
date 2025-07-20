import { PageHeader } from "@/components";

export function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" />
      <section id="about-us" className="py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2">
              <div className="video-content">
                <div className="video-bg relative">
                  <img
                    src="images/single-image-about.jpg"
                    alt="video"
                    className="w-full"
                  />
                  <div className="player absolute flex justify-center items-center inset-0 ">
                    <a
                      className="youtube play-btn flex justify-center items-center hover:scale-110 transition-transform cboxElement"
                      href="https://www.youtube.com/embed/ICzsGD7FPpk?si=Gei-rb0DY8gWq2ti"
                    >
                      <svg className="play text-dark w-20 h-20 bg-white p-6 rounded-full">
                        <use xlinkHref="#play"></use>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="detail md:pl-12 mt-12 lg:mt-0">
                <div className="display-header">
                  <h3 className="text-4xl font-semibold mb-4">
                    Best Bookstore of all time
                  </h3>
                  <p className="pb-4">
                    Risus augue curabitur diam senectus congue velit et. Sed
                    vitae metus nibh sit era. Nulla adipiscing pharetra
                    pellentesque maecenas odio eros at. Et libero vulputate amet
                    duis erat volutpat vitae eget. Sed vitae metus nibh sit era.
                    Nulla adipiscing pharetra eros at.
                  </p>
                  <p className="pb-4">
                    Nulla adipiscing pharetra pellentesque maecenas odio eros
                    at. Et libero vulputate amet duis erat volutpat vitae eget.
                    Quam libero etiam et in ac at quis. Risus augue curabitur
                    diam senectus congue velit et.
                  </p>
                  <p className="pb-4">
                    Risus augue curabitur diam senectus congue velit et. Sed
                    vitae metus nibh sit era. Nulla adipiscing pharetra
                    pellentesque maecenas odio eros at. Et libero vulputate amet
                    duis erat volutpat vitae eget. Sed vitae metus nibh sit era.
                    Nulla adipiscing pharetra eros at.
                  </p>
                  <p className="pb-4">
                    Nulla adipiscing pharetra pellentesque maecenas odio eros
                    at. Et libero vulputate amet duis erat volutpat vitae eget.
                    Quam libero etiam et in ac at quis. Risus augue curabitur
                    diam senectus congue velit et.
                  </p>
                  <a
                    href="shop.html"
                    className="btn mt-6 inline-block px-6 py-3 bg-primary text-white rounded-md transition"
                  >
                    Go to shop
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
