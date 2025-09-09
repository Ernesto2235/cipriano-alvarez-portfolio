import Link from "next/link";

interface NavLinkProps{
    href: string;
    text:string;
}
export default function NavLink({href,text}:NavLinkProps){
    return(
        <Link className="text-3xl hover:underline hover:font-semibold" href={href}>{text}</Link>
    )
}