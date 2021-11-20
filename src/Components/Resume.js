import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const plan = this.props.data.plan.map(function (plan) {
      return (
        <div>
          <h3>5 - Power Points Action Plan</h3>
          <p className="info">
            {plan.strategy} <span>&bull;</span>
            <em className="date">{plan.Timeline}</em>
          </p>
          <p>{plan.description}</p>
          <p>{plan.description2}</p>
          <p>{plan.description3}</p>
          <p>{plan.description4}</p>
          <p>{plan.description5}</p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.level2}>
          <h3>{work.level2}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row plan">
            <div className="three columns header-col">
              <h1>
                <span>plan</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{plan}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>The Strategy</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
