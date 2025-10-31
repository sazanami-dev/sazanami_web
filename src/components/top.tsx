import Image from "next/image";
import Link from "next/link";

export const Top = () => {
  return (
    <>
      <Image
        src="background_img.svg"
        alt="background_img"
        className="ml-auto opacity-40"
        width={1600}
        height={38}
        priority
        objectFit="contain"
      />
    </>
  );
};
