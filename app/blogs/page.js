const page = async ({ params, searchParams }) => {

    console.log(await params);
    console.log(await searchParams);

    return (
        <div>Blog page</div>
    )
}

export default page;