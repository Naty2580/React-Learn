import { useContext } from "react";
import { DisabledComponentsContext } from "./Provider";
import Components from "../Conponents";


const Enabler = () => {
    const { disabledComponents, toggleComponent } = useContext(DisabledComponentsContext);
    const cp = Components.find((item) => item.label==="📁Cptts");

  
    return (

      <div style={{ 
        height:"95vh",
        width:"80vw",
        margin:"0px",
        padding:"0 10px"}}>
        
                <span
                style={{fontSize:"1.3rem",color:"white",fontWeight:"900"}}
                >Enable Components</span>
              
        
          <div style={{ 
              width:"99%",
              height:"98%",
            display: "flex",
            padding:"1vw",
            flexDirection:"column",
             alignItems: "start",
              justifyContent: "space-between",
              overflow:"auto",
              gap:"1vh",
              backgroundColor:"rgb(44, 41, 41)",
              flexWrap:"wrap"}}>
                

            {

          cp.children.map((item,index) =>(

            


            <div key={index}  style={{  
              width:"auto ",
              overflow:"hidden",
              alignContent:"start",
              margin:"0 0.5vw",
              
              }}>
         


              {item.label === "Enabler" ? null : disabledComponents?.includes(item.label) ? 
 
              <div
              >
                 <button 
                    style={{
                       backgroundColor:"red",
                       width:"100%",
                       color:"black",
                      display:"flex",
                      flexDirection:"row",
                      alignItems:"start",
                      gap:"1vw",
                      borderEndEndRadius:"50px",
                      borderStartEndRadius:"5px",
                      borderStartStartRadius:"50px",
                      borderEndStartRadius:"50px",
                      
                    
                      
                      
                      
                      }}
                    onClick={() => toggleComponent(item.label)}>
                     <div style={{
                      color:"black",fontSize:"1.5rem"}} >Enable : </div>
                 
                 <div
              style={{color:"black",fontSize:"1.5rem"}}
              >{item.label}</div> 
               </button>
              </div> 
              
              : 
              
              <div
              style={{color:"white"

              }}
              >
                 <button 
                    style={{
                       backgroundColor:"green",
                       width:"auto",
                       color:"black",
                      display:"flex",
                      flexDirection:"row",
                      alignItems:"start",
                      gap:"1vw",
                      borderEndEndRadius:"50px",
                      borderStartEndRadius:"0px",
                      borderStartStartRadius:"50px",
                      borderEndStartRadius:"50px"
                      
                      
                      
                      }}
                    onClick={() => toggleComponent(item.label)}>
                     <div style={{
                      color:"white",fontSize:"1.5rem"}} >Disable :</div>
                 
                 <div
              style={{color:"white",fontSize:"1.5rem"}}
              >{item.label}</div> 
               </button>
              </div> 
              } 
               
          
            </div>
          ))}
          </div>
        
      </div>
    );
  };

  export default Enabler;
  