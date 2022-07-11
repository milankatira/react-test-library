// import { sayHello } from "./say-hello";
import * as config from "./constant/constant";
import { render, cleanup, screen } from "@testing-library/react";

import Mock from "./mock";

import * as Utils from "./constant/constant";

// jest.mock("./constant/constant", () => ({
//   TYPE: "inline",
// }));

describe("say-hello", () => {
  test("snapshot", () => {
    expect(render(<Mock />)).toMatchSnapshot();
  });

  test("Capitalizes name if config requires that", () => {
    Utils.TYPE = "inline";
    render(<Mock />);
    expect(screen.getByText("inline")).toHaveTextContent("inline");
  });

  test("does not capitalize name if config does not require that", () => {
    Utils.TYPE = "";
    render(<Mock />);
    expect(screen.queryByText("Hello")).toHaveTextContent("Hello");
  });
});
