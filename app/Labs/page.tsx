import Link from "next/link";
export default function Labs() {
    return (
        <ul>
            <li>
                <Link href="/Labs" id="wd-labs-link">
                Home </Link> 
            </li>
            <li>
                <Link href="/Labs/Lab1" id="wd-lab1-link">
                Lab 1 </Link>
            </li>
        </ul>
    )
}