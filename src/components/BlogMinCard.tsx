import Button from "./Button";

const BlogMinCard = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-y-6">
      <img
        className="w-full h-[18.75rem] object-cover"
        src="/Replace.png"
        alt="cover photo"
      />
      <div className="flex flex-row justify-start items-center gap-4">
        <span className="bg-gray-200 rounded-sm font-bold text-sm p-2">
          Category
        </span>
        <span className="font-bold text-sm">5 min read</span>
      </div>
      <h5 className="text-2xl font-bold">Exciting New Product Launch</h5>
      <p className="text-base font-normal">
        Discover our latest product and learn about its unique features.
      </p>
      <Button
        label="Read more"
        bg="white"
        text="black"
        borderActive={true}
        icon={true}
      />
    </div>
  );
};

export default BlogMinCard;
