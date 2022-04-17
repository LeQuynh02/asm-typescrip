import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ProductType } from "../types/product";

type ProductListProps = {
  products: ProductType[];
}
const Home = ({ products }: ProductListProps) => {
  return (
    <div>
      <div className="flex">
        <div className="banner bg-[white]  scroll-mb-[10px]">
          <img id="anh" src="https://cotrangquan.com/wp-content/uploads/2019/07/banner-2.jpg" width="100%" /><br />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 overflow-hidden relative  my-[20px]">
        <div className="grid grid-cols-2 border-solid border-2 border-[#ec5959] rounded-lg px-[30px] py-[10px]">
          <div>
            <img src="https://rafcart.rslahmed.com/assets/images/svg/delivery-van.svg" className="m-auto" />
          </div>
          <div>
            <h2 className="font-bold text-[20px]">Free shipping</h2>
            <p className="text-xs">Orders over $200</p>
          </div>
        </div>
        <div className="grid grid-cols-2 border-solid border-2 border-[#ec5959] rounded-lg px-[30px] py-[10px]">
          <div>
            <img src="https://rafcart.rslahmed.com/assets/images/svg/money-back.svg" className="m-auto" />
          </div>
          <div>
            <h2 className="font-bold font-bold text-[20px]">Money Returns</h2>
            <p className="text-xs">30 Days money return</p>
          </div>
        </div>
        <div className="grid grid-cols-2 border-solid border-2 border-[#ec5959] rounded-lg px-[30px] py-[10px]">
          <div>
            <img src="https://rafcart.rslahmed.com/assets/images/svg/service-hours.svg" className="m-auto" />
          </div>
          <div>
            <h2 className="font-bold text-[20px]">24/7 Support</h2>
            <p className="text-xs">Customer support</p>
          </div>
        </div>
      </div>
      <div>
        <div className="banner2 my-[30px]">
          <img src="http://bbcosplay.com/templates/main/images/bbcosplay_anhbia_hanphuc.jpg" width="100%" />
        </div>
      </div>
      <div className="conten my-[20px]">
        <h1 className="font-bold text-[20px] py-[20px]">SẢN PHẨM MỚI</h1>
        <div className="product grid grid-cols-4 gap-5 ">
          {products?.map((product, index) => {
            console.log(product)
            return (
              <form action="">
                <div className=" border-solid border-2 border-[#f3f3f3] rounded-lg  ">
                  <div className=" w-[100%] ">
                    <NavLink to={`/product/${product._id}`}> <img src={product.img} /></NavLink>
                  </div>
                  <div className="py-[10px] px-[10px] leading-8">
                    <NavLink to={`/product/${product._id}`} className="no-underline">
                      <h4 className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">{product.name}</h4>
                    </NavLink>
                    <p className="text-l text-[red] no-underline">${product.price}</p>

                  </div>
                  <div className="conten-item text-center pb-[10px]">
                    <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[green] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Thêm vào giỏ</button>
                  </div>
                </div>
              </form>

            )
          })}

        </div>
      </div>
    </div>






  );
};

export default Home;
