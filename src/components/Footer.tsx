export function Footer() {
  const fullYear = new Date().getFullYear();
  return (
    <>
      <footer id="footer" className="py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full lg:w-1/4 sm:w-1/2 pb-6 lg:pb-0">
              <div>
                <img
                  src="images/main-logo.png"
                  alt="logo"
                  className="w-auto h-auto mb-2 max-w-full"
                />
                <p className="mb-4">
                  Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit
                  hendrerit. Gravida massa volutpat aenean odio erat nullam
                  fringilla.
                </p>
                <div className="social-links">
                  <ul className="flex space-x-4 list-none">
                    <li>
                      <a href="#">
                        <svg className="facebook w-6 h-6 text-gray-400 hover:text-primary">
                          <use xlinkHref="#facebook" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg className="instagram w-6 h-6 text-gray-400 hover:text-primary">
                          <use xlinkHref="#instagram" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg className="twitter w-6 h-6 text-gray-400 hover:text-primary">
                          <use xlinkHref="#twitter" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg className="linkedin w-6 h-6 text-gray-400 hover:text-primary">
                          <use xlinkHref="#linkedin" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg className="youtube w-6 h-6 text-gray-400 hover:text-primary">
                          <use xlinkHref="#youtube" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/6 sm:w-1/2 pb-6 lg:pb-0">
              <div>
                <h5 className="font-bold pb-2">Quick Links</h5>
                <ul className="list-none capitalize">
                  <li className="mb-1">
                    <a href="#">Home</a>
                  </li>
                  <li className="mb-1">
                    <a href="#">About</a>
                  </li>
                  <li className="mb-1">
                    <a href="#">Shop</a>
                  </li>
                  <li className="mb-1">
                    <a href="#">Blogs</a>
                  </li>
                  <li className="mb-1">
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/4 sm:w-1/2 pb-6 lg:pb-0">
              <div>
                <h5 className="font-bold pb-2 capitalize">Help & Info Help</h5>
                <ul className="list-none">
                  <li className="mb-1">
                    <a href="#">Track Your Order</a>
                  </li>
                  <li className="mb-1">
                    <a href="#">Returns Policies</a>
                  </li>
                  <li className="mb-1">
                    <a href="#">Shipping + Delivery</a>
                  </li>
                  <li className="mb-1">
                    <a href="#">Contact Us</a>
                  </li>
                  <li className="mb-1">
                    <a href="#">Faqs</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/4 sm:w-1/2 pb-6 lg:pb-0">
              <div>
                <h5 className="font-bold pb-2 capitalize">Contact Us</h5>
                <p className="mb-2">
                  Do you have any queries or suggestions?{" "}
                  <a href="mailto:" className="underline">
                    yourinfo@gmail.com
                  </a>
                </p>
                <p>
                  If you need support? Just give us a call.{" "}
                  <a href="#" className="underline">
                    +55 111 222 333 44
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <hr className="my-0" />
      <div id="footer-bottom" className="my-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center">
                <p>We ship with:</p>
                <div className="flex pl-2">
                  <img src="images/dhl.png" alt="visa" className="mr-2" />
                  <img src="images/shippingcard.png" alt="mastercard" />
                </div>
              </div>
              <div className="flex items-center">
                <p>Payment options:</p>
                <div className="flex pl-2">
                  <img src="images/visa.jpg" alt="visa" className="mr-2" />
                  <img
                    src="images/mastercard.jpg"
                    alt="mastercard"
                    className="mr-2"
                  />
                  <img src="images/paypal.jpg" alt="paypal" />
                </div>
              </div>
            </div>
            <div className="copyright">
              <p>@ All Rights Reserved {fullYear}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
