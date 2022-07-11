describe("greetings", () => {
    beforeEach(() => jest.resetModules());
  
    describe("hello", () => {
      describe("when the language is set to galician", () => {
        it("returns galician for hi", () => {
          jest.mock("./constant/constant", () => ({ currentLanguage: "GL" }));
          const { hello } = require("./greet");
          expect(hello()).toEqual("Ola!");
        });
      });
  
      describe("when the language is not set to galician", () => {
        it("returns hi", () => {
          jest.mock("./constant/constant", () => ({ currentLanguage: "EN" }));
          const { hello } = require("./greet");
          expect(hello()).toEqual("Hi!");
        });
      });
    });
  });