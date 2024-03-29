import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import {
    DjangoIcon,
    FastapiIcon,
    JavaScriptIcon,
    NextjsIcon,
    NumpyIcon,
    NuxtIcon,
    PandasIcon,
    PrettierIcon,
    PytestIcon,
    PythonIcon,
    PytorchIcon,
    ReactIcon,
    ScikitLearnIcon,
    SeleniumIcon,
    SvelteIcon,
    TypeScriptIcon,
    VueIcon,
} from '#src/components';
import {
    ChakraIcon,
    ESLintIcon,
    FramerMotionIcon,
    JestIcon,
    JQueryIcon,
    MuiIcon,
    NestjsIcon,
    NoIcon,
    StorybookIcon,
    VuetifyIcon,
} from '#src/components/Icons';

export const ProgrammingSkillList: React.FC = () => {
    const [openPython, setOpenPython] = useState(false);
    const [openJavaScript, setOpenJavaScript] = useState(false);

    const handleClickPython = () => {
        setOpenPython((prev) => !prev);
    };

    const handleClickJavaScript = () => {
        setOpenJavaScript((prev) => !prev);
    };

    return (
        <List
            component="nav"
            subheader={
                <>
                    <Typography variant="h5">Frameworks</Typography>
                    <Divider />
                </>
            }
        >
            <ListItemButton onClick={handleClickPython}>
                <ListItemIcon>
                    <PythonIcon />
                </ListItemIcon>
                <ListItemText primary="Python" />
                {openPython ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={openPython} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <FastapiIcon />
                        </ListItemIcon>
                        <ListItemText primary="FastAPI" />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <DjangoIcon />
                        </ListItemIcon>
                        <ListItemText primary="Django / DRF" />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <SeleniumIcon />
                        </ListItemIcon>
                        <ListItemText primary="Selenium" />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <NumpyIcon />
                        </ListItemIcon>
                        <ListItemText primary="NumPy" />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <PandasIcon />
                        </ListItemIcon>
                        <ListItemText primary="Pandas" />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <ScikitLearnIcon />
                        </ListItemIcon>
                        <ListItemText primary="Scikit-learn" />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <PytorchIcon />
                        </ListItemIcon>
                        <ListItemText primary="PyTorch" />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <PytestIcon />
                        </ListItemIcon>
                        <ListItemText primary="Pytest" />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <NoIcon />
                        </ListItemIcon>
                        <ListItemText primary="Black" />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <NoIcon />
                        </ListItemIcon>
                        <ListItemText primary="Flake8" />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <NoIcon />
                        </ListItemIcon>
                        <ListItemText primary="isort" />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <NoIcon />
                        </ListItemIcon>
                        <ListItemText primary="Bandit" />
                    </ListItem>
                </List>
            </Collapse>

            <ListItemButton onClick={handleClickJavaScript}>
                <ListItemIcon>
                    <JavaScriptIcon />
                </ListItemIcon>
                <ListItemText primary="JavaScript" />
                {openJavaScript ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={openJavaScript} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <TypeScriptIcon />
                        </ListItemIcon>
                        <ListItemText primary="TypeScript" />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <JQueryIcon />
                        </ListItemIcon>
                        <ListItemText primary="jQuery" />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <ReactIcon />
                        </ListItemIcon>
                        <ListItemText primary="React" />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <NextjsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Next" />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <ChakraIcon />
                        </ListItemIcon>
                        <ListItemText primary="Chakra UI" />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <MuiIcon />
                        </ListItemIcon>
                        <ListItemText primary="Material UI" />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <FramerMotionIcon />
                        </ListItemIcon>
                        <ListItemText primary="Framer Motion" />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <SvelteIcon />
                        </ListItemIcon>
                        <ListItemText primary="Svelte / SvelteKit" />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <VueIcon />
                        </ListItemIcon>
                        <ListItemText primary="Vue" />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <NuxtIcon />
                        </ListItemIcon>
                        <ListItemText primary="Nuxt" />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <VuetifyIcon />
                        </ListItemIcon>
                        <ListItemText primary="Vuetify" />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <NestjsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Nest" />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <ESLintIcon />
                        </ListItemIcon>
                        <ListItemText primary="ESLint" />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <PrettierIcon />
                        </ListItemIcon>
                        <ListItemText primary="Prettier" />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StorybookIcon />
                        </ListItemIcon>
                        <ListItemText primary="Storybook" />
                    </ListItem>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <JestIcon />
                        </ListItemIcon>
                        <ListItemText primary="Jest" />
                    </ListItem>
                </List>
            </Collapse>
        </List>
    );
};
