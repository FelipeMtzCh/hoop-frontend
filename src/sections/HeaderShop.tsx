import Button from "../components/Button";

const HeaderShop = () => {
  return (
    <div className="flex flex-col px-16 py-28 items-center justify-center w-full h-[29.375rem] bg-generic">
      <h5 className="text-center text-white font-semibold">Delicious</h5>
      <h2 className="text-center text-white font-bold text-6xl pb-6">
        Taste the Tradition
      </h2>
      <p className="text-center text-white text-base font-normal">
        Discover the authentic flavors of Germany with our range of delicious
        snacks.
      </p>
      <div className="flex flex-row items-center justify-center gap-4 pt-6">
        <Button
          label="Explore"
          text="white"
          bg="black"
          borderActive={false}
          icon={false}
        />
        <Button
          label="Order Now"
          text="white"
          bg="trasnparent"
          borderActive={true}
          icon={false}
        />
      </div>
    </div>
  );
};

export default HeaderShop;
