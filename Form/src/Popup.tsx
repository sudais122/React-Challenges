import { useRef } from "react";
import "./Popup.css";

interface popupprops {
    name: string,
    email: string,
    phone: string,
    message: string,
    country: string,
    gender: string
}
const Popup = ({ name, email, phone, message, country, gender }: popupprops) => {
    return (
        <div className="popup-overlay">
            <div className="popup">
                <h2>Your form has been submitted!</h2>

                <p>Name:{name}</p>
                <p>Email:{email}</p>
                <p>Phone:{phone}</p>
                <p>Country:{country}</p>
                <p>Gender:{gender}</p>
                <p>Message:{message}</p>

                <button className="ok-btn">OK</button>
            </div>
        </div>
    );
};

export default Popup;