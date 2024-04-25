import React, { useState } from "react";
import {
  encryptCaesarCipher,
  decryptCaesarCipher,
} from "../algorithms/Caesaralgo";
import "../styles/Caesar.css";

function Caesar() {
  const [inputText, setInputText] = useState("");
  const [inputcipher, setCipherText] = useState("");
  const [inputshift1, setshift1] = useState("");
  const [inputshift2, setshift2] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  const handleEncrypt = () => {
    if (inputText && inputshift1) {
      const encrypted = encryptCaesarCipher(inputText, inputshift1);
      setEncryptedText(encrypted);
    } else {
      alert("Please enter text and shift");
    }
  };

  const handleDecrypt = () => {
    if (inputcipher && inputshift2) {
      try {
        const decrypted = decryptCaesarCipher(inputcipher, inputshift2);
        setDecryptedText(decrypted);
      } catch (error) {
        alert("Decryption failed. Please check your input and try again.");
      }
    } else {
      alert("Please enter encrypted text and shift");
    }
  };

  return (
    <div className="caesar">
      {" "}
      <h1>Caesar Cipher Encryption</h1>
      <h2>
        The Caesar cipher is a substitution cipher where each letter in the
        plaintext is shifted a certain number of places down or up the alphabet.
      </h2>
      <div className="func">
        <div className="encryption">
          <div className="encrypt-controls">
            <div className="text1">
              <label>Plain Text:</label>
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
            </div>

            <label>Shift Key:</label>
            <input
              type="number"
              value={inputshift1}
              onChange={(e) => setshift1(e.target.value)}
            />

            <button onClick={handleEncrypt}>Encrypt</button>

            <label>Encrypted Text:</label>
            <textarea value={encryptedText} readOnly />
          </div>
        </div>

        <div className="decryption">
          <div className="decrypt-controls">
            <label>Cipher Text:</label>
            <input
              type="text"
              value={inputcipher}
              onChange={(e) => setCipherText(e.target.value)}
            />

            <label>Shift Key:</label>
            <input
              type="number"
              value={inputshift2}
              onChange={(e) => setshift2(e.target.value)}
            />

            <button onClick={handleDecrypt}>Decrypt</button>

            <label>Decrypted Text:</label>
            <textarea value={decryptedText} readOnly />
          </div>
        </div>
      </div>
      <div>
        <h1>Caesar Cipher Encryption</h1>
        <div>
          <label htmlFor="plaintext">Plaintext:</label>
          <input
            id="plaintext"
            type="text"
            value={plaintext}
            onChange={(e) => setPlaintext(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="key">Key (1-25):</label>
          <input
            id="key"
            type="text"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
        </div>
        <div>
          <button onClick={handleEncrypt}>Encrypt</button>
        </div>
        {encryptedMessage && (
          <div>
            <h2>Encrypted Message:</h2>
            <p>{encryptedMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default Caesar;
