import { useEffect, useState } from "react";
const Services = () => {
  const services = [
    {
      title: "Teeth Whitening",
      image: "/whitening.jpg",
    },
    {
      title: "Dental Checkups",
      image: "/checkup.jpg",
    },
    {
      title: "Dental Veneers",
      image: "/veneers.jpg",
    },
    {
      title: "Dental Implants",
      image: "/implants.jpg",
    },
    {
      title: "Orthodontics",
      image: "/braces.jpg",
    },
    {
      title: "Root Canal Therapy",
      image: "/root-canal.jpg",
    },
    {
      title: "Pediatric Dentistry",
      image: "/pediatric.jpg",
    },
    {
      title: "Emergency Dental Care",
      image: "/emergency.jpg",
    },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [services.length]);
  return (
    <section className="p-10 text-black" id="services">
      <div className="flex flex-col items-start justify-center mb-5">
        <span className="flex flex-row items-start justify-items-start gap-2 mb-1">
          <p>Our Features/</p>
          <h2 className="text-3xl"> DISCOVER OUR SIGNATURE</h2>
        </span>
        <span className="flex flex-row items-start justify-items-start gap-2">
          <h2 className="text-3xl "> DENTAL SERVICES</h2>
          <p className="text-sm font-light tracking-wide">
            Our clinic provides a calm, welcoming environment designed to make
            every visit stress-free.
            <br /> These are just a few of the many services we offer to help
            you achieve a healthy, confident smile.
          </p>
        </span>
      </div>
      <div className="mt-5 flex flex-col items-center justify-center gap-4">
        <div className="w-full">
          <div className="flex gap-2 animate-scroll">
            {[...services, ...services].map((service, i) => (
              <span
                key={i}
                className="p-2 rounded bg-cover bg-center h-40 w-60 shrink-0 text-center flex items-center justify-center text-md text-black"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <p className="backdrop-blur-sm p-1.5 rounded-2xl tracking-wide">
                  {service.title}
                </p>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
