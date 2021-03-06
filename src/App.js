import "./App.css";
import FormComponent from "./components/form/FormComponent";
import Contacts from "./components/contacts/Contacts";
import { useState } from "react";
import { addInfo } from "./utils/functions";

const initialValues = { userName: "", phoneNumber: "", gender: "NO INFO" };
function App() {
  const handleFormSubmit = () => {
    addInfo(info);
  };
  const [info, setInfo] = useState(initialValues);
  return (
    <div className="App">
      <FormComponent
        info={info}
        setInfo={setInfo}
        handleFormSubmit={handleFormSubmit}
      />
      <Contacts />
    </div>
  );
}

export default App;
