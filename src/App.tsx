import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import WebLayout from './pages/Layouts/client/WebLayout'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './pages/Home';
import axios from 'axios'
import { ProductType } from './types/product';
import { UserType } from './types/user';
import { add, list, remove, update } from './api/product';
import { signup } from './api/auth';
import { CategoryType } from './types/category';
import { createCates, listCates, removeCates, updateCates } from './api/category';
import ProductPage from './pages/Layouts/client/product/ProductPage';
import ProductDetailPage from './pages/Layouts/client/product/ProductDetailPage';
import PrivateRouter from './components/PrivateRouter';
import Dashboard from './pages/Dashboard';
import AdminLayout from './pages/Layouts/admin/AdminLayout';
import ManagerProduct from './pages/Layouts/admin/products/ManagerProduct';
import ProductAdd from './pages/Layouts/admin/products/ProductAdd';
import ProductEdit from './pages/Layouts/admin/products/ProductEdit';
import ManagerCategory from './pages/Layouts/admin/categorys/ManagerCategory';
import CategoryAdd from './pages/Layouts/admin/categorys/CategoryAdd';
import CategoryEdit from './pages/Layouts/admin/categorys/CategoryEdit';
import Signin from './pages/Layouts/client/users/Signin';
import Signup from './pages/Layouts/client/users/Signup';


function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [users, setUsers] = useState<UserType[]>([]);
  const [category, setCategory] = useState<CategoryType[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();

  }, [])
  const removeItem = async (id: number) => {
    // xoa tren API
    const { data } = await remove(id);
    console.log(data);
    // reRender
    data && setProducts(products.filter(item => item._id !== data._id));
  }
  const onHandleAdd = async (product: ProductType) => {
    // call API
    const { data } = await add(product);
    console.log(data);
    setProducts([...products, data])
  }
  const onHandleUpdate = async (product: ProductType) => {
    const { data } = await update(product);
    setProducts(products.map((item) => (item._id == data._id ? data : item)));
  };

  const onHandleAddUser = async (user: UserType) => {
    const { data } = await signup(user);
    console.log(data);
    setUsers([...users, data]);

  }
  // end user

  const [categorys, setCategorys] = useState<CategoryType[]>([]);
  useEffect(() => {
    const getCategorys = async () => {
      const { data } = await listCates();
      setCategorys(data);
    };
    getCategorys();
  }, []);
  const removeItemCates = async (id: number) => {
    // xoa tren API
    const { data } = await removeCates(id);
    data && setCategorys(categorys.filter((item) => item._id !== data._id));
  };
  const onHandleAddCates = async (category: CategoryType) => {
    // call api
    const { data } = await createCates(category);
    setProducts([...categorys, data]);
  };
  const onHandleUpdateCates = async (category: CategoryType) => {
    console.log(category);
    const { data } = await updateCates(category);
    setProducts(categorys.map((item) => (item._id == data._id ? data : item)));
  };

  return (
    <div className="App">
      <br />
      <div>
        <main>
          <Routes>
            <Route path="/" element={<WebLayout />}>
              <Route index element={<Home products={products} />} />
              <Route path="product">
                <Route index element={<ProductPage cates={categorys} data={products} />} />
         
                <Route path="/product/:id" element={< ProductDetailPage />} />
              </Route>

            </Route>
            <Route path='signin' element={<Signin />} />
            <Route path='signup' element={<Signup  />} />

            <Route path="admin" element={<AdminLayout />}>
              <Route index element={<Navigate to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="product">
                <Route index element={<ManagerProduct data={products} onRemoveItem={removeItem} />} />
                <Route path="add" element={<ProductAdd  onAdd={onHandleAdd} />} />
                <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate} />} />
              </Route>
              <Route path='category'>
                <Route index element={<ManagerCategory data={categorys} removeCates={removeItemCates} />} />
                <Route path="add" element={<CategoryAdd onAdd={onHandleAddCates} />} />
                <Route path=":id/edit" element={<CategoryEdit updateCates={onHandleUpdateCates} />} />
              </Route>
            </Route>
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App


