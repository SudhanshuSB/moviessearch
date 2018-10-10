// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,


  // Initialize Firebase
  firebase: {
    apiKey: "AIzaSyC4Auel1rrlzGDJb6hW_hD9IZGCC64jF60",
    authDomain: "moviesearch-48256.firebaseapp.com",
    databaseURL: "https://moviesearch-48256.firebaseio.com",
    projectId: "moviesearch-48256",
    storageBucket: "moviesearch-48256.appspot.com",
    messagingSenderId: "763460731908"
  }
};
