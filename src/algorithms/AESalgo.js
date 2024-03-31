import CryptoJS from "crypto-js";

// Function to encrypt text using AES encryption
export function encryptAES(text, password) {
  return CryptoJS.AES.encrypt(text, password).toString();
}

// Function to decrypt text using AES decryption
export function decryptAES(ciphertext, password) {
  const bytes = CryptoJS.AES.decrypt(ciphertext, password);
  return bytes.toString(CryptoJS.enc.Utf8);
}
