import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="five columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Vincent Kiptoo"
              />
            </div>
            <div className="seven columns main-col">
              <h2>About Me</h2>

              <p> 'Bob is a great leader. He is passionate about serving, has demonstrated excellence in delivery and I think he has a great potential.' — Dr. Kiunzu <br/> <br/> {bio}</p>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
