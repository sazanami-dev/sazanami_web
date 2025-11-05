import Image from "next/image";
import Link from "next/link";

export const Top = () => {
  return (
    <div className="relative w-full min-h-screen">
      <Image
        src="background_img.svg"
        alt="background_img"
        className="ml-auto opacity-40 object-contain"
        width={1600}
        height={38}
        priority
        objectFit="contain"
      />
      <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-end pr-35">
        <Image
        src="/main.svg"
        alt="main"
        className="object-contain"
        width={650}
        height={300}
        priority
      />
      </div>
      
    </div>
  );
};
