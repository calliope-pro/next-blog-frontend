import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Alert from '@mui/lab/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Slide from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';

import { COLORS } from '#src/styles';
import { postContactForm } from '#src/utils/api/auth';

export type ContactContentType = {
    subject?: string;
    email: string;
    body: string;
};

export const ContactForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [canOpenSuccessAlert, setCanOpenSuccessAlert] = useState(false);
    const [canOpenErrorAlert, setCanOpenErrorAlert] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactContentType>({ mode: 'onBlur' });

    function closeSuccessAlert() {
        setCanOpenSuccessAlert(false);
    }

    function closeErrorAlert() {
        setCanOpenErrorAlert(false);
    }

    async function submit(data: ContactContentType) {
        try {
            setIsLoading(true);
            await postContactForm(data);
            reset();
            setCanOpenSuccessAlert(true);
        } catch (error) {
            setCanOpenErrorAlert(true);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                autoHideDuration={5000}
                open={canOpenSuccessAlert}
                onClose={closeSuccessAlert}
                TransitionComponent={(props) => (
                    <Slide {...props} direction="down" unmountOnExit />
                )}
            >
                <Alert
                    severity="success"
                    variant="filled"
                    onClose={closeSuccessAlert}
                    sx={{ p: 3 }}
                >
                    正常に送信されました。
                </Alert>
            </Snackbar>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                autoHideDuration={5000}
                open={canOpenErrorAlert}
                onClose={closeErrorAlert}
                TransitionComponent={(props) => (
                    <Slide {...props} direction="down" unmountOnExit />
                )}
            >
                <Alert
                    severity="error"
                    variant="filled"
                    onClose={closeErrorAlert}
                    sx={{ p: 3 }}
                >
                    送信されませんでした。再度お試しくださいませ。
                </Alert>
            </Snackbar>
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
                    disabled={isLoading}
                    startIcon={<SendIcon />}
                    size="large"
                    sx={{
                        background: COLORS.accentDarkColor,
                        width: '80%',
                        mt: 1,
                    }}
                    type="submit"
                >
                    送信
                </Button>
            </Box>
        </>
    );
};
