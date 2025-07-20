import { PageHeader, Socials } from "@/components";

export function ContactUs() {
  return (
    <>
      <PageHeader title="Contact Us" />
      <section className="py-28">
        <div className="container mx-auto px-4">
          <div className="flex justify-center flex-wrap">
            <div className="w-full ">
              <div className="flex flex-col lg:flex-row-reverse gap-8">
                <div className="w-full lg:w-1/2 mb-8">
                  <h3 className="text-xl uppercase font-bold mb-4">
                    Got any questions?
                  </h3>
                  <p className="mb-6">
                    Use the form below to get in touch with us.
                  </p>
                  <form id="contactForm" className="mt-6">
                    <div className="flex flex-col md:flex-row gap-4 mb-4">
                      <div className="w-full">
                        <label className="block text-gray-700 mb-2">
                          Your Name*
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Write Your Name Here"
                          className="w-full px-4 py-2 border border-gray-300 focus:border-gray-800 focus:outline-none focus:ring-0"
                          required
                        />
                      </div>
                      <div className="w-full">
                        <label className="block text-gray-700 mb-2">
                          Your E-mail*
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="Write Your Email Here"
                          className="w-full px-4 py-2 border border-gray-300 focus:border-gray-800 focus:outline-none focus:ring-0"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        className="w-full px-4 py-2 border border-gray-300 focus:border-gray-800 focus:outline-none focus:ring-0"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Write Your Subject Here"
                        className="w-full px-4 py-2 border border-gray-300 focus:border-gray-800 focus:outline-none focus:ring-0"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">
                        Your Message*
                      </label>
                      <textarea
                        name="message"
                        placeholder="Write Your Message Here"
                        className="w-full px-4 py-2 border border-gray-300 h-36 focus:border-gray-800 focus:outline-none focus:ring-0"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-white px-4 py-3 mt-4 transition duration-300"
                    >
                      Submit
                    </button>
                  </form>
                </div>

                {/**  Contact Information */}
                <div className="w-full lg:w-1/2 mb-8">
                  <h3 className="text-xl uppercase font-bold mb-4">
                    Contact information
                  </h3>
                  <p className="mb-8">
                    Tortor dignissim convallis aenean et tortor at risus viverra
                    adipiscing.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="mb-8">
                      <h5 className="text-lg font-bold mb-4">Head Office</h5>
                      <div className="space-y-2">
                        <p className="text-gray-700">
                          730 Glenstone Ave 65802, Springfield, US
                        </p>
                        <div className="text-gray-700">
                          <a
                            href="tel:+123987321"
                            className="hover:text-primary"
                          >
                            +123 987 321
                          </a>
                          ,
                          <a
                            href="tel:+123123654"
                            className="hover:text-primary"
                          >
                            +123 123 654
                          </a>
                        </div>
                        <p className="text-gray-700">
                          <a href="#" className="hover:text-primary">
                            headbranch@yourcompanycom
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h5 className="text-lg font-bold mb-4">Branch Office</h5>
                      <div className="space-y-2">
                        <p className="text-gray-700">
                          730 Glenstone Ave 65802, Springfield, US
                        </p>
                        <div className="text-gray-700">
                          <a
                            href="tel:+123987321"
                            className="hover:text-primary"
                          >
                            +123 987 321
                          </a>
                          ,
                          <a
                            href="tel:+123123654"
                            className="hover:text-primary"
                          >
                            +123 123 654
                          </a>
                        </div>
                        <p className="text-gray-700">
                          <a href="#" className="hover:text-primary">
                            contactbranch@yourcompany.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h5 className="text-lg font-bold mb-4">Social info</h5>
                    <ul className="flex space-x-4 list-none">
                      <li>
                        <a href="#">
                          <svg className="facebook w-6 h-6 text-gray-400 hover:text-primary">
                            <use xlinkHref="#facebook"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg className="instagram w-6 h-6 text-gray-400 hover:text-primary">
                            <use xlinkHref="#instagram"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg className="twitter w-6 h-6 text-gray-400 hover:text-primary">
                            <use xlinkHref="#twitter"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg className="linkedin w-6 h-6 text-gray-400 hover:text-primary">
                            <use xlinkHref="#linkedin"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg className="youtube w-6 h-6 text-gray-400 hover:text-primary">
                            <use xlinkHref="#youtube"></use>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Socials />
    </>
  );
}
