const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-[#FBF8EF] rounded-xl p-6 shadow-lg text-center max-w-sm w-full">
        <p className="text-lg mb-4">{message}</p>
        <button
          onClick={onClose}
          className="bg-[#FEBA17] text-white px-4 py-2 rounded hover:bg-orange-400"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default CustomAlert;
