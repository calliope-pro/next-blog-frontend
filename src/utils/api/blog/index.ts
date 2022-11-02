import axios, { AxiosResponse } from 'axios';

import type { Blog, Category } from '#src/types';

const BACKEND_ORIGIN = process.env.NEXT_PUBLIC_BACKEND_ORIGIN;

const axiosWithCredentials = axios.create({
    withCredentials: true,
});

export async function fetchBlogList(onlyPublished = true) {
    const REQUEST_URL = onlyPublished
        ? new URL('/api/blogs/', BACKEND_ORIGIN).href
        : new URL('/api/admin/blogs/', BACKEND_ORIGIN).href;
    const response: AxiosResponse<Blog[]> = await axiosWithCredentials.get(
        REQUEST_URL,
    );
    const blogList = response.data.sort((a, b) => b.updated_at - a.updated_at);
    return blogList;
}

export async function fetchBlogByUuid(id: string) {
    const REQUEST_URL = new URL(`/api/blogs/${id}`, BACKEND_ORIGIN).href;
    const response: AxiosResponse<Blog> = await axios.get(REQUEST_URL);
    return response.data;
}

export async function fetchCategories() {
    const REQUEST_URL = new URL('/api/categories/', BACKEND_ORIGIN).href;
    const response: AxiosResponse<Category[]> = await axios.get(REQUEST_URL);
    const categoryList = response.data;
    categoryList.forEach((value) => {
        value.key = Number(value.key);
    });
    return categoryList;
}
