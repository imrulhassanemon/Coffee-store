// AuthForm.jsx
import React from "react";
import {FcGoogle} from "react-icons/fc";

const AuthForm = ({title, fields, onSubmit, submitText, alreadyaccount}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl md:mt-14 m-4 mx-auto bg-base-200 p-6 rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-center">{title}</h2>
      <h3 className="text-xl font-medium text-center">{alreadyaccount}</h3>

      {fields.map((field) => (
        <div key={field.name} className="form-control ">
          <label className="label">
            <span className="label-text">{field.label}</span>
          </label>
          <input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            required={field.required}
            className="input input-bordered w-full"
          />
        </div>
      ))}

      <button className="btn border text-[#0088FF] w-full hover:bg-[#0088FF] border-[#0088FF] hover:text-white">
        {submitText}
      </button>
      <div className="divider">OR</div>
      <button className="flex items-center justify-center w-full border border-gray-300 rounded-md py-2 hover:bg-gray-100 cursor-pointer transition">
        <FcGoogle className="mr-2 text-xl" />
        <span className="font-medium text-gray-800">Sign Up With Google</span>
      </button>
    </form>
  );
};

export default AuthForm;
