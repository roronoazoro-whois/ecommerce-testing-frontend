import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "../../static/data";

const Footer = () => {
  return (
    <div className="bg-[#000] text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#0f8ba1] py-7">
        <h3 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-[#56d879]">Nhóm 11</span> Công nghệ phần mềm{" "}
          <br />
          Thầy Hoàng Công Trình
        </h3>
        
        <ul className="text-center sm:text-start flex sm:block flex-col items-start ml-4">
          <img
            src="https://shopo.quomodothemes.website/assets/images/logo.svg"
            alt=""
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <br />
          <p>Đây là sản phẩm của nhóm 11</p>
          <div className="flex items-center mt-[15px]">
            <a href="https://www.facebook.com/DucDuyLe08102003">
              <AiFillFacebook size={25} className="cursor-pointer" />
            </a>
            <a href="https://www.facebook.com/DucDuyLe08102003">
              <AiOutlineTwitter
                size={25}
                style={{ marginLeft: "15px", cursor: "pointer" }}
              />
            </a>
            <a href="https://www.instagram.com/leeduckzii/">
              <AiFillInstagram
                size={25}
                style={{ marginLeft: "15px", cursor: "pointer" }}
              />
            </a>
            <a href="https://www.youtube.com/@duy2658">
              <AiFillYoutube
                size={25}
                style={{ marginLeft: "15px", cursor: "pointer" }}
              />
            </a>
          </div>
        </ul>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">


        {/* Sinh viên 1 */}
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Sinh viên 1</h1>
          <li className="text-gray-400 text-sm leading-6">Tên: Lê Đức Duy</li>
          <li className="text-gray-400 text-sm leading-6">Ngày sinh: 08/10/2003</li>
          <li className="text-gray-400 text-sm leading-6">Mã sinh viên: 21110821</li>
          <li className="text-gray-400 text-sm leading-6">Số điện thoại: 0879880576</li>
          <li className="text-gray-400 text-sm leading-6">Email: 21110821@student.hcmute.edu.vn</li>
        </ul>

        {/* Sinh viên 2 */}
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Sinh viên 2</h1>
          <li className="text-gray-400 text-sm leading-6">Tên: Bành Viết Hùng</li>
          <li className="text-gray-400 text-sm leading-6">Ngày sinh: 20/01/2002</li>
          <li className="text-gray-400 text-sm leading-6">Mã sinh viên: 21110193</li>
          <li className="text-gray-400 text-sm leading-6">Số điện thoại: 0879880576</li>
          <li className="text-gray-400 text-sm leading-6">Email: 21110193@student.hcmute.edu.vn</li>
        </ul>

        {/* Sinh viên 3 */}
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Sinh viên 3</h1>
          <li className="text-gray-400 text-sm leading-6">Tên: Đào Duy Phát</li>
          <li className="text-gray-400 text-sm leading-6">Ngày sinh: 15/07/2001</li>
          <li className="text-gray-400 text-sm leading-6">Mã sinh viên: 21110270</li>
          <li className="text-gray-400 text-sm leading-6">Số điện thoại: 0879880576</li>
          <li className="text-gray-400 text-sm leading-6">Email: 21110270@student.hcmute.edu.vn</li>
        </ul>

        {/* Sinh viên 4 */}
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Sinh viên 4</h1>
          <li className="text-gray-400 text-sm leading-6">Tên: Trần Thị Á Tiên</li>
          <li className="text-gray-400 text-sm leading-6">Ngày sinh: 05/11/2003</li>
          <li className="text-gray-400 text-sm leading-6">Mã sinh viên: 21110318</li>
          <li className="text-gray-400 text-sm leading-6">Số điện thoại: 0879880576</li>
          <li className="text-gray-400 text-sm leading-6">Email: 21110318@student.hcmute.edu.vn</li>
        </ul>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
         text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2024 Group 11. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className="sm:block flex items-center justify-center w-full">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
