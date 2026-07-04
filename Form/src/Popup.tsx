import "./Popup.css";

interface PopupProps {
  name: string;
  email: string;
  phone: string;
  message: string;
  country: string;
  gender: string;
  onClose: () => void;
}

const Popup = ({
  name,
  email,
  phone,
  message,
  country,
  gender,
  onClose,
}: PopupProps) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>Your form has been submitted!</h2>

        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Country:</strong> {country}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Message:</strong> {message}</p>

        <button className="ok-btn" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};

export default Popup;