import { IconMapPin, IconPhone } from "@tabler/icons-react";
import Button from "../components/Button";
import { IconMail } from "@tabler/icons-react";
import { Map } from "../components/Map";

const AboutUs = () => {
  return (
    <>
      <header className="flex justify-between items-center px-28 py-16 gap-20">
        <h2 className="text-5xl font-bold w-1/2">Delicious German Snacks</h2>
        <p className="text-lg font-normal w-1/2">
          We are a company that is passionate about creating and delivering
          fresh, high-quality German snacks directly to your doorstep. Our
          mission is to provide young adults with a powerful and accessible
          snacking experience that they can enjoy anytime, anywhere.
        </p>
      </header>
      <section className="flex justify-between items-center px-28 py-16 gap-20">
        <div className="flex flex-col items-start justify-start w-1/2 gap-4">
          <span className="font-bold text-base">Authentic</span>
          <h2 className="text-5xl font-bold">
            Bringing Authentic German Snacks to You
          </h2>
        </div>
        <div className="flex flex-col items-start justify-start w-1/2 gap-6">
          <p className="text-lg font-normal">
            At our company, we have a rich history rooted in our commitment to
            using fresh ingredients. We believe in bringing the authentic
            flavors of Germany right to your doorstep. With our dedication to
            quality and taste, you can experience the power of German snacks in
            every bite.
          </p>
          <div className="flex items-start justify-center gap-8">
            <Button
              label="Learn More"
              bg="white"
              text="black"
              borderActive={true}
              icon={false}
            />
            <Button
              label="Sing Up"
              bg="white"
              text="black"
              borderActive={false}
              icon={true}
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-between items-start px-28 py-16 gap-20">
        <div className="flex flex-col items-start justify-start gap-6">
          <span className="font-bold text-base">Delicious</span>
          <h2 className="text-5xl font-bold">Reach Out</h2>
          <p className="text-lg font-normal">
            Discover our global snack production and distribution locations.
          </p>
        </div>
        <div className="flex flex-row justify-between items-center gap-20">
          <div className="flex flex-col justify-start items-start gap-7">
            <div className="flex flex-col justify-start items-start gap-2">
              <IconMail />
              <h6 className="font-bold text-lg">Email</h6>
              <p className="text-base font-normal">Send us a message today!</p>
              <p className="text-base font-medium underline">hello@hoop.com</p>
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
              <IconPhone />
              <h6 className="font-bold text-lg">Phone</h6>
              <p className="text-base font-normal">
                Call us for more information.
              </p>
              <p className="text-base font-medium underline">
                (+57) 300-100-2345
              </p>
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
              <IconMapPin />
              <h6 className="font-bold text-lg">Office</h6>
              <p className="text-base font-normal">Av.35 # 57-50</p>
              <p className="text-base font-medium">Medellin, Colombia</p>
            </div>
          </div>
          <Map />
        </div>
      </section>
    </>
  );
};

export default AboutUs;
