import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";

export default function Home() {
    return <Layout title="Home">
        <h1>Home page</h1>

        <p>Welcome to the home page</p>
        <Image src="/js-logo.png" width="50%" height="50%" alt="JS logo"></Image>
    </Layout>
}
