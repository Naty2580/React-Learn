import { useState } from "react"

const Modal = () => {


    const [isOpen, setIsOpen] = useState(false);

const Mod = () => {
    return(
        <div style={{ width:"100%", height:"100%", display:"flex", justifyContent:"center", alignItems:"center",backgroundColor:"coral"}}>


            <div style={{ width:"70%", height:"60%",borderRadius:"30px",boxShadow:"0px 4px 8px black",overflow:"hidden"}}>

                <header  style={{ backgroundColor: "lightblue",height:"11%",padding:"5px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <span style={{fontWeight:"900",fontSize:"30px", height:"76%"}}>this is the header</span>
                    <button style={{
                        float:"right",width:"40px",height:"40px",
                        border:"5px solid coral",
                        backgroundColor:"cyan",
                        color:"coral",
                        borderRadius:"50%",
                        padding:"5px",
                        
                        }} onClick={() => setIsOpen(false)}> ✖ </button>

                </header>

                <main style={{backgroundColor: "cyan",color:"coral",fontWeight:"900",fontSize:"70px", height:"76%",padding:"9px",alignContent:"center",display:"flex",flexDirection:"column", alignItems:"center"}}>


                    This is BODY

                    <button style={{
                        width:"25%",
                        fontSize:"25px",
                        borderRadius:"10px",
                        textAlign:"center",
                        padding:"0.5rem",
                        color:"cyan",
                        fontWeight:"700",
                        animation: "pulse2 3s infinite ease-in-out",
                        marginTop:"11vh"

                    }}
                    onClick={() => setIsOpen(false)}
                    >Close</button>
                </main>

                <footer style={{ backgroundColor: "darkgray",height:"6%",padding:"5px",fontWeight:"900",fontSize:"20px"}}>
                    this if footer
                </footer>
            </div>
        </div>
    )
}
  return (

    <>
    <div style={{width: " 84vw", height:"95vh"}}>

        { !isOpen && <div  style={{
            padding:"1rem",
            width: "auto",
            border: "1px solid blue",
            fontWeight: "700",
            height:"100%",
            alignContent:"center"
            
        }}>

   
            <button style={{
            borderRadius: "10px",
            fontWeight: "700",
            width:"20vw",
            height:"auto",
            fontSize:"25px",
            animation: "pulse 2s infinite ease-in-out, rot 3s infinite ease-in-out",
            }}
            onClick={() => setIsOpen(true)}
            >Open Modal</button>
        </div>
}
{ isOpen &&
        <div style={{ width:"100%", height:"100vh",}}>
            <Mod />
        </div>

}
         

  
    </div>

<style>
    {`
@keyframes pulse {
    0% {
        border: 3px solid rgba(0,255,255,0.3);
    }
    50% {
        border: 3px solid rgba(0,255,255,1);
    }
    100% {
        border: 3px solid rgba(0,255,255,0.3);
    }
}
@keyframes pulse2 {
    0% {
        background-color : rgba(255, 68, 0,0.7);
        color : rgba(0,255,255,1);
        
    }
    50% {
        background-color : rgb(255, 68, 0);
        color : rgba(0,255,255,0.7);
         
    }
    100% {
        background-color : rgba(255, 68, 0,0.7);
        color : rgba(0,255,255,1);
         

    }
}
@keyframes rot {
    0%, 100% { transform: rotate(0deg); }
  10% { transform: rotate(-5deg); } 
  20% { transform: rotate(5deg); } 
  30% { transform: rotate(-3deg); } 
  40% { transform: rotate(3deg); } 
  50% { transform: rotate(0deg); } 
  100% { transform: rotate(0deg); } 
   
}
`
}

</style>
</>
  )
}

export default Modal