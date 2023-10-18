import { ReactNode, useEffect, useState } from "react";
import { food } from "../constants/Food";

const ProductCard = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {food.map((item): ReactNode => {
        
      })}
    </div>
  );
};

export default ProductCard;
