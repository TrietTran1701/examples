const { generateTemplateFiles } = require("generate-template-files")
const config = require("../package.json")

generateTemplateFiles([
  {
    option: "Create Ngrx Store",
    defaultCase: "(upperCase)",
    entry: {
      folderPath: "./tools/templates/angular/ngrx-store/",
    },
    stringReplacers: [
      "__name__",
      // { question: "Insert model name", slot: "__model__" },
      {
        question: "Insert model name",
        slot: "__model__",
        replaceWith: (userInput) => userInput.toUpperCase(),
      },
      {
        question: "Insert action name",
        slot: "__action__",
        replaceWith: (userInput) => userInput.toUpperCase(),
      },
    ],
    output: {
      path: "./src/stores/__name__(kebabCase)",
      pathAndFileNameDefaultCase: "(kebabCase)",
      overwrite: true,
    },
  },
])
