import { GetBlogPosts } from "@/components/common/Get-Blog-Posts"
import Link from "next/link"

const BlogPage = () => {
  return (
    <div className="flex flex-col p-1">
      
      <Link href={'/'}>
        <h1>Blog Post Page</h1>
      </Link>

      <div className="flex flex-col gap-2">
        <GetBlogPosts />
      </div>
    </div>
  )
}

export default BlogPage