import Link from "next/link";
export default function Labs() {
    return (
        <ul>
            <li>
                <Link href="/Labs" id="wd-labs-link">
                <h2>Home</h2> </Link> 
            </li>
            <li>
                <Link href="/Labs/Lab1" id="wd-lab1-link">
                <h2>Lab 1</h2> </Link>
            </li>
            <li>
                <Link href="/Labs/Lab2" id="wd-lab2-link">
                <h2>Lab 2</h2> </Link>
            </li>
            <li>
                <Link href="/Labs/Lab3" id="wd-lab3-link">
                <h2>Lab 3</h2> </Link>
            </li>
        </ul>
    )
}