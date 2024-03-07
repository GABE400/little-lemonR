import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookForm from "./BookForm";

describe("BookForm Component", () => {
  // Mocking the useNavigate hook
  jest.mock("react-router-dom", () => ({
    useNavigate: jest.fn(),
  }));

  it("renders the form correctly", () => {
    const { getByLabelText, getByText } = render(<BookForm />);

    expect(getByLabelText("Choose Date:")).toBeInTheDocument();
    expect(getByLabelText("Choose Time:")).toBeInTheDocument();
    expect(getByLabelText("Number of Guests:")).toBeInTheDocument();
    expect(getByLabelText("Occasion:")).toBeInTheDocument();
    expect(getByText("Make Your Reservation")).toBeInTheDocument();
  });

  it("submits the form and navigates to success page on successful submission", async () => {
    const { getByLabelText, getByText } = render(<BookForm />);
    const mockSubmit = jest.fn(() => Promise.resolve({ ok: true }));

    // Mocking the mockSubmit function
    jest.spyOn(global, "fetch").mockImplementation(mockSubmit);

    fireEvent.change(getByLabelText("Choose Date:"), {
      target: { value: "2024-03-08" },
    });
    fireEvent.change(getByLabelText("Choose Time:"), {
      target: { value: "12:00 PM" },
    });
    fireEvent.change(getByLabelText("Number of Guests:"), {
      target: { value: "5" },
    });
    fireEvent.change(getByLabelText("Occasion:"), {
      target: { value: "Birthday" },
    });

    fireEvent.click(getByLabelText("On Click"));

    // Wait for the asynchronous actions to complete
    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalled();
      expect(global.fetch).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({ method: "POST" })
      );
    });

    // Ensure navigation to success page
    expect(mockNavigate).toHaveBeenCalledWith("/success");
  });

  it("displays an error message on form submission failure", async () => {
    const { getByLabelText, getByText } = render(<BookForm />);
    const mockSubmit = jest.fn(() => Promise.resolve({ ok: false }));

    // Mocking the mockSubmit function
    jest.spyOn(global, "fetch").mockImplementation(mockSubmit);

    fireEvent.click(getByLabelText("On Click"));

    // Wait for the asynchronous actions to complete
    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalled();
      expect(
        getByText("Failed to submit the form. Please try again.")
      ).toBeInTheDocument();
    });
  });

  it("displays an error message on unexpected error during form submission", async () => {
    const { getByLabelText, getByText } = render(<BookForm />);
    const mockSubmit = jest.fn(() =>
      Promise.reject(new Error("Unexpected error"))
    );

    // Mocking the mockSubmit function
    jest.spyOn(global, "fetch").mockImplementation(mockSubmit);

    fireEvent.click(getByLabelText("On Click"));

    // Wait for the asynchronous actions to complete
    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalled();
      expect(
        getByText("An unexpected error occurred. Please try again.")
      ).toBeInTheDocument();
    });
  });
});
