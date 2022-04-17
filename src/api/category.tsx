import { CategoryType } from "../types/category";
import instance from "./instance";

export const listCates = () => {
    const url = `/category`;
    return instance.get(url);
}
export const createCates = (category: CategoryType) => {
    const url = "/category";
    return instance.post(url, category);
};
export const readCates = (_id: number) => {
    const url = `/category/${_id}`;
    return instance.get(url); 
};
export const removeCates = (_id: CategoryType) => {
    const url = `/category/${_id}`;
    return instance.delete(url);
};
export const updateCates = (category: CategoryType) => {
    const url = `/category/${category._id}`;
    return instance.put(url, category);
}

