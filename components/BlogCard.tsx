import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import { BlogPost } from '@/data/blog'

interface BlogCardProps {
  post: BlogPost
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-MY', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white border border-[#E5E7EB] rounded-xl p-6 hover:border-primary hover:shadow-md transition-all duration-200">
      <div className="flex items-center gap-2 text-text-secondary text-sm mb-3">
        <Calendar size={14} />
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span className="text-[#D1D5DB]">·</span>
        <span>{post.author}</span>
      </div>
      <h2 className="font-poppins font-semibold text-[18px] md:text-[20px] text-text-primary mb-3 leading-snug">
        {post.title}
      </h2>
      <p className="text-text-secondary text-base leading-relaxed mb-5">
        {post.excerpt}
      </p>
      <Link
        href={`/blog/${post.slug}`}
        className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:gap-2.5 transition-all"
      >
        Read more
        <ArrowRight size={15} />
      </Link>
    </article>
  )
}
