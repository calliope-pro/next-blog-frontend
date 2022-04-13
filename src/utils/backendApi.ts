import { ContactContentType } from '#src/components/SelfIntroduction/ContactForm';
import type {
  Blog,
  Category,
  ImageBase64URL,
  ImageResponse,
  User,
} from '#src/types';

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
  const REQUEST_URL = new URL('/api/admin/tokens/verify/', BACKEND_ORIGIN).href;
  const response: AxiosResponse = await axiosWithCredentials.post(REQUEST_URL);
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

export async function adminPostImageBase64URL(imageBase64URL: ImageBase64URL) {
  const REQUEST_URL = new URL('/api/admin/images/post/', BACKEND_ORIGIN).href;
  const response: AxiosResponse<ImageResponse> =
    await axiosWithCredentials.post(REQUEST_URL, imageBase64URL);
  return response;
}

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

export async function fetchCategories() {
  const REQUEST_URL = new URL('/api/categories/', BACKEND_ORIGIN).href;
  const response: AxiosResponse<Category[]> = await axios.get(REQUEST_URL);
  const categoryList = response.data;
  categoryList.forEach((value) => {
    value.key = Number(value.key);
  });
  return categoryList;
}

export async function postContactForm(content: ContactContentType) {
  const REQUEST_URL = new URL('/api/contact-form/', BACKEND_ORIGIN).href;
  const response: AxiosResponse = await axios.post(REQUEST_URL, content);
  return response.status;
}
