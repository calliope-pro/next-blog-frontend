import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

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
            sx={{ mt: 2 }}
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
