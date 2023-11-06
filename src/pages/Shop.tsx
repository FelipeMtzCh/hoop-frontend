import ProductCard from "../components/ProductCard";
import HeaderShop from "../sections/HeaderShop";
import food from "../constants/Food";
import Button from "../components/Button";
import BlogMinCard from "../components/BlogMinCard";

const Shop = () => {
  return (
    <>
      <HeaderShop />
      <section className="flex flex-col px-16 py-28 items-center justify-center">
        <div className="flex flex-col items-center justify-center pb-20">
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
        <section className="grid w-full grid-rows-2 grid-cols-4 gap-x-8 gap-y-16 pb-16">
          {food.map((item) => (
            <ProductCard
              key={item.id}
              name={item.name}
              category={item.category}
              price={item.price}
            />
          ))}
        </section>
        <Button
          label="See all products"
          bg="white"
          text="black"
          borderActive={true}
          icon={false}
        />
      </section>
      <section className="flex flex-col px-16 py-28 items-center justify-center">
        <div className="flex flex-col w-full items-start justify-start pb-20">
          <h5 className="text-center text-black text-base font-semibold pb-4">
            Events
          </h5>
          <h2 className="text-center text-black font-bold text-5xl pb-6">
            Upcoming Events And Promotions
          </h2>
          <p className="text-center text-black text-lg font-normal">
            Stay updated on our latest events and promotions.
          </p>
        </div>
        <div className="grid w-full grid-cols-3 grid-rows-1 gap-8">
          <BlogMinCard />
          <BlogMinCard />
          <BlogMinCard />
        </div>
      </section>
      <section className="flex flex-col px-16 py-28 items-center justify-center">
        <div className="flex flex-row gap-20 w-full border-2 border-black p-12">
          <div className="flex flex-col justify-start items-start gap-6">
            <h3 className="text-4xl font-bold">
              Get Exclusive Discounts and News
            </h3>
            <span className="text-lg font-normal">
              Sign up for our newsletter to receive exclusive discounts and stay
              updated on our latest products.
            </span>
          </div>
          <div className="flex w-[17rem] flex-row justify-center items-center gap-4">
            <Button
              label="Subscribe"
              bg="black"
              text="white"
              borderActive={false}
              icon={false}
            />
            <Button
              label="Learn more"
              bg="white"
              text="black"
              borderActive={true}
              icon={false}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
