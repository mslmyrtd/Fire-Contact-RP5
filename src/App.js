import "./App.css";
import FormComponent from "./components/form/FormComponent";
import Contacts from "./components/contacts/Contacts";
import { useState } from "react";

const initialValues = { userName: "", phoneNumber: "", gender: "NO INFO" };
function App() {
  const [info, setInfo] = useState(initialValues);
  return (
    <div className="App">
      <FormComponent info={info} setInfo={setInfo} />
      <Contacts />
    </div>
  );
}

export default App;
