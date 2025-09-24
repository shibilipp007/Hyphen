export default function About() {
  return (
    <div id="about" className="text-center my-24 ">
      <div className="mt-9 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className=" mx-auto ">
          <img
            src="3d-house-model-with-modern-architecture.jpg"
            alt=""
            className="rounded-lg w-full max-w-md md:max-w-full h-auto md:h-[380px] object-cover"
          />
        </div>
        <div className="text-left md:ml-10">
          <h3 className="font-extrabold text-2xl sm:text-3xl md:text-4xl leading-snug">
            WE HELP YOU TO BUILD <br />
            DREAM HOME
          </h3>
          <h6 className="text-sm mt-6 sm:text-base font-semibold">
            We believe that building is more than just bricks and concrete—it’s
            about creating a lifestyle, a legacy, and a place where memories are
            made. With personalized service at every stage, from planning and
            design to execution and finishing touches, we ensure your journey
            with us is seamless and stress-free. Whether it’s your dream home, a
            commercial property, or a renovation project, we bring passion,
            expertise, and integrity to every step of the process.
          </h6>
          {/* <div className="grid sm:grid-cols-3 mt-24 sm:mt-20  gap-6">
            <div className="text-left">
              <h6 className="text-3xl font-bold">750+</h6>
              <p className="font-semibold">Houses completed</p>
            </div>
            <div className=" text-left">
              <h6 className="text-3xl font-bold">150+</h6>
              <p className="font-semibold">Ongoing Work</p>
            </div>
            <div className="text-left">
              <h6 className="text-3xl font-bold">250+</h6>
              <p className="font-semibold">Skilled Worker</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
