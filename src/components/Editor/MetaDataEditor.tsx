import type { Blog } from '#src/types';

import dayjs from 'dayjs';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';

import {
    LocalizationProvider,
    MobileDatePicker,
    MobileDateTimePicker,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { adminPostBlog } from '#src/utils/api/auth';
import { useCategoriesState } from '#src/utils/hooks';
import { AddCategoryModal } from './AddCategoryModal';
import { blogDataContext, BlogDataContextType } from './contexts';

export const MetaDataEditor: React.FC = () => {
    // Blogについてのform設定
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm<Blog>({ mode: 'onTouched' });

    // blogDataの読み込み
    const blogData = useContext(blogDataContext) as BlogDataContextType;

    // categoryDataの読み込み
    const { data: categoryData } = useCategoriesState();

    // submitした際の処理
    // 初期値無しや型キャスト対応
    const onSubmit = handleSubmit(async (data) => {
        data.categories =
            data.categories || blogData.blogDataContextValue.categories;
        data.uuid = blogData.blogDataContextValue.uuid;
        data.content = blogData.blogDataContextValue.content;
        data.created_at = dayjs(data.created_at).unix();
        data.updated_at = dayjs(data.updated_at).unix();

        await adminPostBlog(data);
        blogData.setBlogDataContextValue(() => data);
    });

    return (
        <Box component="form" onSubmit={onSubmit}>
            <TextField
                disabled
                label="UUID"
                value={blogData.blogDataContextValue.uuid}
                type="text"
                fullWidth
                variant="outlined"
                margin="normal"
                {...register('uuid')}
            />

            <TextField
                autoFocus
                label="Title"
                defaultValue={blogData.blogDataContextValue.title}
                type="text"
                fullWidth
                autoComplete="off"
                variant="outlined"
                margin="normal"
                helperText="max length 30."
                required
                error={errors.title ? true : false}
                {...register('title', {
                    maxLength: 30,
                    required: true,
                })}
            />

            <TextField
                label="Sub Title"
                defaultValue={blogData.blogDataContextValue.sub_title}
                type="text"
                fullWidth
                autoComplete="off"
                variant="outlined"
                margin="normal"
                helperText="max length 100."
                error={errors.sub_title ? true : false}
                {...register('sub_title', {
                    maxLength: 100,
                })}
            />

            <TextField
                label="Description(for SEO) deprecated."
                InputProps={{ readOnly: true }}
                defaultValue={blogData.blogDataContextValue.description}
                type="text"
                fullWidth
                autoComplete="off"
                variant="outlined"
                margin="normal"
                helperText="max length: 200."
                error={errors.description ? true : false}
                {...register('description', {
                    maxLength: 200,
                })}
            />

            <Stack direction="row" alignItems="center" gap={1}>
                <AddCategoryModal />
                <Autocomplete
                    multiple
                    fullWidth
                    autoComplete
                    options={
                        categoryData
                            ? categoryData.map((value) => value.label)
                            : []
                    }
                    defaultValue={
                        categoryData
                            ? blogData.blogDataContextValue.categories.map(
                                  (value) => categoryData[value].label,
                              )
                            : []
                    }
                    filterSelectedOptions
                    onChange={(e, val) => {
                        setValue(
                            'categories',
                            val.map(
                                (categoryLabel) =>
                                    categoryData!.find(
                                        (value) =>
                                            value.label === categoryLabel,
                                    )!.key,
                            ),
                        );
                    }}
                    renderInput={(params) => (
                        <TextField
                            autoFocus={false}
                            {...params}
                            label="Categories"
                            placeholder="Python, JavaScript, ..."
                            margin="normal"
                        />
                    )}
                />
            </Stack>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Box sx={{ display: 'flex' }}>
                    <MobileDatePicker
                        label="作成日時"
                        value={watch(
                            'created_at',
                            blogData.blogDataContextValue.created_at * 1000,
                        )}
                        onChange={(newDate) => {
                            setValue('created_at', newDate!);
                        }}
                        renderInput={(p) => (
                            <TextField
                                fullWidth
                                margin="normal"
                                {...p}
                                {...register('created_at')}
                            />
                        )}
                    />

                    <MobileDateTimePicker
                        label="更新日時"
                        value={watch(
                            'updated_at',
                            blogData.blogDataContextValue.updated_at * 1000,
                        )}
                        onChange={(newDate) => {
                            setValue('updated_at', newDate!);
                        }}
                        renderInput={(p) => (
                            <TextField
                                fullWidth
                                margin="normal"
                                {...p}
                                {...register('updated_at')}
                            />
                        )}
                    />
                </Box>
            </LocalizationProvider>

            <FormControlLabel
                label={
                    watch(
                        'is_published',
                        blogData.blogDataContextValue.is_published,
                    )
                        ? '公開'
                        : '非公開'
                }
                control={
                    <Switch
                        color="info"
                        defaultChecked={
                            blogData.blogDataContextValue.is_published
                        }
                    />
                }
                {...register('is_published')}
            />

            <br />

            <Button type="submit" variant="contained" color="error">
                save
            </Button>
        </Box>
    );
};
