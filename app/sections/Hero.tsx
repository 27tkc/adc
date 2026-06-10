const Hero = () => {
  return (
    <section id="hero" className="p-2 w-full ">
      <div
        className="relative min-h-[60vh] rounded-3xl overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center h-full mt-40 mb-30">
          <div className="px-8 w-full flex justify-center items-center">
            <div className="flex flex-col  gap-6 text-white">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Modern Dentistry
                <br />
                With Gentle Care
              </h1>

              <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
                Expert dental care for healthy, confident smiles at every age.
                Experience comfort, precision, and personalized treatment in a
                welcoming environment.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition">
                  Book an appointment today !
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
