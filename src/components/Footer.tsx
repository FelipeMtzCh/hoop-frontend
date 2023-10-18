import Button from "./Button";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="flex flex-row px-16 py-[5rem] justify-between items-center gap-[8rem]">
      <div className="flex flex-col items-center justify-start w-[31.5rem] gap-6">
        <span className="mx-16 font-bold text-xl w-full">Logo</span>
        <p className="text-base w-full">
          Stay up to date on the latest features and releases by joining our
          newsletter.
        </p>
        <div className="flex flex-row w-full gap-6">
          <input
            type="text"
            placeholder="E-mail"
            className="h-auto w-full text-black border-2 border-black px-1"
          />
          <Button
            label="Subcribe"
            bg="white"
            text="black"
            borderActive={true}
            icon={false}
          />
        </div>
        <p className="text-base w-full">
          By subscribing, you agree to our{" "}
          <span className="border-b-[1px] border-black cursor-pointer">
            Privacy Policy
          </span>{" "}
          and consent to receive updates from our company.
        </p>
      </div>
      {/** --------------------------------------------------------------------- **/}
      <div className="flex flex-row h-auto items-start justify-start w-[31.5rem] gap-x-6 ">
        <div className="flex w-full flex-col justify-center items-start gap-5">
          <p className="font-semibold">Column One</p>
          <p className="font-medium text-base">Link One</p>
          <p className="font-medium text-base">Link Two</p>
          <p className="font-medium text-base">Link Three</p>
          <p className="font-medium text-base">Link Four</p>
          <p className="font-medium text-base">Link Five</p>
        </div>
        <div className="flex w-full flex-col justify-center items-start gap-5">
          <p className="font-semibold">Column Two</p>
          <p className="font-medium text-base">Link Six</p>
          <p className="font-medium text-base">Link Seven</p>
          <p className="font-medium text-base">Link Eigth</p>
          <p className="font-medium text-base">Link Nine</p>
        </div>
        <div className="flex w-full flex-col justify-center items-start gap-y-4">
          <p className="font-semibold">Follow Us</p>
          <div className="flex w-full flex-row items-start justify-start gap-2">
            <IconBrandFacebook size={22.4} /> <span>Facebook</span>
          </div>
          <div className="flex w-full flex-row items-start justify-start gap-2">
            <IconBrandInstagram size={22.4} /> <span>Instagram</span>
          </div>
          <div className="flex w-full flex-row items-start justify-start gap-2">
            <IconBrandX size={22.4} /> <span>X</span>
          </div>
          <div className="flex w-full flex-row items-start justify-start gap-2">
            <IconBrandLinkedin size={22.4} /> <span>LinkedIn</span>
          </div>
          <div className="flex w-full flex-row items-start justify-start gap-2">
            <IconBrandYoutube size={22.4} /> <span>Youtube</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
