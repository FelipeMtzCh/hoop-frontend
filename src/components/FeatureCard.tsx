import Button from "./Button";

interface FeatureCardProps {
  title: string;
  subtitle: string;
}

const FeatureCard = ({ title, subtitle }: FeatureCardProps) => {
  return (
    <div className="flex flex-nav flex-col items-center justify-center gap-6">
      <img src="/Icon.png" alt="Icon" />
      <h4 className="text-4xl">{title}</h4>
      <p className="text-base">{subtitle}</p>
      <div className="flex items-center justify-center gap-5">
        <Button
          label="Order"
          bg="white"
          text="black"
          borderActive={true}
          icon={false}
        />
        <Button
          label="Discover"
          bg="white"
          text="black"
          borderActive={true}
          icon={true}
        />
      </div>
    </div>
  );
};

export default FeatureCard;
