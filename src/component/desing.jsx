import Card from "./card";

export default function Desing() {
  return (
    <section className="grid grid-cols sm:items-center  mt-[150px]">
      <div className="justify-center text-center">
        <h1 className="text-4xl font-bold mb-4 ">
          Why Choose Us <br />
        </h1>
        <p className="mx-2 font-semibold">
          Elevating Your Home Building Experience with Expertise, Integrity,
          <br /> and Unmatched Personalized Service
        </p>
      </div>
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-3 mt-10 ">
        <Card
          classname=""
          icon={
            <img src="/map pin.png" alt="pin" className="p-3  rounded-lg" />
          }
          heading="Expert Guidence"
          text="Benefit from our team's seasoned expertise for a smooth buying experience"
        />
        <Card
          icon={
            <img
              src="/service.png"
              alt="services"
              className="p-3  rounded-lg"
            />
          }
          heading="Personalized Service"
          text="Our services adapt to your unique needs, making your journey stress-free"
        />
        <Card
          icon={
            <img
              src="/document.png"
              alt="document"
              className="p-3  rounded-lg"
            />
          }
          heading="Transparent Process"
          text="Stay informed with our clear and honest approach to building your home"
        />
        <Card
          icon={
            <img
              src="/handshake.png"
              alt="support"
              className="p-3  rounded-lg"
            />
          }
          heading="Expectaional Support"
          text="Providing peace of mind with our responsive and attentive customer service"
        />
      </div>
    </section>
  );
}
