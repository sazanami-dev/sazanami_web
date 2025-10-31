import Image from 'next/image';
import Link from 'next/link';

export const Header = () =>{
    return (
        <header>
            <Link href="/" className="flex items-center">
            
                <Image
                className="m-3"
                src="/sazanami_dev.svg"
                alt="sazanami_dev_logo"
                width={220}
                height={38}
                priority
                objectFit='contain'
                />
            </Link>
        </header>
    );
}