// AuthForm.jsx
import React from "react";

const AuthForm = ({title, fields, onSubmit, submitText}) => {
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
      className="max-w-2xl md:mt-14 m-4 mx-auto bg-base-200 p-6 rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-center">{title}</h2>

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

      <button className="btn border text-[#0088FF] w-full hover:bg-[#0088FF] border-[#0088FF] hover:text-white">{submitText}</button>
        <div className="divider">OR</div>
      <button>

      </button>
    </form>
  );
};

export default AuthForm;
