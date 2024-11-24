import Link from "next/link";

const posts = [
    { title: "Bài viết 1", slug: "bai-viet-1" },
    { title: "Bài viết 2", slug: "bai-viet-2" },
];

export default function Blog() {
    return (
        <div>
            <h1>Danh sách bài viết</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
