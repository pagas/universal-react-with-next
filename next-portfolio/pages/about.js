import Link from "next/link";

export default function About() {
    return <div>
        <h1>About page</h1>
        <p>This is about page</p>
        <Link href="/">
            <a>Home page</a>
        </Link>

    </div>
}
