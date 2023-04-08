import React from "react";
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../../../contexts/AuthContext";
import { render, fireEvent, queryAllByTestId } from "@testing-library/react";
import { RecipeSearch } from "./RecipeSearch";

const Component = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <RecipeSearch />
            </AuthProvider>
        </BrowserRouter>
    )
};

describe("Load and display Search Component", () => {
    it("Render inputs", () => {
        const { queryAllByRole, queryByPlaceholderText } = render(<Component />);
        expect(queryByPlaceholderText(/Search by name/i)).toBeTruthy();
        expect(queryAllByRole("button")).toBeTruthy();
    });

    it("Updates on change", () => {
        const { queryAllByRole, queryByPlaceholderText } = render(<Component />);

        const searchInput = queryByPlaceholderText(/Search by name/i);
        fireEvent.change(searchInput, { target: { value: "Recipe" } });

        expect(searchInput.value).toBe('Recipe');
    });
});