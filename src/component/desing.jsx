export default function Desing() {
  return (
    <div className="flex-row grid grid-cols-2 mt-[150px]">
      <div className="justify-center text-center flex flex-col">
        <h1 className="text-4xl font-bold mb-20 font-serif">
          Our Design <br />
          <span className=" ml-40">Philosophy</span>
        </h1>
        <p className="text-lg font-bold mx-2 font-mono">
          We specialize in designing according to customer needs, ensuring a
          tailored and optimal solution for every client. Our approach focuses
          on understanding your unique requirements and delivering a design that
          exceeds expectations in both functionality and aesthetics.
        </p>
      </div>
      <div>
        <img
          className="object-cover w-full h-[90%] rounded-sm"
          src="/design.jpg"
          alt="Design"
        />
      </div>
    </div>
  );
}
