// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: 'AIzaSyCN8rH46IsYRlhzve84TLJnQAPpU2t7yO4',
      authDomain: 'shop-auth-7754a.firebaseapp.com',
      databaseURL: 'https://shop-auth-7754a.firebaseio.com',
      projectId: 'shop-auth-7754a',
      storageBucket: 'shop-auth-7754a.appspot.com',
      messagingSenderId: '320699046415'
    }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
