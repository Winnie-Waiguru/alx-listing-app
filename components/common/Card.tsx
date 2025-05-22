import React from "react";
import { CardProps } from "../../interfaces";

const Card: React.FC<CardProps> = ({ title, image, description }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover mb-2 rounded"
      />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
