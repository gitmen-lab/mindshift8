import Link from "next/link";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Blog",
  description: "Practical, no-nonsense articles on brain fog, focus, and mental clarity from Mind Shift 8.",
};

const posts = [
  {
    slug: "how-to-get-rid-of-brain-fog",
    category: "Brain health",
    date: "August 11, 2026",
    readTime: "7 min read",
    title: "How to Get Rid of Brain Fog",
    dek: "Brain fog symptoms, common causes, and the specific things that help clear your head, from sleep and stress fixes to a simple daily routine that supports focus.",
  },
  {
    slug: "brain-fog-symptoms",
    category: "Brain health",
    date: "August 11, 2026",
    readTime: "6 min read",
    title: "Brain Fog Symptoms: What It Really Feels Like",
    dek: "A breakdown of common brain fog symptoms, including memory lapses and forgetfulness, what's typical, what's not, and when it's worth seeing a doctor.",
  },
  {
    slug: "how-to-improve-focus-and-concentration",
    category: "Focus & productivity",
    date: "August 11, 2026",
    readTime: "6 min read",
    title: "How to Improve Focus and Concentration",
    dek: "8 research-backed ways to improve focus and concentration, plus specific tips for staying focused at work.",
  },
];

export default function Blog() {
  return (
    <>
      <Topbar />
      <main className="legal-main">
        <div className="legal-wrap">
          <p className="eyebrow">Blog</p>
          <h1>Brain health, focus &amp; clarity</h1>
          <p className="sub">Practical, no-nonsense articles on brain fog, focus, and mental clarity.</p>

          <div className="post-list">
            {posts.map((post) => (
              <Link key={post.slug} className="post-card" href={`/blog/${post.slug}`}>
                <div className="post-meta">
                  {post.category} &middot; {post.date} &middot; {post.readTime}
                </div>
                <div className="post-title">{post.title}</div>
                <p className="post-dek">{post.dek}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
