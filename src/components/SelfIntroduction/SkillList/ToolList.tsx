import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import {
    DockerIcon,
    FigmaIcon,
    GCPIcon,
    GitHubActionsIcon,
    GitHubIcon,
    GitIcon,
    NoIcon,
    NotionIcon,
    OpenAPIIcon,
    PostgreIcon,
    SwaggerIcon,
    UbuntuIcon,
    VScodeIcon,
} from '#src/components/Icons';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export const ToolList: React.FC = () => {
    const [open, setOpen] = useState(false);
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
                        <UbuntuIcon />
                    </ListItemIcon>
                    <ListItemText primary="Ubuntu" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <DockerIcon />
                    </ListItemIcon>
                    <ListItemText primary="Docker" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <OpenAPIIcon />
                    </ListItemIcon>
                    <ListItemText primary="OpenAPI" />
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
                <ListItem>
                    <ListItemIcon>
                        <PostgreIcon />
                    </ListItemIcon>
                    <ListItemText primary="PostgreSQL" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <GCPIcon />
                    </ListItemIcon>
                    <ListItemText primary="Google Cloud Platform" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <NoIcon />
                    </ListItemIcon>
                    <ListItemText primary="Deta" />
                </ListItem>
            </Collapse>
        </List>
    );
};
