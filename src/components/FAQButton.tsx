interface FAQButtonProps {
  label: string;
}

const FAQButton = ({ label }: FAQButtonProps) => {
  return (
    <>
      <button className="flex justify-between items-center p-6 w-full text-base font-bold border-2 border-black">
        {label}
        <button className="border-2 border-black rounded-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-caret-down"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M6 10l6 6l6 -6h-12"></path>
          </svg>
        </button>
      </button>
    </>
  );
};

export default FAQButton;
