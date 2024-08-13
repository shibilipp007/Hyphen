import "boxicons/css/boxicons.min.css";
import Contactfrom from "../component/contactfrom";

export default function Contact() {
  return (
    <div id="contact">
      <div className="text-center mt-[200px] ">
        <h1 className="text-4xl font-bold font-serif">Reach Us</h1>
      </div>
      <div className="grid  md:grid-cols-4 mt-11 gap-2">
        <div className="col-span-1">{/* empty space */}</div>
        <div className="col-span-1 text-center border shadow-sm rounded-md p-4 ">
          <i className="bx bx-phone-call text-6xl p-4 "></i>
          <div className="flex flex-col text-lg">
            <h3>Call us</h3>
            <span>+91 987456123</span>
          </div>
        </div>
        <div className="col-span-1 text-center p-4 border shadow-sm rounded-md">
          <i className="bx bx-envelope text-6xl p-4"></i>
          <div className="flex flex-col text-lg">
            <h3>Mail us</h3>
            <span>hyphensupport@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="flex-row grid lg:grid-cols-2 mt-20 gap-4">
        <Contactfrom />
        <div>
          <div className="flex text-center items-center justify-center">
            <h1 className="text-2xl font-bold font-serif ">Our Office</h1>
          </div>
          <div className="overflow-hidden pb-[48.9%] relative h-0 mt-5">
            <iframe
              className="border left-0 top-0 absolute h-[100%] w-[100%]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d344.89558673407123!2d75.42627055647078!3d12.040207522548295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba43fc2d894ac7d%3A0x7535f2e813f1cc3c!2sHyphen%20builders%20%26%20contractors!5e0!3m2!1sen!2sin!4v1723201715608!5m2!1sen!2sin"
              width="500"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="google-map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
