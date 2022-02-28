import type { Blog } from '#src/types';

import { createContext, Dispatch, SetStateAction } from 'react';

export type BlogDataContextType = {
  blogDataContextValue: Blog;
  setBlogDataContextValue: Dispatch<SetStateAction<Blog>>;
}

export const blogDataContext = createContext<BlogDataContextType | undefined>(undefined);
