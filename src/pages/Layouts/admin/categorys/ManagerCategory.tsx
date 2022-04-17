import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { CategoryType } from '../../../../types/category';

type ManagerCategoryProps = {
  data: CategoryType[],
  removeCates: (_id: number) => void
};


const ManagerCategory = (props: ManagerCategoryProps) => {



  return (
    <div>
      <h2 className=" my-4 mx-4 text-left">
        <NavLink className="text-2xl no-underline" to={`/admin/category/add`}>
          Thêm danh mục mới
        </NavLink>
      </h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Tên danh mục sản phẩm</th>
          </tr>
        </thead>
        <tbody>
          {props.data &&
            props.data.map((category, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <NavLink className="no-underline" to={`/category/${category._id}`}>{category.name}</NavLink>
                  </td>
                  <td>
                    <NavLink className="no-underline" to={`/admin/category/${category._id}/edit`}>Sửa</NavLink>
                    <button
                      className="px-[30px]"
                      onClick={() => props.removeCates(category._id)}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  )
}

export default ManagerCategory