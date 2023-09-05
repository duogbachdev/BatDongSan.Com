import React, { useState } from "react";
import Header from "../../components/web/header/Header";
import SearchBar from "../../components/web/main/trangtru/SearchBar";
import HotNew from "../../components/web/main/trangtru/HotNew";
import ProductForYou from "../../components/web/main/trangtru/ProductForYou";
import ProductHot from "../../components/web/main/trangtru/ProductHot";
import ProductLocation from "../../components/web/main/trangtru/ProductLocation";
import ProductNew from "../../components/web/main/trangtru/ProductNew";
import Support from "../../components/web/main/trangtru/Support";
import { EnterpriseIcon } from "../../components/web/main/trangtru/EnterpriseIcon";
import Article from "../../components/web/main/trangtru/Article";
import ProductTypes from "../../components/web/main/trangtru/ProductTypes";
import Footer from "../../components/web/footer/Footer";
import { MdOutlineHomeWork } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { SiHomebridge } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { BiBook, BiSolidUserAccount } from "react-icons/bi";
import { GrLineChart } from "react-icons/gr";

const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [isHovered7, setIsHovered7] = useState(false);
  return (
    <div className="font-Lexend relative">
      <>
        <Header />
      </>
      <div className="right-0 top-0 w-80 bg-[#F2F2F2] h-screen  absolute">
        <div className="bg-white  py-5 px-5">
          <div className="flex items-center justify-center gap-[13px] mb-5">
            <button className="bg-white px-6 py-3 rounded-md cursor-pointer border">
              Đăng nhập
            </button>
            <button className="bg-[#E03C31] text-white px-8 py-3 rounded-md cursor-pointer border">
              Đăng ký
            </button>
          </div>

          <div className="flex items-center justify-center">
            <button className="bg-white px-4 py-3 rounded-md cursor-pointer border w-full">
              Đăng tin
            </button>
          </div>
        </div>

        <div className="bg-white  py-5 px-5">
          <div className="flex items-start justify-between mb-5 cursor-pointer">
            <div className="flex gap-5 ">
              <p className="text-xl">
                <MdOutlineHomeWork />
              </p>
              <p onClick={() => setIsHovered(true)}>Nhà đất bán</p>
            </div>
            <p className="text-lg">
              <BsChevronDown />
            </p>
          </div>
          <ul className={`pl-7 flex flex-col mb-5 ${isHovered ? "hidden" : "block "}`}>
            <li className=" cursor-pointer hover:bg-slate-200 py-3 px-3 rounded-md">
              Bán căn hộ chung cư
            </li>
            <li className=" cursor-pointer hover:bg-slate-200 py-3 px-3 rounded-md">
              Bán nhà riêng
            </li>
            <li className=" cursor-pointer hover:bg-slate-200 py-3 px-3 rounded-md">
              Bán nhà biệt thự, liền kề
            </li>
            <li className=" cursor-pointer hover:bg-slate-200 py-3 px-3 rounded-md">
              Bán nhà mặt phố
            </li>
            <li className=" cursor-pointer hover:bg-slate-200 py-3 px-3 rounded-md">
              Bán shophouse, nhà phố thương mại
            </li>
            <li className=" cursor-pointer hover:bg-slate-200 py-3 px-3 rounded-md">
              Bán đất nền dự án
            </li>
            <li className=" cursor-pointer hover:bg-slate-200 py-3 px-3 rounded-md">Bán đất</li>
            <li className=" cursor-pointer hover:bg-slate-200 py-3 px-3 rounded-md">
              Bán trang trại, khu nghỉ dưỡng
            </li>
            <li className=" cursor-pointer hover:bg-slate-200 py-3 px-3 rounded-md">
              Bán condotel
            </li>
            <li className=" cursor-pointer hover:bg-slate-200 py-3 px-3 rounded-md">
              Bán kho, nhà xưởng
            </li>
            <li className=" cursor-pointer hover:bg-slate-200 py-3 px-3 rounded-md">
              Bán loại bất động sản khác
            </li>
          </ul>
          <div className="flex items-start justify-between mb-5 cursor-pointer">
            <div className="flex gap-5 ">
              <p className="text-xl">
                <HiOutlineHomeModern />
              </p>
              <p>Nhà đất cho thuê</p>
            </div>
            <p className="text-lg">
              <BsChevronDown />
            </p>
          </div>
          <div className="flex items-start justify-between mb-5 cursor-pointer">
            <div className="flex gap-5 ">
              <p className="text-xl">
                <SiHomebridge />
              </p>
              <p>Dự án</p>
            </div>
            <p className="text-lg">
              <BsChevronDown />
            </p>
          </div>
          <div className="flex items-start justify-between mb-5 cursor-pointer">
            <div className="flex gap-5 ">
              <p className="text-xl">
                <FaRegNewspaper />
              </p>
              <p>Tin tức</p>
            </div>
          </div>
          <div className="flex items-start justify-between mb-5 cursor-pointer">
            <div className="flex gap-5 ">
              <p className="text-xl">
                <BiBook />
              </p>
              <p>Wiki BĐS</p>
            </div>
            <p className="text-lg">
              <BsChevronDown />
            </p>
          </div>
          <div className="flex items-start justify-between mb-5 cursor-pointer">
            <div className="flex gap-5 ">
              <p className="text-xl">
                <GrLineChart />
              </p>
              <p>Phân tích đánh giá</p>
            </div>
            <p className="text-lg">
              <BsChevronDown />
            </p>
          </div>
          <div className="flex items-start justify-between mb-5 cursor-pointer">
            <div className="flex gap-5 ">
              <p className="text-xl">
                <BiSolidUserAccount />
              </p>
              <p>Danh bạ</p>
            </div>
            <p className="text-lg">
              <BsChevronDown />
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div>
          <SearchBar />
        </div>
        <div>
          <HotNew />
        </div>
        <div>
          <ProductForYou />
        </div>
        <div>
          <ProductHot />
        </div>
        <div>
          <ProductLocation />
        </div>
        <div>
          <ProductNew />
        </div>
        <div>
          <Support />
        </div>
        <div>
          <EnterpriseIcon />
        </div>
        <div>
          <Article />
        </div>
        <div>
          <ProductTypes />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
