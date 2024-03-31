import React, { useState } from "react";

function caesarCipherEncrypt(message, shift) {
  let encryptedMessage = "";

  for (let i = 0; i < message.length; i++) {
    let char = message[i];

    if (char >= "A" && char <= "Z") {
      encryptedMessage += String.fromCharCode((char.charCodeAt(0) - 65 + shift) % 26 + 65);
    } else if (char >= "a" && char <= "z") {
      encryptedMessage += String.fromCharCode((char.charCodeAt(0) - 97 + shift) % 26 + 97);
    } else {
      encryptedMessage += char;
    }
  }

  return encryptedMessage;
}

function Caesar() {
  const [plaintext, setPlaintext] = useState("");
  const [key, setKey] = useState("");
  const [encryptedMessage, setEncryptedMessage] = useState("");

  const handleEncrypt = () => {
    const shift = parseInt(key);
    if (!isNaN(shift) && shift >= 1 && shift <= 25) {
      const encrypted = caesarCipherEncrypt(plaintext, shift);
      setEncryptedMessage(encrypted);
    } else {
      alert("Invalid key! Key must be a number between 1 and 25.");
    }
  };

  return (
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
  );
}

export default Caesar;
