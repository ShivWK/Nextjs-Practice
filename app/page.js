import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome home</h1>
      <Link className="bg-blue-500 text-white font-semibold rounded-md border border-white py-1 px-2" href={"/about"}>About</Link>
      {" "}
      <Link className="bg-blue-500 text-white font-semibold rounded-md border border-white py-1 px-2" href={"/services"}>Services</Link>
      {" "}
      <Link className="bg-blue-500 text-white font-semibold rounded-md border border-white py-1 px-2" href={"/blogs"}>Blog</Link>
    </>
  );
}
