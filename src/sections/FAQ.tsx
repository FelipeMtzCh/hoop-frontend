import { ReactNode } from "react";
import FAQButton from "../components/FAQButton";
import { FAQLabels } from "../constants/FAQLabels";
import Button from "../components/Button";
import { Link } from "react-router-dom";
const FAQ = () => {
  return (
    <section className="flex flex-col items-start justify-center px-16 py-[7rem]">
      <header className="flex flex-col gap-6 justify-start w-full">
        <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
        <p className="text-lg font-normal">
          Find answers to common questions about our products, shipping, and
          returns.
        </p>
      </header>
      <div className="flex flex-col w-full items-center justify-start gap-4 py-6">
        {FAQLabels.map((label): ReactNode => {
          return <FAQButton label={label} key={label} />;
        })}
      </div>
      <footer className="flex flex-col gap-6 justify-center items-start py-8">
        <h2 className="text-4xl font-bold">Still have questions?</h2>
        <p className="text-lg font-normal">Contact us for more information.</p>
        <Link to="/about">
          <Button
            label="Here"
            bg="white"
            text="black"
            borderActive={true}
            icon={true}
          />
        </Link>
      </footer>
    </section>
  );
};

export default FAQ;
