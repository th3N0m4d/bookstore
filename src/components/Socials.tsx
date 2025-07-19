export function Socials() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-8">
        <h3 className="text-4xl font-semibold">Instagram</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        <div className="relative instagram-item group">
          <a href="#" className="block relative overflow-hidden rounded-lg">
            <div className="icon-overlay bg-black bg-opacity-70 absolute inset-0 flex items-center justify-center ">
              <svg className="w-8 h-8 text-white">
                <use xlinkHref="#instagram"></use>
              </svg>
            </div>
            <img
              src="images/insta-item1.jpg"
              alt="instagram"
              className="w-full h-auto rounded-lg"
            />
          </a>
        </div>

        <div className="relative instagram-item group">
          <a href="#" className="block relative overflow-hidden rounded-lg">
            <div className="icon-overlay bg-black bg-opacity-70 absolute inset-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-white">
                <use xlinkHref="#instagram"></use>
              </svg>
            </div>
            <img
              src="images/insta-item2.jpg"
              alt="instagram"
              className="w-full h-auto rounded-lg"
            />
          </a>
        </div>

        <div className="relative instagram-item group">
          <a href="#" className="block relative overflow-hidden rounded-lg">
            <div className="icon-overlay bg-black bg-opacity-70 absolute inset-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-white">
                <use xlinkHref="#instagram"></use>
              </svg>
            </div>
            <img
              src="images/insta-item3.jpg"
              alt="instagram"
              className="w-full h-auto rounded-lg"
            />
          </a>
        </div>

        <div className="relative instagram-item group">
          <a href="#" className="block relative overflow-hidden rounded-lg">
            <div className="icon-overlay bg-black bg-opacity-70 absolute inset-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-white">
                <use xlinkHref="#instagram"></use>
              </svg>
            </div>
            <img
              src="images/insta-item4.jpg"
              alt="instagram"
              className="w-full h-auto rounded-lg"
            />
          </a>
        </div>

        <div className="relative instagram-item group">
          <a href="#" className="block relative overflow-hidden rounded-lg">
            <div className="icon-overlay bg-black bg-opacity-70 absolute inset-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-white">
                <use xlinkHref="#instagram"></use>
              </svg>
            </div>
            <img
              src="images/insta-item5.jpg"
              alt="instagram"
              className="w-full h-auto rounded-lg"
            />
          </a>
        </div>

        <div className="relative instagram-item group">
          <a href="#" className="block relative overflow-hidden rounded-lg">
            <div className="icon-overlay bg-black bg-opacity-70 absolute inset-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-white">
                <use xlinkHref="#instagram"></use>
              </svg>
            </div>
            <img
              src="images/insta-item6.jpg"
              alt="instagram"
              className="w-full h-auto rounded-lg"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
