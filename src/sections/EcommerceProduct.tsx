const EcommerceProduct = () => {
  return (
    <section className="flex justify-center items-center w-full h-auto px-16 py-[7rem] gap-[5rem]">
      <div className="flex flex-col h-[30rem] flex-nav items-start justify-center gap-y-6">
        <div>
          <h3 className="flex items-center justify-center text-4xl font-bold mb-1">
            Discover Our Best-Selling Snacks for a Delicious and Convenient
            Experience
          </h3>
          <h3 className="text-lg">
            Indulge in our handcrafted German snacks, made with fresh
            ingredients and delivered straight to your doorstep. Experience the
            perfect combination of flavor and convenience.
          </h3>
        </div>
        <div className="flex flex-row items-center justify-start gap-5">
          <div className="flex flex-col items-start justify-center gap-5">
            <h6 className="font-bold text-xl">Taste Power</h6>
            <p className="text-base">
              Elevate your snacking experience with our irresistible selection
              of German treats. Order now!
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-5">
            <h6 className="font-bold text-xl">Accessible Delights</h6>
            <p className="text-base">
              Experience the joy of German snacking with our range of delicious
              and affordable treats.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-nav bg-gray-400 h-[30rem] justify-center items-center">
        <img src="/Replace.png" alt="" />
      </div>
    </section>
  );
};

export default EcommerceProduct;
