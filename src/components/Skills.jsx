import "../styles/skills.css";

function Skills({ handleAddSkills, handleResetSkills }) {
  return (
    <>
      <div className="formSkillsDiv">
        <form className="formSkills" onSubmit={handleAddSkills}>
          <div className="headerSkills">
            <div className="iconSkills"></div>
            <h1>Skills:</h1>
          </div>
          <label htmlFor="skills">
            <div className="skills titleSkills">Skills</div>
            <div className="inputAndButton">
              <input
                type="text"
                maxLength={20}
                name="skills"
                className="inputSkills"
                id="skills"
              />
              <button className="submitSkills">Add</button>
            </div>
          </label>
        </form>
        <button className="resetSkills" onClick={handleResetSkills}>
          Reset
        </button>
      </div>
    </>
  );
}

export { Skills };
