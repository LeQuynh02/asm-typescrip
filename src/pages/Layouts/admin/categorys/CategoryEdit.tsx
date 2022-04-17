import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { readCates } from '../../../../api/category';
import { CategoryType } from '../../../../types/category';

type CategoryEditProps = {
    
    updateCates: (category: CategoryType) => void
};

type FormInputs = {
    name: string
};

const CategoryEdit = (props: CategoryEditProps) => {
    const { id } = useParams ();
    const [products, setProduts] = useState<CategoryType[]>([]);
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();  
    const navigate = useNavigate();  
    const [error, setError] = useState();
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await readCates(id);
            console.log(data);
            reset(data);
        }
        getProduct();
    }, []);


    const onSumbit: SubmitHandler<FormInputs> = (data) => {
        props.updateCates(data);
        navigate("/admin/category")
    }

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
                        <form onSubmit={handleSubmit(onSumbit)} action="" id="contactForm" data-sb-form-api-token="API_TOKEN">
                            {/* Name input*/}
                            <div className="form-floating mb-3">
                                <input  {...register('name', { required: true })} className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                {errors.name && errors.name.type === "required" && <span>Nhập vào tên sản phẩm</span>}
                                <label htmlFor="name">Tên sản phẩm</label>
                            </div>
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

export default CategoryEdit