const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

const buildPrettierCommand = (filenames) =>
  `npx prettier --write ${filenames.join(" ")}`;

module.exports = {
  // This will lint and format ts/js files
  "**/*.(ts|tsx|js)": [buildEslintCommand, buildPrettierCommand],
  // this will Format MarkDown and JSON
  "**/*.(md|json)": [buildPrettierCommand],
};
