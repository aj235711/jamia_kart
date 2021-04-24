import React from "react";

const Details = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          marginBottom: "30px",
                  borderBottom: "1px solid rgba(0,0,0,0.3",
          paddingBottom:"20px"
        }}
      >
        <h1> HP ka jana mana laptop hai ye bohot batarha hu </h1>
      </div>

      <h5
        style={{
          textDecorationLine: "line-through",
          textDecorationStyle: "solid",
        }}
      >
        {" "}
        MRP : $70{" "}
      </h5>
      <h4 style={{ marginBottom: "20px" }}> Price : $50</h4>
      <h4 style={{ color: "green" }}> In stock </h4>

      <div
        style={{
          width: "100%",
          marginTop: "30px",
                  borderTop: "1px solid rgba(0,0,0,0.3",
          paddingTop:"20px"
        }}
          >
              <h5>kya baat karrha hai bhai mai bolrha hu na mast laptop hai yaar bhai ki baat nahi maanega ab?
               
              </h5>
      </div>
    </div>
  );
};

export default Details;
