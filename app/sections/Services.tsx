const Services = () => {
  return (
    <div className="p-20 text-black">
      <div>
        <span className="flex flex-row items-start justify-items-start gap-2 mb-1">
          <p>Our Features/</p>
          <h2 className="text-3xl"> DISCOVER OUR SIGNATURE</h2>
        </span>
        <span className="flex flex-row items-start justify-items-start gap-2">
          <h2 className="text-3xl flex-1/10 text-right"> DENTAL SERVICES</h2>
          <p className="text-sm font-light tracking-wide flex-1/2">
            Experience modern dentalcare deleiverd with comfort, precision, and
            attention to detail. Our clicnic provides a calm, welcomig
            environment designed to make every visit stress-free.
          </p>
        </span>
      </div>
      <div className="mt-5 flex flex-col items-center justify-center gap-2">
        <h2 className="text-md">What we do?</h2>
        <div className="flex flex-row gap-1 text-sm ">
          <span className="bg-blue-500 text-white p-2 rounded">
            Teeth Whitening
          </span>
          <span className="bg-blue-500 text-white p-2 rounded">
            Dental Checkups
          </span>
          <span className="bg-blue-500 text-white p-2 rounded">
            Dental Veneers
          </span>
          <span className="bg-blue-500 text-white p-2 rounded">
            Dental Implants
          </span>
          <span className="bg-blue-500 text-white p-2 rounded">
            Orthodontics
          </span>
          <span className="bg-blue-500 text-white p-2 rounded">
            Root Canal Therapy
          </span>
          <span className="bg-blue-500 text-white p-2 rounded">
            Pediatric Dentistry
          </span>
          <span className="bg-blue-500 text-white p-2 rounded">
            Emergency Dental Care
          </span>
        </div>
      </div>
    </div>
  );
};
export default Services;
