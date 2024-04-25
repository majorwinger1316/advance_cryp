import React, { useState } from "react";
import { encryptAES, decryptAES } from "../algorithms/AESalgo";
import "../styles/AES.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

function AES() {
  const [inputText, setInputText] = useState("");
  const [inputcipher, setCipherText] = useState("");
  const [IV1, setIV1] = useState("");
  const [IV2, setIV2] = useState("");
  const [encryptkey, setEncryptKey] = useState("");
  const [decryptkey, setDecryptKey] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard");
        alert("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Error copying text to clipboard:", err);
        alert("Error copying text to clipboard");
      });
  };

  const handleIVChange = (e) => {
    setIV1(e.target.value); // Update the IV value when user changes it
  };

  const handleEncrypt = () => {
    if (inputText && encryptkey) {
      if (encryptkey.length === 16) {
        const encrypted = encryptAES(inputText, encryptkey, IV1);
        setEncryptedText(encrypted);
      } else {
        alert("The key must be 16 bits.");
      }
    } else {
      alert("Please enter text and password");
    }
  };

  const handleDecrypt = () => {
    if (inputcipher && decryptkey) {
      if (decryptkey.length === 16) {
        try {
          const decrypted = decryptAES(inputcipher, decryptkey, IV2);
          setDecryptedText(decrypted);
        } catch (error) {
          alert("Decryption failed. Please check your input and try again.");
        }
      } else {
        alert("The key must be 16 bits.");
      }
    } else {
      alert("Please enter encrypted text and password");
    }
  };

  return (
    <div className="aes">
      <h1>AES Encryption</h1>
      <h2>
        CBC mode of Encryption, Key Size is of 128 Bits and the output is in
        Base64 text format
      </h2>
      <div className="func">
        <div className="encrypt-controls">
          <label>Plain Text:</label>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />

          <label>Initialisation Vector:</label>
          <input
            type="text"
            value={IV1} // Bind the value to the state
            onChange={handleIVChange}
          />

          <label>Secret Key:</label>
          <input
            type="text"
            value={encryptkey}
            onChange={(e) => setEncryptKey(e.target.value)}
          />

          <button onClick={handleEncrypt}>Encrypt</button>

          <label>Encrypted Text:</label>
          <div className="copyenc">
            <textarea value={encryptedText} readOnly />
            <button onClick={() => copyToClipboard(encryptedText)}>
              <ContentCopyIcon />
            </button>
          </div>
        </div>

        <div className="decrypt-controls">
          <label>Cipher Text:</label>
          <input
            type="text"
            value={inputcipher}
            onChange={(e) => setCipherText(e.target.value)}
          />

          <label>Initialisation Vector:</label>
          <input
            type="text"
            value={IV2}
            onChange={(e) => setIV2(e.target.value)}
          />

          <label>Secret Key:</label>
          <input
            type="text"
            value={decryptkey}
            onChange={(e) => setDecryptKey(e.target.value)}
          />

          <button onClick={handleDecrypt}>Decrypt</button>

          <label>Decrypted Text:</label>
          <div className="copydec">
            <textarea value={decryptedText} readOnly />
            <button onClick={() => copyToClipboard(decryptedText)}>
              <ContentCopyIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AES;
