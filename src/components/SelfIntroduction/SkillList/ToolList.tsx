import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Divider, ListItemButton, ListItemIcon, Typography } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import {
    DockerIcon,
    FigmaIcon,
    GitHubActionsIcon,
    GitHubIcon,
    GitIcon,
    NotionIcon,
    SwaggerIcon,
    VScodeIcon,
} from '#src/components/Icons';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export const ToolList: React.FC = () => {
    const [open, setOpen] = useState(true);
    return (
        <List
            component="nav"
            subheader={
                <>
                    <ListItemButton
                        onClick={() => setOpen((prev) => !prev)}
                        sx={{ pl: 0, py: 0 }}
                    >
                        <ListItemText
                            primary={
                                <Typography variant="h5">Tools</Typography>
                            }
                        ></ListItemText>
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Divider />
                </>
            }
        >
            <Collapse in={open} timeout="auto" unmountOnExit>
                <ListItem>
                    <ListItemIcon>
                        <GitIcon />
                    </ListItemIcon>
                    <ListItemText primary="Git" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <GitHubIcon />
                    </ListItemIcon>
                    <ListItemText primary="GitHub" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <GitHubActionsIcon />
                    </ListItemIcon>
                    <ListItemText primary="GitHub Actions" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <DockerIcon />
                    </ListItemIcon>
                    <ListItemText primary="Docker" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <SwaggerIcon />
                    </ListItemIcon>
                    <ListItemText primary="Swagger" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <VScodeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Visual Studio Code" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <NotionIcon />
                    </ListItemIcon>
                    <ListItemText primary="Notion" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <FigmaIcon />
                    </ListItemIcon>
                    <ListItemText primary="Figma" />
                </ListItem>
            </Collapse>
        </List>
    );
};
