import { readFileSync, writeFileSync } from "fs";

const packageJson = JSON.parse(readFileSync("package.json", "utf8"));

packageJson["lint-staged"] = {
  "*.{ts,tsx}": "eslint --fix",
  "*": "prettier --write --ignore-unknown",
};

packageJson["scripts"] = {
  dev: "vite",
  build: "tsc && vite build",
  preview: "vite preview",
  test: "vitest run --coverage",
  "update-snapshots": "vitest run --update",
  lint: "run-p lint:*",
  "lint:tsc": "tsc --noEmit",
  "lint:prettier": "prettier . --check",
  "lint:eslint": "eslint . --ext .ts,.tsx",
  fix: "run-s fix:*",
  "fix:prettier": "prettier . --write",
  "fix:eslint": "eslint . --ext .ts,.tsx --fix",
  prepare: "husky install"
};

writeFileSync("package.json", JSON.stringify(packageJson, null, 2));
