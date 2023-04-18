import React from "react";
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../../contexts/AuthContext.js";
import { render, fireEvent } from "@testing-library/react";
import { RecipeAction } from './RecipeAction';

const Component = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <RecipeAction/>
            </AuthProvider>
        </BrowserRouter>
    )
}
describe("Loads and display Recipe action component", () => {
    it('Render inputs', () => {
        const { queryByRole, queryByPlaceholderText } = render (<Component />);

        expect(queryByPlaceholderText("Name")).toBeTruthy();
        expect(queryByPlaceholderText("Preparation time in minutes")).toBeTruthy();
        expect(queryByPlaceholderText("Cooking time in minutes")).toBeTruthy();
        expect(queryByPlaceholderText("3")).toBeTruthy();
        expect(queryByPlaceholderText(/avocado/i)).toBeTruthy();
        expect(queryByPlaceholderText(/First step./i)).toBeTruthy();
        expect(queryByPlaceholderText("https://...")).toBeTruthy();
        expect(queryByPlaceholderText("https://youtube.com/...")).toBeTruthy();

        expect(queryByRole("button")).toBeTruthy();
    });
});

describe("Input value", () => {
    it("updates on change", () => {
        const { queryByPlaceholderText } = render(<Component />);

        const nameInput = queryByPlaceholderText('Name');
        fireEvent.change(nameInput, { target: { value: 'Recipe test' } });

        const prepTimeInput = queryByPlaceholderText('Preparation time in minutes');
        fireEvent.change(prepTimeInput, { target: { value: '15' } });

        const cookTimeInput = queryByPlaceholderText('Cooking time in minutes');
        fireEvent.change(cookTimeInput, { target: { value: '30' } });

        const servingsInput = queryByPlaceholderText('3');
        fireEvent.change(servingsInput, { target: { value: '5' } });
        
        const ingredientsInput = queryByPlaceholderText('2 avocados, 1 banana..');
        fireEvent.change(ingredientsInput, { target: { value: '1 avocado' } });
        
        const preparationInput = queryByPlaceholderText(/First step./i);
        fireEvent.change(preparationInput, { target: { value: 'Cut the avocado' } });
        
        const imageInput = queryByPlaceholderText('https://...');
        fireEvent.change(imageInput, { target: { value: 'https://url.com' } });

        const videoInput = queryByPlaceholderText('https://youtube.com/...');
        fireEvent.change(videoInput, { target: { value: 'https://youtube.com/test' } });

        expect(nameInput.value).toBe("Recipe test");
        expect(prepTimeInput.value).toBe("15");
        expect(cookTimeInput.value).toBe("30");
        expect(servingsInput.value).toBe("5");
        expect(ingredientsInput.value).toBe("1 avocado");
        expect(preparationInput.value).toBe("Cut the avocado");
        expect(imageInput.value).toBe("https://url.com");
        expect(videoInput.value).toBe("https://youtube.com/test");
    });
});
