import Image from "next/image";
import Link from "next/link";

export const Top = () => {
  return (
    <>
      <Image
        src="background_img.svg"
        alt="background_img"
        className="ml-auto opacity-40 object-contain"
        width={1600}
        height={38}
        priority
        objectFit="contain"
      />
      <Image
        src="/main.JPG"
        alt="main"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        width={400}
        height={300}
        priority
      />
    </>
  );
};
