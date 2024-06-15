import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemList from '../components/ItemList';

describe('ItemList Component', () => {
    it('renders item cards correctly', () => {
        const mockItems = [
            { name: 'Item 1', id: 1 },
            { name: 'Item 2', id: 2 },
        ];

        render(<ItemList items={mockItems} />);

        expect(screen.getByText('Item 1')).toBeInTheDocument();
        expect(screen.getByText('Item 2')).toBeInTheDocument();
    });

    it('displays loader when loading', () => {
        render(<ItemList loading={true} />);

        expect(screen.getByTestId('loader')).toBeInTheDocument();
    });

    // Add more test cases as needed
});
