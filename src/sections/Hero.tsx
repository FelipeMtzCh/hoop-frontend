import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="flex justify-center items-center w-full h-auto px-16 py-[7rem] gap-[5rem]">
      <div className="flex flex-col h-[30rem] flex-nav items-start justify-center gap-y-5">
        <div>
          <h1 className="flex items-center justify-center text-5xl font-bold mb-1">
            Delicious German Snacks Delivered to Your Doorstep
          </h1>
          <h3 className="text-lg">
            Experience the authentic taste od Germany with our handcrafted
            snacks, made with freshest ingredients. Order now and indulge in a
            flavorful journey.
          </h3>
        </div>
        <div className="flex flex-row items-center justify-start gap-4">
          <Button
            label="Order"
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
      <div className="flex flex-col flex-nav h-full justify-center items-center">
        <img src="/Replace.png" alt="" />
      </div>
    </section>
  );
};

export default Hero;
