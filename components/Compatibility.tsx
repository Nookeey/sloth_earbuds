import Image from "next/image";

interface CompatibilityProps {
  icon: string;
  title: string;
}

const Compatibility = ({ icon, title }: CompatibilityProps) => {
  return (
    <div className="w-full">
      <div className="flex items-center bg-gradient justify-center w-[200px] sm:w-[100%] aspect-square mx-auto mb-5 sm:mb-9">
        <Image
          src={`/images/${icon}.svg`}
          alt=""
          width={96}
          height={96}
          className="h-[70px]"
        />
      </div>
      <h3 className="font-medium text-center">{title}</h3>
    </div>
  );
};
export default Compatibility;
