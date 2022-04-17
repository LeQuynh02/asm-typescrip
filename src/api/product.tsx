
import { ProductType } from '../types/product';
import { isAuthenticate } from '../untiis/localStorage';
import instance from './instance';

const user = isAuthenticate();
console.log(user);

export const list = () => {
    const url = `/products`;
    return instance.get(url);
};
export const read = (_id: number | string) => {
    const url = `/products/${_id}`;
    return instance.get(url);
};
export const add = (product: ProductType) => {
    const url = `/products/${user?.user._id}`;
    return instance.post(url, product, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    });
};
export const remove = (id: number | string) => {
    const url = `/products/${user?.user._id}/${id}`;
    return instance.delete(url, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    });
};
export const update = (product: ProductType) => {
    const url = `/products/${user?.user._id}/${product._id}`;
    return instance.put(url, product, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    });
};