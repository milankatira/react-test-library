import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";

const Button = ({ onClick, children }) => (
  <>
    <button onClick={onClick}>{children}</button>
    <h1>the lion king</h1>
  </>
);

describe("fireEvent", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it("fireEvent", async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByText(/click me/i));
    expect(handleClick).toHaveBeenCalledTimes(1);

    //TODO async wait for function call
    await waitFor(() => expect(handleClick).toHaveBeenCalledTimes(1));
    await waitFor(() => {
      expect(screen.getByText(/click me/i)).toBeInTheDocument();
    });
  });
});
