import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';

type WebLayoutProps = {};

const WebLayout = (props: WebLayoutProps) => {
  const [error, setError] = useState();
  const authEmail = async (email: string) => {
    try {
      const auth = await localStorage.getItem("user");
      console.log(auth);
      if (auth) {
        const email = document.querySelector('#email');
        if (email) {
          email.innerHTML = JSON.parse(auth).email;
        }
      }
      console.log(auth);
    } catch (error: any) {
      console.log(error.response)
      if (error.response.status === 400) {
        setError(error.response.data);
      }
    }
  }

  const logout = document.querySelector('#logout');
  if (logout) {
    logout.addEventListener('click', function () {
      localStorage.removeItem('user');
    })
  }
  return (
    <div>
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <footer className="  min-w-full m-auto">
        <Footer />
      </footer>

    </div>
  )
}

export default WebLayout


