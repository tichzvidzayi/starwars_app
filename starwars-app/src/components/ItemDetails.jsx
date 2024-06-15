import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography } from '@mui/material';

const ItemDetails = ({ item, open, onClose }) => (
    <Dialog open={open} onClose={onClose}>
        <DialogTitle>{item.name}</DialogTitle>
        <DialogContent>
            {Object.keys(item).map((key) => (
                <Typography key={key}>
                    <strong>{key.replace('_', ' ')}:</strong> {item[key]}
                </Typography>
            ))}
        </DialogContent>
    </Dialog>
);

export default ItemDetails;
