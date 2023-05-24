# Balboa Signup

This project was built for signing up for subscription.

# Viewing

You can view a prototype of the app here [Click Me To Redirect](https://venerable-jelly-b73269.netlify.app/)

### Note: Might not be the latest version, do not click twice on "try it free button".

# Screenshots

![App Screenshot](https://i.ibb.co/26C9WB5/sample.png[/img][/url])

# Developers Reference

### CustomForm dataIn

array of fields to display that contains the following properties.

| name       | Required | Type      | Description                                                                               |
| :--------- | :------- | :-------- | :---------------------------------------------------------------------------------------- |
| `name`     | `Yes`    | `string`  | used in field label                                                                       |
| `type`     | `Yes`    | `string`  | determined what type of input ex. email, password, string. mainly use for form validation |
| `required` | `Yes`    | `boolean` | used in condition for form validation                                                     |
| `modifier` | `Yes`    | `string`  | used as name for the value of form in state                                               |
| `value`    | `Yes`    | `string`  | initial value                                                                             |

### Usage/Examples

```javascript
import CustomForm from "CustomForm";

const formSchema = [
  {
    name: "First Name",
    type: "string",
    required: true,
    modifier: "firstName",
    value: "",
  },
  {
    name: "Last Name",
    type: "string",
    required: true,
    modifier: "lastName",
    value: "",
  },
  {
    name: "Email Address",
    type: "string",
    required: true,
    modifier: "email",
    value: "",
  },
  {
    name: "Password",
    type: "string",
    required: true,
    modifier: "password",
    value: "",
  },
];

function App() {
  return <CustomForm dataIn={formSchema} />;
}
```

### CustomButton dataIn

custom button that takes props that contains the following.

| name          | Required | Type            | Description                   |
| :------------ | :------- | :-------------- | :---------------------------- |
| `title`       | `Yes`    | `string`        | use to display as button text |
| `btnFunction` | `Yes`    | `function`      | button function to use        |
| `style`       | `Yes`    | `CSSproperties` | custom button styling         |
| `id`          | `Yes`    | `string`        | custom button ID              |

### Usage/Examples

```javascript
import CustomButton from "CustomButton";

function App() {
  return;
  <CustomButton
    title={<p>CLAIM YOUR FREE TRIAL</p>}
    id={"form-button"}
    btnFunction={() => handleSubmit()}
    style={styles.buttonStyle}
  />;
}
```

# Coding Convention

Please follow our standard convention

## 📁 Folder Naming

- Use only `kebab-case` + `lowercase` on `common` folder.
- Use `PascalCase` on `presentations` and `components` folder.
- Add `-v2` when creating another version of mini app component like <Form>.

```
src
├── common
|   ├── hooks
|   ├── styles
|   └── other-folder
├── components
|   ├── Button
|   └── List
└── presentations
    ├── Cart
    ├── Checkout
    └── Checkout-v2
```

## 📄 File Naming

- Use `camelCase` for types, redux, and other files mostly used in common folder.
- Use `PascalCase` for presentations and components files.
- Always start with word `use` on hooks files.

```
src
├── assets
|   ├── images
|   ├── styles
|   └── other-folder
|       └── otherFiles
├── components
|   ├── Button
|   |   └── index.ts
|   |   └── useViewModel.ts
|   |   └── useStyles.ts
|   ├── Form
|   |   └── index.ts
|   |   └── useViewModel.ts
|   |   └── useStyles.ts
└── presentations
    ├── HomePage
    |   └── index.tsx
```

## Available Scripts

In the project directory, you can run:

### `npm install`

Install depedencies and other needed to run the project

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Frameworks

-React
-Material UI

## Dev dependencies

- React

## Changelogs

#### version 1.1.0

    -Added dataIn for form component
    -Adjusted viewModel to cater flexibility of dataIn
    -Converted form into mini app to make more reusable and scallable
    -Added data schema for form DataIn in documentation(can read above)
    -Overall adjustments to improve scallability and reusability
