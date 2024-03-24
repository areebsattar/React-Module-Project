import { describe, it, expect } from "vitest";
import { render, fireEvent } from '@testing-library/react';
import RestaurantButton from "./RestaurantButton";

describe('RestaurantButton', () => {
    it('increments the number of pizzas when the button is clicked', () => {
        const mockOrderOne = () => {
            mockOrderOne.called = true;
        };

        const { getByText } = render(<RestaurantButton OrderOne={mockOrderOne} />);
        const addButton = getByText('Add');
        fireEvent.click(addButton);
        expect(mockOrderOne.called).toBe(true);
    });
});