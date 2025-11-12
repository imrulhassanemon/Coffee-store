import React from "react";
import { Link } from "react-router-dom";

const Card = ({coffee}) => {
  const {
    name: name,
    chef: chef,
    supplier: supplier,
    taste: taste,
    category: category,
    details: details,
    photo: image,
    _id: id
  } = coffee;

  return (
     <div className="max-w-xs bg-white shadow-md rounded-xl text-center p-4 hover:shadow-lg transition-shadow duration-300">
      {
        image? <img
        src={image}
        alt={name}
        className="rounded-md h-48 w-full object-cover mb-3"
      />:(
        <div className="rounded-md h-48 w-full object-cover  mb-9"> <h2 className="text-lg flex text-center border items-center font-semibold text-gray-900">Image not found</h2></div>
      )
      }
      <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
      {/* <p className="text-blue-600 font-semibold mt-1">{}</p> */}
      <Link to={`${id}`}><button className="w-full border border-blue-500 text-blue-500 font-medium py-2 rounded-md mt-3 hover:bg-blue-500 hover:text-white transition">
        View Details
      </button></Link>
    </div>
  );
};

export default Card;
