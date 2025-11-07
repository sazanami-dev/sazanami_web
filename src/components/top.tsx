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
      {/* 上下は items-center で元のまま垂直中央。左右は1/2ずつの領域で中央寄せ */}
      <div className="absolute top-0 left-0 w-full h-screen flex items-center">
        {/* 左半分：ロゴ */}
        <div className="w-1/2 flex justify-center">
          <Image
            src="/log-phrase.svg"
            alt="sazanami_dev_logo"
            className="object-contain w-[40vw] sm:w-[40vw]"
            width={800}
            height={300}
            priority
          />
        </div>
        {/* 右半分：main画像 */}
        <div className="w-1/2 flex justify-center">
          <Image
            src="/main.svg"
            alt="main"
            className="object-contain w-[35vw] sm:w-[35vw]"
            width={650}
            height={300}
            priority
          />
        </div>
      </div>
    </div>
  );
};