import Button from "../components/Button";

const CTA = () => {
  return (
    <section className="flex items-center justify-center px-16 py-[7rem]">
      <div className="flex justify-center items-stretch border-2 border-black">
        <div className="flex flex-nav flex-col justify-center items-start px-8 gap-6">
          <h2 className="text-5xl font-bold">
            Get Exclusive Discounts and News
          </h2>
          <p className="text-lg">
            Sign up for our newsletter to receive exclusive discounts and stay
            updated on our latest products.
          </p>
          <div className="flex flex-row items-center justify-start gap-4">
            <Button
              label="Sing Up"
              bg="black"
              text="white"
              borderActive={false}
              icon={false}
            />
            <Button
              label="Learn More"
              bg="white"
              text="black"
              borderActive={true}
              icon={false}
            />
          </div>
        </div>
        <div className="flex flex-col flex-nav bg-gray-400 w-1/2 justify-center items-center">
          <img
            className="w-full h-[27rem] object-cover"
            src="/Replace.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
