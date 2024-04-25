import CryptoJS from "crypto-js";

// Function to generate RSA-like key pair
export function generateRSAKeyPair() {
  // Generate a random key of length 512 bits
  const key = CryptoJS.lib.WordArray.random(512 / 8);

  // Convert the random key to a string
  const keyString = CryptoJS.enc.Base64.stringify(key);

  // Use the random key string as both private and public key
  return { privateKey: keyString, publicKey: keyString };
}

export default generateRSAKeyPair;
