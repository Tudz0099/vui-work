import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "VuiWork",
  description: "Làm việc thông minh, sống ý nghĩa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased tracking-[0.06em] flex flex-col items-center`}
      >
        <div className="body-container w-full p-4">
          <h1 className="text-3xl font-bold">VuiWork</h1>
        </div>

        <div className="body-container grid grid-cols-1 sm:grid-cols-3">
          <div className="flex flex-col items-center min-h-screen col-span-2">
            <header className="p-4 w-full">
              <nav className="navigation py-2 px-3 sm:px-5">
                <Link href="/" className="sm:mr-4 sm:pr-4 pr-3">
                  Trang chủ
                </Link>
                <Link href="/blog" className="sm:mr-4 sm:pr-4 pr-3">
                  Bài viết
                </Link>
                <Link href="/about" className="sm:mr-4 sm:pr-4 pr-3">
                  Giới thiệu
                </Link>
                <Link href="/contact">
                  Liên hệ
                </Link>
              </nav>
            </header>
            <main className="flex-grow">{children}</main>
          </div>

          <div className="col-span-1 p-4 flex flex-col">
              <div className="flex items-center w-full search-form">
                <input className="w-full px-3" type="text"/>
                <button className="h-full py-2 px-3">Search</button>
              </div>
          </div>
        </div>

        <footer
          className={`flex justify-center flex-col items-center p-6 w-full`}
        >
          <div className="footer-container grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="col-span-1">
              <p>Logo</p>
            </div>

            <div className="col-span-2">
              <p className="text-xl font-semibold">Giới thiệu về VuiWork</p>
              <p className="mt-4">
                <strong>VuiWork</strong> là nơi chúng tôi chia sẻ những giải
                pháp, mẹo vặt và tài nguyên hữu ích để giúp bạn làm việc hiệu
                quả hơn và duy trì sự cân bằng giữa công việc và cuộc sống. Dù
                bạn là nhân viên văn phòng mới vào nghề hay đã có nhiều năm kinh
                nghiệm, blog của chúng tôi luôn có những gợi ý và chiến lược
                giúp bạn vượt qua thách thức trong công việc, giảm stress và
                phát triển kỹ năng cá nhân.
              </p>
              <p className="mt-4">
                Chúng tôi cam kết mang lại cho bạn những bài viết dễ hiểu, dễ áp
                dụng và đầy cảm hứng. Nếu bạn muốn tìm hiểu thêm về sứ mệnh và
                đội ngũ của chúng tôi, hãy{" "}
                <Link href="/about" className="text-blue-500 hover:underline">
                  đọc thêm tại trang Giới thiệu
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="border-b border-gray-500 opacity-50 w-full mt-6" />
          <div className="text-center mt-4 text-gray-500 text-sm">
            <p>&#169; 2024 VuiWork. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
