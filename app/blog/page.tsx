import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogCard from '@/components/BlogCard'
import { blogPosts } from '@/data/blog'

export const metadata: Metadata = {
  title: 'Home Services Tips & Guides | MyHomePro Malaysia',
  description:
    'Helpful tips and guides for Malaysian homeowners on auto gate repair, roof leaks, kitchen hood cleaning, water heaters, and more.',
  alternates: {
    canonical: 'https://www.myhomepro.com.my/blog',
  },
}

export default function BlogIndexPage() {
  return (
    <>
      <Header />
      <section className="py-12 md:py-20">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 md:mb-14">
            <h1 className="font-poppins font-bold text-[32px] md:text-[48px] text-text-primary">
              Home Services Tips for Malaysian Homeowners
            </h1>
            <p className="mt-4 text-text-secondary text-base md:text-lg max-w-xl">
              Practical guides and advice on home maintenance, repair costs, and when to call
              a professional.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
