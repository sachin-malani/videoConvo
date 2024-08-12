import { cn } from "@/lib/utils";
import Image from "next/image";

interface HomeCardProps {
  color: string;
  img: string;
  title: string;
  desc: string;
  handleClick: () => void;
}

const HomeCard = ({ color, img, title, desc, handleClick }: HomeCardProps) => {
  return (
    <div
      className={cn(
        "px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer",
        color
      )}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-[12px]">
        <Image
          src={img}
          alt="meeting"
          width={27}
          height={27}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{desc}</p>
      </div>
    </div>
  );
};

export default HomeCard;
