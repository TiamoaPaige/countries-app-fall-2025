// pages/SavedCountries.jsx
import "../SavedCountries.css";

// my coded form it is not fully funtioning
function SavedCountries() {
  return (
    <>
      <form>
        <div>
          <h1>My Countries</h1>
        </div>

        <div className="form-group">
          {/* name */}
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
          {/* email */}
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

        <div className="form-group">
          {/* country input text */}
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
          {/* textarea for bio */}
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
        {/* submit button */}
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </>
  );
}
export default SavedCountries;
