import "../styles/generalInfo.css";

function Contact({
  handleChangeFN,
  handleChangeLN,
  handleChangeEmail,
  handleChangeNumber,
  handleChangeDescription,
  handleChangeField,
}) {
  return (
    <form className="formInfo">
      <div className="headerInfo">
        <div className="iconInfo"></div>
        <h1>General Information:</h1>
      </div>
      <label htmlFor="first_name">
        <div className="firstName titleInfo">First Name</div>
        <input
          type="text"
          placeholder="John"
          maxLength={22}
          onChange={handleChangeFN}
          name="first_name"
          id="first_name"
        />
      </label>
      <label htmlFor="last_name">
        <div className="lastName titleInfo">Last Name</div>
        <input
          type="text"
          placeholder="Doe"
          maxLength={22}
          onChange={handleChangeLN}
          name="last_name"
          id="last_name"
        />
      </label>
      <label htmlFor="email">
        <div className="email titleInfo">Email</div>
        <input
          type="email"
          maxLength={30}
          name="email"
          id="email"
          onChange={handleChangeEmail}
        />
      </label>
      <label htmlFor="number">
        <div className="phone titleInfo">Phone Number</div>
        <input
          type="text"
          maxLength={22}
          name="number"
          id="number"
          onChange={handleChangeNumber}
        />
      </label>
      <label htmlFor="field">
        <div className="field titleInfo">Field of expertise</div>
        <input
          type="text"
          maxLength={26}
          placeholder="ex: Front-End Developer"
          className="fieldPlaceholder"
          id="field"
          name="field"
          onChange={handleChangeField}
        />
      </label>
      <label htmlFor="description">
        <div className="description titleInfo">Description</div>
        <textarea
          className="descriptionText"
          placeholder="A little description"
          maxLength={230}
          name="description"
          id="description"
          onChange={handleChangeDescription}
        />
      </label>
    </form>
  );
}

export { Contact };
