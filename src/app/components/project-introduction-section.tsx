import Image from "next/image";

// Project Introduction Section Component
export default function ProjectIntroductionSection() {
  return (
    <div className="bg-blue-50 rounded-xl p-8 mb-12 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">
        Giới thiệu <span className="text-blue-500">Đồ án</span>
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left column with project details */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-bold text-xl mb-4 text-blue-600">
            Mục đích dự án
          </h3>
          <p className="text-gray-600 mb-4">
                Trong thời đại chuyển đổi số, học tập trực tuyến đang trở thành
            xu hướng tất yếu, mang đến cơ hội học tập linh hoạt mọi lúc, mọi
            nơi. Các nền tảng MOOC như Coursera, edX, XuetangX,… phát triển mạnh
            mẽ, kéo theo sự gia tăng về số lượng khóa học và người dùng.
            <br></br>
                Tuy nhiên, chính sự đa dạng này dễ dẫn đến &ldquo;quá tải thông
            tin&rdquo;, khiến người học khó lựa chọn khóa học phù hợp với năng
            lực và mục tiêu cá nhân.<br></br>
                Hệ thống khuyến nghị được xem là giải pháp hiệu quả, giúp cá
            nhân hóa nội dung học tập dựa trên hành vi và hồ sơ người học. Trong
            giáo dục, hệ thống này không chỉ nâng cao trải nghiệm mà còn cải
            thiện tỷ lệ hoàn thành và hiệu quả học tập tổng thể.
          </p>

          <h3 className="font-bold text-lg mb-2 text-blue-600">
            Các tính năng chính
          </h3>
          <ul className="space-y-2 mb-4">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-gray-600">
                Xem khuyến nghị khóa học của học viên{" "}
              </span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-gray-600">Xem biểu đồ của BI.</span>
            </li>
          </ul>
        </div>

        {/* Right column with project goals */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-bold text-xl mb-4 text-blue-600">Ứng dụng</h3>
          <p className="text-gray-600 mb-4">
            Hệ thống khuyến nghị khóa học được xây dựng trong khuôn khổ đề tài
            này có tiềm năng ứng dụng rộng rãi trong nhiều bối cảnh giáo dục
            khác nhau, đặc biệt là trong môi trường học tập trực tuyến và các hệ
            thống đào tạo số. Các ứng dụng cụ thể bao gồm:
          </p>

          <div className="mt-4">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mr-3">
                  01
                </div>
                <div>
                  <p className="text-gray-500 text-sm">
                    Tích hợp vào nền tảng học tập trực tuyến (LMS và MOOCs)
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mr-3">
                  02
                </div>
                <div>
                  <p className="text-gray-500 text-sm">
                    Cá nhân hóa lộ trình học tập
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mr-3">
                  03
                </div>
                <div>
                  <p className="text-gray-500 text-sm">
                    Hỗ trợ cố vấn học tập và quản lý đào tạo
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mr-3">
                  04
                </div>
                <div>
                  <p className="text-gray-500 text-sm">
                    Phân tích hành vi và cải thiện thiết kế khóa học
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section with course recommendation emphasis */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/4">
            <h3 className="font-bold text-xl mb-2 text-gray-700">
              Hệ thống{" "}
              <span className="bg-blue-500 text-white px-2 py-1 rounded">
                Khuyến nghị
              </span>{" "}
              khóa học
            </h3>

            {/* each sections */}
            <div>
              <h4 className="text-black font-bold">Ý tưởng</h4>
              <p className="text-gray-600">
                    Ý tưởng chính của nhóm là khuyến nghị các nguồn tài nguyên
                học tập (khóa học) cho người dùng. Chúng tôi định nghĩa nhiệm vụ
                này là khuyến nghị các khóa học tiếp theo cho học viên dựa trên
                chuỗi các khóa học lịch sử của học viên. Nhiệm vụ này không chỉ
                yêu cầu mô hình hóa hành vi của học viên một cách tốt nhất mà
                còn cần xem xét vai trò của kiến thức được kèm theo trong các
                khóa học, cấu trúc của các khóa học,...
              </p>
            </div>

            <div className="my-3">
              <h4 className="text-black font-bold">Tính cấp thiết</h4>
              <p className="text-gray-600">
                    Với sự phát triển mạnh mẽ của các nền tảng học trực tuyến,
                việc xây dựng hệ thống khuyến nghị khóa học hiệu quả dựa trên dữ
                liệu lớn trở nên cần thiết. Người học phải chủ động lựa chọn
                giữa hàng loạt môn học thuộc nhiều nhóm ngành, trong khi nền
                tảng thường không ràng buộc về thời gian hay điểm số.
                <br></br>    Điều này dễ dẫn đến việc bỏ dở hoặc không hoàn
                thành khóa học. Do đó, hệ thống khuyến nghị của chúng tôi được
                phát triển từ dữ liệu thu thập từ các nền tảng trực tuyến, nhằm
                cá nhân hóa gợi ý học tập theo sở thích, kỹ năng và tiến trình
                của từng người học, giúp nâng cao hiệu quả và đạt được mục tiêu
                học tập tốt hơn.
              </p>
            </div>

            <div className="my-3">
              <h4 className="text-black font-bold">Tính mới</h4>
              <p className="text-gray-600">
                    Dựa trên tiềm năng của mô hình KGAT trong thương mại điện
                tử, nhóm đã ứng dụng thành công vào lĩnh vực giáo dục để xây
                dựng hệ thống khuyến nghị khóa học hiệu quả.<br></br>     Nhóm
                cũng cải tiến hệ thống bằng cách bổ sung thông tin quan hệ như
                Người dùng–Video, Khóa học–Giảng viên, và so sánh với các phương
                pháp khác như FM, NFM, BPR, Content-based filtering để đánh giá
                hiệu suất.<br></br>     Quy trình được triển khai trên nền tảng
                dữ liệu lớn MS Azure, cùng với việc phát triển web service thân
                thiện nhằm thể hiện tính ứng dụng thực tế của mô hình.
              </p>
            </div>
          </div>
          <div className="md:w-1/4 flex justify-center mt-6 md:mt-0">
            <Image
              src="/e_learning_visual.png"
              alt="Student learning online"
              width={250}
              height={12}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
