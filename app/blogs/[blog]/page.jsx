const page = async ({ params, searchParams }) => {

    const { blog } = await params;
    // console.log(await params);
    return (
        <div>
            <h1>Nested Blogs</h1>
            <p>{blog}</p>
        </div>
    )
}

export default page