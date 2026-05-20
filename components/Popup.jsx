function Popup({ formData, closePopup }) {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <div className="popup-data">
          <h2>Thank You, {formData.firstName}!</h2>
          <p className="success-text">
            Your enquiry has been successfully submitted.
          </p>

          <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Mobile:</strong> {formData.mobile}</p>
          <p><strong>Message:</strong> {formData.message}</p>
        </div>

        <button onClick={closePopup}>Close</button>
      </div>
    </div>
  );
}

export default Popup;