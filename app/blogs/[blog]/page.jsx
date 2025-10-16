import { notFound } from "next/navigation";

export const generateMetadata = async ({ params, searchParams }) => {
    const { blog } = await params;

    return {
        title: `Blog ${blog}`
    }
}

const page = async ({ params, searchParams }) => {
    const { blog } = await params;

    if (blog === "test") {
        notFound();
    }

    return ( 
        <div>
            <h1>Nested Blogs</h1>
            <p>{blog}</p>
        </div>
    )
}

export default page