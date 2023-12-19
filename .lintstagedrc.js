const path = require("path");

// Next.js homemade lint + Lint Staged
const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

// Prettier with Lint Staged
const buildPrettierCommand = (filenames) =>
  `npx prettier --write ${filenames.join(" ")}`;

module.exports = {
  // This will lint and format ts/js files
  "**/*.(ts|tsx|js)": [buildEslintCommand, buildPrettierCommand],
  // this will Format MarkDown and JSON
  "**/*.(md|json)": [buildPrettierCommand],
};
