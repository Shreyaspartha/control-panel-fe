// QRCodeDisplay.tsx
import React from "react";
import "./QRCodeDisplay.css";

interface QRCodeDisplayProps {
  qrImg: string;
  isError: boolean;
  onPrint: () => void;
}

const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({
  qrImg,
  isError,
  onPrint,
}) => {
  return (
    <div style={{ marginTop: "10px" }}>
      {isError && (
        <div className="notification is-danger">
          Invalid part reference number. Please enter a valid part reference
          number.
        </div>
      )}
      {qrImg && (
        <div style={{ marginTop: "10px" }}>
          <img className="printable-content" src={qrImg} alt="QR Code" />
          <div className="button-container">
            <button
              className={`button is-primary ${!qrImg && "is-disabled"}`}
              onClick={onPrint}
              disabled={!qrImg}
            >
              Print QR Code
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QRCodeDisplay;
