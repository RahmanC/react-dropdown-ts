import { useState } from "react";
import { Dropdown } from "./components/Dropdown";

function App() {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <div>
      <Dropdown
        options={["mango mango mango", "banana"]}
        placeholder={"Select option"}
        selectedOption={selected}
        handleSelect={setSelected}
        color="text-red-500"
        borderColor="border-blue-500"
      />
    </div>
  );
}

export default App;
