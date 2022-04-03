import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <div className="container">
            <div className=" w-[1200px] m-auto grid grid-cols-4 pt-10 pb-10 gap-[20px] bg-[#f3f3f3] min-w-full m-auto">
                <div className="w-[320px] px-[20px] ">
                    <div>
                        <img src="https://incucdep.com/wp-content/uploads/2014/12/logo-thoi-trang.jpg" alt="" />
                    </div>
                    <p className="py-[10px] leading-5"><a className="no-underline" href="#">Lorem ipsum, or it is sometimes kno wn, is dummy text used in laying out print.</a></p>
                    <div>
                        <div className="footer_newslet">
                            <h6 className="font-bold py-[10px]">NEWSLETTER</h6>
                            <form className="footernews_form">
                                <input type="text" placeholder="Your email address" className="py-[10px] rounded-lg bg-none" />
                                <a href="#" className="no-underline">
                                    <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Đăng ký</button>
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="intro px-[20px]">
                    <div>
                        <h2 className="font-bold ">Thông tin</h2>
                    </div>
                    <div className="pt-[10px] leading-8">
                        <p><a href="" className="no-underline">Orders</a></p>
                        <p><a href="" className="no-underline">Wishlist</a></p>
                        <p><a href="" className="no-underline" >Track Order</a></p>
                        <p><a href="" className="no-underline">Manage Account</a></p>
                        <p><a href="" className="no-underline">Return Order</a></p>
                    </div>
                </div>
                <div className="intro px-[20px]">
                    <div>
                        <h2 className="font-bold ">Giới thiệu</h2>
                    </div>
                    <div className="pt-[10px] leading-8">
                        <p><a href="/" className="no-underline">Trang chủ</a></p>
                        <p><a href="./blog" className="no-underline">Bài viết</a></p>
                        <p><a href="" className="no-underline">Sản phẩm</a></p>
                        <p><a href="" className="no-underline">Liên hệ</a></p>
                    </div>
                </div>
                <div className="intro px-[15px]">
                    <div>
                        <h2 className="font-bold leading-8 ">Liên hệ</h2>
                    </div>
                    <div className="pt-[10px] leading-8">
                        <p><a href="" className="no-underline">Tòa nhà FPT Polytechnic, P. Trịnh Văn Bô, Xuân Phương, Nam Từ Liêm, Hà Nội</a></p>
                        <p><a href="" className="no-underline">Phone : 0866193026</a></p>
                        <p><a href="" className="no-underline">Email : quynhlnph13872@fpt.edu.vn</a></p>
                    </div>
                </div>
            </div>
            <div className="py-3 bg-[#2b2d42] text-center text-xs text-[#ffffff]">
                <p>LÊ NGỌC QUỲNH</p>
            </div>
        </div>

    )
}

export default Footer