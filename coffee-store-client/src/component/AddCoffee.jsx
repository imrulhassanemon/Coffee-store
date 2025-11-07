import React from "react";
import {FaArrowCircleLeft} from "react-icons/fa";

const AddCoffee = () => {

  const handelSubmit = (event)=>{
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value
    const taste = form.taste.value;
    const category = form.category.value;
    const details   = form.details.value;
    const photo = form.photo.value;
    const coffee = {name:name, chef:chef, supplier:supplier, taste:taste, category:category, details:details, photo:photo}


    console.log(coffee);
    
  }




  return (
    // <div className="flex justify-center h-screen items-center border border-red-600">

    // </div>
    <div className="w-8/12  border border-red-600 mx-auto bg-[#E2E2E2] mt-20 md:mt-40">
      <div className="flex justify-center items-center gap-3  flex-col">
        <div className="flex gap-3 items-center">
          <FaArrowCircleLeft />
          <button className="">Back to product</button>
        </div>
        <h2 className=" text-4xl font-bold">
          Add<span className="text-[#6155F5] pl-2">A Coffee</span>
        </h2>
      </div>
      <form onSubmit={handelSubmit}>
        <div className="grid md:grid-cols-12 gap-5 p-5 w-full border border-amber-400">
          <div className='md:col-span-6'>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Name:</legend>
              <input type="text" name="name" className="input w-full" placeholder="Enter your name" />
            </fieldset>
          </div>
          <div className='md:col-span-6'>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Chef</legend>
              <input type="text" name="chef" className="input w-full" placeholder="Enter Coffee Shef" />
            </fieldset>
          </div>
          <div className='md:col-span-6'>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Supplier</legend>
              <input type="text" name="supplier" className="input w-full" placeholder="Enter Coffee Supplyer" />
            </fieldset>
          </div>
          <div className='md:col-span-6'>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Taste</legend>
              <input type="text" name="taste" className="input w-full" placeholder="Enter coffee taste " />
            </fieldset>
          </div>
          <div className='md:col-span-6'>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Category:</legend>
              <input type="text" name="category" className="input w-full" placeholder="Enter coffee category  " />
            </fieldset>
          </div>
          <div className='md:col-span-6'>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Details:</legend>
              <input type="text" name="details" className="input w-full" placeholder="Enter details" />
            </fieldset>
          </div>

          <div className='md:col-span-12'>
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">Photo:</legend>
              <input type="text" name="photo" className="input w-full" placeholder="Enter details" />
            </fieldset>
          </div>
          <div className="md:col-span-12">
            <button  className="btn w-full bg-[#632EE3] text-white cursor-pointer">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
