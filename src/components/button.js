import Link from 'next/link'

export default function Button({link, value}){
    return (
        <Link href={link}>
            <a className="px-11 py-6 text-m_white bg-m_primary transition delay-100 ease-in-out hover:bg-m_primary_dark rounded-full">{value}</a>
        </Link>
    )
}
