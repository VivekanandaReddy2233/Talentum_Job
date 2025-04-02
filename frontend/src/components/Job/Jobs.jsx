import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../main";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();

  useEffect(() => {
    try {
      axios
        .get("http://localhost:4000/api/v1/job/getall", {
          withCredentials: true,
        })
        .then((res) => {
          setJobs(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (!isAuthorized) {
    navigateTo("/");
  }

  const handleReferralClick = () => {
    window.open("/job/Referral", "_blank");
  };

  return (
    <section className="jobs page">
      <div className="container">
        <h1>ALL AVAILABLE JOBS</h1>
        <button 
          className="referral-button" 
          onClick={handleReferralClick} 
          style={{ 
            position: "absolute", 
            top: "180px", 
            right: "80px", 
            backgroundColor: "red", 
            color: "white", 
            border: "none", 
            padding: "10px 20px", 
            borderRadius: "5px", 
            cursor: "pointer" 
          }}
        >
          Referral ?
        </button>
        <div className="banner">
          {jobs.jobs &&
            jobs.jobs.map((element) => {
              return (
                <div className="card" key={element._id}>
                  <p>{element.title}</p>
                  <p>{element.category}</p>
                  <p>{element.country}</p>
                  <Link to={`/job/${element._id}`}>Job Details</Link>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
