import React from "react";

const Image = ({imgTag}) => {
  return (
    <div className="imgContainer"
    style={{
        position: "fixed",
        backgroundColor: "white",
        borderRight: "1px solid rgba(0,0,0,0.3)",
            //   marginTop: "1vh",
        height: "87vh",
        padding: "8px",
        paddingTop: "3px",
        display:"flex",
        width:"30%",
        alignItems:"center",
        justifyContent:"center"
      }}
    >
      <img className="image"
        // style={{
        //   display: "flex",
        //   justifyContent: "flex-start",
        //   width: "20vw",
        // }}
        src={imgTag}
        alt="laptop"
      />
    </div>
  );
};

export default Image;
