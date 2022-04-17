import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { listCates } from "../../../../api/category";
import { CategoryType } from "../../../../types/category";
import { ProductType } from "../../../../types/product";

type ProductPageProps = {
  data: ProductType[];
  cates: CategoryType[];
};

const ProductPage = (props: ProductPageProps) => {
  const [category, setCategorys] = useState<CategoryType[]>([]);
  useEffect(() => {
    const getCategorys = async () => {
      const { data: cates } = await listCates();
      setCategorys(cates);
    };
    getCategorys();
  });
  return (
    <div className="h-auto py-10">
      <div className="shop-box-inner">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-sm-12 col-xs-12 sidebar-shop-left">
              <div className="product-categori">
                <div className="search-product">
                  <form action="#">
                    <input
                      className="form-control"
                      placeholder="Search here..."
                      type="text"
                    />
                    <button type="submit" />
                  </form>
                </div>
                <div className="filter-sidebar-left">
                  <div className="title-left text-2xl pb-2">
                    <h3>Categories</h3>
                  </div>
                  <div
                    className="list-group list-group-collapse list-group-sm list-group-tree"
                    id="list-group-men"
                    data-children=".sub-men"
                  >
                    <div className="list-group-collapse sub-men">
                      <div
                        className="collapse show"
                        id="sub-men1"
                        data-parent="#list-group-men"
                      >
                        <div className="list-group">
                          {props.cates &&
                            props.cates.map((category, index) => {
                              return (
                                <a
                                  href="#"
                                  className="list-group-item list-group-item-action"
                                >
                                  {category.name}
                                  <small className="text-muted">(10)</small>
                                </a>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div class="filter-price-left">
                                <div class="title-left">
                                    <h3>Price</h3>
                                </div>
                                <div class="price-box-slider">
                                    <div id="slider-range"></div>
                                    <p>
                                        <input type="text" id="amount" readonly
                                            style="border:0; color:#fbb714; font-weight:bold;">
                                        <button class="btn hvr-hover" type="submit">Filter</button>
                                    </p>
                                </div>
                            </div> */}
                <div className="filter-brand-left">
                  <div className="title-left text-2xl pb-2 pt-4">
                    <h3>Brand</h3>
                  </div>
                  <div className="brand-box">
                    <ul className="list-unstyled">
                      <li>
                        <div className="radio radio-danger">
                          <input
                            name="survey"
                            id="Radios1"
                            defaultValue="Yes"
                            type="radio"
                          />
                          <label htmlFor="Radios1"> Supreme </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio radio-danger">
                          <input
                            name="survey"
                            id="Radios2"
                            defaultValue="No"
                            type="radio"
                          />
                          <label htmlFor="Radios2"> A Bathing Ape </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-sm-12 col-xs-12 shop-content-right">
              <div className="right-product-box">
                <div className="product-item-filter row">
                  <div className="col-12 col-sm-8 text-center text-sm-left">
                    <div className="toolbar-sorter-right">
                      <select
                        id="basic"
                        className="selectpicker show-tick form-control"
                        data-placeholder="$ USD"
                      >
                        <option data-display="Select">Lọc Theo</option>
                        <option value={1}>Yêu Thích</option>
                        <option value={2}>Cao -&gt; Thấp</option>
                        <option value={3}>Thấp -&gt; Cao</option>
                        <option value={4}>Bán Nhiều Nhất</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* code product */}
                <div tabIndex={0} className="focus:outline-none no-underline">
                  {/* Remove py-8 */}
                  <div className="mx-auto container py-8 no-underline">
                    <div className="flex flex-wrap items-center lg:justify-between justify-center no-underline">
                      {/* Card 1 */}
                      {props.data &&
                        props.data.map((product, index) => {
                          return (
                            <div
                              key={index}
                              tabIndex={0}
                              className="h-100 shadow border-0 px-[10px] mb-4 pt-2 focus:outline-none mx-2 w-72 xl:mb-0 mb-8 no-underline"
                            >
                              <NavLink to={`${product._id}`}>
                                <div>
                                  <img
                                    alt="person capturing an image"
                                    src={product.img}
                                    tabIndex={0}
                                    className="focus:outline-none w-full h-44 no-underline"
                                  />
                                </div>
                              </NavLink>
                              <div className="bg-white dark:bg-gray-800 ">
                                <div className="p-4">
                                  <NavLink className="hover:underline no-underline text-black" to={`${product._id}`}>
                                    <div className="flex items-center justify-between">
                                      <h2
                                        tabIndex={0}
                                        className="focus:outline-none font-semibold dark:text-black"
                                      >
                                        {product.name}
                                      </h2>
                                    </div>
                                    <p
                                      tabIndex={0}
                                      className="focus:outline-none text-s text-gray-600 dark:text-black mt-2 "
                                    >
                                      {product.name}
                                    </p>
                                  </NavLink>
                                  <div className="flex items-center justify-between pt-[2px]">
                                    <h3
                                      tabIndex={0}
                                      className="focus:outline-none text-indigo-700 text-xl font-semibold"
                                    >
                                      ${product.price}
                                    </h3>
                                  </div>
                                  <div className="conten-item text-center ">
                                    <button className="inline-flex items-center px-4 py-[10px] border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[green] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                      Thêm vào giỏ
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
