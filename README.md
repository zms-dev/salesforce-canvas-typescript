# Salesforce Canvas TypeScript Demo

Mostly used to demonstrate the use of `@salesforce/canvas-js-sdk` with `@types/salesforce__canvas-js-sdk`.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Local `d.ts` Development

To make changes to the Type Definitions you can fork and clone the DefinitelyTyped repo and `npm link` it into this demo project.

This supports automatic rebuilds of the demo project as you make changes inside DefinitelyTyped.

1. Fork [DefinitelyTyped/DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) and clone the new repo locally.

2. Go to the `types/salesforce__canvas-js-sdk` directory and create a temporary `package.json`

```
{
    "name": "@types/salesforce__canvas-js-sdk",
    "types": "index.d.ts"
}
```

3. Clone this typescript demo project locally and go to the root directory.

4. Install dependencies

```
npm install
```

5. Link the `types/salesforce__canvas-js-sdk` package from the locally cloned `DefinitelyTyped` repo

```
npm link /home/foo/projects/DefinitelyTyped/types/salesforce__canvas-js-sdk/
```

> **NOTE:** This should replace the `node_modules/@types/salesforce__canvas-js-sdk` with a symlink to your local copy.

6. Delete the temporary `package.json`

```
rm /home/foo/projects/DefinitelyTyped/types/salesforce__canvas-js-sdk/package.json
```

7. Start the demo project

```
npm start
```

8. Run DefinitelyTyped tests

```
npm test @salesforce/canvas-js-sdk
```

9. Now make changes to the the local DefinitelyTyped clone and watch the demo project automatically rebuild.
