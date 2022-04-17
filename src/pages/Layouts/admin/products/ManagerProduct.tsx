import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ProductType } from "../../../../types/product";

type ManagerProductProps = {

  data: ProductType[];
  onRemoveItem: (id: number | string) => void
};

const ManagerProduct = (props: ManagerProductProps) => {
  return (
    <div>
      <h2 className=" my-4 mx-4 text-left">
        <NavLink className="text-2xl no-underline" to={`/admin/product/add`}>
          Thêm sản phẩm mới
        </NavLink>
      </h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th className="">Ảnh sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Mô tả sản phẩm</th>
          </tr>
        </thead>
        <tbody>
        {props.data?.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <NavLink to={`/product/${item._id}`}>
                      <img
                        className="w-60 rounded mx-auto d-block"
                        src={item.img}
                        alt=""
                      />
                    </NavLink>
                  </td>

                  <td>
                    <NavLink className="no-underline" to={`/product/${item._id}`}>{item.name}</NavLink>
                  </td>
                  <td>{item.price}</td>
                  <td>{item.desc}</td>
                  <td >
                    <NavLink className="no-underline" to={`/admin/product/${item._id}/edit`}>Sửa</NavLink>
                    <button onClick={() => props.onRemoveItem(item._id)} className="px-[30px]">Xóa</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ManagerProduct;
