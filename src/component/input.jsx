import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, id, error, ...props }, ref) {
  return (
    <div className="mb-3">
      <label className="block text-sm font-medium mb-1" htmlFor={id}>
        {label}
      </label>
      <input
        className="block w-full h-9 rounded-sm bg-gray-300 p-2"
        ref={ref}
        id={id}
        {...props}
      />
      {error && <div className="text-xs text-red-500 mt-1">{error}</div>}
    </div>
  );
});

export default Input;
