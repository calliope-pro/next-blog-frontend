import { useForm } from 'react-hook-form';
import { Box, Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import { COLORS } from '#src/styles';
import { postContactForm } from '#src/utils/api/auth';

export type ContactContentType = {
    subject?: string;
    email: string;
    body: string;
};

export const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactContentType>({ mode: 'onBlur' });

    async function submit(data: ContactContentType) {
        await postContactForm(data);
    }
    return (
        <Box
            component="form"
            onSubmit={handleSubmit(submit)}
            textAlign="center"
        >
            <TextField
                fullWidth
                label="件名"
                margin="dense"
                {...register('subject')}
            />
            <TextField
                fullWidth
                label="メールアドレス"
                margin="dense"
                type="email"
                helperText={errors.email && '必須項目です'}
                required
                error={errors.email !== undefined}
                {...register('email', { required: true })}
            />
            <TextField
                fullWidth
                label="問い合わせ内容"
                multiline
                minRows={5}
                maxRows={25}
                margin="dense"
                placeholder="問い合わせ内容"
                helperText={errors.body && '必須項目です'}
                required
                error={errors.body !== undefined}
                {...register('body', { required: true })}
            />
            <Button
                variant="contained"
                startIcon={<SendIcon />}
                size="large"
                sx={{ background: COLORS.accentDarkColor, width: '80%', mt: 1 }}
                type="submit"
            >
                送信
            </Button>
        </Box>
    );
};
