const About = () => {
  return (
    <div className="p-20 text-black flex flex-row items-center justify-items-start">
      <div className="flex-1/2">
        <img
          src="/about.jpg"
          alt="About ADC"
          className="w-md h-md object-cover"
        />
      </div>
      <div className="flex-1/2 flex flex-col items-start justify-items-start">
        <span className="flex flex-row items-start justify-items-start gap-2 mb-1">
          <p>About ADC/</p>
          <h2 className="text-3xl"> EXCELLENCE IN DENTISTRY </h2>
        </span>
        <span className="flex flex-col items-start justify-items-start gap-2">
          <h2 className="text-3xl flex-1/10"> WITH COMPASSIONATE CARE</h2>
          <p className="text-sm font-light tracking-wide flex-1/2">
            Experience modern dentalcare deleiverd with comfort, precision, and
            attention to detail. Our clicnic provides a calm, welcomig
            environment designed to make every visit stress-free.
          </p>
        </span>
        <span className="flex flex-row items-center justify-items-start gap-2 mt-4 w-full">
          <span className="text-sm font-light tracking-wide bg-amber-50 w-1/2 text-center">
            Dr. Tony C
          </span>
          <span className="text-sm font-light tracking-wide bg-amber-50 w-1/2 text-center">
            Dr. Megs R
          </span>
        </span>
        <span className="flex flex-row items-center justify-items-start gap-2 mt-4 w-full h-20">
          <span className="font-light tracking-wide bg-blue-100 w-1/3 text-left rounded-2xl p-4">
            <h2 className="text-2xl font-semibold">98%</h2>
            <p className="text-sm">Satisfaction Rate</p>
          </span>
          <span className="font-light tracking-wide bg-blue-100 w-1/3 text-left rounded-2xl p-4">
            <h2 className="text-2xl font-semibold">50K</h2>
            <p className="text-sm">Smiles Transformed</p>
          </span>
          <span className="font-light tracking-wide bg-blue-100 w-1/3 text-left rounded-2xl p-4 ">
            <h2 className="text-2xl font-semibold">4.9</h2>
            <p className="text-sm">Customer Rating</p>
          </span>
        </span>
      </div>
    </div>
  );
};
export default About;
