import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Divider, Typography } from '@mui/material';

export const CertificationsList: React.FC = () => {
  return (
    <List
      component="nav"
      subheader={
        <>
          <Typography variant="h5">Certifications</Typography>
          <Divider />
        </>
      }
    >
      <ListItem sx={{ listStyle: 'disc', display: 'list-item' }}>
        <Typography component="span">英検 2級</Typography>
      </ListItem>
      <ListItem sx={{ listStyle: 'disc', display: 'list-item' }}>
        <Typography component="span">HSK 5級</Typography>
      </ListItem>
      <ListItem sx={{ listStyle: 'disc', display: 'list-item' }}>
        <Typography component="span">E資格 勉強中</Typography>
      </ListItem>
    </List>
  );
};
