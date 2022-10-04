import type { ContactContentType } from '#src/components/SelfIntroduction/ContactForm';
import type { Blog, Category, User } from '#src/types';

import axios, { AxiosResponse } from 'axios';

const BACKEND_ORIGIN = process.env.NEXT_PUBLIC_BACKEND_ORIGIN;

const axiosWithCredentials = axios.create({
    withCredentials: true,
});

export async function adminLogin(userData: User) {
    const REQUEST_URL = new URL('/api/admin/login/', BACKEND_ORIGIN).href;
    const response: AxiosResponse = await axiosWithCredentials.post(
        REQUEST_URL,
        userData,
    );
    return response;
}

export async function adminVerifyTokens() {
    const REQUEST_URL = new URL('/api/admin/tokens/verify/', BACKEND_ORIGIN)
        .href;
    const response: AxiosResponse = await axiosWithCredentials.post(
        REQUEST_URL,
    );
    return response;
}

export async function adminPostBlog(blog: Blog) {
    const REQUEST_URL = new URL('/api/admin/blogs/post/', BACKEND_ORIGIN).href;
    const response: AxiosResponse = await axiosWithCredentials.post(
        REQUEST_URL,
        blog,
    );
    return response;
}

export async function adminPostCategory(category: Category) {
    const REQUEST_URL = new URL('/api/admin/categories/post/', BACKEND_ORIGIN)
        .href;
    const response: AxiosResponse = await axiosWithCredentials.post(
        REQUEST_URL,
        category,
    );
    return response;
}

export async function postContactForm(content: ContactContentType) {
    const REQUEST_URL = new URL('/api/contact-form/', BACKEND_ORIGIN).href;
    await axios.post(REQUEST_URL, content);
}
