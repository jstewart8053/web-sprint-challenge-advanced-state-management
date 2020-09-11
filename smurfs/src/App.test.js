import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./components/App";

test('testing', () => {
    render(<App />)
})

const name = screen.queryByPlaceholderText('Enter Name');
const age = screen.queryByPlaceholderText('Enter Age');
const height = screen.queryByPlaceholderText('Enter Height');

fireEvent.change(name, {
    target: { name: 'name', value: 'Jaxon' }
});
fireEvent.change(age, {
    target: { age: 'age', value: '9' }
});
fireEvent.change(height, {
    target: { height: 'height', value: '5`9' }
});