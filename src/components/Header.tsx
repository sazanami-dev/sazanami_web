import Image from 'next/image';

export const Header = () =>{
    return (
        <>
            <Image
            className="m-3"
            src="/sazanami_dev.svg"
            alt="sazanami_dev_logo"
            width={220}
            height={38}
            priority
            objectFit='contain'
            />
        </>
    );
}