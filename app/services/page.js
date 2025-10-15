import Link from "next/link";

const Services = () => {
  return (
    <>
      <h1>Services</h1>
      <Link className="bg-blue-500 text-white font-semibold rounded-md border border-white py-1 px-2" href="/services/seo">SEO</Link>{" "}
      <Link className="bg-blue-500 text-white font-semibold rounded-md border border-white py-1 px-2" href="/services/web-dev">Web Development</Link>{" "}
      <Link className="bg-blue-500 text-white font-semibold rounded-md border border-white py-1 px-2" href="/services/web-design">Web Design</Link>
    </>
  )
}

export default Services;