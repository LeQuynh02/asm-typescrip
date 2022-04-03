import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../../../api/user';
import { UserType } from '../../../../types/user'

type SignupProps = {
  // onAdd: (user: UserType) => void
};

type FormValues = {
  name: string,
  email: string,
  phone: string,
  password: string,
  address: string
};

const Signup = (props: SignupProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    signup(data);
    navigate("/signin");
  }
  return (
    // <div>
    //     <div>
    //   <section className="py-5">
    //     <div className="container px-5">
    //       {/* Contact form*/}
    //       <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
    //         <div className="text-center mb-5">
    //           <h1 className="fw-bolder">Signup</h1>
    //         </div>
    //         <div className="row gx-5 justify-content-center">
    //           <div className="col-lg-8 col-xl-6">
    //             <form onSubmit={handleSubmit(onSubmit)} action="" id="contactForm" data-sb-form-api-token="API_TOKEN">
    //               {/* Name input*/}
    //               <div className="form-floating mb-3">
    //                 <input  {...register('name', { required: true })} className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
    //                 {errors.name && errors.name.type === "required" && <span>Nhập vào tên của bạn</span>}
    //                 <label htmlFor="name">Full name</label>
    //                 <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
    //               </div>

    //               {/* Email address input*/}
    //               <div className="form-floating mb-3">
    //                 <input {...register('email', { required: true })} className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
    //                 {errors.name && errors.name.type === "required" && <span>Nhập vào email</span>}
    //                 <label htmlFor="email">Email address</label>
    //                 <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
    //                 <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
    //               </div>

    //               <div className="form-floating mb-3">
    //                 <input {...register('password', { required: true })} className="form-control" id="password" type="password" placeholder="Enter your password..." data-sb-validations="required" />
    //                 <label htmlFor="name">Password</label>
    //                 <div className="invalid-feedback" data-sb-feedback="password:required">A password is required.</div>
    //               </div>

    //               {/* Phone number input*/}
    //               <div className="form-floating mb-3">
    //                 <input  {...register('phone', { required: true })} className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
    //                 <label htmlFor="phone">Phone number</label>
    //                 <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
    //               </div>

    //               <div className="form-floating mb-3">
    //                 <input  {...register('address', { required: true })} className="form-control" id="address" type="text" placeholder="Enter your address..." data-sb-validations="required" />
    //                 <label htmlFor="name">Address</label>
    //                 <div className="invalid-feedback" data-sb-feedback="address:required">Address is required.</div>
    //               </div>

    //               <div className="d-grid border border-solid-2 py-2 rounded bg-primary"><button className="" id="submitButton" type="submit">Đăng Ký</button></div>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
    // </div>
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Đăng ký</h2>
        </div>
        <form className="mt-8 space-y-6" action="" method="POST" id="formSignup">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="password" className="sr-only">Tên người dùng</label>
              <input id="username" type="text" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Tên tài khoản" />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">Email</label>
              <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email" />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Mật khẩu</label>
              <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Mật khẩu" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Quên mật khẩu? </a>
            </div>
          </div>
          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {/* Heroicon name: solid/lock-closed */}
                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </span>
              Đăng ký
            </button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Signup

