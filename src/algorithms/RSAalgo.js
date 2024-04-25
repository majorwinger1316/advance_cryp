const CryptoJS = require("crypto-js");

// Function to encrypt plaintext using RSA
export function encryptRSA(plaintext, publicKey) {
  const encrypted = CryptoJS.AES.encrypt(plaintext, publicKey).toString();
  return encrypted;
}

// Function to decrypt ciphertext using RSA
export function decryptRSA(ciphertext, privateKey) {
  const decrypted = CryptoJS.AES.decrypt(ciphertext, privateKey).toString(
    CryptoJS.enc.Utf8
  );
  return decrypted;
}
