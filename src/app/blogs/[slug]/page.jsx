import { getBlogBySlug, getAllBlogSlugs } from "@/data/blogData";
import SingleBlogPage from "@/blogscomponents/SingleBlogPage";
import { notFound } from "next/navigation";

// Generate static params for all blog slugs
export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for each blog post
export function generateMetadata({ params }) {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: `${blog.title} | Nexcura Health Blog`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image],
    },
  };
}

export default function BlogPostPage({ params }) {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  return <SingleBlogPage blog={blog} />;
}
