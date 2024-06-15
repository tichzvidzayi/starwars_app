import React, { useState } from 'react';
import ItemList from '../components/ItemList';
import ItemDetails from '../components/ItemDetails';
import { Container, Button, Box } from '@mui/material';

const HomePage = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [category, setCategory] = useState('people');

    return (
        <Container>
            <Box display="flex" justifyContent="center" mb={2}>
                <Button variant="contained" onClick={() => setCategory('people')}>
                    People
                </Button>
                <Button variant="contained" onClick={() => setCategory('starships')}>
                    Starships
                </Button>
                <Button variant="contained" onClick={() => setCategory('planets')}>
                    Planets
                </Button>
            </Box>
            <ItemList endpoint={category} onItemClick={setSelectedItem} />
            {selectedItem && (
                <ItemDetails item={selectedItem} open={!!selectedItem} onClose={() => setSelectedItem(null)} />
            )}
        </Container>
    );
};

export default HomePage;
