import React, { useState } from "react";
import "../styles/RSA.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { generateRSAKeyPair } from "../algorithms/Keygen.js";
import { encryptRSA, decryptRSA } from "../algorithms/RSAalgo.js";

function RSA() {
  const [inputText, setInputText] = useState("");
  const [inputcipher, setCipherText] = useState("");
  const [encryptkey, setEncryptKey] = useState("");
  const [decryptkey, setDecryptKey] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  const [textArea1Value, setTextArea1Value] = useState("");
  const [textArea2Value, setTextArea2Value] = useState("");

  // Function to copy text from textarea to clipboard
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

  const handleGenerateKeyPair = () => {
    const { privateKey, publicKey } = generateRSAKeyPair();
    setTextArea1Value(privateKey);
    setTextArea2Value(publicKey);
  };

  const handleEncrypt = () => {
    if (inputText && encryptkey) {
      const encrypted = encryptRSA(inputText, encryptkey);
      setEncryptedText(encrypted);
    } else {
      alert("Please enter text and password");
    }
  };

  const handleDecrypt = () => {
    if (inputcipher && decryptkey) {
      try {
        const decrypted = decryptRSA(inputcipher, decryptkey);
        setDecryptedText(decrypted);
      } catch (error) {
        alert("Decryption failed. Please check your input and try again.");
      }
    } else {
      alert("Please enter encrypted text and password");
    }
  };

  return (
    <div className="rsa">
      <h1>RSA Key generation, Encryption and Decryption</h1>
      <h2>512 bit Key generation and RSA Encryption and Decryption</h2>
      <div className="keygen">
        <div className="genkey">
          <button onClick={handleGenerateKeyPair}>Generate Key</button>
        </div>
        <div className="copy">
          <div className="pub">
            <label>Public Key:</label>
            <div className="but1">
              <textarea value={textArea1Value} readOnly />
              <button onClick={() => copyToClipboard(textArea1Value)}>
                <ContentCopyIcon />
              </button>
            </div>
          </div>
          <div className="priv">
            <label>Private Key:</label>
            <div className="div2">
              <textarea value={textArea2Value} readOnly />
              <button onClick={() => copyToClipboard(textArea2Value)}>
                <ContentCopyIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="encry-decry">
          <div className="encrypt-controls">
            <label>Plain Text:</label>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />

            <label>Public/Private Key:</label>
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

            <label>Public/Private Key:</label>
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
    </div>
  );
}

export default RSA;
