import Card from "./card";

const designs = [
  {
    Icon: <i className="bxr bx-location-alt-2 text-3xl lg:text-6xl p-2" />,
    heading: "Expert Guidence",
    description:
      "Benefit from our team's seasoned expertise for a smooth buying experience",
  },
  {
    Icon: <i className="bx bxs-user-circle text-3xl lg:text-6xl p-2" />,
    heading: "Personalized Service",
    description:
      "Our services adapt to your unique needs, making your journey stress-free",
  },
  {
    Icon: <i className="bxr bx-clipboard-detail text-3xl lg:text-6xl p-2" />,
    heading: "Transparent Process",
    description:
      "Providing peace of mind with our responsive and attentive customer service",
  },
  {
    Icon: <i className="bxr bx-handshake text-3xl lg:text-6xl px-2" />,
    heading: "Expectaional Support",
    description:
      "Providing peace of mind with our responsive and attentive customer service",
  },
];

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
      <div className="grid grid-cols grid-cols-2 lg:grid-cols-4 items-center justify-center gap-3 mt-10 ">
        {designs.map(({ Icon, heading, description }, i) => (
          <Card icon={Icon} heading={heading} text={description} key={i} />
        ))}
      </div>
    </section>
  );
}
