import Link from "next/link";
import "./globals.css";
import Image from "next/image";

const Home = () => {
  return (
    <div className="container mx-auto px-4 mt-4">
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
          <Link href="/about" className="poster-action font-bold">
            Tìm Hiểu Thêm Về Chúng Tôi
          </Link>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center ">
          Chúng Tôi Chia Sẻ Điều Gì?
        </h2>
        <p className="text-lg text-center mt-4">
          <strong>VuiWork</strong> là nơi bạn có thể tìm thấy những kiến thức
          thực tế và lời khuyên hữu ích về:
        </p>

        {/* Grid Content */}
        <div className="mt-8 space-y-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold ">
                Tăng Năng Suất Làm Việc
              </h3>
              <p className=" mt-2">
                Các mẹo và chiến lược để làm việc thông minh hơn, không phải
                chăm chỉ hơn, giúp bạn hoàn thành công việc đúng thời hạn.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center items-center">
              <Image
                src="/work.png"
                width={400}
                height={400}
                alt="Tăng Năng Suất Làm Việc"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-6">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold ">
                Quản Lý Stress Hiệu Quả
              </h3>
              <p className=" mt-2">
                Những lời khuyên giúp bạn giữ tinh thần thoải mái, vượt qua áp
                lực công việc và tìm lại sự cân bằng trong cuộc sống.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center items-center">
              <Image
                src="/stress.png"
                width={400}
                height={400}
                alt="Quản Lý Stress Hiệu Quả"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold ">
                Phát Triển Kỹ Năng Cá Nhân
              </h3>
              <p className=" mt-2">
                Cải thiện các kỹ năng mềm như giao tiếp, quản lý thời gian và
                lãnh đạo để tiến xa hơn trong sự nghiệp.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center items-center">
              <Image
                src="/skill.png"
                width={400}
                height={400}
                alt="Phát Triển Kỹ Năng Cá Nhân"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-6">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold ">
                Cân Bằng Công Việc & Cuộc Sống
              </h3>
              <p className=" mt-2">
                Các cách đơn giản để tận hưởng cuộc sống cá nhân, phát triển sở
                thích và chăm sóc bản thân ngoài công việc.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center items-center">
              <Image
                src="/balancer.png"
                width={400}
                height={400}
                alt="Cân Bằng Công Việc & Cuộc Sống"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold ">
                Kỹ Năng Quản Lý Tài Chính & Kiếm Thêm Thu Nhập
              </h3>
              <p className=" mt-2">
                Chúng tôi cung cấp những lời khuyên về cách quản lý ngân sách cá
                nhân, tối ưu hóa chi tiêu và các mẹo kiếm thêm thu nhập ngay cả
                khi bạn là nhân viên văn phòng bận rộn.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/finance.png"
                width={400}
                height={400}
                alt="Kỹ Năng Quản Lý Tài Chính & Kiếm Thêm Thu Nhập"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="text-center my-12">
        <p className="text-lg ">
          Khám phá thêm các bài viết chuyên sâu và lời khuyên hữu ích từ chúng
          tôi. Hãy bắt đầu hành trình phát triển của bạn ngay hôm nay!
        </p>
        <div className="flex justify-center items-center my-6">
          <svg className="arrows arrow-black">
            <path className="a1" d="M0 0 L30 32 L60 0"></path>
            <path className="a2" d="M0 20 L30 52 L60 20"></path>
            <path className="a3" d="M0 40 L30 72 L60 40"></path>
          </svg>
        </div>
        <Link href="/blog" className="view-action font-bold">
          Xem Các Bài Viết
        </Link>
      </div>
    </div>
  );
};

export default Home;
