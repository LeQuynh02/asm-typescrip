import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { signin } from '../../../../api/user';
import { authenticate } from '../../../../untiis/localStorage';


type FormValues = {
  name: string;
  email: string,
  password: string
}

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const navigate = useNavigate();
  const [error, setError] = useState()

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const { data: user } = await signin(data);
      authenticate(user, () => navigate("/"));
    } catch (error: any) {
      console.log(error.response)
      if (error.response.status === 400) {
        setError(error.response.data)
      }
    }
  };
  return (
    // <div>
    //     <section className="py-[117px]">
    //     <div className="container px-5">
    //       <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
    //         <div className="text-center mb-5">
    //           <h1 className="fw-bolder">Đăng Nhập</h1>
    //         </div>
    //         <div className="row gx-5 justify-content-center">
    //           <div className="col-lg-8 col-xl-6">
    //             <form
    //               id="contactForm"
    //               onSubmit={handleSubmit(onSubmit)}
    //               data-sb-form-api-token="API_TOKEN"
    //             >
    //               <div className="form-floating mb-3">
    //                 <input
    //                   {...register("email", { required: true })}
    //                   className="form-control"
    //                   id="email"
    //                   type="email"
    //                   placeholder="name@example.com"
    //                 />
    //                 <label htmlFor="email">Email address</label>
    //               </div>
    //               <div className="form-floating mb-3">
    //                 <input
    //                   {...register("password", { required: true })}
    //                   className="form-control"
    //                   id="password"
    //                   type="password"
    //                   placeholder="Enter your password..."
    //                 />
    //                 <label htmlFor="name">Password</label>
    //               </div>
    //               <h3>
    //                 {error}
    //               </h3>
    //               <div>
    //                 <Link className="pr-10" to={`/signup`}>
    //                   Đăng ký tài khoản
    //                 </Link>
    //                 <button className="">Đăng Nhập</button>
    //               </div>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Đăng nhập</h2>
        </div>
        <form className="mt-8 space-y-6" method="POST" id="formSignin" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Email</label>
              <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email" />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Mật khẩu</label>
              <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Mật khẩu" />
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
              Đăng nhập
            </button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Signin
