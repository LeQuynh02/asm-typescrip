import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { read } from '../../../../api/product';
import { ProductType } from '../../../../types/product'

type ProductDetailPageProps = {

};


const ProductDetail = (props: ProductDetailPageProps) => {
  const { id } = useParams();

  const [product, setProduct] = useState<ProductType>();

  useEffect(() => {
      const getProduct = async () => {
        const { data } = await read(id);
        setProduct(data)
      };
      getProduct();
  }, [])
  return (
    <div className="mx-auto w-[1200px] my-10">
  <div className="grid grid-cols-2 mb-3">
    <h2 className="font-bold text-xl ">{product?.name}</h2>
    <div className="mt-2 flex justify-end">
      <a href="" className="mt-1">
        <ul className="flex ">
          <li>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
              </path>
            </svg>
          </li>
          <li>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
              </path>
            </svg>
          </li>
          <li>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
              </path>
            </svg>
          </li>
          <li>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
              </path>
            </svg>
          </li>
          <li>
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z">
              </path>
            </svg>
          </li>
        </ul>
      </a>
      <a href="" className="ml-2 text-sky-600 hover:underline relative hover:font-semibold no-underline">13 đánh giá</a>
      <a href="" className="ml-1 text-sky-600 hover:underline relative hover:font-semibold no-underline">| 4110 Hỏi &amp;
        đáp</a>
    </div>
  </div>
  <hr />
  <div className="grid grid-cols-2 mt-7">
    <div className="mr-3">
      <div className="border-[1px]">
        <a href="">
          <img src={product?.img} />
        </a>
      </div>
      <div className="flex flex-row justify-center">
        <a href="" className="mt-3 text-center hover:font-bold no-underline">
          <img className="phone-color" src="https://vn-live-03.slatic.net/p/baa684a6f98b465db56c190e801ee2b7.jpg" />
          <p className="ml-3 no-underline">Mẫu 2</p>
        </a>
        <a href="" className="mt-3 text-center hover:font-bold ml-3 no-underline">
          <img className="phone-color" src="https://cf.shopee.vn/file/c87554da7b0516ff071f1b18d3613643" />
          <p className="ml-3 no-underline">Mẫu 3</p>
        </a>
        <a href="" className="mt-3 text-center hover:font-bold ml-3 no-underline">
          <img className="phone-color" src="https://cf.shopee.vn/file/614c2b05eb0edd8a9c0d6adee9725562" />
          <p className="ml-3 no-underline">Mẫu 4</p>
        </a>
        <a href="" className="mt-3 text-center hover:font-bold ml-3 no-underline">
          <img className="phone-color" src="https://cf.shopee.vn/file/a07eac9fb301563b213e18a01af14221" />
          <p className="ml-3 no-underline">Mẫu 5</p>
        </a>
      </div>
      <div className="flex mt-3 justify-center">
        <div className="flex mr-2">
          <i className="fas fa-award text-red-700  mr-2" />
          <p className="text-sm">Hàng chính hãng - bảo hành 12 Tháng</p>
        </div>
        <div className="flex">
          <i className="fas fa-shipping-fast text-red-700  mr-2" />
          <p className="text-sm">Giao hàng toàn quốc</p>
        </div>
      </div>
    </div>
    <div className="detail">
      <div className="detail">
        <div className="flex ">
          <span className="text-red-700 font-semibold text-2xl mr-5 mt-2">${product?.price}</span>
        </div>
        <div className="mt-2 bg-slate-100 grid grid-cols-4 rounded-md">
          <label className="radio">
            <input type="radio" className="form-radio" name="GB" defaultValue="" />
            <span className="ml-1 font-bold">Mẫu 2</span>
            <span className="block">2.000.000VND</span>
          </label>
          <label className="radio">
            <input type="radio" className="form-radio" name="GB" defaultValue="" />
            <span className="ml-1 font-bold">Mẫu 3</span>
            <span className="block">2.000.000VND</span>
          </label>
          <label className="radio">
            <input type="radio" className="form-radio" name="GB" defaultValue="" />
            <span className="ml-1 font-bold">Mẫu 4</span>
            <span className="block">2.000.000VND</span>
          </label>
          <label className="radio">
            <input type="radio" className="form-radio" name="GB" defaultValue="" />
            <span className="ml-1 font-bold">Mẫu 5</span>
            <span className="block">2.000.000VND</span>
          </label>
        </div>
        <div className="box-Promo">
          <div className="endow py-[20px]">
            <span className="bg-[#e9ecef] px-3 font-bold">Ưu đãi thêm</span>
          </div>
          <ul className="content-promo">
            <li className="inline-flex">
              <i className="fas fa-check-circle text-green-500 mt-1 mr-2" />
              <div>
                <span>
                  Tặng cài tóc bạc giá trị 500.000VND
                </span>
                <a href="" className="text-blue-600 hover:underline no-underline px-[10px]">Xem chi tiết</a>
              </div>
            </li>
            <li className="inline-flex">
              <i className="fas fa-check-circle text-green-500 mt-1 mr-2" />
              <div>
                <span>
                  Giảm sốc 20% cho gói bảo hành trang phục
                </span>
                <a href="" className="text-blue-600 hover:underline no-underline px-[10px]">Xem chi tiết</a>
              </div>
            </li>
            <li className="inline-flex">
              <i className="fas fa-check-circle text-green-500 mt-1 mr-2" />
              <div>
                <span>
                  Cho thuê hán phục theo giờ
                </span>
                <a href="" className="text-blue-600 hover:underline no-underline px-[10px]">Xem chi tiết</a>
              </div>
            </li>
          </ul>
        </div>
        <div className="btn-buy ">
          <button className="w-full bg-red-700 mt-3 rounded-md text-white hover:bg-red-800" id="btnAddToCart">
            <div className="py-[10px]">
              <strong>MUA NGAY</strong>
              <p className="text-sm">Giao hàng miễn phí hoặc nhận tại shop</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="">
    <h1 className="uppercase text-[16px] font-bold border-b-[1px] mt-2 pl-1"> Thông tin chi tiết sản phẩm </h1>
    <p className="text-[14px] leading-[1.8] mb-3"> {product?.desc}
    </p>
  </div>
  <div className="conten my-[20px]">
    <h1 className="font-bold text-[20px] py-[20px]">New Arrivals</h1>
    <div className="product grid grid-cols-4 gap-5 ">
      <form action="">
        <div className=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg  ">
          <div className=" w-[100%] ">
            <a href="#"> <img src="https://cf.shopee.vn/file/7448bbebb8f781cd027bb72fd02f7012" alt="" /></a>
          </div>
          <div className="py-[10px] px-[10px] leading-8">
            <a href="#" className='no-underline'>
              <h4 className="font-bold hover:underline no-underline">Hán phục</h4>
            </a>
            <p className="text-[15px] text-[red]">2.000.000VND</p>
          </div>
          <div className="conten-item text-center pb-[10px]">
            <button className="inline-flex items-center px-4 py-[10px] border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[green] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Thêm
              vào giỏ</button>
          </div>
        </div>
      </form>
      <form action="">
        <div className=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg  ">
          <div className=" w-[100%] ">
            <a href="#"> <img src="https://cf.shopee.vn/file/7448bbebb8f781cd027bb72fd02f7012" alt="" /></a>
          </div>
          <div className="py-[10px] px-[10px] leading-8">
            <a href="#" className='no-underline'>
              <h4 className="font-bold hover:underline no-underline">Hán phục</h4>
            </a>
            <p className="text-[15px] text-[red]">2.000.000VND</p>
          </div>
          <div className="conten-item text-center pb-[10px]">
            <button className="inline-flex items-center px-4 py-[10px] border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[green] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Thêm
              vào giỏ</button>
          </div>
        </div>
      </form>
      <form action="">
        <div className=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg  ">
          <div className=" w-[100%] ">
            <a href="#"> <img src="https://cf.shopee.vn/file/7448bbebb8f781cd027bb72fd02f7012" alt="" /></a>
          </div>
          <div className="py-[10px] px-[10px] leading-8">
            <a href="#" className='no-underline'>
              <h4 className="font-bold hover:underline no-underline">Hán phục</h4>
            </a>
            <p className="text-[15px] text-[red]">2.000.000VND</p>
          </div>
          <div className="conten-item text-center pb-[10px]">
            <button className="inline-flex items-center px-4 py-[10px] border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[green] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Thêm
              vào giỏ</button>
          </div>
        </div>
      </form>
      <form action="">
        <div className=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg  ">
          <div className=" w-[100%] ">
            <a href="#"> <img src="https://cf.shopee.vn/file/7448bbebb8f781cd027bb72fd02f7012" alt="" /></a>
          </div>
          <div className="py-[10px] px-[10px] leading-8">
            <a href="#" className='no-underline'>
              <h4 className="font-bold hover:underline no-underline">Hán phục</h4>
            </a>
            <p className="text-[15px] text-[red] no-underline">2.000.000VND</p>
          </div>
          <div className="conten-item text-center pb-[10px]">
            <button className="inline-flex items-center px-4 py-[10px] border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[green] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Thêm
              vào giỏ</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

  )
}

export default ProductDetail