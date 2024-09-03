import Link from "next/link"


export default function Me(){
    return(
        <div>
            <h1>Me</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>

        </div>
    )
}