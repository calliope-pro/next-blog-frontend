import { useRecoilValue } from 'recoil';

import { isAuthenticatedState } from '#src/atoms/authAtom';
import { LoginForm, DashBoard } from '#src/components';

const LoginPage = () => {
  const isAuthed = useRecoilValue(isAuthenticatedState);

  if (isAuthed) {
    return <DashBoard />;
  } else {
    return <LoginForm />;
  }
};

export default LoginPage;
