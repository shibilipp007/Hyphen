import { useForm } from "react-hook-form";

export default function Contactfrom() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  return (
    <>
      <div className="items-center justify-center flex ">
        <form
          className="my-8  border rounded shadow py-9 w-full flex items-center justify-center"
          onSubmit={handleSubmit()}
        >
          <div className="items-center ml-5">
            <label className="block mb-1 text-md font-medium" htmlFor="name">
              Name
            </label>
            <input
              className="block w-[420px] h-9 border rounded border-gray-400 p-2 mt-3"
              placeholder="Your Name"
              {...register("name", { required: true })}
            />
            {errors.name && <span>{errors.name.message}</span>}
            <label className="block text-md font-medium mt-8" htmlFor="email">
              Email
            </label>
            <input
              className="block w-[420px] h-9 border rounded border-gray-400 p-2 mt-3"
              placeholder="Your Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                  message: "Enter valid Email",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-600 text-sm">
                {errors.email.message}
              </span>
            )}
            <button
              className="block mt-3 h-9 w-[60px] text-white bg-yellow-600 rounded items-center justify-center"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
