import NextLink from 'next/link';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import MuiLink from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import ListIcon from '@mui/icons-material/List';

import { COLORS } from '#src/styles';

export const BlogIndex: React.FC<{ body: string }> = ({ body }) => {
    const [isHidden, setIsHidden] = useState(true);
    return (
        <Box>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography fontSize={20} color={COLORS.baseColor}>
                    目次
                </Typography>
                {isHidden ? (
                    <IconButton onClick={() => setIsHidden(false)}>
                        <ListIcon
                            sx={{
                                fontSize: 36,
                                color: COLORS.accentDarkColor,
                                cursor: 'pointer',
                            }}
                        />
                    </IconButton>
                ) : (
                    <IconButton onClick={() => setIsHidden(true)}>
                        <CloseIcon
                            sx={{
                                fontSize: 36,
                                color: COLORS.accentDarkColor,
                                cursor: 'pointer',
                            }}
                        />
                    </IconButton>
                )}
            </Stack>
            <Collapse in={!isHidden}>
                <List disablePadding>
                    <ReactMarkdown
                        allowedElements={['h1']}
                        includeElementIndex
                        components={{
                            h1: ({ children, node, index }) => (
                                <ListItem
                                    sx={{
                                        py: 0,
                                    }}
                                >
                                    <MuiLink
                                        href={`#${node.position!.start.line}`}
                                        component={NextLink}
                                        underline="none"
                                        color={COLORS.baseColor}
                                        fontSize={16}
                                        sx={{
                                            ':hover': {
                                                color: COLORS.accentDarkColor,
                                            },
                                        }}
                                    >
                                        {`${
                                            index! + 1
                                        }. ${children.toString()}`}
                                    </MuiLink>
                                </ListItem>
                            ),
                        }}
                    >
                        {body}
                    </ReactMarkdown>
                </List>
            </Collapse>
        </Box>
    );
};
