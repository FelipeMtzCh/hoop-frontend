import { Link } from "react-router-dom";
import Button from "../components/Button";

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex flex-row py-16 px-16 h-full w-full gap-20">
        <div className="flex flex-col w-1/2 items-center justify-center gap-5">
          <h2 className="text-5xl font-extrabold">Page Not Found</h2>
          <p className="text-lg font-semibold text-center">
            The page you're looking for does not exist or is temporaly out of
            service, sorry for the inconvenient
          </p>
        </div>
        <div className="w-1/2 h-full">
          <img src="/undraw_questions_re_1fy7.svg" alt="404 image" />
        </div>
      </div>
      <Link to="/">
        <Button
          label="Return to Home"
          text="black"
          bg="white"
          borderActive={true}
          icon={false}
        />
      </Link>
    </section>
  );
};

export default NotFound;
