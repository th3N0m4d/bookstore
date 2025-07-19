export function LatestBlogs() {
  return (
    <section id="latest-blog" className="py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-semibold">Our Latest Blog</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Post 1 */}
          <div className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
            <a href="single-post.html">
              <img
                src="images/post-item1.jpg"
                className="w-full h-64 object-cover"
                alt="Blog Post"
              />
            </a>
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">Jan 2, 2024</p>
              <h4 className="font-bold text-xl mb-4">
                <a href="single-post.html" className="hover:text-primary">
                  The Best Books of 2024
                </a>
              </h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="single-post.html"
                className="text-primary font-bold mt-4 inline-block"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
            <a href="single-post.html">
              <img
                src="images/post-item2.jpg"
                className="w-full h-64 object-cover"
                alt="Blog Post"
              />
            </a>
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">Jan 5, 2024</p>
              <h4 className="font-bold text-xl mb-4">
                <a href="single-post.html" className="hover:text-primary">
                  How to Read More Books
                </a>
              </h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="single-post.html"
                className="text-primary font-bold mt-4 inline-block"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
            <a href="single-post.html">
              <img
                src="images/post-item3.jpg"
                className="w-full h-64 object-cover"
                alt="Blog Post"
              />
            </a>
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">Jan 8, 2024</p>
              <h4 className="font-bold text-xl mb-4">
                <a href="single-post.html" className="hover:text-primary">
                  The Benefits of Reading
                </a>
              </h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="single-post.html"
                className="text-primary font-bold mt-4 inline-block"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
