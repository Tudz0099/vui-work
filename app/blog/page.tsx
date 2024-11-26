import Image from "next/image";

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: "A Pretium Enim Dolor Donec Eu Venenatis Curabitur",
      category: "Aenean Eleifend, Aliquam",
      author: "Joanna Wellick",
      date: "June 30, 2018",
      image: "/path/to/image1.jpg",
      likes: 181,
      comments: 450,
      link: "/blog/post-1",
    },
    {
      id: 2,
      title: "Integer Maecenas Eget Viverra",
      category: "Aenean Eleifend, Aliquam",
      author: "Joanna Wellick",
      date: "June 28, 2018",
      image: "/path/to/image2.jpg",
      likes: 156,
      comments: 225,
      link: "/blog/post-2",
    },
    {
      id: 3,
      title: "A Vivamus Penatibus Enim Sit Et Quam Vel Consequat",
      category: "Aenean Eleifend, Metus Vidi",
      author: "Joanna Wellick",
      date: "June 28, 2018",
      image: "/path/to/image3.jpg",
      likes: 524,
      comments: 326,
      link: "/blog/post-3",
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Bài viết</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src="https://vr360.com.vn/uploads/images/5-cach-quang-ba-du-lich.jpg"
                width={400}
                height={400}
                alt={post.title}
                loading="lazy"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm  mb-2">{post.category}</p>
                <h2 className="text-xl font-semibold mb-4">{post.title}</h2>
                <div className="flex items-center text-sm  mb-4">
                  <p>By {post.author}</p>
                  <span className="mx-2">•</span>
                  <p>{post.date}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4 ">
                    <p>❤️ {post.likes}</p>
                    <p>💬 {post.comments}</p>
                  </div>
                  <a
                    href={post.link}
                    className="text-blue-500 font-semibold hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
