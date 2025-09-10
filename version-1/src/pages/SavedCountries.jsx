// pages/SavedCountries.jsx

function SavedCountries() {
  return (
    <>
      <div>
        <h1>My Countries</h1>;
      </div>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="form-input"
            // value={formData.name}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email Address:
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            // value={formData.email}
            // onChange={handleChange}
            required
          />
        </div>
      </form>
      <div className="form-group">
        <label htmlFor="countryName" className="form-label">
          Country:
        </label>
        <input
          id="countryName"
          type="text"
          name="countryName"
          className="form-input"
          // value={formData.countryName}
          // onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="bio" className="form-label">
          Bio:
        </label>
        <textarea
          id="bio"
          name="bio"
          className="form-textarea"
          rows="4"
          // value={formData.bio}
          // onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="form-button">
        Submit
      </button>
    </>
  );
}
export default SavedCountries;
