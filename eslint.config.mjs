import { type Config } from "eslint";

const config: Config = {
  extends: ["next/core-web-vitals", "next/typescript"],
  rules: {
    "@typescript-eslint/no-unused-vars": ["warn"],
    "react/no-unescaped-entities": "off",
  },
};

export default config;
