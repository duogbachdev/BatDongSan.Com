import React from "react";
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

const HomePage = () => {
  return (
    <div className=" font-Lexend">
      <>
        <Header />
      </>
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
