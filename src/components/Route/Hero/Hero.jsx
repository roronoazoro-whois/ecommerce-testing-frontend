import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-3.jpg)",
      }}
    > 
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Shop bán giá rẻ!!! <br /> Ưu đãi dành cho sinh viên
        </h1>
        <p className="pt-5 text-[16px]  font-[400] capitalize text-[#000000ba]">
          Tại đây bạn có thể mua sắm với giá cả rẻ hơn các nơi khác. <br /> Đối tượng chúng tôi muốn hướng đến là người tiêu dùng có thu nhập không cao{" "}
          <br /> Chúc các bạn mua sắm vui vẻ!!!
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Shop Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
