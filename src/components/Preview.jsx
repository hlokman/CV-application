import { useState } from "react";
import "../styles/preview.css";

function Preview({
  firstName,
  lastName,
  email,
  number,
  description,
  field,
  position,
  company,
  dateStart,
  dateEnd,
  responsibilities,
  position2,
  company2,
  dateStart2,
  dateEnd2,
  responsibilities2,
  position3,
  company3,
  dateStart3,
  dateEnd3,
  responsibilities3,
  school,
  dateStartEd,
  dateEndEd,
  degree,
  descriptionEd,
  school2,
  dateStartEd2,
  dateEndEd2,
  degree2,
  descriptionEd2,
  school3,
  dateStartEd3,
  dateEndEd3,
  degree3,
  descriptionEd3,
  skills,
}) {
  return (
    <div className="previewDiv">
      <section className="cvInfo">
        <div className="topPart">
          <div className="mainInfo">
            <h1>{firstName}</h1>
            <h1>{lastName}</h1>
            <div className="cvField">{field}</div>
          </div>
          <div className="photo">
            <div className="picture">
              <img src="" />
            </div>
          </div>
          <div className="contactInfo">
            <p className="emailP">
              <i>Email:</i> {email}
            </p>
            <p>
              <i>Number:</i> {number}
            </p>
          </div>
        </div>
        <div className="bottomPart">
          <p className="description"> {description}</p>
        </div>
      </section>

      <section className="cvExperience">
        <nav className="cvExperienceHeader">
          <h1> Experience</h1>
        </nav>
        <div className="experienceList">
          <div className="experience firstOne">
            <h2>{position}</h2>
            <div className="companyAndDate">
              {company} {dateStart !== "" && "|"} {dateStart}{" "}
              {dateEnd !== "" && "-"} {dateEnd}
            </div>
            <div className="responsibilitiesText">{responsibilities}</div>
          </div>
          <div className="experience secondOne">
            <h2>{position2}</h2>
            <div className="companyAndDate">
              {company2} {dateStart2 !== "" && "|"} {dateStart2}{" "}
              {dateEnd2 !== "" && "-"} {dateEnd2}
            </div>
            <div className="responsibilitiesText">{responsibilities2}</div>
          </div>
          <div className="experience thirdOne">
            <h2>{position3}</h2>
            <div className="companyAndDate">
              {company3} {dateStart3 !== "" && "|"} {dateStart3}{" "}
              {dateEnd3 !== "" && "-"} {dateEnd3}
            </div>
            <div className="responsibilitiesText">{responsibilities3}</div>
          </div>
        </div>
      </section>

      <section className="cvEducation">
        <nav className="cvEducationHeader">
          <h1> Education</h1>
        </nav>

        <div className="educationList">
          <div className="education firstOne">
            <h2>
              {school}
              {dateStartEd && " | "}
              <span>
                {dateStartEd}
                {dateEndEd && " -"} {dateEndEd}
              </span>
            </h2>
            <div className="degreeText">{degree}</div>
            <div className="degreeDescriptionText">{descriptionEd}</div>
          </div>
          <div className="education secondOne">
            <h2>
              {school2}
              {dateStartEd2 && " | "}
              <span>
                {dateStartEd2}
                {dateEndEd2 && " -"} {dateEndEd2}
              </span>
            </h2>
            <div className="degreeText">{degree2}</div>
            <div className="degreeDescriptionText">{descriptionEd2}</div>
          </div>
          <div className="education thirdOne">
            <h2>
              {school3}
              {dateStartEd3 && " | "}
              <span>
                {dateStartEd3}
                {dateEndEd3 && " -"} {dateEndEd3}
              </span>
            </h2>
            <div className="degreeText">{degree3}</div>
            <div className="degreeDescriptionText">{descriptionEd3}</div>
          </div>
        </div>
      </section>

      <section className="cvSkills">
        <nav className="cvSkillsHeader">
          <h1> Skills</h1>
        </nav>
        <div className="skillsList">
          <ul>
            {skills.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export { Preview };
