import type { Blog } from '#src/types';

import { useState } from 'react';
import { Tabs, Tab, Box, SxProps, Theme, Container } from '@mui/material';

import { MarkdownView } from '#src/components';
import { COLORS } from '#src/styles';
import { blogDataContext } from './contexts';
import { MarkdownEditor } from './MarkdownEditor';
import { MetaDataEditor } from './MetaDataEditor';

type TabPanelProps = {
  children: React.ReactNode;
  index: number;
  focus: number;
  sx?: SxProps<Theme>;
};

const TabPanel: React.FC<TabPanelProps> = ({
  children,
  index,
  focus,
  sx = {},
}: TabPanelProps) => {
  return (
    <div hidden={focus !== index} id={`blog-tabpanel-${index}`}>
      {focus === index && <Box sx={sx}>{children}</Box>}
    </div>
  );
};

export const EditorBase: React.FC<{ blogData: Blog }> = ({ blogData }) => {
  // フォーカスされているタブ
  const [focus, setfocus] = useState(0);

  // ブログコンテクスト
  const [blogDataContextValue, setBlogDataContextValue] = useState(blogData);

  // タブ切り換え
  const handleTabChange = (event: React.SyntheticEvent, newfocus: number) => {
    setfocus(newfocus);
  };

  function a11yProps(index: number) {
    return {
      id: `blog-tab-${index}`,
      'aria-controls': `blog-tabpanel-${index}`,
    };
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: COLORS.whiteColor,
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          variant='fullWidth'
          value={focus}
          onChange={handleTabChange}
          TabIndicatorProps={{ style: { background: COLORS.baseColor } }}
          aria-label='Editor tabs'
        >
          <Tab
            label='Editor'
            sx={{ '&.Mui-selected': { color: COLORS.baseColor } }}
            {...a11yProps(0)}
          />
          <Tab
            label='Preview'
            sx={{ '&.Mui-selected': { color: COLORS.baseColor } }}
            {...a11yProps(1)}
          />
          <Tab
            label='Meta'
            sx={{ '&.Mui-selected': { color: COLORS.baseColor } }}
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>

      <blogDataContext.Provider
        value={{
          blogDataContextValue,
          setBlogDataContextValue,
        }}
      >
        <TabPanel focus={focus} index={0}>
          <Container>
            <MarkdownEditor />
          </Container>
        </TabPanel>

        <TabPanel
          focus={focus}
          index={1}
          sx={{ backgroundColor: COLORS.mainColor }}
        >
          <Container>
            <MarkdownView body={blogDataContextValue.content} />
          </Container>
        </TabPanel>

        <TabPanel focus={focus} index={2}>
          <Container>
            <MetaDataEditor />
          </Container>
        </TabPanel>
      </blogDataContext.Provider>
    </Box>
  );
};
