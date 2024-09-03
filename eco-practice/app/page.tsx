import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href={"/about"}>About</Link>
      <br />
      <Image src={"/vercel.svg"} alt="vercel" width={72} height={16}></Image>
      <Link href={"/contact"}>contact</Link>

    </div>
  );
}
