import React from "react";

const Contact = () => {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center  mb-8">
          Liên Hệ Với Chúng Tôi
        </h2>
        <p className="text-lg  text-center mb-8">
          Nếu bạn có bất kỳ câu hỏi, góp ý hoặc muốn cộng tác, hãy liên hệ với
          chúng tôi qua biểu mẫu bên dưới hoặc gửi email trực tiếp. Chúng tôi sẽ
          phản hồi bạn sớm nhất có thể.
        </p>

        {/* Form liên hệ */}
        <div className="max-w-2xl mx-auto p-8 rounded-lg">
          <form action="/api/contact" method="POST">
            <div className="mb-4">
              <label htmlFor="name" className="block  font-semibold mb-2">
                Họ và Tên
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                placeholder="Nhập họ và tên của bạn"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                placeholder="Nhập email của bạn"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block font-semibold mb-2">
                Tin nhắn
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                placeholder="Nhập tin nhắn của bạn"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
            >
              Gửi Liên Hệ
            </button>
          </form>
        </div>

        {/* Thông tin Email */}
        {/* <div className="text-center mt-8">
          <p className="text-lg ">
            Hoặc liên hệ trực tiếp qua email:{" "}
            <a
              href="mailto:contact@vuiwork.com"
              className="text-blue-500 hover:underline"
            >
              contact@vuiwork.com
            </a>
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
