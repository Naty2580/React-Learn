
import './App.css'
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"
import HomePage from "./components/HomePage";
import Enabler from './components/Enabler/Enabler';
import Cpt from './components/Cpt';
import DisabledPage from './components/DisabledPage';
import XOGame from "./components/XO/XOGame";
import {  DisabledComponentsProvider,DisabledComponentsContext  } from './components/Enabler/Provider';
import Components from './components/Conponents';
import { useContext } from "react";


const cp = Components.find((item) => item.label==="📁Cptts");

function App() {

  return (
    <>
    <DisabledComponentsProvider>
    <AppContent />
    </DisabledComponentsProvider>
    </>
  )
}


const AppContent = () => {

  const { disabledComponents } = useContext(DisabledComponentsContext); 




return(
  <>

  <Navbar />
  <div className='main'>
 <Routes>
   <Route exact path="/" element={<HomePage />} />
   <Route path="/cpt" element={<Cpt />} />
   <Route path="/xo" element={<XOGame />} />
   <Route path="/enabler" element={<Enabler />} />
 {console.log("dis" ,disabledComponents)}

   {
     cp.children.map((item,index) =>
    

    
       <Route key={index} path={item.to} element={disabledComponents?.includes(item.label) ? <DisabledPage /> : item.element}  />
  



     )
   }
   </Routes>





 </div>

 </>
)
}

export default App;
