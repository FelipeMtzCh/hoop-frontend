interface ProductCardProps {
  image?: string;
  name: string;
  category: string;
  price: number;
}

const ProductCard = ({ image, name, category, price }: ProductCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        className="w-[19rem] h-[19rem] pb-4"
        src={image ? image : "/Replace.png"}
        alt="product name"
      />
      <h3 className="text-center text-black font-bold text-2xl">{name}</h3>
      <p className=" text-center text-base font-normal pb-2">{category}</p>
      <p className=" text-center text-2xl font-semibold">${price}</p>
    </div>
  );
};

export default ProductCard;
