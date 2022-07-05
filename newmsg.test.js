// __tests__/hidden-message.js
// these imports are something you'd normally configure Jest to import for you
// automatically. Learn more in the setup docs: https://testing-library.com/docs/react-testing-library/setup#cleanup
import "@testing-library/jest-dom";
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import { within } from "@testing-library/dom";
import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import HiddenMessage from "./Msg";

test("shows the children when the checkbox is checked", () => {
  const testMessage = "Test Message";
  const data = render(<HiddenMessage>{testMessage}</HiddenMessage>);

  //   render(<MyComponent />)
  //   const { getByText } = within(screen.getByTestId("test"));
  //   expect(getByText("Test Message")).toBeInTheDocument();
  //   console.log("daat", data);
  // query* functions will return the element or null if it cannot be found
  // get* functions will return the element or throw an error if it cannot be found
  //   expect(screen.queryByText(testMessage)).toBe("Test Message");
  //   console.log(getByText("Test Message"), "FF");
  //   expect(screen.getByTestId('test')).toHaveTextContent('Test Message')

  expect(screen.getByTestId("test")).toHaveTextContent("Test Message");
  expect(screen.getByRole("button")).toHaveTextContent("myButton");

  //   expect(screen.findAllByText('myButton')).toBe('myButton');

  // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
  //   fireEvent.click(screen.getByLabelText(/show/i));

  // .toBeInTheDocument() is an assertion that comes from jest-dom
  // otherwise you could use .toBeDefined()
  //   expect(screen.getByText(testMessage)).toBeInTheDocument();
});
