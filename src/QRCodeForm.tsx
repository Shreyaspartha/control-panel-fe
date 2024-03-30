// QRCodeForm.tsx
import React, { useState } from "react";
import "./QRCodeForm.css";
import QRCode from "qrcode";
import QRCodeInput from "./QRCodeInput";
import QRCodeDisplay from "./QRCodeDisplay";

const QRCodeForm = () => {
  const [qrImg, setQrCode] = useState("");
  const [isError, setError] = useState(false);

  const handleClearQrCode = () => {
    setQrCode("");
  };

  const generateQr = async (qrUrl: string) => {
    if (qrUrl !== "") {
      const canvas = document.createElement("canvas");
      setQrCode(await QRCode.toDataURL(canvas, qrUrl, { width: 200 }));
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="column left-padding">
      <div className="card">
        <div className="card-content" style={{ height: "60vh" }}>
          <p className="title">QR Code Generator</p>
          <p>Paste or enter part reference number to create QR code</p>
          <div className="content">
            <QRCodeInput
              onGenerateQR={generateQr}
              onClearQRCode={handleClearQrCode}
              onSetError={(isError) => setError(isError)}
            />
            <QRCodeDisplay
              isError={isError}
              qrImg={qrImg}
              onPrint={handlePrint}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodeForm;
