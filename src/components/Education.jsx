import { useState } from "react";
import "../styles/education.css";

function Education({
  show = false,
  handleChangeSchool,
  handleChangeDegree,
  handleChangeDateStartEd,
  handleChangeDateEndEd,
  handleChangeDescriptionEd,
  handleClickEducation,
  nextEducation,
}) {
  return (
    <form className="formEducation" /*onSubmit={onSubmit}*/>
      {show && (
        <div className="headerEducation">
          <div className="iconEducation"></div>
          <h1>Education:</h1>
        </div>
      )}
      <label htmlFor="school">
        <div className="school titleEducation">School</div>
        <input
          type="text"
          name="school"
          id="school"
          maxLength={35}
          onChange={handleChangeSchool}
        />
      </label>
      <label htmlFor="degree">
        <div className="degree titleEducation">Degree</div>
        <input
          type="text"
          name="degree"
          id="degree"
          maxLength={45}
          onChange={handleChangeDegree}
        />
      </label>
      <label>
        <div className="datesEd titleEducation">Year(s)</div>
        <i>
          <strong>from:</strong>
        </i>
        <input
          type="text"
          name="dateStartEd"
          id="dateStartEd"
          className="years"
          onChange={handleChangeDateStartEd}
          maxLength={13}
        />
        <i>
          <strong>to:</strong>
        </i>
        <input
          type="text"
          name="dateEndEd"
          id="dateEndEd"
          className="years"
          maxLength={13}
          onChange={handleChangeDateEndEd}
        />
      </label>
      <label htmlFor="description_responsibility">
        <div className="description_responsibility titleExperience">
          Description
        </div>
        <textarea
          className="description_educationText"
          placeholder="A little description"
          maxLength={160}
          name="description_education"
          id="description_education"
          onChange={handleChangeDescriptionEd}
        />
      </label>
      {nextEducation && (
        <button
          className="submitEducation"
          type="submit"
          onClick={handleClickEducation}
        >
          + Add
        </button>
      )}
    </form>
  );
}

export { Education };
