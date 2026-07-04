import { useState } from "react";
import "./App.css";
import Popup from "./Popup";

const App = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [condition, setCondition] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [err, setErr] = useState<string>("");

  const [popup, setPopup] = useState<boolean>(false);

  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      !name ||
      !email ||
      !phone ||
      !country ||
      !gender ||
      !message ||
      !condition
    ) {
      setErr("All fields are required.");
      return;
    }

    setErr("");
    setPopup(true);
  }

  function closePopup() {
    setPopup(false);

    setName("");
    setEmail("");
    setPhone("");
    setCountry("");
    setGender("");
    setCondition(false);
    setMessage("");
    setErr("");
  }

  return (
    <div className="container">
      <div className="form-card">
        <h2>Contact Form</h2>

        <form onSubmit={submitForm}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>

            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>

            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>

            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="country">Country</label>

            <select
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Select Country</option>
              <option value="Pakistan">Pakistan</option>
              <option value="India">India</option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
            </select>
          </div>

          <div className="form-group">
            <label>Gender</label>

            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Male
              </label>

              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Female
              </label>

              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={gender === "Other"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Other
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={condition}
                onChange={(e) => setCondition(e.target.checked)}
              />
              I agree to the Terms & Conditions
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message..."
            />
          </div>

          {err && <p className="error">{err}</p>}

          <button type="submit">Submit</button>
        </form>
      </div>

      {popup && (
        <Popup
          name={name}
          email={email}
          phone={phone}
          country={country}
          gender={gender}
          message={message}
          onClose={closePopup}
        />
      )}
    </div>
  );
};

export default App;