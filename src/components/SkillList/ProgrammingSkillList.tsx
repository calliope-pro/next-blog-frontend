import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Divider, Typography } from '@mui/material';
import {
  DjangoIcon,
  FastapiIcon,
  JavaScriptIcon,
  NextjsIcon,
  NumpyIcon,
  NuxtIcon,
  PandasIcon,
  PythonIcon,
  PytorchIcon,
  ReactIcon,
  ScikitLearnIcon,
  SeleniumIcon,
  SvelteIcon,
  TypeScriptIcon,
  VueIcon,
} from '../Icons';

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
          <Typography variant="h5">Programming</Typography>
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
            <ListItemText primary="Django" />
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
        </List>
      </Collapse>
    </List>
  );
};
