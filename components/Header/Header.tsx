'use client';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVirusCovid } from '@fortawesome/free-solid-svg-icons';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { useAppContext } from '@context/state';

const Header = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useAppContext();

    return (
        <div className="flex flex-row justify-between top-0 sticky w-full h-[5vh] text-center main_gradient drop-shadow-lg z-30">
            <Link href="/">
                <FontAwesomeIcon className="h-[70%] p-2" icon={faVirusCovid} />
            </Link>
            <h1 className="leading-[5vh] text-lg tracking-widest">COVISUAL</h1>
            <FontAwesomeIcon
                onClick={() => setIsSidebarVisible((prev) => !prev)}
                className="h-[70%] p-2"
                icon={faGlobeAmericas}
            />
        </div>
    );
};

export default Header;
