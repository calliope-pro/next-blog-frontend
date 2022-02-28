import type { Blog, Category, User } from '#src/types';

import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'http://localhost:8000';
// const BASE_URL = 'https://tv708b.deta.dev';

const axiosWithCredentials = axios.create({
  withCredentials: true,
});

export async function adminLogin(userData: User) {
  const REQUEST_URL = new URL('/api/admin/login/', BASE_URL).href;
  const response: AxiosResponse = await axiosWithCredentials.post(
    REQUEST_URL,
    userData
  );
  return response;
}

export async function adminVerifyTokens() {
  const REQUEST_URL = new URL('/api/admin/tokens/verify/', BASE_URL).href;
  const response: AxiosResponse = await axiosWithCredentials.post(REQUEST_URL);
  return response;
}

export async function adminPostBlog(blog: Blog) {
  const REQUEST_URL = new URL('/api/admin/blogs/post/', BASE_URL).href;
  const response: AxiosResponse = await axiosWithCredentials.post(
    REQUEST_URL,
    blog
  );
  return response;
}

export async function adminPostCategory(category: Category) {
  const REQUEST_URL = new URL('/api/admin/categories/post/', BASE_URL).href;
  const response: AxiosResponse = await axiosWithCredentials.post(
    REQUEST_URL,
    category
  );
  return response;
}

export async function fetchBlogList(onlyPublished = true) {
  const REQUEST_URL = onlyPublished
    ? new URL('/api/blogs/', BASE_URL).href
    : new URL('/api/admin/blogs/', BASE_URL).href;
  const response: AxiosResponse<Blog[]> = await axiosWithCredentials.get(
    REQUEST_URL
  );
  const blogList = response.data.sort((a, b) => b.updated_at - a.updated_at);
  return blogList;
}

export async function fetchCategories() {
  const REQUEST_URL = new URL('/api/categories/', BASE_URL).href;
  const response: AxiosResponse<Category[]> = await axios.get(REQUEST_URL);
  const categoryList = response.data;
  categoryList.forEach((value) => {
    value.key = Number(value.key);
  });
  console.log(categoryList);
  return categoryList;
}
