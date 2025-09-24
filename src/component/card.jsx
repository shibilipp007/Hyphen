const Card = ({ icon, heading, text, classname }) => {
  return (
    <div
      className={`bg-[#F8F4E1] shadow-md rounded-xl p-6 w-full max-w-[300px] ${classname}`}
    >
      {icon && <div className="mb-2 rounded-lg">{icon}</div>}
      {heading && (
        <h2 className="text-base lg:text-xl font-semibold my-2">{heading}</h2>
      )}
      {text && <p className="mt-4 text-sm lg:text-base">{text}</p>}
    </div>
  );
};

export default Card;
