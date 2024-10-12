import Link from "next/link"
import headerStyle from "./header.module.css"



export default function Header() {
    return (
        <nav className={headerStyle.navBar}>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">Hero Section</Link></li>
                <li><Link href="/">Section</Link></li>
                <li><Link href="/">Footer</Link></li>
            </ul>
        </nav>
    )
} 