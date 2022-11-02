export type navItem = {
    label: string;
    url: string;
};

export type User = {
    username: string;
    password: string;
};

export type Blog = {
    uuid: string;
    title: string;
    sub_title: string;
    description: string;
    content: string;
    created_at: number;
    updated_at: number;
    is_published: boolean;
    categories: number[];
};

// Blogのtable表示用データの型
export type BlogTableData = Pick<
    Blog,
    'uuid' | 'title' | 'created_at' | 'updated_at'
>;

// Blogのメタデータの型
export type BlogMetaData = Omit<Blog, 'content'>;

export type Category = {
    key: number;
    label: string;
};

export type ImageBase64URL = {
  url: string;
};

export type ImageResponse = {
  name: string;
};
