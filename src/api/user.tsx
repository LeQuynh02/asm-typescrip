import { UserType } from "../types/user";
import { isAuthenticate } from "../untiis/localStorage";
import instance from "./instance";

const user = isAuthenticate();
console.log(user);

export const listusers = () => {
    const url = `/user`;
    return instance.get(url);
};
export const readusers = (_id: string | number) => {
    const url = `/user/${_id}`;
    return instance.get(url);
};
export const adduser = ( product: UserType) => {
    const url = `/user/${user?.user._id}`;
    return instance.post(url, product, {
        headers: { 
            "Authorization": `Bearer${user?.token}`
        }
    });
};
export const removeusers = (id: string | number) => {
    const url = `/user/${user?.user._id}/${id}`;
    return instance.delete(url, { 
        headers: { 
            "Authorization": `Bearer${user?.token}`
        }
    });
};
export const updateusers = (id: string | number) => {
    const url = `/user/${user?.user._id}/${product._id}`;
    return instance.put(url, product, { 
        headers: { 
            "Authorization": `Bearer${user?.token}`
        }
    });
};
