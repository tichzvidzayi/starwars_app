import React, { useState, useEffect, useMemo } from 'react';
import { fetchItems } from '../api/swapi';
import { Grid, Card, CardContent, Typography, CardActionArea, CardMedia, ButtonGroup, Button } from '@mui/material';
import Loader from './Loader';

const ItemList = ({ endpoint, onItemClick }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchItems(endpoint, page);
                setItems(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [endpoint, page]);

    const memoizedItems = useMemo(() => items, [items]);

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleNextPage = () => {
        setPage(page + 1);
    };

    if (loading) return <Loader />;

    if (error) return <Typography color="error">{error}</Typography>;

    const getItemImage = (item) => {
        switch (endpoint) {
            case 'people':
                return 'https://via.placeholder.com/150?text=Person';
            case 'starships':
                return 'https://via.placeholder.com/150?text=Starship';
            case 'planets':
                return 'https://via.placeholder.com/150?text=Planet';
            case 'films':
                return 'https://via.placeholder.com/150?text=Film';
            case 'species':
                return 'https://via.placeholder.com/150?text=Species';
            case 'vehicles':
                return 'https://via.placeholder.com/150?text=Vehicle';
            default:
                return 'https://via.placeholder.com/150';
        }
    };

    return (
        <div>
            <Grid container spacing={3} justifyContent="center">
                {memoizedItems.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item.name || item.title}>
                        <Card
                            sx={{
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                color: '#343333',
                                borderRadius: '10px',
                                overflow: 'hidden',
                                transition: 'transform 0.18s',
                                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                                '&:hover': { transform: 'scale(1.05)', boxShadow: '0 2px 15px rgba(0, 0, 0, 0.2)' },
                            }}
                            onClick={() => onItemClick(item)}
                        >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="100"
                                    image={getItemImage(item)}
                                    alt={item.name || item.title}
                                    sx={{ objectFit: 'cover' }}
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        component="div"
                                        align="center"
                                        sx={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                            padding: '10px',
                                            borderRadius: '10px',
                                            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                                        }}
                                    >
                                        {item.name || item.title}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <ButtonGroup sx={{ marginTop: '30px', justifyContent: 'center' }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handlePrevPage}
                    sx={{
                        fontSize: '0.8rem',
                        maxWidth: '30px',
                        borderRadius: '10px',
                        backgroundColor: '#007bff',
                        '&:hover': { backgroundColor: '#0056b3' },
                    }}
                >
                    Prev
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNextPage}
                    sx={{
                        fontSize: '0.8rem',
                        maxWidth: '30px',
                        borderRadius: '10px',
                        backgroundColor: '#007bff',
                        '&:hover': { backgroundColor: '#0056b3' },
                    }}
                >
                    Next
                </Button>
            </ButtonGroup>
        </div>
    );
};

export default ItemList;