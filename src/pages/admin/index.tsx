import { useRecoilValue } from 'recoil';

import { isAuthenticatedState } from '../../atoms/authAtom';
import { LoginForm, DashBoard } from '../../components';

const LoginPage = () => {
  let isAuthed = useRecoilValue(isAuthenticatedState);

  if (isAuthed) {
    return <DashBoard />;
  } else {
    return <LoginForm />;
  }
};

export default LoginPage;
