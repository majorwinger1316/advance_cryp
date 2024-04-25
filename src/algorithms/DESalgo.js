const CryptoJS = require("crypto-js");

// Function to encrypt plaintext using DES in ECB mode
export function encryptDES(plaintext, key) {
  const encrypted = CryptoJS.DES.encrypt(plaintext, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  }).toString();
  return encrypted;
}

// Function to decrypt ciphertext using DES in ECB mode
export function decryptDES(ciphertext, key) {
  const decrypted = CryptoJS.DES.decrypt(ciphertext, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  }).toString(CryptoJS.enc.Utf8);
  return decrypted;
}
