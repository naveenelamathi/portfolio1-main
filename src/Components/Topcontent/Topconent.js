import React from "react";
import { Link } from "react-scroll";
import "./topcontent.css";
import natarajphoto from "../../images/IMG_20231129_112136.jpg";

const Topconent = () => { 
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="topcontent">
            <img className="image" src={natarajphoto} />
            <div className="topcontent__container">
              <h1>Mr.Natarajan</h1>
              <p>
                <h5>A Professional Full Stack Web Developer</h5>
              </p>
              <div>
                I am a confident, self driven, passionate, hardworking & 
                looking for an opportunity to work in a challenging environment
                and grow up with the organization. I am also fastlearner who
                likes to constantly upgrade myself.
              </div>

              <a
                href="https://drive.google.com/file/d/1JVWAL08FLdN7Ob1-PhJ8-iSMwLvj0JlH/view?usp=sharing"
                target="_blank"
              >
                <button className="topcontent__downloadbutton" >
                  Download cv
                </button>
              </a>
              <Link to="projects" smooth={true} duration={500}>
                <button className="topcontent__workbutton">My Work</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topconent;
