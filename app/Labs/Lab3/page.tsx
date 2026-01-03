"use client";
import Link from "next/link";
import DataFetcher from "./DataFetcher";

export default function Lab3() {
    return (
        <div id="wd-lab3">
            <ul>
                <li>
                    <Link href="/Labs" id="wd-labs-link">
                    Home </Link>
                </li>
                <h2>Lab3</h2>
                <h3>Greeting Handler:</h3>
                <DataFetcher />
            </ul>
        </div>
    );
}