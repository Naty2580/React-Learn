import { useNavigate } from "react-router-dom";

const DisabledPage = () => {
  const navigate = useNavigate();
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Component Disabled</h2>
        <h1>This component is currently disabled. Please enable it in
          
          <p onClick={() => navigate("/enabler")}> Enabler</p>
           



        </h1>
      </div>
    );
  };
  
  export default DisabledPage;
  