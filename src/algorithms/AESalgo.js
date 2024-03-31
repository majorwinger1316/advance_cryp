import CryptoJS from "crypto-js";

// Function to encrypt text using AES encryption with a custom IV
export function encryptAES(text, password, iv) {
  if (!iv || iv.length !== 16) {
    throw new Error("IV must be a 16-byte array");
  }
  const encrypted = CryptoJS.AES.encrypt(text, password, {
    iv: CryptoJS.enc.Hex.parse(iv),
  });
  return encrypted.toString();
}

// Function to decrypt text using AES decryption with a custom IV
export function decryptAES(ciphertext, password, iv) {
  if (!iv || iv.length !== 16) {
    throw new Error("IV must be a 16-byte array");
  }
  const decrypted = CryptoJS.AES.decrypt(ciphertext, password, {
    iv: CryptoJS.enc.Hex.parse(iv),
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
}
