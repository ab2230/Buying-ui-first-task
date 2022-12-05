import React from 'react'
import { render , fireEvent } from "@testing-library/react-native"
import ValueComponent from "../../components/valueComponent"

it("render correcrtlty",()=>{
    render(<ValueComponent/>)
})

it("shows an initial state of 1", () => {
    const { queryByText } = render(<ValueComponent />);

    const initialState = queryByText("1");
    expect(initialState).not.toBeNull();
  })

  it("increments by 1 each time + sign is pressed", () => {
    const { queryByText, getByTestId } = render(<ValueComponent />);

    const initialState = queryByText("1");
    expect(initialState).not.toBeNull();

    const increment = getByTestId("increaseButton");
    fireEvent.press(increment);

    const oneState = queryByText("2");
    expect(oneState).not.toBeNull();
  });

  it("decrements by 1 each time - sign is pressed", () => {
    const { queryByText, getByTestId } = render(<ValueComponent />);

    const initialState = queryByText("1");
    expect(initialState).not.toBeNull();

    const decrement = getByTestId("decreaseButton");
    fireEvent.press(decrement);

    const oneState = queryByText("0");
    expect(oneState).not.toBeNull();
  });