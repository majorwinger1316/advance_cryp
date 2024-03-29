import React from "react";
import "../styles/About.css";

function About() {
  function EncryptionType({ name, description }) {
    return (
      <div className="encryption-type">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    );
  }

  return (
    <div className="about">
      <div className="definition">
        <h1>
          Cryptography is the practice and study of techniques for secure
          communication in the presence of third parties.
        </h1>
        <h2>Some of the Encryption techniques are:-</h2>
        <div className="type">
          <div className="left-column">
            <EncryptionType
              name="AES Encryption"
              description="AES (Advanced Encryption Standard) is a symmetric encryption algorithm widely adopted for securing sensitive data. It operates on blocks of data and supports key sizes of 128, 192, and 256 bits."
            />
            <EncryptionType
              name="RSA Encryption"
              description="RSA is an asymmetric encryption algorithm used for secure data transmission and digital signatures. It relies on the difficulty of factoring large prime numbers for its security."
            />
          </div>
          <div className="right-column">
            <EncryptionType
              name="DES Encryption"
              description="DES (Data Encryption Standard) is a symmetric encryption algorithm used for securing electronic data. It operates on 64-bit blocks and uses a 56-bit key."
            />
            <EncryptionType
              name="Caesar Cipher Encryption"
              description="Caesar Cipher is a simple substitution cipher technique where each letter in the plaintext is shifted a certain number of places down or up the alphabet."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
