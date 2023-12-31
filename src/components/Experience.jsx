import "../styles/experience.css";

function Experience({
  show = false,
  handleChangePosition,
  handleChangeCompany,
  handleChangeDateStart,
  handleChangeDateEnd,
  handleChangeResponsibilities,
  nextExperience,
  handleClickExperience,
}) {
  return (
    <>
      <form className="formExperience" /*onSubmit={onSubmit}*/>
        {show && (
          <div className="headerExperience">
            <div className="iconExperience"></div>
            <h1>Work Experience:</h1>
          </div>
        )}
        <label htmlFor="position">
          <div className="position titleExperience">Position</div>
          <input
            type="text"
            name="position"
            id="position"
            maxLength={20}
            onChange={handleChangePosition}
          />
        </label>
        <label htmlFor="company">
          <div className="company titleExperience">Company</div>
          <input
            type="text"
            name="company"
            id="company"
            maxLength={20}
            onChange={handleChangeCompany}
          />
        </label>
        <label>
          <div className="dates titleExperience">Date(s)</div>
          <i>
            <strong>from:</strong>
          </i>
          <input
            type="text"
            name="dateStart"
            id="dateStart"
            maxLength={13}
            onChange={handleChangeDateStart}
          />
          <i>
            <strong>to:</strong>
          </i>
          <input
            type="text"
            name="dateEnd"
            id="dateEnd"
            maxLength={13}
            onChange={handleChangeDateEnd}
          />
        </label>
        <label htmlFor="description_responsibility">
          <div className="description_responsibility titleExperience">
            Responsibilities
          </div>
          <textarea
            className="description_responsibilityText"
            placeholder="Your tasks, main occupation, responsibilities..."
            maxLength={160}
            name="description_responsibility"
            id="description_responsibility"
            onChange={handleChangeResponsibilities}
          />
        </label>
        {nextExperience && (
          <button
            className="submitExperience"
            type="submit"
            onClick={handleClickExperience}
          >
            + Add
          </button>
        )}
      </form>
    </>
  );
}

export { Experience };
