import React, { useState } from "react";
import logo from "../../../assets/img/logo.svg";
import { BsHeart } from "react-icons/bs";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  return (
    <div className="flex items-center justify-between px-[15px] py-[17px]  shadow-md text-sm mb-8">
      <div className="flex items-center gap-8">
        <img className="h-[48px]" src={logo} alt="" />

        <ul className="flex items-center gap-5 relative">
          <div>
            <li
              className=" cursor-pointer ct-top-menu-item"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Nhà đất bán
            </li>
            <ul
              className={`absolute top-10 bg-[#FFFFFF] shadow-md rounded-md py-3 px-3 leading-7 font-Roboto ${
                isHovered ? "" : "hidden"
              }`}
            >
              <li>Bán căn hộ chung cư</li>
              <li>Bán nhà riêng</li>
              <li>Bán nhà biệt thự, liền kề</li>
              <li>Bán nhà mặt phố</li>
              <li>Bán shophouse, nhà phố thương mại</li>
              <li>Bán đất nền dự án</li>
              <li>Bán đất</li>
              <li>Bán trang trại, khu nghỉ dưỡng</li>
              <li>Bán condotel</li>
              <li>Bán kho, nhà xưởng</li>
              <li>Bán loại bất động sản khác</li>
            </ul>
          </div>

          <div>
            <li
              className=" cursor-pointer ct-top-menu-item"
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
            >
              Nhà đất cho thuê
            </li>
            <ul
              className={`absolute top-10 bg-[#FFFFFF] shadow-md rounded-md py-3 px-3 leading-7 font-Roboto ${
                isHovered2 ? "" : "hidden"
              }`}
            >
              <li>Cho thuê căn hộ chung cư</li>
              <li>Cho thuê nhà riêng</li>
              <li>Cho thuê nhà biệt thự, liền kề</li>
              <li>Cho thuê nhà mặt phố</li>
              <li>Cho thuê shophouse, nhà phố thương mại</li>
              <li>Cho thuê nhà trọ, phòng trọ</li>
              <li>Cho thuê văn phòng</li>
              <li>Cho thuê, sang nhượng cửa hàng, ki ốt</li>
              <li>Cho thuê kho, nhà xưởng, đất</li>
              <li>Cho thuê loại bất động sản khác</li>
            </ul>
          </div>
          <div>
            <li
              className=" cursor-pointer ct-top-menu-item"
              onMouseEnter={() => setIsHovered3(true)}
              onMouseLeave={() => setIsHovered3(false)}
            >
              Dự án
            </li>
            <ul
              className={`absolute top-10 bg-[#FFFFFF] shadow-md rounded-md py-3 px-3 leading-7 font-Roboto ${
                isHovered3 ? "" : "hidden"
              }`}
            >
              <li>Căn hộ chung cư</li>
              <li>Cao ốc văn phòng</li>
              <li>Trung tâm thương mại</li>
              <li>Khu đô thị mới</li>
              <li>Khu phức hợp</li>
              <li>Nhà ở xã hội</li>
              <li>Khu nghỉ dưỡng, Sinh thái</li>
              <li>Khu công nghiệp</li>
              <li>Biệt thự, liền kề</li>
              <li>Shophouse</li>
              <li>Nhà mặt phố</li>
              <li>Dự án khác</li>
            </ul>
          </div>
          <li className=" cursor-pointer ct-top-menu-item">Tin tức</li>
          <div>
            <li
              className=" cursor-pointer ct-top-menu-item"
              onMouseEnter={() => setIsHovered4(true)}
              onMouseLeave={() => setIsHovered4(false)}
            >
              Wiki BĐS
            </li>
            <ul
              className={`absolute top-10 bg-[#FFFFFF] shadow-md rounded-md py-3 px-3 leading-7 font-Roboto ${
                isHovered4 ? "" : "hidden"
              }`}
            >
              <li>Mua BĐS</li>
              <li>Bán BĐS</li>
              <li>Thuê BĐS</li>
              <li>Tài chính BĐS</li>
              <li>Quy hoạch - Pháp lý</li>
              <li>Nội - Ngoại thất</li>
              <li>Phong thủy</li>
            </ul>
          </div>
          <div>
            <li
              className=" cursor-pointer ct-top-menu-item"
              onMouseEnter={() => setIsHovered5(true)}
              onMouseLeave={() => setIsHovered5(false)}
            >
              Phân tích đánh giá
            </li>
            <ul
              className={`absolute top-10 bg-[#FFFFFF] shadow-md rounded-md py-3 px-3 leading-7 font-Roboto ${
                isHovered5 ? "" : "hidden"
              }`}
            >
              <li>Biểu đồ giá</li>
              <li>Video đánh giá</li>
              <li>Báo cáo thị trường</li>
              <li>Góc nhìn chuyên gia</li>
              <li>Interkative Story</li>
            </ul>
          </div>
          <div>
            <li
              className=" cursor-pointer ct-top-menu-item"
              onMouseEnter={() => setIsHovered6(true)}
              onMouseLeave={() => setIsHovered6(false)}
            >
              Danh bạ
            </li>
            <ul
              className={`absolute w-[200px] top-10 bg-[#FFFFFF] shadow-md rounded-md py-3 px-3 leading-7 font-Roboto ${
                isHovered6 ? "" : "hidden"
              }`}
            >
              <li>Nhà môi giới</li>
              <li>Doanh nghiệp</li>
            </ul>
          </div>
        </ul>
      </div>

      <div className="flex items-center gap-3">
        <p className=" cursor-pointer text-2xl px-3 py-3 hover:bg-[#e9e7e76b] rounded-md">
          <BsHeart />
        </p>
        <p className=" cursor-pointer px-3 py-3 hover:bg-[#e9e7e76b] rounded-md shadow-md-r">
          Đăng nhập
        </p>
        <p className=" cursor-pointer px-3 py-3 hover:bg-[#e9e7e76b] rounded-md">Đăng ký</p>
        <p className=" cursor-pointer shadow-md px-3 py-3 hover:bg-[#e9e7e76b] rounded-md">Đăng tin</p>
      </div>
    </div>
  );
};

export default Header;
