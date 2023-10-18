import FeatureCard from "../components/FeatureCard";

const Features = () => {
  return (
    <section className="flex w-full px-16 py-[7rem] items-center gap-20">
      <FeatureCard
        title="Delicious Snacks Made with Fresh Ingredients"
        subtitle="Experience the taste of our premium German snacks, crafted with the freshest ingredients and delivered directly to your doorstep."
      />
      <FeatureCard
        title="Convenient Direct-to-Home Delivery"
        subtitle="Skip the grocery store and have our delectable snacks delivered straight to you, ensuring maximum freshness and convenience."
      />
      <FeatureCard
        title="Perfect Snacks for Young Adults"
        subtitle="Our snacks are specially curated to cater to the tastes and preferences of young adults, providing a powerful snacking experience."
      />
    </section>
  );
};

export default Features;

// display: flex;
// width: 90rem;
// padding: 7rem 4rem;
// flex-direction: column;
// align-items: center;
// gap: 5rem;
