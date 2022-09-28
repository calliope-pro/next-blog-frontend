import type { Blog } from '#src/types';

import dayjs from 'dayjs';

import { Loader } from '#src/components';
import { useBlogListState } from '#src/utils/hooks';
import { EditorBase } from './EditorBase';

export const Editor: React.FC<Pick<Blog, 'uuid'>> = ({ uuid }) => {
    function createNewBlog(): Blog {
        return {
            uuid: uuid,
            title: 'default',
            sub_title: '',
            description: '',
            content: '',
            created_at: dayjs().unix(),
            updated_at: dayjs().unix(),
            is_published: false,
            categories: [],
        };
    }
    const { data } = useBlogListState();
    if (!data) {
        return <Loader />;
    }
    const blogData = data.find((blog) => blog.uuid === uuid) || createNewBlog();
    return <EditorBase blogData={blogData} />;
};
