const page = async ({ params, searchParams }) => {
    
    const { blog } = await params;

  return (
    <div>Comments page of blog {blog}</div>
  )
}

export default page