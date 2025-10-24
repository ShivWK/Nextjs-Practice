export const metadata = {
  title: "About"
}

export const dynamic = "force-static";

const Page = async ({ searchParams }) => {
  const result = await searchParams;
  console.log("About page")

  return (
    <h1>About Page</h1>
  )
}

export default Page;