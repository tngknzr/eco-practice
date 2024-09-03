import Link from "next/link"


export default function Contact() {
    return (
        <div>
            <h1>Contact</h1>
            <p>This is the Contact page</p>
            <Link href={"/"}>Go home</Link>
            <br />
            <Link href={"/about"}>Go about</Link>
        </div>
    )
}