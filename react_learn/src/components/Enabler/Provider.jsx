import  { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";


// Create Context
const DisabledComponentsContext = createContext();

// Provider Component
const DisabledComponentsProvider = ({ children }) => {


  const [disabledComponents, setDisabledComponents] = useState(() => {
    const storedComponents = localStorage.getItem("disabledcpt");
    return storedComponents ? JSON.parse(storedComponents) : ["none",]; 
  });;

 
  useEffect (()=>{

      localStorage.setItem("disabledcpt", JSON.stringify(disabledComponents))

  },[ disabledComponents])

  const toggleComponent = (componentName) => {
    setDisabledComponents((prev) =>
      prev.includes(componentName)
        ? prev.filter((name) => name !== componentName) 
        : [...prev, componentName] 
    );


  };

  return (
    <DisabledComponentsContext.Provider value={{ disabledComponents, toggleComponent }}>
      {children}
    </DisabledComponentsContext.Provider>
  );
};


DisabledComponentsProvider.propTypes = {
  children : PropTypes.node,
}



export { DisabledComponentsContext, DisabledComponentsProvider };
