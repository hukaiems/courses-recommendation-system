import { FaFacebook } from "react-icons/fa";
import Image from "next/image";

// Team component to showcase team members
function TeamSection() {
  // Team members data
  const teamMembers = [
    {
      name: "Lưu Đoàn Ngọc Phát",
      role: "Trưởng nhóm",
      description: "Lãnh đạo quyết đoán, luôn dẫn dắt cả nhóm tiến lên.",
      image: "/thanh_vien/ngoc_phat.jpg",
      facebook: "https://www.facebook.com/luudoanngocphat",
    },
    {
      name: "Huỳnh Chí Nhân",
      role: "Thành viên",
      description: "Hài hước, lạc quan và luôn tạo tiếng cười cho nhóm.",
      image: "/thanh_vien/nhan_huynh.jpg",
      facebook: "https://www.facebook.com/profile.php?id=100008866595085",
    },
    {
      name: "Lê Cao Nguyên",
      role: "Thành viên",
      description: "Thông minh, nhanh nhẹn, giải quyết vấn đề cực tốt.",
      image: "/thanh_vien/cao_nguyen.jpg",
      facebook: "https://www.facebook.com/hu.ki.915898/",
    },
    {
      name: "Huỳnh Danh Đạt",
      role: "Thành viên",
      description: "Thực tế, chăm chỉ và luôn hướng đến hiệu quả.",
      image: "/thanh_vien/huynh_dat.jpg",
       facebook: "https://www.facebook.com/h.ddat2609",
    },
    {
      name: "Nguyễn Thanh Trường",
      role: "Thành viên",
      description: "Ân cần, kiên nhẫn và luôn hỗ trợ mọi người thầm lặng.",
      image: "/thanh_vien/thanh_truong.jpg",
      facebook: "https://www.facebook.com/thtruong0410",
    },
    {
      name: "Trần Thành Nhân",
      role: "Thành viên",
      description: "Tự tin, linh hoạt và không ngại thử thách mới.",
      image: "/thanh_vien/nhan_tran.jpg",
      facebook: "https://www.facebook.com/nhan.tran.601251",
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-8 mx-auto max-w-6xl shadow-lg">
      {/* Header Section */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-4 text-black">Đây là nhóm 1!</h2>
        <p className="text-gray-600 mb-6 max-w-2xl">Nhóm gồm 6 thành viên. </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Profile Image */}
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
              <Image
                src={member.image}
                alt={member.name}
                width={500} // or any default width
                height={500} // or any default height
                className="w-full h-full object-cover"
              />
            </div>

            {/* Member Info */}
            <h3 className="font-bold text-lg mb-1 text-black">{member.name}</h3>
            <p className="text-blue-600 text-sm mb-2">{member.role}</p>
            <p className="text-gray-600 text-center text-sm mb-3">
              {member.description}
            </p>

            {/* Social Links */}
            <div className="flex space-x-2">
              <a href={member.facebook} className="text-gray-400 hover:text-gray-600">
                <FaFacebook size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamSection;
