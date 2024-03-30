// QRCodeInput.tsx
import React, { useState } from "react";
import partDetails from "./assets/resources/partDetails.json";
import { ProductDetail } from "./utils/types";

interface QRCodeGeneratorProps {
  onGenerateQR: (qrUrl: string) => void;
  onClearQRCode: () => void;
  onSetError: (isError: boolean) => void;
}

const QRCodeInput: React.FC<QRCodeGeneratorProps> = ({
  onGenerateQR,
  onClearQRCode,
  onSetError,
}) => {
  const [qrUrl, setUrl] = useState("");

  const handleInputChange = (event: { target: { value: string } }) => {
    if (event.target.value === "") {
      setUrl("");
      onClearQRCode();
      onSetError(false);
    } else {
      setUrl(event.target.value);
    }
  };

  const generateQrCode = () => {
    const partDetailsData = JSON.parse(
      JSON.stringify(partDetails)
    ) as ProductDetail[];
    const partRefDetail = Object.values(partDetailsData).find(
      (partDetail) => partDetail.partRefId === qrUrl
    );

    if (partRefDetail) {
      onSetError(false);
      onGenerateQR(qrUrl);
    } else {
      onSetError(true);
    }
  };

  return (
    <div>
      <div className="field">
        <div className="control">
          <input
            className="input"
            type="search"
            placeholder="Enter valid part reference number"
            value={qrUrl}
            onChange={handleInputChange}
            style={{ marginTop: "10px" }}
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button
            className={`button is-primary ${!qrUrl && "is-disabled"}`}
            onClick={() => generateQrCode()}
            disabled={!qrUrl}
          >
            Generate QR Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default QRCodeInput;
