import Image from 'next/image';

export const Header = () =>{
    return (
        <>
        <Image
          className=""
          src="/sazanami_dev.svg"
          alt="sazanami_dev.svg"
          width={180}
          height={38}
          priority
        />
        </>
    );
}