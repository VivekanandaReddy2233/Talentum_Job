import React from "react";
import R1 from "./Referrals/R1.png";
import R2 from "./Referrals/R2.png";
import R3 from "./Referrals/R3.png";
import R4 from "./Referrals/R4.png";
import R5 from "./Referrals/R5.png";

const Referral = () => {
  const containerStyle = {
    maxWidth: "800px",
    margin: "2rem auto",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    lineHeight: "1.6"
  };

  const headerStyle = {
    color: "#0077b5", // LinkedIn blue
    marginBottom: "1.5rem",
    borderBottom: "2px solid #0077b5",
    paddingBottom: "0.5rem"
  };

  const sectionStyle = {
    marginBottom: "2rem",
    padding: "1.5rem",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)"
  };

  const stepHeaderStyle = {
    color: "#0077b5",
    marginBottom: "1rem"
  };

  const paragraphStyle = {
    marginBottom: "1rem",
    fontSize: "16px"
  };

  const imageContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "1rem"
  };

  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "6px",
    border: "1px solid #e0e0e0",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>How to Ask for LinkedIn Referrals</h1>
      
      <div style={sectionStyle}>
        <h2 style={stepHeaderStyle}>Step 1: Search the company Name</h2>
        <p style={paragraphStyle}>Find the company  where the Job openings are present.</p>
        <div style={imageContainerStyle}>
          <img 
            src={R2} 
            alt="Finding a connection on LinkedIn" 
            style={imageStyle}
          />
        </div>
      </div>

      <div style={sectionStyle}>
        <h2 style={stepHeaderStyle}>Step 2: Identify the Right Person</h2>
        <p style={paragraphStyle}>Find a person from the people section of that company.</p>
        <div style={imageContainerStyle}>
          <img 
            src={R3} 
            alt="Finding a connection on LinkedIn" 
            style={imageStyle}
          />
        </div>
      </div>
      

      <div style={sectionStyle}>
        <h2 style={stepHeaderStyle}>Step 3: Send a Personalized Message</h2>
        <p style={paragraphStyle}>Write a polite and professional message explaining why you are reaching out.</p>
        <div style={imageContainerStyle}>
          <img 
            src={R4} 
            alt="Example LinkedIn message" 
            style={imageStyle}
          />
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h2 style={stepHeaderStyle}>Step 4: Ask for Referral</h2>
        <p style={paragraphStyle}>Introduce about yourself and describe in brief you are fit for this role and add all relevant experience that supports .</p>
        <div style={imageContainerStyle}>
          <img 
            src={R5} 
            alt="Follow-up message example" 
            style={imageStyle}
          />
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h2 style={stepHeaderStyle}>Step 5: Express Gratitude</h2>
        <p style={paragraphStyle}>Whether or not they help, always thank them for their time.</p>
        <div style={imageContainerStyle}>
          <img 
            //src={R4} 
            alt="Thanking a connection on LinkedIn" 
            style={imageStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default Referral;