import React, { useState, useEffect } from 'react';
import { fetchItems } from '../api/swapi';
import { Grid, Card, CardContent, Typography, CardActionArea } from '@mui/material';
import Loader from './Loader';

const ItemList = ({ endpoint, onItemClick }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchItems(endpoint);
                setItems(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [endpoint]);

    if (loading) return <Loader />;
    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <Grid container spacing={2}>
            {items.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.name} onClick={() => onItemClick(item)}>
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Typography variant="h6">{item.name}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ItemList;
