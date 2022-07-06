import React from "react";
import { render, screen } from "@testing-library/react";

function MyComponent() {
  return (
    <div>
      {/* <p className='moto'>
        Zubloc gives creators full control over their digital assets.
      </p>
      <p className='description'>
        Buy, sell, and license your assets on our ultra-safe platform.
      </p> */}

      <a href='/about'>About ℹ️</a>
      <button>hello there</button>
      <h1>hello there</h1>
      <h2>Hello</h2>
      <label id='username'>Username</label>
      <input
        data-testid='input-test'
        aria-labelledby='username'
        defaultValue='Username'
        placeholder='Username'
      />

      <input type='text' id='lastName' value='Norris' />
    </div>
  );
}

describe("home", () => {
  render(<MyComponent />);
  it("GET QUERY",async () => {
    //TODO GET QUERY

    //TODO get by role
    expect(screen.getByRole("button")).toHaveTextContent("hello there");

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "hello there"
    );
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Hello"
    );

    //TODO get by label text
    expect(
      screen.getByLabelText("Username", { selector: "input" }).defaultValue
    ).toBe("Username");

    //TODO get by placeholder text
    expect(
      screen.getByPlaceholderText("Username", { selector: "input" })
        .defaultValue
    ).toBe("Username");

    //TODO get by test
    expect(screen.getByText(/about/i)).toBeInTheDocument(true);

    //TODO get by display 
    expect(screen.getByDisplayValue("Norris").value).toBe("Norris");

    //TODO get by testid 
    expect(screen.getByTestId('input-test').value).toBe("Username");

    //TODO query by 
    expect(screen.queryByTestId('input-test').value).toBe("Username");


    //TODO findBY (===>>find by must be a async function <<===)
    expect(await screen.findByText("Username")).toBeVisible()


    //TODO find by role
    expect(await screen.findByRole("heading", { level: 2 })).toHaveTextContent(
      "Hello"
    );

    //TODO find by text
    expect(await screen.findByText("Username")).toBeVisible()
  });
});
