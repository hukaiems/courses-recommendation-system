import { Lightbulb } from "lucide-react";
import Image from "next/image";

// Enhanced Hero Section Component
export default function EnhancedHeroSection() {
  return (
    <div className="flex items-center justify-center w-full py-12">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl overflow-hidden shadow-lg">
        {/* Left content area */}
        <div className="w-full md:w-3/5 p-8 md:p-12">
          <div className="flex items-center mb-4">
            <div className="h-8 w-1 bg-blue-500 rounded-full mr-3"></div>
            <h2 className="text-blue-600 font-bold">CS313 • Đồ án môn học</h2>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            <span className="text-blue-500">Nhóm 1</span>
            <br />
            Đồ án
            <span className="inline-block bg-blue-600 text-white px-3 py-1 ml-2 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              Khuyến nghị
            </span>
            <br />
            khóa học
          </h1>

          <p className="text-gray-600 mb-8 text-lg max-w-lg">
            Đây là website của đồ án môn CS313 của nhóm 1. Website sẽ bao gồm
            giới thiệu, các bài tập đã thực hiện và hệ thống khuyến nghị thông
            minh.
          </p>

        </div>

        {/* Right illustration area */}
        <div className="w-full h-1/2 md:w-2/5 p-6 flex items-center justify-center relative bg-white">
          <div className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-5 md:skew-x-6 transform origin-top-right"></div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-48 h-48 md:w-64 md:h-64 relative mb-4">
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-blue-100 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-200 rounded-full z-0"></div>

              <div className="relative z-10 w-full h-full mt-5 flex items-center justify-center">
                <Image
                  src="/logo_khaithac.svg"
                  alt="E-Learning Illustration"
                  width={220}
                  height={100}
                  className="rounded-xl shadow-lg border-black"
                />
              </div>
            </div>

            <div className="flex items-center mt-12 bg-blue-50 p-3 rounded-lg border border-blue-100 shadow-sm">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <Lightbulb size={24} className="text-yellow-500" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">E-LEARNING</h3>
                <p className="text-sm text-gray-600">
                  Hệ thống khuyến nghị thông minh
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
