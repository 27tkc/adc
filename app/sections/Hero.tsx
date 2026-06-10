const Hero = () => {
  return (
    <section className="hero">
      <div className="bg-[url('/hero.png')] bg-cover bg-center rounded-xl w-full">
        <div className="h-150">
          <div className="flex flex-row items-start justify-center h-full gap-8 p-10 text-white">
            <span>
              <p className="text-md font-light tracking-wide">
                Expert dental care for healthy, confident smiles at every age -
                delivered with comfort, precision, and trust.
              </p>
            </span>
            <span className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-5xl font-bold ">
                <p>MODERN</p>
                <p>DENTISTRY WITH</p>
                <p>GENTLE CARE</p>
              </h1>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
