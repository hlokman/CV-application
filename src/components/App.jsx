import { useState } from "react";
import "../styles/App.css";
import { Contact } from "./GeneralInfo";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Preview } from "./Preview";
import { Skills } from "./Skills";

function App() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [field, setField] = useState("");

  const [skills, setSkills] = useState([]);
  const [skillsCount, setSkillsCount] = useState(0);
  //Experience (1)
  const [experience2Hidden, setExperience2] = useState(true);
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  //(2)
  const [experience3Hidden, setExperience3] = useState(true);
  const [position2, setPosition2] = useState("");
  const [company2, setCompany2] = useState("");
  const [dateStart2, setDateStart2] = useState("");
  const [dateEnd2, setDateEnd2] = useState("");
  const [responsibilities2, setResponsibilities2] = useState("");
  //(3)
  const [position3, setPosition3] = useState("");
  const [company3, setCompany3] = useState("");
  const [dateStart3, setDateStart3] = useState("");
  const [dateEnd3, setDateEnd3] = useState("");
  const [responsibilities3, setResponsibilities3] = useState("");

  //Education (1)
  const [education2Hidden, setEducation2] = useState(true);
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [dateStartEd, setDateStartEd] = useState("");
  const [dateEndEd, setDateEndEd] = useState("");
  const [descriptionEd, setDescriptionEd] = useState("");
  //(2)
  const [education3Hidden, setEducation3] = useState(true);
  const [school2, setSchool2] = useState("");
  const [degree2, setDegree2] = useState("");
  const [dateStartEd2, setDateStartEd2] = useState("");
  const [dateEndEd2, setDateEndEd2] = useState("");
  const [descriptionEd2, setDescriptionEd2] = useState("");
  //(3)
  const [school3, setSchool3] = useState("");
  const [degree3, setDegree3] = useState("");
  const [dateStartEd3, setDateStartEd3] = useState("");
  const [dateEndEd3, setDateEndEd3] = useState("");
  const [descriptionEd3, setDescriptionEd3] = useState("");

  //
  //Info handlers
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleNumber = (e) => {
    setPhone(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleField = (e) => {
    setField(e.target.value);
  };
  //Skills handlers
  const handleSkills = (e) => {
    e.preventDefault();
    if (skillsCount < 12) {
      setSkills([...skills, e.currentTarget.skills.value]);
      setSkillsCount(skillsCount + 1);
      e.target.reset();
    }
    console.log(e.currentTarget.skills.value);
  };
  const handleReset = (e) => {
    e.preventDefault();
    setSkills([]);

    setSkillsCount(0);
  };

  //Experience handlers (1)
  const handleExperience2 = (e) => {
    e.preventDefault();
    setExperience2(false);
  };
  const handlePosition = (e) => {
    setPosition(e.target.value);
  };
  const handleCompany = (e) => {
    setCompany(e.target.value);
  };
  const handleDateStart = (e) => {
    setDateStart(e.target.value);
  };
  const handleDateEnd = (e) => {
    setDateEnd(e.target.value);
  };
  const handleResponsibilities = (e) => {
    setResponsibilities(e.target.value);
  };
  //(2)
  const handleExperience3 = (e) => {
    e.preventDefault();
    setExperience3(false);
  };
  const handlePosition2 = (e) => {
    setPosition2(e.target.value);
  };
  const handleCompany2 = (e) => {
    setCompany2(e.target.value);
  };
  const handleDateStart2 = (e) => {
    setDateStart2(e.target.value);
  };
  const handleDateEnd2 = (e) => {
    setDateEnd2(e.target.value);
  };
  const handleResponsibilities2 = (e) => {
    setResponsibilities2(e.target.value);
  };
  //(3)
  const handlePosition3 = (e) => {
    setPosition3(e.target.value);
  };
  const handleCompany3 = (e) => {
    setCompany3(e.target.value);
  };
  const handleDateStart3 = (e) => {
    setDateStart3(e.target.value);
  };
  const handleDateEnd3 = (e) => {
    setDateEnd3(e.target.value);
  };
  const handleResponsibilities3 = (e) => {
    setResponsibilities3(e.target.value);
  };

  //Education handlers (1)
  const handleEducation2 = (e) => {
    e.preventDefault();
    setEducation2(false);
  };
  const handleSchool = (e) => {
    setSchool(e.target.value);
  };
  const handleDegree = (e) => {
    setDegree(e.target.value);
  };
  const handleDateStartEd = (e) => {
    setDateStartEd(e.target.value);
  };
  const handleDateEndEd = (e) => {
    setDateEndEd(e.target.value);
  };
  const handleDescriptionEd = (e) => {
    setDescriptionEd(e.target.value);
  };
  //(2)
  const handleEducation3 = (e) => {
    e.preventDefault();
    setEducation3(false);
  };
  const handleSchool2 = (e) => {
    setSchool2(e.target.value);
  };
  const handleDegree2 = (e) => {
    setDegree2(e.target.value);
  };
  const handleDateStartEd2 = (e) => {
    setDateStartEd2(e.target.value);
  };
  const handleDateEndEd2 = (e) => {
    setDateEndEd2(e.target.value);
  };
  const handleDescriptionEd2 = (e) => {
    setDescriptionEd2(e.target.value);
  };
  //(3)
  const handleSchool3 = (e) => {
    setSchool3(e.target.value);
  };
  const handleDegree3 = (e) => {
    setDegree3(e.target.value);
  };
  const handleDateStartEd3 = (e) => {
    setDateStartEd3(e.target.value);
  };
  const handleDateEndEd3 = (e) => {
    setDateEndEd3(e.target.value);
  };
  const handleDescriptionEd3 = (e) => {
    setDescriptionEd3(e.target.value);
  };

  return (
    <>
      <header>CV Application</header>
      <main>
        <section className="forms">
          <div className="infoDiv">
            <Contact
              handleChangeFN={handleFirstName}
              handleChangeLN={handleLastName}
              handleChangeEmail={handleEmail}
              handleChangeNumber={handleNumber}
              handleChangeDescription={handleDescription}
              handleChangeField={handleField}
            />
            <Skills
              handleAddSkills={handleSkills}
              handleResetSkills={handleReset}
            />
          </div>
          <div className="experienceDiv">
            <Experience
              show={true}
              handleChangePosition={handlePosition}
              handleChangeCompany={handleCompany}
              handleChangeDateStart={handleDateStart}
              handleChangeDateEnd={handleDateEnd}
              handleChangeResponsibilities={handleResponsibilities}
              nextExperience={experience2Hidden}
              handleClickExperience={handleExperience2}
            />
            {!experience2Hidden && (
              <Experience
                handleChangePosition={handlePosition2}
                handleChangeCompany={handleCompany2}
                handleChangeDateStart={handleDateStart2}
                handleChangeDateEnd={handleDateEnd2}
                handleChangeResponsibilities={handleResponsibilities2}
                nextExperience={experience3Hidden}
                handleClickExperience={handleExperience3}
              />
            )}
            {!experience3Hidden && (
              <Experience
                handleChangePosition={handlePosition3}
                handleChangeCompany={handleCompany3}
                handleChangeDateStart={handleDateStart3}
                handleChangeDateEnd={handleDateEnd3}
                handleChangeResponsibilities={handleResponsibilities3}
              />
            )}
          </div>

          <div className="educationDiv">
            <Education
              show={true}
              handleChangeSchool={handleSchool}
              handleChangeDegree={handleDegree}
              handleChangeDateStartEd={handleDateStartEd}
              handleChangeDateEndEd={handleDateEndEd}
              handleChangeDescriptionEd={handleDescriptionEd}
              nextEducation={education2Hidden}
              handleClickEducation={handleEducation2}
            />
            {!education2Hidden && (
              <Education
                handleChangeSchool={handleSchool2}
                handleChangeDegree={handleDegree2}
                handleChangeDateStartEd={handleDateStartEd2}
                handleChangeDateEndEd={handleDateEndEd2}
                handleChangeDescriptionEd={handleDescriptionEd2}
                nextEducation={education3Hidden}
                handleClickEducation={handleEducation3}
              />
            )}
            {!education3Hidden && (
              <Education
                handleChangeSchool={handleSchool3}
                handleChangeDegree={handleDegree3}
                handleChangeDateStartEd={handleDateStartEd3}
                handleChangeDateEndEd={handleDateEndEd3}
                handleChangeDescriptionEd={handleDescriptionEd3}
              />
            )}
          </div>
        </section>
        <section className="preview">
          <Preview
            firstName={firstName}
            lastName={lastName}
            email={email}
            number={phone}
            description={description}
            field={field}
            position={position}
            company={company}
            dateStart={dateStart}
            dateEnd={dateEnd}
            responsibilities={responsibilities}
            position2={position2}
            company2={company2}
            dateStart2={dateStart2}
            dateEnd2={dateEnd2}
            responsibilities2={responsibilities2}
            position3={position3}
            company3={company3}
            dateStart3={dateStart3}
            dateEnd3={dateEnd3}
            responsibilities3={responsibilities3}
            school={school}
            degree={degree}
            dateStartEd={dateStartEd}
            dateEndEd={dateEndEd}
            descriptionEd={descriptionEd}
            school2={school2}
            degree2={degree2}
            dateStartEd2={dateStartEd2}
            dateEndEd2={dateEndEd2}
            descriptionEd2={descriptionEd2}
            school3={school3}
            degree3={degree3}
            dateStartEd3={dateStartEd3}
            dateEndEd3={dateEndEd3}
            descriptionEd3={descriptionEd3}
            skills={skills}
          />
        </section>
      </main>
    </>
  );
}

export default App;
