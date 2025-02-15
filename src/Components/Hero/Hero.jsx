const Hero = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
        {/* details section */}
        <div className="flex flex-col justify-center py-14 md:py-0 font-playfair">
          <div className="text-center md:text-left space-y-6">
            <h1 className=" leading-relaxed text-5xl font-bold lg:text-6xl xl-leading-normal">
              Gym Gives You the perfect{" "}
              <span className="text-primary">Strength</span>
            </h1>
            <p className="text-gray-600 xl:max-w-[500px]">
              It is a long established fact that a reader will be by readable
              content of a page when are the best product.
            </p>
            {/* button sectoion */}
            <div className=" flex justify-center md:justify-start gap-8 .primary-btn">
            <button className="primary-btn">
                Order Now
            </button>
            <button>
                Watch Now
            </button>
            </div>

          </div>
        </div>
        {/* image section */}
      </div>
    </section>
  );
};

export default Hero;
