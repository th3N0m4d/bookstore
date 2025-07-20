import { PageHeader, Socials } from "@/components";

export function ShopPage() {
  return (
    <>
      <PageHeader title="Shop" />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse gap-8">
            {/**  Main Content */}
            <main className="w-full lg:w-3/4">
              {/**  Filter/Sort Section */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <div className="showing-product">
                  <p className="text-gray-600">Showing 1–9 of 55 results</p>
                </div>
                <div className="sort-by">
                  <select
                    id="sorting"
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Default sorting</option>
                    <option value="">Name (A - Z)</option>
                    <option value="">Name (Z - A)</option>
                    <option value="">Price (Low-High)</option>
                    <option value="">Price (High-Low)</option>
                    <option value="">Rating (Highest)</option>
                    <option value="">Rating (Lowest)</option>
                    <option value="">Model (A - Z)</option>
                    <option value="">Model (Z - A)</option>
                  </select>
                </div>
              </div>

              {/**  Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/**  Product 1 */}
                <div className="card relative p-6 border rounded-xl hover:shadow-lg transition-shadow">
                  <div className="absolute top-4 left-4">
                    <p className="bg-primary py-1 px-3 text-sm text-white rounded-lg">
                      10% off
                    </p>
                  </div>
                  <img
                    src="images/product-item1.png"
                    className="w-full shadow-sm"
                    alt="House of Sky Breath"
                  />
                  <h6 className="mt-4 mb-1 font-bold text-lg">
                    <a
                      href="single-product.html"
                      className="hover:text-primary"
                    >
                      House of Sky Breath
                    </a>
                  </h6>
                  <div className="flex items-center">
                    <p className="my-2 mr-2 text-sm text-gray-500">
                      Lauren Asher
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
                    $870
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

                {/**  Product 2 */}
                <div className="card relative p-6 border rounded-xl hover:shadow-lg transition-shadow">
                  <img
                    src="images/product-item2.png"
                    className="w-full shadow-sm"
                    alt="Heartland Stars"
                  />
                  <h6 className="mt-4 mb-1 font-bold text-lg">
                    <a
                      href="single-product.html"
                      className="hover:text-primary"
                    >
                      Heartland Stars
                    </a>
                  </h6>
                  <div className="flex items-center">
                    <p className="my-2 mr-2 text-sm text-gray-500">
                      Lauren Asher
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
                    $870
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

                {/**  Product 3 */}
                <div className="card relative p-6 border rounded-xl hover:shadow-lg transition-shadow">
                  <img
                    src="images/product-item3.png"
                    className="w-full shadow-sm"
                    alt="Heavenly Bodies"
                  />
                  <h6 className="mt-4 mb-1 font-bold text-lg">
                    <a
                      href="single-product.html"
                      className="hover:text-primary"
                    >
                      Heavenly Bodies
                    </a>
                  </h6>
                  <div className="flex items-center">
                    <p className="my-2 mr-2 text-sm text-gray-500">
                      Lauren Asher
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
                    $870
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

                {/**  Product 4 */}
                <div className="card relative p-6 border rounded-xl hover:shadow-lg transition-shadow">
                  <div className="absolute top-4 left-4">
                    <p className="bg-primary py-1 px-3 text-sm text-white rounded-lg">
                      10% off
                    </p>
                  </div>
                  <img
                    src="images/product-item4.png"
                    className="w-full shadow-sm"
                    alt="His Saving Grace"
                  />
                  <h6 className="mt-4 mb-1 font-bold text-lg">
                    <a
                      href="single-product.html"
                      className="hover:text-primary"
                    >
                      His Saving Grace
                    </a>
                  </h6>
                  <div className="flex items-center">
                    <p className="my-2 mr-2 text-sm text-gray-500">
                      Lauren Asher
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
                    $870
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

                {/**  Product 5 */}
                <div className="card relative p-6 border rounded-xl hover:shadow-lg transition-shadow">
                  <img
                    src="images/product-item5.png"
                    className="w-full shadow-sm"
                    alt="My Dearest Darkest"
                  />
                  <h6 className="mt-4 mb-1 font-bold text-lg">
                    <a
                      href="single-product.html"
                      className="hover:text-primary"
                    >
                      My Dearest Darkest
                    </a>
                  </h6>
                  <div className="flex items-center">
                    <p className="my-2 mr-2 text-sm text-gray-500">
                      Lauren Asher
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
                    $870
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

                {/**  Product 6 */}
                <div className="card relative p-6 border rounded-xl hover:shadow-lg transition-shadow">
                  <img
                    src="images/product-item6.png"
                    className="w-full shadow-sm"
                    alt="The Story of Success"
                  />
                  <h6 className="mt-4 mb-1 font-bold text-lg">
                    <a
                      href="single-product.html"
                      className="hover:text-primary"
                    >
                      The Story of Success
                    </a>
                  </h6>
                  <div className="flex items-center">
                    <p className="my-2 mr-2 text-sm text-gray-500">
                      Lauren Asher
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
                    $870
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

              {/**  Pagination */}
              <nav className="pt-12" aria-label="Page navigation">
                <ul className="flex justify-center items-center gap-4">
                  <li className="text-gray-400 cursor-not-allowed">Prev</li>
                  <li className="bg-primary text-white px-3 py-1 rounded-md">
                    1
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-primary px-3 py-1"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-primary px-3 py-1"
                    >
                      3
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-primary px-3 py-1"
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </main>

            {/**  Sidebar */}
            <aside className="w-full lg:w-1/4 lg:pr-8">
              <div className="space-y-8">
                {/**  Search Widget */}
                <div className="widget-menu">
                  <form className="flex border border-gray-300 rounded-lg p-2 bg-white">
                    <input
                      className="flex-grow border-0 px-3 py-2 focus:outline-none"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      className="bg-primary rounded-lg p-2 flex items-center justify-center transition"
                      type="submit"
                    >
                      <svg className="text-white w-5 h-5" fill="currentColor">
                        <use xlinkHref="#search"></use>
                      </svg>
                    </button>
                  </form>
                </div>

                {/**  Categories Widget */}
                <div className="widget-product-categories">
                  <h3 className="text-lg font-semibold mb-4">Categories</h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="/collections/categories"
                        className="text-gray-600 hover:text-primary"
                      >
                        All
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-primary">
                        Romance
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-primary">
                        Recipie
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-primary">
                        Sci-Fi
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-primary">
                        Lifestyle
                      </a>
                    </li>
                  </ul>
                </div>

                {/**  Tags Widget */}
                <div className="widget-product-tags">
                  <h3 className="text-lg font-semibold mb-4">Tags</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-gray-600 hover:text-primary">
                        Sci-Fi
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-primary">
                        Revenge
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-primary">
                        Zombie
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-primary">
                        Vampire
                      </a>
                    </li>
                  </ul>
                </div>

                {/**  Author Widget */}
                <div className="widget-product-authur">
                  <h3 className="text-lg font-semibold mb-4">Author</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-gray-600 hover:text-primary">
                        Hanna Clark
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-primary">
                        Albert E. Beth
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-primary">
                        D.K John
                      </a>
                    </li>
                  </ul>
                </div>

                {/**  Price Filter Widget */}
                <div className="widget-price-filter">
                  <h3 className="text-lg font-semibold mb-4">
                    Filter by price
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-gray-600 hover:text-primary">
                        Less than $10
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-primary">
                        $10- $20
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-primary">
                        $20- $30
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-primary">
                        $30- $40
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-primary">
                        $40- $50
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <Socials />
    </>
  );
}
