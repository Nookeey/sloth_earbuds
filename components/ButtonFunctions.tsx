import Image from "next/image";

interface ButtonFunctionsProps {
  icon: string;
  title: string;
  description: string;
}

const ButtonFunctions = ({
  icon,
  title,
  description,
}: ButtonFunctionsProps) => {
  return (
    <div className="text-center w-full">
      <div className="flex items-center justify-center aspect-square w-[140px] mx-auto rounded-full border-solid border-4 border-[#5E097E] mb-6">
        <Image src={`/images/${icon}.svg`} alt="" width={96} height={96} />
      </div>
      <p className="font-semibold uppercase">{title}</p>
      <p className="sm">{description}</p>
    </div>
  );
};

export default ButtonFunctions;
