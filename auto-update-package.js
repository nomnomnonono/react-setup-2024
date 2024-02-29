import { readFileSync, writeFileSync } from "fs";

const packageJson = readFileSync("package.json", "utf8");
const json = JSON.parse(packageJson);
console.log(json.scripts);

json["scripts"] = {
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
  prepare: "husky install",
};

json["lint-staged"] = {
  "*.{ts,tsx}": "eslint --fix",
  "*": "prettier --write --ignore-unknown",
};

writeFileSync("package.json", JSON.stringify(json, null, 2));

