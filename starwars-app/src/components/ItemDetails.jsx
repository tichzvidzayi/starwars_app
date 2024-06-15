import React, { useMemo } from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, Box } from '@mui/material';

const ItemDetails = ({ item, open, onClose }) => {
    const memoizedItem = useMemo(() => item, [item]);

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle style={{ backgroundColor: '#2a5298', color: 'white' }}>{memoizedItem.name}</DialogTitle>
            <DialogContent dividers style={{ backgroundColor: '#1e3c72', color: 'white' }}>
                {Object.keys(memoizedItem).map((key) => (
                    <Box mb={1} key={key}>
                        <Typography variant="body1">
                            <strong>{key.replace('_', ' ')}:</strong> {memoizedItem[key]}
                        </Typography>
                    </Box>
                ))}
            </DialogContent>
        </Dialog>
    );
};

export default ItemDetails;
