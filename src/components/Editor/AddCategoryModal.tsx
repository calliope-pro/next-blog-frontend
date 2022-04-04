import React, { RefObject, useRef, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  IconButton,
  Modal,
  Paper,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';

import { adminPostCategory } from '#src/utils/backendApi';

// Categoryを追加するためのモーダル
export const AddCategoryModal: React.FC = () => {
  // Modalが表示されているか
  const [isDisplayed, setIsDisplayed] = useState(false);

  // inputの参照
  const ref = useRef(null) as RefObject<HTMLInputElement>;
  return (
    <>
      <IconButton
        onClick={() => {
          setIsDisplayed((prev) => !prev);
        }}
      >
        <AddIcon />
      </IconButton>

      <Modal
        open={isDisplayed}
        onClose={(e, r) => {
          if (r !== 'backdropClick') {
            setIsDisplayed(false);
          }
        }}
      >
        <Paper
          sx={{
            position: 'absolute',
            width: '50%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
          }}
        >
          <Stack>
            <Box sx={{ margin: '0 0 0 auto' }}>
              <Tooltip title="Close">
                <IconButton onClick={() => setIsDisplayed(false)}>
                  <CloseIcon />
                </IconButton>
              </Tooltip>
            </Box>

            <Typography variant="h4">Add Categories</Typography>

            <TextField
              autoFocus
              margin="normal"
              label="New Category"
              type="text"
              placeholder="Python"
              inputRef={ref}
            />

            <Button
              variant="contained"
              onClick={async () => {
                await adminPostCategory({
                  label: ref.current?.value.trim() || '',
                  key: -1,
                });
              }}
            >
              add
            </Button>
          </Stack>
        </Paper>
      </Modal>
    </>
  );
};
