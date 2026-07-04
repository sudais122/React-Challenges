import { useRef, useState } from "react";
import "./App.css";
import Popup from "./popup";

const App = () => {


  const [name, setname] = useState<string>('');
  const [email, setemail] = useState<string>('');
  const [phone, setphone] = useState<string>('');
  const [country, setcountry] = useState<string>('');
  const [gender, setgender] = useState<string>('');
  const [Condition, setCondition] = useState<boolean>(false)
  const [message, setmessage] = useState<string>('');
  const [Err, setErr] = useState('');

  const popup = useRef('');

  function showhide() {

  }
  function submitform(e: React.FormEvent<HTMLFormElement>) {

    e.preventDefault();
    console.log(name, email, phone, country, gender, Condition, message);

    if (!name || !email || !phone || !country || !gender || !message || Condition === false) {
      alert('all field are reuiqred')
      setErr('All Fields are required')
      return
    }
    alert(`You Form has been submitted
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Country: ${country}
    Gender: ${gender}
    conditon: ${Condition}
    Message: ${message}`
    )

    setname('');
    setemail('');
    setphone('');
    setcountry('');
    setgender('');
    setCondition(false);
    setmessage('');
    setErr('');
  }

  return (
    <div className="container">
      <div className="form-card">
        <h2>Contact Form</h2>

        <form onSubmit={submitform}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={name ?? " "}
              onChange={(e) => { setname(e.target.value) }}
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => { setemail(e.target.value) }}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => { setphone(e.target.value) }}
              placeholder="Enter your phone number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="country">Country</label>
            <select id="country"
              value={country}
              onChange={(e) => { setcountry(e.target.value) }}
            >
              <option value=''>Select Country</option>
              <option value='Pakistan'>Pakistan</option>
              <option value='India'>India</option>
              <option value='United States'>United States</option>
              <option value='United Kingdom'>United Kingdom</option>
            </select>
          </div>

          <div className="form-group">
            <label>Gender</label>

            <div className="radio-group">
              <label>
                <input type="radio"
                  name="gender"
                  value='Male'
                  checked={gender === "Female"}
                  onChange={(e) => { setgender(e.target.value) }}
                />
                <input type="radio" name="gender" />
                Male
              </label>

              <label>
                <input type="radio"
                  name="gender"
                  value='Female'
                  checked={gender === "Female"}
                  onChange={(e) => { setgender(e.target.value) }}
                />
                <input type="radio" name="gender" />
                Female
              </label>

              <label>
                <input type="radio"
                  name="gender"
                  value='other'
                  checked={gender === "other"}
                  onChange={(e) => { setgender(e.target.value) }}
                />
                <input type="radio" name="gender" />
                Other
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>
              <input type="checkbox"
                checked={Condition}
                onChange={(e) => { setCondition(e.target.checked) }}
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
              onChange={(e) => { setmessage(e.target.value) }}
              placeholder="Write your message..."
            ></textarea>
          </div>
          {Err && <p className="error">{Err}</p>}
          <button type="submit">Submit</button>
        </form>
      </div>
      <Popup name={name} email={email} phone={phone} country={country} gender={gender} message={message} />
    </div>

  );
};

export default App;