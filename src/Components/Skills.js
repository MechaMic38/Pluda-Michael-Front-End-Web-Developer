import "../CSS/Skills.css";
import React from "react";

function Skills({ data }) {
  let clouds = data?.clouds.map(function (cloud, i) {
    let className = `mist mist-${i + 1}`;
    let style = {
      "--i": i + 1,
    };
    let image = "../Images/skills/" + cloud;
    return <img style={style} className={className} src={image} alt="" />;
  });

  let skills = data?.skills.map(function (skills) {
    var skillImage = "../Images/skills/" + skills.image;
    return (
      <div key={skills.name} className="skill-card">
        <div className="img-skill">
          <img src={skillImage} alt={skills.name} title={skills.title} />
        </div>
        <div className="text-skill">
          <span>{skills.name}</span>
          <p>{skills.description}</p>
        </div>
      </div>
    );
  });

  return (
    <section className="skills" id="skills">
      {clouds}
      <div className="row skill">
        <div className="twelve columns">
          <p className="column skill-title">
            They say you never stop learning... and that describes me perfectly.
            <br />
            Here are some of the languages and programs I use, or that I am
            learning right now.
          </p>
        </div>
      </div>

      <div className="row skillset">
        <div className="twelve columns" id="skills-wrapper">
          {skills}
        </div>
      </div>
    </section>
  );
}

export default Skills;
