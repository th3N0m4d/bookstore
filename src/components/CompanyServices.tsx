export function CompanyServices() {
  return (
    <section id="company-services" className="pt-28 pb-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-2">
          {/* Service 1 */}
          <div className="w-full lg:w-1/4 md:w-1/2 px-2 pb-6 lg:pb-0">
            <div className="icon-box flex">
              <div className="icon-box-icon pr-3 pb-3">
                <svg className="cart-outline w-8 h-8 text-primary">
                  <use xlinkHref="#cart-outline" />
                </svg>
              </div>
              <div className="icon-box-content">
                <h4 className="text-lg font-medium capitalize text-dark mb-1">
                  Free delivery
                </h4>
                <p className="text-gray-600">
                  Consectetur adipi elit lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="w-full lg:w-1/4 md:w-1/2 px-2 pb-6 lg:pb-0">
            <div className="icon-box flex">
              <div className="icon-box-icon pr-3 pb-3">
                <svg className="quality w-8 h-8 text-primary">
                  <use xlinkHref="#quality" />
                </svg>
              </div>
              <div className="icon-box-content">
                <h4 className="text-lg font-medium capitalize text-dark mb-1">
                  Quality guarantee
                </h4>
                <p className="text-gray-600">
                  Dolor sit amet orem ipsu mcons ectetur adipi elit.
                </p>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="w-full lg:w-1/4 md:w-1/2 px-2 pb-6 lg:pb-0">
            <div className="icon-box flex">
              <div className="icon-box-icon pr-3 pb-3">
                <svg className="price-tag w-8 h-8 text-primary">
                  <use xlinkHref="#price-tag" />
                </svg>
              </div>
              <div className="icon-box-content">
                <h4 className="text-lg font-medium capitalize text-dark mb-1">
                  Daily offers
                </h4>
                <p className="text-gray-600">
                  Amet consectetur adipi elit loreme ipsum dolor sit.
                </p>
              </div>
            </div>
          </div>

          {/* Service 4 */}
          <div className="w-full lg:w-1/4 md:w-1/2 px-2 pb-6 lg:pb-0">
            <div className="icon-box flex">
              <div className="icon-box-icon pr-3 pb-3">
                <svg className="shield-plus w-8 h-8 text-primary">
                  <use xlinkHref="#shield-plus" />
                </svg>
              </div>
              <div className="icon-box-content">
                <h4 className="text-lg font-medium capitalize text-dark mb-1">
                  100% secure payment
                </h4>
                <p className="text-gray-600">
                  Rem Lopsum dolor sit amet, consectetur adipi elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
