"use client"

import { usePathname } from "next/navigation";

const NotFound = () => {
    const pathname = usePathname();
    const blogId = pathname.split("/").at(-1);

  return (
    <>
        <h1>{blogId} Page not found</h1>
        <p>Could not found the page you are looking for.</p>
    </>
  )
}

export default NotFound;