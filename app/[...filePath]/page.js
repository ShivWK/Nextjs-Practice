const page = async ({ params }) => {

    const { filePath } = await params;
    console.log(filePath);

    return (
        <div>Catch all route page</div>
    )
}

export default page