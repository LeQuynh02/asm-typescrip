import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { read } from '../../../../api/product';
import { ProductType } from '../../../../types/product';

type ProductEditProps = {
    onUpdate: (product: ProductType) => void
};
type FormInputs = { 
    name: string,
    img: string,
    price: number,
    desc : string
}

const ProductEdit = (props: ProductEditProps) => {
    const { id } = useParams ();
    const [products, setProduts] = useState<ProductType[]>([]);
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();  
    const navigate = useNavigate();  
    const [error, setError] = useState();
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            console.log(data);
            reset(data);
        }
        getProduct();
    }, []);
    
    const onSubmit: SubmitHandler<FormInputs> = data => {
        props.onUpdate(data);
        navigate("/admin/product");
    };
    
  return (
    <div>            <section className="py-5">
    <div className="container px-5">
        {/* Contact form*/}
        <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
            <div className="text-center mb-5">
                <h1 className="fw-bolder">Thêm Sản Phẩm Mới</h1>
            </div>
            <div className="row gx-5 justify-content-center">
                <div className="col-lg-8 col-xl-6">
                    <form onSubmit={handleSubmit(onSubmit)} action="" id="contactForm" data-sb-form-api-token="API_TOKEN">
                        {/* Name input*/}
                        <div className="form-floating mb-3">
                            <input  {...register('name', { required: true })} className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                            {errors.name && errors.name.type === "required" && <span>Nhập vào tên sản phẩm</span>}
                            <label htmlFor="name">Tên sản phẩm</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input  {...register('price', { required: true })} className="form-control" id="price" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                            {errors.name && errors.name.type === "required" && <span>Nhập vào giá sản phẩm</span>}
                            <label htmlFor="name">Giá sản phẩm</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input  {...register('img', { required: true })} className="form-control" id="title" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                            {errors.name && errors.name.type === "required" && <span>Nhập vào mô tả sản phẩm</span>}
                            <label htmlFor="name">Hinh anh</label>
                        </div>
                        
                        <div className="form-floating mb-3">
                            <input  {...register('desc', { required: true })} className="form-control" id="title" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                            {errors.name && errors.name.type === "required" && <span>Nhập vào mô tả sản phẩm</span>}
                            <label htmlFor="name">Mô tả</label>
                        </div>
{/* 
                        <div className="input-group mb-3">
                            <label className="input-group-text py-3" htmlFor="inputGroupSelect02">Danh mục</label>
                            <select className="form-select" >
                                <option selected>Chọn danh mục</option>
                                {props.cates &&
                                    props.cates.map((category, index) => {
                                        return (
                                            <option{...register('category', { required: true })} id="category">{category.name}</option>
                                        );
                                    })}
                            </select>
                        </div> */}

{/* 
                        <div className="form-floating mb-3">
                            <input className="form-control" id="img" type="file" placeholder="" data-sb-validations="required" />
                            <label htmlFor="img">
                                <img className="rounded mx-auto d-block" src='' alt="" />
                            </label>
                        </div> */}
                        <div className="d-grid border border-solid-2 py-2 rounded bg-primary"><button className="" id="submitButton" type="submit">Thêm</button></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
        </div>
  );
}

export default ProductEdit