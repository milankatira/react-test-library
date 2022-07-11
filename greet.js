import { currentLanguage } from "./constant/constant";

export const hello = () => (currentLanguage === "GL" ? "Ola!" : "Hi!");