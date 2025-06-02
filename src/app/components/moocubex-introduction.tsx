import React from "react";

export default function MoocubexIntroduction() {
    return (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-xl mb-2 text-gray-700">
                Giới thiệu bộ dữ liệu{" "}
                <span className="bg-blue-500 text-white px-2 py-1 rounded">
                    MOOCCubeX
                </span>
            </h3>
            <p className="text-gray-600 text-base">
                Bộ dữ liệu MOOCCubeX là một kho dữ liệu quy mô lớn được phát triển bởi Nhóm Kỹ thuật Tri thức (Knowledge Engineering Group) 
                của Đại học Thanh Hoa (Tsinghua University), với sự hỗ trợ từ nền tảng học trực tuyến XuetangX — một trong những nền 
                tảng MOOC lớn nhất tại Trung Quốc. Mục tiêu của MOOCCubeX là hỗ trợ nghiên cứu về học tập thích ứng, phân tích học tập 
                và khám phá tri thức trong môi trường học trực tuyến đại chúng (MOOC).
            </p>
            <div className="mt-6 flex flex-col md:flex-row gap-6">
                {/* Left Section */}
                <div className="flex-1 bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-700 mb-2">🧠 Thành phần dữ liệu chính</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>
                            <span className="font-medium">Tài nguyên khóa học:</span> Thông tin về khóa học, video, bài tập, giáo viên và trường học.
                        </li>
                        <li>
                            <span className="font-medium">Dữ liệu hành vi người học:</span> Bao gồm thông tin về việc xem video, làm bài tập, bình luận và tương tác với trợ lý ảo.
                        </li>
                        <li>
                            <span className="font-medium">Đồ thị khái niệm:</span> Tập hợp các khái niệm học thuật được trích xuất từ phụ đề video và các nguồn bên ngoài như Wikipedia, cùng với mối quan hệ tiên quyết giữa các khái niệm trong các lĩnh vực như Toán học, Tâm lý học và Khoa học Máy tính.
                        </li>
                    </ul>
                </div>
                {/* Right Section */}
                <div className="flex-1 bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-700 mb-2">📊 Input và Output của bài toán hệ thống khuyến nghị khóa học</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>
                            <span className="font-medium">Input:</span> Nguồn dữ liệu lớn trong các nền tảng học tập trực tuyến: Thông tin người học, thông tin khóa học, hoạt động học tập của người dùng. Các file sử dụng: <u>user.json</u>, <u>course.json</u>, <u>teacher.json</u>
                        </li>
                        <li>
                            <span className="font-medium">Output:</span> Đề xuất top k (<u>k ∈ N*, k = 5 trong đồ án này</u>) các khóa học phù hợp nhất với người dùng.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}