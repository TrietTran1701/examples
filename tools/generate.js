const { generateTemplateFiles } = require('generate-template-files');
const config = require('../package.json');

generateTemplateFiles([
  {
    option: 'Create Ngrx Store',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/angular/ngrx-store/',
    },
    stringReplacers: ['__name__', { question: 'Insert model name', slot: '__model__' }],
    output: {
      path: './src/stores/__name__(lowerCase)',
      pathAndFileNameDefaultCase: '(kebabCase)',
      overwrite: true,
    },
  },
]);