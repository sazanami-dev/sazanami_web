import Image from "next/image";
import Link from "next/link";

export const Top = () => {
  return (
    <div className="relative w-full min-h-screen">
    <Image
        src="background_img.svg"
        alt="background_img"
        className="ml-auto opacity-40 object-contain"
        width={1300}
        height={38}
        priority
        objectFit="contain"
      />
      <div className="absolute top-0 left-0 w-full h-screen flex flex-col md:flex-row items-center md:items-center md:justify-normal pl-6 pr-6 pt-15 md:pl-0 md:pr-0">
        <div className="w-full md:w-1/2 flex md:justify-center order-2 md:order-1 mt-15 md:mt-0">
          <Image
            src="/log-phrase.svg"
            alt="sazanami_dev_logo"
            className="object-contain w-[70vw] sm:w-[45vw] md:w-[40vw]"
            width={800}
            height={300}
            priority
          />
        </div>
        <div className="w-full md:w-1/2 flex md:justify-center justify-end order-1 md:order-2">
          <Image
            src="/main.svg"
            alt="main"
            className="object-contain w-[70vw] sm:w-[50vw] md:w-[35vw]"
            width={650}
            height={300}
            priority
          />
        </div>
      </div>
    </div>
  );
};