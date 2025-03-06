 import { useEffect, useState } from "react";
 import data from "./Data"

const AutoFetch = () => {


  const [ searchItem, setSearchItem] = useState(null);
  const [value, setValue] = useState([]);

  const Clear =() => {
    setValue([]);
    setSearchItem("");
  }

  useEffect(() => {
    if(searchItem?.length > 0)
    {
    setValue(data?.filter((item) => item?.toLowerCase().startsWith(searchItem?.toLowerCase())) || []);
    }else{
     Clear();
    }

   
  }, [searchItem]);
  
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(data);
  }

 
  return (
    <div style={{ width:"83vw", height:"99vh"}}>
        <div style={{ width:"100%", height:"100%"}}>
           <div style={{  height : "10%",alignContent:"center",padding: "0 10px"
           }}>    
                <form onSubmit={ (e) => handleSubmit(e)}>
                
                <input 
                style={{width:"60%", height:"30px", border:"5px solid coral", color: "cyan"}}
                    onChange={ (e) => setSearchItem(e.target.value) }
                    type="text"
                    placeholder="search names of datas here"
                    value={searchItem}
                > </input>
               
                <button 
                style={{
                    width: "90px",
    height: "50px",
    border: "3px solid cyan",
    borderRadius : "30px",
    fontWeight:"900",
    backgroundColor: "coral",
    color: "black",
    padding: "5px",
    transition: "border-color 0.3s ease",
    float: "right"
    
                 }}
                type="submit"> fetch all </button>
              
                </form>

                
            </div> 

            <div style={{ width:"96%", height:"85%",
                display:"flex",
                flexDirection : "column",
                padding:" 0 10px",
                justifyContent: "start",
                alignItems: "start",
            
            }}>
                <ul 
                style={{
                    listStyleType:"none",
                    padding:"0",
                    margin:"15px 0",
                    width:"100%",
                    display:"flex",
                    flexDirection:"column",
                    flexWrap:"wrap",
                    justifyContent:"start",
                    alignItems:"start",
                    overflow:"auto"
                }}
                >
                   
              {value?.length > 0 ? value?.map((item, index) =>

              
                 <li onClick={() => setSearchItem(item)} 
                 key={index}
                 
                 style={{
                    border:"1px solid cyan",
                    margin: "5px 10px 10px 0px",
                    width:"15vw",
                    cursor:"pointer",
                    transition: "0.3s",
                    
                 }}
                 
                 >  {item}</li>
                 
                 
                 
                 ) : <li>No value <strong>Search </strong>to get items</li>}

                 
                </ul>    

                {
                <button
style={{
    width: "90px",
height: "50px",
border: "3px solid cyan",
fontWeight:"900",
backgroundColor: "coral",
color: "black",
borderRadius : "30px",
padding: "5px",
transition: "border-color 0.3s ease",
float: "top",
alignSelf:"center",
margin:"10px auto"

 }}
 onClick={Clear}
                >Clear all</button>}   
            </div>
        </div>
    </div>
  )
}

export default AutoFetch