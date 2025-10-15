const page = async ({ params, searchParams }) => {

    const { CommentId } = await params;
  return (
    <div>comment page for comment {CommentId}</div>
  )
}

export default page