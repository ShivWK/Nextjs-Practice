import { notFound } from "next/navigation";

export const metadata = {
  title: {
    absolute: "Comments only"
  }
}

const page = async ({ params, searchParams }) => {

  const { CommentId } = await params;

  if (!/^\d+$/.test(CommentId)) {
    notFound();     
  }

  return (
    <div>comment page for comment {CommentId}</div>
  )
}

export default page