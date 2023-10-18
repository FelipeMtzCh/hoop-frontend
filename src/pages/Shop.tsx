import HeaderShop from "../sections/HeaderShop";

const Shop = () => {
  return (
    <>
      <HeaderShop />
      <section className="flex flex-col px-16 py-28 items-center justify-center border-2 border-purple-700">
        <div className="flex flex-col items-center justify-center">
          <h5 className="text-center text-black font-semibold pb-4">
            Delicious
          </h5>
          <h2 className="text-center text-black font-bold text-6xl pb-6">
            Our Snacks
          </h2>
          <p className="text-center text-black text-base font-normal">
            Explore our wide range of German snacks.
          </p>
        </div>

        <div></div>
      </section>
    </>
  );
};

export default Shop;
