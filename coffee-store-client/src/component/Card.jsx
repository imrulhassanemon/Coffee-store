import React from "react";

const Card = ({coffee}) => {
  const {
    name: name,
    chef: chef,
    supplier: supplier,
    taste: taste,
    category: category,
    details: details,
    photo: photo,
  } = coffee;

  return (
    <div className="card bg-base-100 w-96 grid justify-center items-center shadow-sm">
      <figure>
        {photo ? (
          <img src={photo} alt="Shoes" />
        ) : (
          <p>No photo available</p> // optional placeholder
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
