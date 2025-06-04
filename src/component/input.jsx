import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, id, error, ...props }, ref) {
  return (
    <div className="relative mt-4">
      <input
        id={id}
        ref={ref}
        placeholder=" "
        className={`peer block w-full px-4 pt-6 pb-2 border rounded border-gray-300 focus:outline-none focus:border-orange-400 transition
          ${error ? "border-red-500 focus:border-red-500" : ""}`}
        {...props}
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-2 text-sm text-gray-500 transition-all 
        peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
        peer-focus:top-2 peer-focus:text-sm peer-focus:text-orange-400"
      >
        {label}
      </label>
      {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
    </div>
  );
});

export default Input;
