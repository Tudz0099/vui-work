// import Link from "next/link";

// const posts = [
//   { title: "Bài viết 1", slug: "bai-viet-1" },
//   { title: "Bài viết 2", slug: "bai-viet-2" },
// ];

export default function Blog() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Tiêu đề trang Blog */}
        <h1 className="text-4xl font-bold text-center mb-12">
          Khám phá các chủ đề nổi bật
        </h1>

        {/* Danh sách chuyên mục */}
        <div className="space-y-12">
          {/* Chuyên mục 1 */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Kỹ năng làm việc hiệu quả
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Bài viết 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="/path/to/image1.jpg"
                  alt="Hình ảnh bài viết"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">
                    Bí quyết quản lý thời gian
                  </h3>
                  <p className=" mb-4">
                    Tìm hiểu cách tổ chức công việc và lịch trình để nâng cao
                    năng suất làm việc.
                  </p>
                  <a
                    href="/blog/ky-nang-lam-viec/bai-viet-1"
                    className="text-blue-500 hover:underline font-semibold"
                  >
                    Đọc thêm →
                  </a>
                </div>
              </div>

              {/* Bài viết 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="/path/to/image2.jpg"
                  alt="Hình ảnh bài viết"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">
                    Các công cụ hỗ trợ năng suất
                  </h3>
                  <p className=" mb-4">
                    Khám phá những công cụ và ứng dụng giúp bạn tối ưu công việc
                    hàng ngày.
                  </p>
                  <a
                    href="/blog/ky-nang-lam-viec/bai-viet-2"
                    className="text-blue-500 hover:underline font-semibold"
                  >
                    Đọc thêm →
                  </a>
                </div>
              </div>
            </div>

            {/* Nút Xem thêm */}
            <div className="text-center mt-6">
              <a
                href="/blog/ky-nang-lam-viec"
                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Xem thêm về Kỹ năng làm việc hiệu quả
              </a>
            </div>
          </div>

          {/* Chuyên mục 2 */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Cân bằng công việc và cuộc sống
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Bài viết 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="/path/to/image3.jpg"
                  alt="Hình ảnh bài viết"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">
                    Tạo thói quen lành mạnh mỗi ngày
                  </h3>
                  <p className=" mb-4">
                    Những thói quen nhỏ có thể giúp bạn duy trì sự cân bằng và
                    giảm căng thẳng.
                  </p>
                  <a
                    href="/blog/can-bang-cuoc-song/bai-viet-1"
                    className="text-blue-500 hover:underline font-semibold"
                  >
                    Đọc thêm →
                  </a>
                </div>
              </div>

              {/* Bài viết 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="/path/to/image4.jpg"
                  alt="Hình ảnh bài viết"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">
                    Quản lý stress nơi công sở
                  </h3>
                  <p className="mb-4">
                    Các chiến lược đơn giản để giảm bớt áp lực trong môi trường
                    làm việc.
                  </p>
                  <a
                    href="/blog/can-bang-cuoc-song/bai-viet-2"
                    className="text-blue-500 hover:underline font-semibold"
                  >
                    Đọc thêm →
                  </a>
                </div>
              </div>
            </div>

            {/* Nút Xem thêm */}
            <div className="text-center mt-6">
              <a
                href="/blog/can-bang-cuoc-song"
                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Xem thêm về Cân bằng công việc và cuộc sống
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
