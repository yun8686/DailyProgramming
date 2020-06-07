import React, { useState } from 'react';
import { Button, Modal, Paper, Typography, Box, IconButton, Icon } from '@material-ui/core';

export function ModalSample() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="contained" color="primary" type="button" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Paper
          style={{
            left: '50%',
            top: '50%',
            position: 'absolute',
            maxWidth: '100%',
            minWidth: '400px',
            overflow: 'scroll',
            maxHeight: '70%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Box textAlign="center">
            <Typography>モーダル</Typography>
            <img src="https://picsum.photos/255/400" height={400} width={255}></img>
          </Box>
        </Paper>
      </Modal>
    </>
  );
}
