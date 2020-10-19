import "../CSS/About.css";
import React from "react";

function About({ data }) {
  const websites = data?.freelance.map(function (website, i) {
    let image = `Images/about/${website.image}`;

    return (
      <a
        key={i}
        href={website.website}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="about__button" title={website.title}>
          <img src={image} alt={website.name} />
        </button>
      </a>
    );
  });

  return (
    <section className="about" id="about">
      <div className="about__content row">
        <div className="about__profilePicContainer three column">
          <img
            className="about__profilePic"
            src={`Images/${data?.image}`}
            alt={""}
          />
        </div>
        <div className="about__contact nine column">
          <h2>About Me</h2>
          <p>
            Names's Michael (a.k.a. MechaMic_38), I'm a junior web developer
            with a passion for coding. Currently, I am also an IT Engineering
            university student.
          </p>
          <div className="about__contacts row">
            <div className="about__contactDetails column">
              <h2>Contact Details</h2>
              <p className="address">
                <span>Pluda Michael</span>
                <br />
                <span>Brescia Italy, 25080</span>
                <br />
                <span>
                  <a href="mailto:mechamic38@gmail.com">mechamic38@gmail.com</a>
                </span>
              </p>
            </div>
            <div className="about__contactFreelance column">{websites}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
