import Image from "next/image";
const Footer = () => {
  return (
    <section
      className="p-10 flex flex-row backdrop-blur-md w-full bg-blue-100 justify-between rounded-2xl text-black"
      id="footer"
    >
      <div>
        <span className="flex flex-row items-start">
          <Image
            src="/logo.png"
            alt="ADC Logo"
            width={120}
            height={120}
            className="inline-block  ml-2"
          />
          <div>
            <h2 className="text-4xl font-bold">Amit Dental Clinic</h2>
            <p className="text-sm font-light tracking-wide">
              Address: 123 Main Street <br />
              Kitchener, Ontario, Canada
            </p>
          </div>
        </span>
      </div>
      <div>
        <h2 className="text-2xl font-bold">🟢 Open Hours</h2>
        <p className="text-sm font-light tracking-wide">
          Monday - Friday: 9:00 AM - 5:00 PM
          <br />
          Saturday: 10:00 AM - 2:00 PM
          <br />
          Sunday: Closed
        </p>
      </div>
      <div className="mr-12">
        <h2 className="text-2xl font-bold">📞 Get in Touch</h2>
        <p className="text-sm font-light tracking-wide">
          Phone: (123) 456-7890
          <br />
          Email:
          <a href="mailto:tarunkc22@gmail.com"> tarunkc22@gmail.com</a>
        </p>
      </div>
    </section>
  );
};
export default Footer;
