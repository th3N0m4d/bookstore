import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userModalOpen, setUserModalOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("signin");
  return (
    <header id="header" className="site-header">
      {/* Top Info Bar */}
      <div className="top-info border-b hidden md:block">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="md:w-1/3 w-full">
              <p className="text-sm my-2 text-center">
                Need any help? Call us{" "}
                <a href="#" className="hover:text-primary">
                  112233344455
                </a>
              </p>
            </div>
            <div className="md:w-1/3 w-full border-l border-r">
              <p className="text-sm my-2 text-center">
                Summer sale discount off 60% off!{" "}
                <a className="underline hover:text-primary" href="shop.html">
                  Shop Now
                </a>
              </p>
            </div>
            <div className="md:w-1/3 w-full">
              <p className="text-sm my-2 text-center">
                2-3 business days delivery & free returns
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav id="header-nav" className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a className="navbar-brand" href="index.html">
              <img src="images/main-logo.png" className="logo h-10" />
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6">
                <use xlinkHref="#navbar-icon"></use>
              </svg>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <ul className="flex space-x-6 uppercase">
                <li>
                  <a
                    className="text-dark hover:text-primary font-heading font-medium active"
                    href="index.html"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="text-dark hover:text-primary font-heading font-medium"
                    href="about.html"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="text-dark hover:text-primary font-heading font-medium"
                    href="shop.html"
                  >
                    Shop
                  </a>
                </li>

                <li>
                  <a
                    className="text-dark hover:text-primary font-heading font-medium"
                    href="contact.html"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* User Actions */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Search */}
              <a
                href="#"
                className="search-button text-dark hover:text-primary"
              >
                <svg className="w-5 h-5">
                  <use xlinkHref="#search"></use>
                </svg>
              </a>

              {/* User Modal */}
              <a
                href="#"
                onClick={() => setUserModalOpen(true)}
                className="text-dark hover:text-primary"
              >
                <svg className="w-5 h-5">
                  <use xlinkHref="#user"></use>
                </svg>
              </a>

              {/* Wishlist Dropdown */}
              <div className="relative group">
                <a
                  href="#"
                  className="text-dark hover:text-primary flex items-center"
                >
                  <svg className="w-5 h-5">
                    <use xlinkHref="#heart"></use>
                  </svg>
                  <span className="text-xs ml-1">(2)</span>
                </a>
                <div className="absolute right-0 w-72 bg-white shadow-lg rounded-md p-4 z-50 hidden group-hover:block">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-primary font-medium">
                      Your wishlist
                    </span>
                    <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
                      2
                    </span>
                  </div>
                  <ul className="space-y-4 mb-4">
                    <li className="flex justify-between">
                      <div>
                        <h5 className="font-medium">
                          <a
                            href="single-product.html"
                            className="hover:text-primary"
                          >
                            The Emerald Crown
                          </a>
                        </h5>
                        <p className="text-xs text-gray-500">
                          Special discounted price.
                        </p>
                        <a
                          href="#"
                          className="text-sm font-medium text-primary hover:underline block mt-1"
                        >
                          Add to cart
                        </a>
                      </div>
                      <span className="text-primary">$2000</span>
                    </li>
                    <li className="flex justify-between">
                      <div>
                        <h5 className="font-medium">
                          <a
                            href="single-product.html"
                            className="hover:text-primary"
                          >
                            The Last Enchantment
                          </a>
                        </h5>
                        <p className="text-xs text-gray-500">
                          Perfect for enlightened people.
                        </p>
                        <a
                          href="#"
                          className="text-sm font-medium text-primary hover:underline block mt-1"
                        >
                          Add to cart
                        </a>
                      </div>
                      <span className="text-primary">$400</span>
                    </li>
                    <li className="flex justify-between border-t pt-2">
                      <span className="font-bold">Total (USD)</span>
                      <strong>$2400</strong>
                    </li>
                  </ul>
                  <div className="space-y-2">
                    <a
                      href="#"
                      className="block w-full bg-dark text-white py-2 text-center rounded hover:bg-opacity-90"
                    >
                      Add all to cart
                    </a>
                    <a
                      href="cart.html"
                      className="block w-full bg-primary text-white py-2 text-center rounded hover:bg-opacity-90"
                    >
                      View cart
                    </a>
                  </div>
                </div>
              </div>

              {/* Cart Dropdown */}
              <div className="relative group">
                <a
                  href="cart.html"
                  className="text-dark hover:text-primary flex items-center"
                >
                  <svg className="w-5 h-5">
                    <use xlinkHref="#cart"></use>
                  </svg>
                  <span className="text-xs ml-1">(2)</span>
                </a>
                <div className="absolute right-0 w-72 bg-white shadow-lg rounded-md p-4 z-50 hidden group-hover:block">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-primary font-medium">Your cart</span>
                    <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
                      2
                    </span>
                  </div>
                  <ul className="space-y-4 mb-4">
                    <li className="flex justify-between">
                      <div>
                        <h5 className="font-medium">
                          <a
                            href="single-product.html"
                            className="hover:text-primary"
                          >
                            Secrets of the Alchemist
                          </a>
                        </h5>
                        <p className="text-xs text-gray-500">
                          High quality in good price.
                        </p>
                      </div>
                      <span className="text-primary">$870</span>
                    </li>
                    <li className="flex justify-between">
                      <div>
                        <h5 className="font-medium">
                          <a
                            href="single-product.html"
                            className="hover:text-primary"
                          >
                            Quest for the Lost City
                          </a>
                        </h5>
                        <p className="text-xs text-gray-500">
                          Professional Quest for the Lost City.
                        </p>
                      </div>
                      <span className="text-primary">$600</span>
                    </li>
                    <li className="flex justify-between border-t pt-2">
                      <span className="font-bold">Total (USD)</span>
                      <strong>$1470</strong>
                    </li>
                  </ul>
                  <div className="space-y-2">
                    <a
                      href="cart.html"
                      className="block w-full bg-dark text-white py-2 text-center rounded hover:bg-opacity-90"
                    >
                      View Cart
                    </a>
                    <a
                      href="checkout.html"
                      className="block w-full bg-primary text-white py-2 text-center rounded hover:bg-opacity-90"
                    >
                      Go to checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu (Offcanvas) */}
          <div
            className={`fixed block md:hidden inset-y-0 right-0 w-full max-w-xs bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <a href="index.html">
                <img src="images/main-logo.png" className="h-8" />
              </a>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2">
                <svg className="w-6 h-6">
                  <use xlinkHref="#close"></use>
                </svg>
              </button>
            </div>

            <div className="p-4 overflow-y-auto">
              <ul className="space-y-4 uppercase">
                <li>
                  <a
                    className="block py-1 text-dark hover:text-primary"
                    href="index.html"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="block py-1 text-dark hover:text-primary"
                    href="about.html"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="block py-1 text-dark hover:text-primary"
                    href="shop.html"
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a
                    className="block py-1 text-dark hover:text-primary"
                    href="blog.html"
                  >
                    Blogs
                  </a>
                </li>

                {/* Mobile Dropdown */}
                <li className="relative">
                  <button
                    onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
                    className="flex items-center  w-full py-1 text-dark hover:text-primary"
                  >
                    PAGES
                    <svg
                      className={`w-4 h-4 transform transition-transform ${pagesDropdownOpen ? "rotate-180" : ""}`}
                    >
                      <use xlinkHref="#arrow-down"></use>
                    </svg>
                  </button>
                  {pagesDropdownOpen && (
                    <div className="pl-4 space-y-2">
                      <a
                        href="about.html"
                        className="block py-1 text-sm hover:text-primary"
                      >
                        About{" "}
                        <span className="bg-primary text-white text-xs px-2 py-1 rounded ml-2">
                          Pro
                        </span>
                      </a>
                      <a
                        href="shop.html"
                        className="block py-1 text-sm hover:text-primary"
                      >
                        Shop{" "}
                        <span className="bg-primary text-white text-xs px-2 py-1 rounded ml-2">
                          Pro
                        </span>
                      </a>
                      <a
                        href="single-product.html"
                        className="block py-1 text-sm hover:text-primary"
                      >
                        Single Product{" "}
                        <span className="bg-primary text-white text-xs px-2 py-1 rounded ml-2">
                          Pro
                        </span>
                      </a>
                      <a
                        href="cart.html"
                        className="block py-1 text-sm hover:text-primary"
                      >
                        Cart{" "}
                        <span className="bg-primary text-white text-xs px-2 py-1 rounded ml-2">
                          Pro
                        </span>
                      </a>
                      <a
                        href="checkout.html"
                        className="block py-1 text-sm hover:text-primary"
                      >
                        Checkout{" "}
                        <span className="bg-primary text-white text-xs px-2 py-1 rounded ml-2">
                          Pro
                        </span>
                      </a>
                      <a
                        href="blog.html"
                        className="block py-1 text-sm hover:text-primary"
                      >
                        Blog{" "}
                        <span className="bg-primary text-white text-xs px-2 py-1 rounded ml-2">
                          Pro
                        </span>
                      </a>
                      <a
                        href="single-post.html"
                        className="block py-1 text-sm hover:text-primary"
                      >
                        Single Post{" "}
                        <span className="bg-primary text-white text-xs px-2 py-1 rounded ml-2">
                          Pro
                        </span>
                      </a>
                      <a
                        href="contact.html"
                        className="block py-1 text-sm hover:text-primary"
                      >
                        Contact{" "}
                        <span className="bg-primary text-white text-xs px-2 py-1 rounded ml-2">
                          Pro
                        </span>
                      </a>
                    </div>
                  )}
                </li>

                <li>
                  <a
                    className="block py-1 text-dark hover:text-primary"
                    href="contact.html"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    className="block py-1 text-dark hover:text-primary underline"
                    href="https://templatesjungle.gumroad.com/l/bookly-tailwind"
                    target="_blank"
                  >
                    Get Pro
                  </a>
                </li>
              </ul>

              {/* Mobile User Actions */}
              <div className="mt-8 flex justify-around">
                <a
                  href="#"
                  className="search-button text-dark hover:text-primary"
                >
                  <svg className="w-6 h-6">
                    <use xlinkHref="#search"></use>
                  </svg>
                </a>
                <a
                  href="#"
                  onClick={() => setUserModalOpen(true)}
                  className="text-dark hover:text-primary"
                >
                  <svg className="w-6 h-6">
                    <use xlinkHref="#user"></use>
                  </svg>
                </a>
                <a href="#" className="text-dark hover:text-primary">
                  <svg className="w-6 h-6">
                    <use xlinkHref="#heart"></use>
                  </svg>
                </a>
                <a href="cart.html" className="text-dark hover:text-primary">
                  <svg className="w-6 h-6">
                    <use xlinkHref="#cart"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* User Modal */}
          {userModalOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
              onClick={() => setUserModalOpen(false)}
            >
              <div
                className="bg-white rounded-lg w-full max-w-md mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-4">
                  <div className="flex justify-end">
                    <button
                      onClick={() => setUserModalOpen(false)}
                      className="p-2"
                    >
                      <svg className="w-6 h-6">
                        <use xlinkHref="#close"></use>
                      </svg>
                      .
                    </button>
                  </div>

                  <div className="tabs-listing">
                    <nav className="flex justify-center border-b">
                      <button
                        onClick={() => setActiveTab("signin")}
                        className={`px-4 py-2 font-medium ${activeTab === "signin" ? "text-primary border-b-2 border-primary" : ""}`}
                      >
                        Sign In
                      </button>
                      <button
                        onClick={() => setActiveTab("register")}
                        className={`px-4 py-2 font-medium ${activeTab === "register" ? "text-primary border-b-2 border-primary" : ""}`}
                      >
                        Register
                      </button>
                    </nav>

                    <div className="p-4">
                      {/* Sign In Tab */}
                      {activeTab === "signin" && (
                        <div>
                          <div className="mb-4">
                            <label className="block mb-2">
                              Username or email address *
                            </label>
                            <input
                              type="text"
                              placeholder="Your Username"
                              className="w-full p-3 border rounded-lg"
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block mb-2">Password *</label>
                            <input
                              type="password"
                              placeholder="Your Password"
                              className="w-full p-3 border rounded-lg"
                            />
                          </div>
                          <div className="flex items-center justify-between mb-4">
                            <label className="flex items-center">
                              <input type="checkbox" className="mr-2" />
                              <span>Remember me</span>
                            </label>
                            <a href="#" className="font-bold text-primary">
                              Forgot Password
                            </a>
                          </div>
                          <button className="w-full bg-dark text-white py-3 rounded-lg hover:bg-opacity-90">
                            Login
                          </button>
                        </div>
                      )}

                      {/* Register Tab */}
                      {activeTab === "register" && (
                        <div>
                          <div className="mb-4">
                            <label className="block mb-2">
                              Your email address *
                            </label>
                            <input
                              type="text"
                              placeholder="Your Email Address"
                              className="w-full p-3 border rounded-lg"
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block mb-2">Password *</label>
                            <input
                              type="password"
                              placeholder="Your Password"
                              className="w-full p-3 border rounded-lg"
                            />
                          </div>
                          <div className="mb-4">
                            <label className="flex items-center">
                              <input type="checkbox" className="mr-2" />
                              <span>
                                I agree to the{" "}
                                <a href="#" className="font-bold text-primary">
                                  Privacy Policy
                                </a>
                              </span>
                            </label>
                          </div>
                          <button className="w-full bg-dark text-white py-3 rounded-lg hover:bg-opacity-90">
                            Register
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
