import Image from 'next/image'
import Link from 'next/link'
import {logo, menus} from "./data";
import {Search, ShoppingBag, User} from "react-feather";

export default function Header(){
    return(
        <header className="w-full sticky top-0 z-10 shadow-sm">
            <div className="px-7 bg-m_white flex items-center justify-between sm:px-4">
                <div className="flex justify-center items-center sm:w-7">
                    <Image src={logo.url} alt={logo.alt} width={57} height={57} />
                </div>
                <nav className="flex sm:hidden">
                    {menus.map((menu, index) => (
                        <Link key={index} href={menu.path}>
                            <a className="transition delay-100 ease-in-out py-6 mr-12 font-bold uppercase last:mr-0 hover:text-m_primary">{menu.label}</a>
                        </Link>
                    ))}
                </nav>
                <div className="flex">
                    <button type="button" className="transition delay-100 ease-in-out rounded-full p-2 hover:bg-m_primary_light sm:hidden">
                        <Search />
                    </button>
                    <button type="button" className="ml-7 transition delay-100 ease-in-out rounded-full p-2 hover:bg-m_primary_light sm:hidden">
                        <User />
                    </button>
                    <button type="button" className="ml-7 transition delay-100 ease-in-out rounded-full p-2 hover:bg-m_primary_light sm:bg-m_primary sm:p-1 sm:m-1 sm:text-m_white">
                        <ShoppingBag />
                    </button>
                </div>
            </div>
        </header>
    )
}
