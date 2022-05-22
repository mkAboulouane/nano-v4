// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  dateFormatCreate: 'dd/mm/yy',
  dateFormatEdit: 'dd/mm/yy',
  dateFormatView: 'dd/mm/yy',
  dateFormatList: 'dd/MM/yyyy',
  trueValue: 'Vrai',
  falseValue: 'Faux',
  emptyForExport: '-----',

  adminUrl: 'http://localhost:8036/admin/',
  apiUrl: 'http://localhost:8036/app',
  loginUrl: 'http://localhost:8036/',
  rootAppUrl:'app',
};
