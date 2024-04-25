import React, { useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import "../styles/DES.css";
import { encryptDES, decryptDES } from "../algorithms/DESalgo";

function DES() {
  const [inputText, setInputText] = useState("");
  const [inputcipher, setCipherText] = useState("");
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

  const handleEncrypt = () => {
    if (inputText && encryptkey) {
      if (encryptkey.length === 16) {
        const encrypted = encryptDES(inputText, encryptkey);
        setEncryptedText(encrypted);
      } else {
        alert("The key must be 16 bits.");
      }
    } else {
      alert("Please enter text and password.");
    }
  };

  const handleDecrypt = () => {
    if (inputcipher && decryptkey) {
      if (decryptkey.length === 16) {
        try {
          const decrypted = decryptDES(inputcipher, decryptkey);
          setDecryptedText(decrypted);
        } catch (error) {
          alert("Decryption failed. Please check your input and try again.");
        }
      } else {
        alert("The key must be 16 bits.");
      }
    } else {
      alert("Please enter encrypted text and password.");
    }
  };

  return (
    <div className="des">
      {" "}
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

export default DES;
