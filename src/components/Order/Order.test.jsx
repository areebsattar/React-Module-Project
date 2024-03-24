import { render, fireEvent, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Order from "./Order";


describe('Order', () => {
    it('renders pizza on the page', () => {
        render(<Order />);
        const pizzaOrder = screen.getByText('Pizzas: 0');
        expect(pizzaOrder).toBeInTheDocument();
    });

    it('increments the number of order when "Add" button is clicked', () => {
        render(<Order />);
        const addButton = screen.getByText('Add Pizzas');
        fireEvent.click(addButton);
        const updatedPizzaOrder = screen.getByText('Pizzas: 1');
        expect(updatedPizzaOrder).toBeInTheDocument();
    });
})