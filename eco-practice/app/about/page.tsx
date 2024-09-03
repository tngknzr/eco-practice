import Link from "next/link"
export default function About() {
    return (
        <div>
            <h1>About</h1>
            <p>This is the about page</p>
            <Link href={"/"}>Go Back</Link>
            <Link href={"/about/me"}>Go Me </Link>
        </div>
    )
}