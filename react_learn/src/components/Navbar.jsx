
import TreeNav from "./TreeNav/TreeNav";
import Components from "./Conponents"

const Navbar = () => {
  return (
    <div style={{
      height : "100%",
      width: "16vw",
      backgroundColor: "rgba(100,100,100,0.5)",
      overflow:"hidden",
      position: "fixed",
      overflowY:"scroll",
      minWidth:"70px"

    }}>
        <TreeNav trees={Components} />
        
    </div>
  )
}

export default Navbar;