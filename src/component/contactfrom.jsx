import { useForm } from "react-hook-form";
import Input from "./input";
import { useState } from "react";
import CustomAlert from "./alertbox";

export default function Contactfrom() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [alertMessage, setAlertMessage] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/form-response", data);
      if (response.ok) {
        setAlertMessage("Deatils send Succesfully!");
        reset();
      } else {
        setAlertMessage("Failed to send");
      }
    } catch (error) {
      setAlertMessage("An error occuerd.Please try again later");
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center px-4">
        <form
          className="my-8 w-full max-w-md border rounded shadow py-5 px-4 sm:px-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col">
            <Input
              label={"Name"}
              id={"name"}
              type="text"
              placeholder=" "
              {...register("name", { required: "name is required" })}
            />
            {errors.name && (
              <span className="text-red-600 text-sm mt-1">
                {errors.name.message}
              </span>
            )}

            <Input
              label={"Email"}
              id={"email"}
              type="email"
              placeholder=" "
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/,
                  message: "enter a valid email",
                },
              })}
            />

            {errors.email && (
              <span className="text-red-600 text-sm mt-1">
                {errors.email.message}
              </span>
            )}

            <Input
              label={"PhoneNumber"}
              id={"phone"}
              type="tel"
              placeholder=" "
              {...register("phone", {
                required: "number is required",

                minLength: {
                  value: 10,
                  message: "phone number is at least 10 number required",
                },
                maxLength: {
                  value: 10,
                  message: "only 10 number is required",
                },
              })}
            />
            {errors.phone && (
              <span className="text-red-600 text-sm mt-1">
                {errors.phone.message}
              </span>
            )}

            <button
              className="mt-5 h-10 w-full text-white bg-yellow-600 rounded"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>

        {alertMessage && (
          <CustomAlert
            message={alertMessage}
            onClose={() => setAlertMessage(null)}
          />
        )}
      </div>
    </>
  );
}
