# React Native TypeScript Component Library Starter 🚀

Makes it really easy to create react native components using typescript and publishing them to npm.

## Testing / developing your component library

* Create new components in the `./library/` folder.
* Simply use the components (like regular files) from the `App.tsx` example app and test using expo by writing `npm start`.

## Building your component library

* Edit the file `library/package.json` with your details
* Make sure to export your components from the `./library/index.ts` file.
* When done run `npm run build-library` _(Important note: requires a bash console, powershell or cmd will not work)_. This will convert the typescript files into `.js` files and add `.d.ts` files.

## Publishing your component library to npm

* When ready to publish to npm run: `npm run publish-library`
