import { useState, useEffect, useContext } from "react";
import { v4 as uuid } from "uuid";
import { context } from "../context/globalState";
import { useNavigate } from "react-router-dom";
import ValidateInfo from "../Validator/validateInfo";

const useValidator = () => {
  let navigate = useNavigate();
  const { users, addUser } = useContext(context);

  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault(); 

  

    if (ValidateInfo(values).name === 1 && ValidateInfo(values).email === 1) {
        const newUser = {
            id: uuid(),
            name: values.name
          };
          addUser(newUser);
        
      console.log("Details saved successfully");
      navigate("/");
    } else {
      alert("Enter correct details");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return { handleChange, handleSubmit, values, error };
};
export default useValidator;
