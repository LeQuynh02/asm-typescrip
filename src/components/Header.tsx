import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (

        <div >
            <div className="header-top flex justify-between mt-[30px] h-[80px] w-[1200px] m-auto">
                <figure className="logo pt-3">
                    <a href="/">
                        <img className="mt-[-45px]" src="https://incucdep.com/wp-content/uploads/2014/12/logo-thoi-trang.jpg" width="150px" />
                    </a>
                </figure>
                <div>
                    <ul className="w-[800px] mt-5 pl-10 flex ">
                        <li><a className="px-[20px] no-underline" href="/">Trang chủ</a></li>
                        <li><a className="px-[20px] no-underline" href="./blog">Bài viết</a></li>
                        <li><a className="px-[20px] no-underline" href="./products">Sản phẩm</a></li>
                        <li><a className="px-[20px] no-underline" href="">Liên hệ</a></li>

                    </ul>
                </div>
                <div className="flex mt-[18px] ml-[-84px] text-center">
                    <span className="sm:ml-3">
                        <a href="/signin">
                            <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[green] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Đăng
                                nhập </button>
                        </a>
                    </span>
                    <span className="sm:ml-3">
                        <a href="/signup">
                            <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[green] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Đăng
                                ký</button>
                        </a>
                    </span>

                </div>
            </div>
            <div className="bg-[#fd3d57]">
                <div className="header-top bg-[#fd3d57] flex justify-between h-[80px] container ">
                    <form action="/search" className="w-[700px] mt-4 pl-10 flex  m-auto">
                        <input type="text" className="h-10 w-10/12 pl-3 rounded-sm" placeholder="Nhập tên điện thoại, máy tính, phụ kiện... cần tìm" name="keyword" />
                        <div>
                            <button className="bg-[#2b2d42] text-[#ffffff] hover:text-[#ff0000] px-[20px] py-[8px] rounded-r-lg">Tìm kiếm</button>
                        </div>
                    </form>
                    <div className="flex mt-4 text-center ">
                        <div className="signin pl-3">
                            <span className="sm:ml-3">
                                <a href="/cart">
                                    <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[green] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Giỏ hàng</button>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header