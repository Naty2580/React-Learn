import { useContext, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { DisabledComponentsContext } from "../Enabler/Provider";

const QrGen = () => {
  const [data, setData] = useState("no value");
  const [qrCode, setQrCode] = useState("");

   const { disabledComponents } = useContext(DisabledComponentsContext);
  
    // const  disabled = [localStorage.getItem("disabledcpt")]

  

  const generateQrCode = () => {
    if (data.trim() !== "") {
      setQrCode(data);
    }
  };

return (
  <>
{disabledComponents.includes("qrgen") ? 
   

  ( "not available now")
  :

  (
    <div
      style={{
        width: "79vw",
        height: "85vh",
        padding: "1rem",
        position: "fixed",
      }}
    >
      <div
        style={{
          border: "3px solid cyan",
          fontWeight: "700",
          color: "white",
          width: "auto",
          padding: "0.5rem",
          marginBottom: "5rem",
          backgroundColor: "rgba(255,255,255,0.1)",
        }}
      >
        <label htmlFor="qrinput">QR value </label>
        <input
          value={data}
          placeholder="enter value"
          id="qrinput"
          onChange={(e) => setData(e.target.value)}
          style={{
            width: "40%",
            backgroundColor: "rgba(255,255,255)",
            color: "black",
            height: "30px",
            marginRight: "1.5vw",
          }}
        />
        <button
          style={{
            backgroundColor: " rgba(0,255,255,0.9)",
            color: "black",
          }}
          onClick={generateQrCode}
        >
          {" "}
          Generate{" "}
        </button>
      </div>

      <div
        style={{
          border: "1px dashed cyan",
          margin: "auto",
          height: "256px",
          width: "256px",
        }}
      >
        {qrCode ? (
          <div>
            <QRCodeCanvas value={qrCode} size={256} level="H" marginSize={1} />
            <span>{qrCode}</span>
          </div>
        ) : (
          <div>
            <QRCodeCanvas
              value={"no value"}
              size={256}
              level="H"
              marginSize={1}
            />
            <span>{"no value"}</span>
          </div>
        )}
      </div>
    </div>
  )


}
</>
)
};

export default QrGen;
