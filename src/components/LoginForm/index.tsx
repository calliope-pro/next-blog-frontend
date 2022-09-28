import type { User } from '#src/types';

import assert from 'assert';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { FormControl, InputLabel, Input, Button, Box } from '@mui/material';

import { isAuthenticatedState } from '#src/atoms/authAtom';
import { adminLogin } from '#src/utils/api/auth';

export const LoginForm: React.FC = () => {
  const setIsAuthed = useSetRecoilState(isAuthenticatedState);

  // Userに関してのform設定
  const { register, handleSubmit } = useForm<User & { securityCode: string }>();

  // submit時
  const onSubmit = handleSubmit(async (data) => {
    // security codeチェック
    assert(
      data.securityCode === process.env.ENV_SECURITY_CODE,
      'Invalid Security Code!',
    );

    const response = await adminLogin({
      username: data.username,
      password: data.password,
    });

    if (response.status === 200) {
      setIsAuthed(() => true);
    }
  });

  return (
    <Box textAlign="center">
      <form onSubmit={onSubmit}>
        <FormControl>
          <InputLabel htmlFor="username">username:</InputLabel>
          <Input type="text" {...register('username')} />
        </FormControl>

        <br />

        <FormControl>
          <InputLabel htmlFor="password">password:</InputLabel>
          <Input type="password" {...register('password')} />
        </FormControl>

        <br />

        <FormControl>
          <InputLabel htmlFor="securityCode">security code:</InputLabel>
          <Input
            type="number"
            {...register('securityCode', { maxLength: 3, pattern: /[0-9]{3}/ })}
          />
        </FormControl>

        <br />

        <Button type="submit">login</Button>
      </form>
    </Box>
  );
};
