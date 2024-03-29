import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { LoginForm, Editor, Loader } from '#src/components';
import { isAuthenticatedState } from '#src/atoms/authAtom';
import { NextSeo } from 'next-seo';

const CreateBlogPage = () => {
    const isAuthed = useRecoilValue(isAuthenticatedState);

    const [uuid, setUuid] = useState<undefined | string>(undefined);

    const router = useRouter();
    useEffect(() => {
        if (router.isReady) {
            setUuid(router.query.uuid as string);
        }
    }, [router]);

    if (isAuthed) {
        return (
            <>
                <NextSeo title="Dashboard" />
                {uuid ? <Editor uuid={uuid} /> : <Loader />}
            </>
        );
    } else {
        return (
            <>
                <NextSeo title="Login" />
                <LoginForm />
            </>
        );
    }
};

export default CreateBlogPage;
