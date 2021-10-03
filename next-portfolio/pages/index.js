import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return <div>
        <h1>Home page</h1>

        <Link href="/about">
            <a>Go to about page</a>
        </Link>
        <p>Welcome to the home page</p>
        <Image src="/js-logo.png" width="50%" height="50%" alt="JS logo"></Image>
    </div>
}
