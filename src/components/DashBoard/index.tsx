import type { BlogTableData } from '#src/types';

import { v1 as uuid1 } from 'uuid';
import { Alert, Fab, Snackbar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { Loader } from '#src/components';
import { useBlogListState } from '#src/utils/hooks';
import { BlogTable } from './BlogTable';

export const DashBoard: React.FC = () => {
  const { data, error } = useBlogListState(false);

  const rows: BlogTableData[] = data || [];

  function getNewUuid() {
    let uuidCreated = uuid1();
    while (rows.findIndex((blog) => blog.uuid === uuidCreated) !== -1) {
      uuidCreated = uuid1();
    }
    return uuidCreated;
  }

  if (error) {
    return (
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={error ? true : false}
      >
        <Alert variant='filled' severity='error' sx={{ width: '100%' }}>
          読み込みに失敗しました。
        </Alert>
      </Snackbar>
    );
  }
  if (!data) {
    return <Loader />;
  }
  return (
    <>
      <BlogTable rows={rows} />
      <Fab
        href={`admin/${getNewUuid()}`}
        size='large'
        color='primary'
        sx={{ left: 40, bottom: 30, position: 'fixed' }}
      >
        <AddIcon color='inherit' />
      </Fab>
    </>
  );
};
