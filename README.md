# react-dropdown-ts

## How to use it?

This package provides a customizable dropdown component for React applications. Below are the steps to install and use the `Dropdown` component in your React project.

### Install

You can install the package using npm or yarn:

```bash
# with npm
npm install react-dropdown-ts

# with yarn
yarn add react-dropdown-ts
```

### Usage
- Import `Dropdown` component and necessary dependencies in your React component:

```js
import { useState } from "react";
import { Dropdown } from "react-dropdown-ts";
```

- Declare useState hook to manage the selected option in your component:
```js
const [selected, setSelected] = useState<string | null>(null);
```

- Render the `Dropdown` component with necessary props:
```js
<Dropdown
  options={["mango", "banana"]}
  placeholder={"Select option"}
  selectedOption={selected}
  handleSelect={setSelected}
/>
```

# Props
### The `Dropdown` component accepts the following props:

- `options`: An array of strings representing the options to be displayed in the dropdown.
- `placeholder`: A string representing the placeholder text when no option is selected.
- `selectedOption`: A string representing the currently selected option.
- `handleSelect`: A function to handle the selection of an option.
- `color`: Optional. A string representing the color of the dropdown elements. It accepts both Tailwind CSS classes and normal CSS color codes.
- `borderColor`: Optional. A string representing the border color of the dropdown. It accepts both Tailwind CSS classes and normal CSS color codes.



# Example
```js
import { useState } from "react";
import { Dropdown } from "react-dropdown-ts";

function App() {
  const [selected, setSelected] = useState<string | null>(null);
  
  return (
    <>
      <Dropdown
        options={["React", "Angular", "Vue"]}
        placeholder={"Select framework"}
        selectedOption={selected}
        handleSelect={setSelected}
        color="text-black"
        borderColor="border-blue"
      />
    </>
  );
}

export default App;
```