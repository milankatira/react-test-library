import { act, renderHook } from "@testing-library/react-hooks";

import { useState, useEffect } from "react";

export function useUppercase(initialValue) {
  const transformed = initialValue.toUpperCase()
  const [value, setValue] = useState(transformed);

  const update = (newValue) => {
    setValue(newValue.toUpperCase());
  };

  useEffect(() => {
    setValue(initialValue.toUpperCase());
  }, [initialValue]);

  return { value, update };
}

describe("when called the `update` method", () => {

  it("changes the `value` and uppercases it", () => {

    const { result } = renderHook(() => useUppercase("Test string"));

    expect(result.current.value).toEqual("TEST STRING");
    
    act(() => result.current.update("Updated"));
    
    expect(result.current.value).toEqual("UPDATED");
  });
  
});
