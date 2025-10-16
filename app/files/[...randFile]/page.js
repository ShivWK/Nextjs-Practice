const page = async ({ params }) => {

    const { randFile } = await params;
    return (
        <div>
            Random file page
            <p>{randFile?.join("/")+"/"}</p>
        </div>
    )
}

export default page