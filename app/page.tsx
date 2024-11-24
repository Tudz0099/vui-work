import Link from "next/link";
import "./globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="home-poster">
        <div className="py-12 text-center home-poster-content">
          <h1 className="text-4xl font-bold poster-title">
            Khám Phá Giải Pháp Làm Việc Hiệu Quả
          </h1>
          <p className="text-lg poster-description mt-4">
            Giảm stress, nâng cao năng suất và duy trì sự cân bằng trong công
            việc.
          </p>
          <div className="flex justify-center items-center my-6">
            <svg className="arrows">
              <path className="a1" d="M0 0 L30 32 L60 0"></path>
              <path className="a2" d="M0 20 L30 52 L60 20"></path>
              <path className="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
          </div>
          <Link
            href="/about"
            className="poster-action"
          >
            Tìm Hiểu Thêm Về Chúng Tôi
          </Link>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Bài Viết Mới Nhất
        </h2>
        <div className="grid grid-cols-3 gap-6 mt-8">
          <div className="bg-white shadow-lg rounded-md p-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Mẹo Giảm Stress Trong Công Việc
            </h3>
            <p className="text-gray-700 mt-2">
              Các cách đơn giản giúp bạn giảm căng thẳng khi làm việc...
            </p>
            <Link href="/posts/1" className="text-blue-500 hover:underline">
              Đọc tiếp
            </Link>
          </div>
          <div className="bg-white shadow-lg rounded-md p-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Tăng Năng Suất Làm Việc
            </h3>
            <p className="text-gray-700 mt-2">
              Các chiến lược và công cụ giúp bạn làm việc hiệu quả hơn...
            </p>
            <Link href="/posts/2" className="text-blue-500 hover:underline">
              Đọc tiếp
            </Link>
          </div>
          <div className="bg-white shadow-lg rounded-md p-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Kỹ Năng Quản Lý Thời Gian
            </h3>
            <p className="text-gray-700 mt-2">
              Cách phân bổ thời gian để hoàn thành công việc một cách hiệu
              quả...
            </p>
            <Link href="/posts/3" className="text-blue-500 hover:underline">
              Đọc tiếp
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
